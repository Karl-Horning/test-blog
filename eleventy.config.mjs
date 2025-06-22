export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src", {
        //debug: true,
        filter: [
            "404.html",
            "**/*.css",
            "!**/*tailwind-input.css",
            "**/*.js",
            "**/*.json",
            "!**/*.11ty.js",
            "!**/*.11tydata.js",
        ],
    });

    // Copy img folder
    eleventyConfig.addPassthroughCopy("src/img");

    eleventyConfig.setServerPassthroughCopyBehavior("copy");

    // tell 11ty which files to process and which files to copy while maintaining directory structure
    // eleventyConfig.setTemplateFormats(["md","html","njk"]);

    return {
        dir: {
            input: "src",
            output: "dist",
            // ⚠️ These values are both relative to your input directory.
            includes: "_includes",
        },
    };
}
