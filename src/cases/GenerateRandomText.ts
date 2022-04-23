import client from '../database';
import { Request, Response } from "express";

class GenerateRandomText { 

    static async getEnglishText(req: Request, res: Response): Promise<void> {

        const id: number = Math.floor(Math.random() * 10) + 1;

        await client.query("SELECT text FROM english WHERE id = $1", [id]).then((textData) => {

            const text = textData.rows[0].text;
             
            return res.json({ text: text, id: id });

        }).catch(e => console.error(e.stack))
    }
}

export default GenerateRandomText;
