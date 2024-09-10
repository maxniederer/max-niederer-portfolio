module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // custom sorting filter
  function sortByOrder(values) {
    let vals = [...values];
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }
  eleventyConfig.addFilter("sortByOrder", sortByOrder);
};
