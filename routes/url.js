const express = require("express")
const router = express.Router()
const URL = require("../models/url")
const {handleGenerateNewShortUrl,handleHomePage,handleVisitUrl} = require("../controllers/url")





router.get("/",handleHomePage)
router.post("/",handleGenerateNewShortUrl)



router.get("/analytics/:shortId")












router.get("/i/:shortId",handleVisitUrl)

module.exports = router;