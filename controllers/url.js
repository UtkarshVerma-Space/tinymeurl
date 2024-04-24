const URL = require("../models/url")
const shortId  = require("shortid")








const handleHomePage = (req,res)=>{
    res.render("home")
}









const handleGenerateNewShortUrl = async (req,res)=>{
    const body = req.body
    if(!body) return res.status(400).json({error:'url is required'})
    const shortid =  shortId()
    const userUrl = body.url
    let breakit = userUrl.split("https://")
    let comapre = userUrl == breakit 
    if(comapre){
        let newUrl =   `http://${userUrl}`
        console.log(newUrl)
        await URL.create({
            shortId: shortid,
            redirectUrl: newUrl,
            visitHistory: []
        })
    }else{
        await URL.create({
            shortId: shortid,
            redirectUrl: userUrl,
            visitHistory: []
        })
    }
 
    const generatedLink = "localhost:3000/I/"+shortid
    return res.render("success", {generatedLink: generatedLink,"link":"http://"+body.url})
}






const handleAnalytics = async (req,res)=>{
    const shortId = req.params.shortId;
    const IdToAnalyze = await URL.findOne({shortId})
    return res.json({"totalClicks":IdToAnalyze.visitHistory.length})

}




const handleVisitUrl = async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOne(
        {
        shortId
    },
);
    const toVisite = entry.redirectUrl
    res.redirect(toVisite)
}

module.exports = {handleGenerateNewShortUrl,handleAnalytics,handleHomePage,handleVisitUrl}