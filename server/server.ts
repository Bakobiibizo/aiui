import * as dotenv from 'dotenv';
const cors = require('cors');
const OpenAI = require('openai-api');
const express = require('express');

dotenv.config();

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            OPENAI_API_KEY: string;
        }
    }
}
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

const Server = express();
Server.use(cors());
Server.use(express.json());

Server.use(express.static('public'))

Server.get('https://localhost:5000', (req: any, res: any) => {
    res.sendFile('./public/index.html','./src/style.css', './src/script.js', {root: './'});
});

export async function callRequest (req: any) {
    const newRequest = req;
    const gptResponse = await openai.complete(newRequest);
    try {
        console.log(gptResponse.data);
        return (gptResponse.data);

    } catch {
        const error = gptResponse.data.created.toLocaleString();
        console.log(error);
        return (error);
    };
};
Server.listen(5000, () => { console.log('Server is running on port http://localhost:5000') });
export default Server;