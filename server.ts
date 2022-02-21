import axios from "axios";
import express from "express";


const app = express();


app.get("/getQ",async (req : any, res : any)=>{
    
    try {
        const data = await axios.get("https://breakingbadapi.com/api/quotes")
        
        res.status(200).json({
            status : true,
            message: data.data
        })
    }catch (err : any) {
        res.status(400).json({
            status : false,
            message: err.message
        })
    }
})

app.listen(3000, async ()=>{
    console.log("Pliiiz Don't Say It 🚀👋");
});