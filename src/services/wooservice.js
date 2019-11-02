import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

import wooconfig from "./wooconfig.js";

const WooCommerce = new WooCommerceRestApi({
  url: "http://shop/",
  consumerKey: wooconfig.consumerKey,
  consumerSecret: wooconfig.consumerSecret,
  // wpAPI: true,
  version: "wc/v3"
});


export default WooCommerce;
