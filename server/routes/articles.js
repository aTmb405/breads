let express = require("express"),
    router = express.Router({ mergeParams: true }),
    helpers = require("../controllers/articles");

// router.get("/all", helpers.listAllArticles);
// router.get("/", helpers.summarizeArticle);
router.post("/", helpers.scrapeArticle, helpers.createReading);

module.exports = router;