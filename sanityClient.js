"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: "utep9hzb", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skgOzka5DiFp4trMo6xjtes1k33wDQUVK6OisVnPLfjJrrLFd1XQPJMV6C9moK1XCi7SeQELQjImnSvxXM21t6IXDXsgbgt77QO0cg9kxiwdn1jAnjK9iiDOSFLiwh74B5dPcE3rbVdMkBUswp9FOFDUK8DzFySTmciMkPZBfwVtVHWq5dMm",
});
