const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;




const signup = async (req, res) => {
    try {
        console.log(api_key, api_secret, app_id);
        const {fullName, username, password, phoneNumber} = req.body;

        const userId = crypto.randomBytes(16).toString("hex"); //set userId to  random byte

        const serverClient = connect(api_key, api_secret, app_id); //uses tokens from .env and connects it

        const hashedPassword = await bcrypt.hash(password, 10);// specifies level of encryption

        const token = serverClient.createUserToken(userId);

        console.log(api_key);
        console.log(api_secret);
        console.log(app_id);

        res.status(200).json({token, fullName, username, userId, hashedPassword, phoneNumber});


    } catch (e) {
        console.log("youre a bungloooooooo")
        res.status(500).json({message: e});
    }
};

const login = async (req, res) => {
    try{

        const {username, password} = req.body;

        const serverClient = connect(api_key, api_secret, app_id); //uses tokens from .env and connects it

        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await  client.queryUsers({name:username});

        if(!users.length) return res.status(400).json({message : "Username not found"})

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if(success){
            res.status(200).json({token, fullName: users[0].fullName, username, userId: users[0].id});
        }
        else{
            res.status(500).json({message : " Incorrect Password"});
        }
    }catch (e){
        console.log(e);
        res.status(500).json({message : e});
    }
};

module.exports = {signup, login};


