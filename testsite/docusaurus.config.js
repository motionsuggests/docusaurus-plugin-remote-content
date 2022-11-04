module.exports = {
    title: "My Site",
    tagline: "The tagline of my site",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "rdilweb", // Usually your GitHub org/user name.
    projectName: "docusaurus-plugin-remote-content", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "My Site",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                { to: "blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/facebook/docusaurus",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Style Guide",
                            to: "docs/",
                        },
                        {
                            label: "Second Doc",
                            to: "docs/doc2/",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Stack Overflow",
                            href: "https://stackoverflow.com/questions/tagged/docusaurus",
                        },
                        {
                            label: "Discord",
                            href: "https://discordapp.com/invite/docusaurus",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/docusaurus",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/facebook/docusaurus",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/master/website/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    // THIS IS YOUR PLUGIN'S ENTRYPOINT.
    // YOU CAN TEST IT OUT WITH DIFFERENT OPTIONS BY PASSING THEM IN THE OBJECT LITERAL
    plugins: [
        [
            require.resolve("../build/index.js"),
            {
                name: 'docusaurusOne', // used by CLI, must be path safe
                id: "docusaurusOne",
                sourceBaseUrl: 'https://raw.githubusercontent.com/facebook/docusaurus/main/website/docs/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/docusaurusOne', // the base directory to output to.
                documents: [
                    'browser-support.md',
                    'cli.md',
                    'configuration.md',
                    'docusaurus-core.md',
                    'installation.md',
                    'search.md',
                    'seo.md',
                    'static-assets.md',
                    'styling-layout.md',
                    'swizzling.md',
                    'typescript-support.md',
                    'using-plugins.md',
                    'advanced/client.md',
                    'advanced/index.md',
                    'advanced/plugins.md',
                    'advanced/ssg.md',
                    'migration/migration-automated.md',
                    'migration/migration-overview.md',
                    'migration/migration-translated-sites.md',
                    'migration/migration-versioned-sites.md',
                    'i18n/i18n-git.md',
                    'i18n/i18n-introduction.md',
                    'i18n/i18n-tutorial.md',
                    'guides/creating-pages.md',
                    'guides/whats-next.md'
                ], // the file names to download
            },
        ],
        [
            require.resolve("../build/index.js"),
            {
                name: 'docusaurusTwo', // used by CLI, must be path safe
                id: "docusaurusTwo",
                sourceBaseUrl: 'https://raw.githubusercontent.com/facebook/docusaurus/main/website/docs/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/docusaurusTwo', // the base directory to output to.
                documents: [
                    'browser-support.md',
                    'cli.md',
                    'configuration.md',
                    'docusaurus-core.md',
                    'installation.md',
                    'search.md',
                    'seo.md',
                    'static-assets.md',
                    'styling-layout.md',
                    'swizzling.md',
                    'typescript-support.md',
                    'using-plugins.md',
                    'advanced/client.md',
                    'advanced/index.md',
                    'advanced/plugins.md',
                    'advanced/ssg.md',
                    'migration/migration-automated.md',
                    'migration/migration-overview.md',
                    'migration/migration-translated-sites.md',
                    'migration/migration-versioned-sites.md',
                    'i18n/i18n-git.md',
                    'i18n/i18n-introduction.md',
                    'i18n/i18n-tutorial.md',
                    'guides/creating-pages.md',
                    'guides/whats-next.md'
                ], // the file names to download
            },
        ],
        [
            require.resolve("../build/index.js"),
            {
                name: 'docusaurusThree', // used by CLI, must be path safe
                id: "docusaurusThree",
                sourceBaseUrl: 'https://raw.githubusercontent.com/facebook/docusaurus/main/website/docs/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/docusaurusThree', // the base directory to output to.
                documents: [
                    'browser-support.md',
                    'cli.md',
                    'configuration.md',
                    'docusaurus-core.md',
                    'installation.md',
                    'search.md',
                    'seo.md',
                    'static-assets.md',
                    'styling-layout.md',
                    'swizzling.md',
                    'typescript-support.md',
                    'using-plugins.md',
                    'advanced/client.md',
                    'advanced/index.md',
                    'advanced/plugins.md',
                    'advanced/ssg.md',
                    'migration/migration-automated.md',
                    'migration/migration-overview.md',
                    'migration/migration-translated-sites.md',
                    'migration/migration-versioned-sites.md',
                    'i18n/i18n-git.md',
                    'i18n/i18n-introduction.md',
                    'i18n/i18n-tutorial.md',
                    'guides/creating-pages.md',
                    'guides/whats-next.md'
                ], // the file names to download
            },
        ],
        [
            require.resolve("../build/index.js"),
            {
                name: 'docusaurusFour', // used by CLI, must be path safe
                id: "docusaurusFour",
                sourceBaseUrl: 'https://raw.githubusercontent.com/facebook/docusaurus/main/website/docs/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/docusaurusFour', // the base directory to output to.
                documents: [
                    'browser-support.md',
                    'cli.md',
                    'configuration.md',
                    'docusaurus-core.md',
                    'installation.md',
                    'search.md',
                    'seo.md',
                    'static-assets.md',
                    'styling-layout.md',
                    'swizzling.md',
                    'typescript-support.md',
                    'using-plugins.md',
                    'advanced/client.md',
                    'advanced/index.md',
                    'advanced/plugins.md',
                    'advanced/ssg.md',
                    'migration/migration-automated.md',
                    'migration/migration-overview.md',
                    'migration/migration-translated-sites.md',
                    'migration/migration-versioned-sites.md',
                    'i18n/i18n-git.md',
                    'i18n/i18n-introduction.md',
                    'i18n/i18n-tutorial.md',
                    'guides/creating-pages.md',
                    'guides/whats-next.md'
                ], // the file names to download
            },
        ],
        [
            require.resolve("../build/index.js"),
            {
                name: 'docusaurusFive', // used by CLI, must be path safe
                id: "docusaurusFive",
                sourceBaseUrl: 'https://raw.githubusercontent.com/facebook/docusaurus/main/website/docs/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/docusaurusFive', // the base directory to output to.
                documents: [
                    'browser-support.md',
                    'cli.md',
                    'configuration.md',
                    'docusaurus-core.md',
                    'installation.md',
                    'search.md',
                    'seo.md',
                    'static-assets.md',
                    'styling-layout.md',
                    'swizzling.md',
                    'typescript-support.md',
                    'using-plugins.md',
                    'advanced/client.md',
                    'advanced/index.md',
                    'advanced/plugins.md',
                    'advanced/ssg.md',
                    'migration/migration-automated.md',
                    'migration/migration-overview.md',
                    'migration/migration-translated-sites.md',
                    'migration/migration-versioned-sites.md',
                    'i18n/i18n-git.md',
                    'i18n/i18n-introduction.md',
                    'i18n/i18n-tutorial.md',
                    'guides/creating-pages.md',
                    'guides/whats-next.md'
                ], // the file names to download
            },
        ],
        [
            require.resolve("../build/index.js"),
            {
                name: 'docusaurusSix', // used by CLI, must be path safe
                id: "docusaurusSix",
                sourceBaseUrl: 'https://raw.githubusercontent.com/facebook/docusaurus/main/website/docs/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/docusaurusSix', // the base directory to output to.
                documents: [
                    'browser-support.md',
                    'cli.md',
                    'configuration.md',
                    'docusaurus-core.md',
                    'installation.md',
                    'search.md',
                    'seo.md',
                    'static-assets.md',
                    'styling-layout.md',
                    'swizzling.md',
                    'typescript-support.md',
                    'using-plugins.md',
                    'advanced/client.md',
                    'advanced/index.md',
                    'advanced/plugins.md',
                    'advanced/ssg.md',
                    'migration/migration-automated.md',
                    'migration/migration-overview.md',
                    'migration/migration-translated-sites.md',
                    'migration/migration-versioned-sites.md',
                    'i18n/i18n-git.md',
                    'i18n/i18n-introduction.md',
                    'i18n/i18n-tutorial.md',
                    'guides/creating-pages.md',
                    'guides/whats-next.md'
                ], // the file names to download
            },
        ],
        [
            require.resolve("../build/index.js"),
            {
                name: "powershell-docs",
                id: "outputDirectoryTest",
                sourceBaseUrl:
                    "https://raw.githubusercontent.com/PowerShell/PowerShell/master",
                documents: ["README.md", "CODE_OF_CONDUCT.md"],
                outDir: "docs/output-dir-testing",
                requestConfig: {
                    headers: {
                        "Hello-World": "ThisIsAHeader",
                    },
                },
                modifyContent(filename, content) {
                    if (filename.includes("CODE_OF_CONDUCT")) {
                        return {
                            filename,
                            content: `---
title: Code of Conduct with Front Matter
---

${content}`
                        }
                    }

                    return undefined
                },
            },
        ],
        [
            require.resolve("../build/index.js"),
            {
                name: "github-labels",
                id: "pathSlashesTest",
                sourceBaseUrl:
                    "https://api.github.com/repos/rdilweb/docusaurus-plugin-remote-content",
                documents: ["labels"],
                outDir: "docs/output-dir-testing/_data",
                requestConfig: {
                    responseType: "arraybuffer",
                },
            },
        ],
    ],
}

function transformUrls( content, url, replacment ) {
    let regEx = new RegExp(url, 'g');
    return content.replace(regEx, replacment);
}