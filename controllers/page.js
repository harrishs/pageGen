const Page = require("../models/page");

exports.getPage = (req, res, next) => {
    res.status("200").render("page", {});
}