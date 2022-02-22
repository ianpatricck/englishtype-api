import client from '../database';
import { Request, Response } from "express";

abstract class Translate {

    static textTranslated: string = ""; 

    static async toPortuguese(text: string, id: number): Promise<void> {

        const textTranslatedPromise: Promise<string> = await client.query(`SELECT text FROM portuguese WHERE en_id = $1`, [id])

        .then((textResponse) => {
            return textResponse.rows[0].text;
        })

        .then((data) => {
            this.textTranslated = data;
            return data;
        })

        .catch(e => console.error(e.stack));

    }
}

export default Translate;
