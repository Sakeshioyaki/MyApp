const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(cors());

app.listen(8001, () => {
    console.log("App listening on port 8001!");
  });
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
const {MongoClient} = require("mongodb");
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb+srv://root:anh150299@cluster0.gusgs.mongodb.net/LyricsApp?retryWrites=true&w=majority';
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// async function run(){
//     try{
//         await client.connect();
//         const database =  client.db("LyricsApp");
//         const users = database.collection("User");
//         const you = await users.findOne({"account":"Sakeshioyaki"});
//         console.log(you);
//     }finally{
//         await client.close();
//     }
// }
// run().catch(console.dir);

app.post('/login', async(req, res)=> {
    console.log(req.body);
    try{
        await client.connect();
        const database =  client.db("LyricsApp");
        const users = database.collection("User");
        const you = await users.findOne({"email":req.body.email});
        if (!you) {
            return res.status(400).json({ login: "Email doesn't exists!" });
        }
        else if(req.body.password != you.password){
            return res.status(400).json({ 
                login: "Password doesn't correct!",
         });
        }
        else{
            return res.status(400).json({ login: "OK"});
        }
    }catch (err) {
        res.status(500).json(err);
    }
})