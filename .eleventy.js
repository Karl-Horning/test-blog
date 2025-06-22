export default function (eleventyConfig) {
    eleventyConfig.addCollection("post", function (collectionApi) {
        return collectionApi.getFilteredByTag("post").sort((a, b) => {
            return b.date - a.date;
        });
    });

    return {
        pathPrefix: "/test-blog/",
        dir: {
            input: "src",
            output: "dist",
        },
    };
}
