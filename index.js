const path = require("path");
const hlimg_config = require(path.join(__dirname, "/config.json"));
const express = require("express");
module.exports = {
	CyntiaPluginCompat: 1,
	modifyBodyHTML (htmlin) {
		return `${htmlin}
		<script defer type="module" src="/htmx/htmx.min.js"></script>`;
	},
    expressActions(expressapp) {
        expressapp.use(
					"/htmx",
					express.static(path.join(__dirname, "/node_modules/htmx.org/dist/"))
				);
    }
};
