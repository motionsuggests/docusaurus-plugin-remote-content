"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs_1 = require("fs");
const path_1 = require("path");
const rimraf_1 = require("rimraf");
const picocolors_1 = __importDefault(require("picocolors"));
const pretty_ms_1 = __importDefault(require("pretty-ms"));
async function pluginRemoteContent(context, options) {
    let { name, sourceBaseUrl, outDir, documents, noRuntimeDownloads = false, performCleanup = true, maxRequestsCount = 5, intervalMS = 10, requestConfig = {}, modifyContent = () => undefined, } = options;
    let pendingRequests = 0;
    /**
     * Axios Request Interceptor
    */
    axios_1.default.interceptors.request.use(function (config) {
        return new Promise((resolve, reject) => {
            let interval = setInterval(() => {
                if (pendingRequests < maxRequestsCount) {
                    pendingRequests++;
                    clearInterval(interval);
                    resolve(config);
                }
            }, intervalMS);
        });
    });
    /**
     * Axios Response Interceptor
     */
    axios_1.default.interceptors.response.use(function (response) {
        pendingRequests = Math.max(0, pendingRequests - 1);
        return Promise.resolve(response);
    }, function (error) {
        pendingRequests = Math.max(0, pendingRequests - 1);
        return Promise.reject(error);
    });
    if (!name) {
        throw new Error("I need a name to work with! Please make sure it is path-safe.");
    }
    if (!outDir) {
        throw new Error("No output directory specified! Please specify one in your docusaurus-plugin-remote-content config (e.g. to download to the 'docs' folder, set outDir to docs.)");
    }
    if (!documents) {
        throw new Error("The documents field is undefined, so I don't know what to fetch! It should be a string array, function that returns a string array, or promise that resolves with a string array.");
    }
    if (!sourceBaseUrl) {
        throw new Error("The sourceBaseUrl field is undefined, so I don't know where to fetch from!");
    }
    if (!sourceBaseUrl.endsWith("/")) {
        sourceBaseUrl = `${sourceBaseUrl}/`;
    }
    async function findCollectables() {
        const a = [];
        const resolvedDocs = typeof documents === "function"
            ? documents()
            : (await documents);
        for (const d of resolvedDocs) {
            a.push({ url: `${sourceBaseUrl}${d}`, identifier: d });
        }
        return a;
    }
    async function getTargetDirectory() {
        const returnValue = (0, path_1.join)(context.siteDir, outDir);
        if (!(0, fs_1.existsSync)(returnValue)) {
            (0, fs_1.mkdirSync)(returnValue, { recursive: true });
        }
        return returnValue;
    }
    async function fetchContent() {
        const c = await findCollectables();
        for (const { identifier, url } of c) {
            //#region Run modifyContent (and fetch the data)
            let content = await (0, axios_1.default)({
                url,
                ...requestConfig,
            }).then(function (response) {
                return response.data;
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
            ;
            let newIdent = identifier;
            const called = modifyContent === null || modifyContent === void 0 ? void 0 : modifyContent(newIdent, content);
            let cont;
            if ((cont = called === null || called === void 0 ? void 0 : called.content) && typeof cont === "string") {
                content = called.content;
            }
            let fn;
            if ((fn = called === null || called === void 0 ? void 0 : called.filename) && typeof fn === "string") {
                newIdent = fn;
            }
            //#endregion
            const checkIdent = newIdent.split("/").filter((seg) => seg !== "");
            checkIdent.pop();
            // if we are outputting to a subdirectory, make sure it exists
            if (checkIdent.length > 0) {
                (0, fs_1.mkdirSync)((0, path_1.join)(await getTargetDirectory(), checkIdent.join("/")), { recursive: true });
            }
            (0, fs_1.writeFileSync)((0, path_1.join)(await getTargetDirectory(), newIdent), content);
        }
    }
    async function cleanContent() {
        const c = await findCollectables();
        for (const { identifier } of c) {
            (0, rimraf_1.sync)((0, path_1.join)(await getTargetDirectory(), identifier));
        }
    }
    // honestly, this may not work, but at least I tried.
    // don't really have any other solid way of making
    // sure the promise is fulfilled before we reach loadContent.
    // this should ideally be removed when Docusaurus 2 becomes stable
    const check = {
        hasDownloaded: false,
    };
    if (!noRuntimeDownloads) {
        await fetchContent();
        check.hasDownloaded = true;
    }
    return {
        name: `docusaurus-plugin-remote-content-${name}`,
        async loadContent() {
            if (!check.hasDownloaded && !noRuntimeDownloads) {
                // we have not downloaded, and we want runtime downloads
                throw new Error("[plugin-remote-content] Illegal state reached - see https://github.com/rdilweb/docusaurus-plugin-remote-content/issues/25#issuecomment-1034042103 for details!");
            }
        },
        async postBuild() {
            if (performCleanup) {
                return await cleanContent();
            }
        },
        extendCli(cli) {
            cli.command(`download-remote-${name}`)
                .description(`Downloads the remote ${name} data.`)
                .action(async () => {
                const startTime = new Date();
                await fetchContent();
                console.log(picocolors_1.default.green(`Successfully fetched content in `) +
                    picocolors_1.default.white((0, pretty_ms_1.default)(new Date() - startTime)) +
                    picocolors_1.default.green(`!`));
            });
            cli.command(`clear-remote-${name}`)
                .description(`Removes the local copy of the remote ${name} data.`)
                .action(async () => {
                const startTime = new Date();
                await cleanContent();
                console.log(picocolors_1.default.green(`Successfully deleted content in `) +
                    picocolors_1.default.white((0, pretty_ms_1.default)(new Date() - startTime)) +
                    picocolors_1.default.green(`!`));
            });
        },
    };
}
exports.default = pluginRemoteContent;
//# sourceMappingURL=index.js.map