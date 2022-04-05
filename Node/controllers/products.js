function productsIndex(req, res, next) {
  res.send("we are at base router of products");
}
function productDetails(req, res) {
  res.send("we are at details page of products route");
}
module.exports = { productsIndex, productDetails };
