import express, { type Application } from "express"  
import env from "dotenv"
import connectDB from "./config/database";
env.config()

const app:Application = express();
app.get("/health",(req,res)=>{
    res.send("How e be na!");
})

app.use(express.json());

async function startServer(){
try{
await connectDB()
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
}catch(err:any){
    console.error('Failed to connect to MongoDB:',err.message);
    process.exit(1);
}
}

startServer()