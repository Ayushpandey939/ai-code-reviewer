const aiService=require("../services/ai.service")






module.exports.getReview=async(req,res)=>{
 try{ const code=req.body.code;

    if(!code){
        return res.status(400).send("prompt is required")
    }
    const response=await aiService(code);
    res.send(response);
}catch(err){
    console.log(err);

    res.status(503).json({error:"AI service is currently unavailable.Please try again later."})
} 
}
