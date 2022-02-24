import axios from "axios";
import express , {Request, Response} from "express";
import { createClient } from "redis"

const redisClient = createClient()
const app = express();

const DEFAULT_EXPIRTATION = 10

app.get("/getQ",async (req : Request , res : Response)=>{

    redisClient.connect();
    let cachedValue = await redisClient.get('quotes');
    if( cachedValue == null ){
        console.log("CACHE MISS")
        try {
            const data = await axios.get("https://breakingbadapi.com/api/quotes")
            const quotes = await data.data;
            redisClient.setEx("quotes", DEFAULT_EXPIRTATION, JSON.stringify(quotes))
            redisClient.quit()
            res.status(200).json({
                status : true,
                message: quotes
            })
        }catch (err : any) {
            res.status(400).json({
                status : false,
                message: err.message
            })
        }
    }else{
        console.log("CACHE HIT")
        redisClient.quit()
        res.status(200).json({
            status : true,
            message: JSON.parse(cachedValue)
        })
    }
})

// app.get("/getQ",async (req : Request, res : Response)=>{
    
//     try {
//         const data = await axios.get("https://breakingbadapi.com/api/quotes")
        
//         res.status(200).json({
//             status : true,
//             message: data.data
//         })
//     }catch (err : any) {
//         res.status(400).json({
//             status : false,
//             message: err.message
//         })
//     }
// })

app.listen(3000, async ()=>{
    console.log("Pliiiz Don't Say It 🚀👋");
});