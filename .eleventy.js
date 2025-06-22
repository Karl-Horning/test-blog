export default function (eleventyConfig) {
    return {
        pathPrefix: "/test-blog/",
        dir: {
            input: "src",
            output: "dist",
        },
    };
}
