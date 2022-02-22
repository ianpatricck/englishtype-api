import client from '../database';
import Translate from './Translate';
import { Request, Response } from "express";

class Validade {

    static async calculateAssertions(req: Request, res: Response): Promise<object> {
    
        const { text, id } = req.body;
        
        var assertions: number = 0;

        await Translate.toPortuguese(text, id);

        const textTranslated: string = Translate.textTranslated;

        const wordsTranslatedList: string[] = textTranslated.split(' ').map((word: string) => word.toLowerCase());         
        const wordsList: string[] = text.split(' ').map((word: string) => word.toLowerCase());
 
        wordsTranslatedList.forEach((wordTranslated) => {
            if (wordsList.indexOf(wordTranslated) != -1) {
                assertions += 1;
            }
        });

        return res.json({
            totalWords: text.split(' ').length,
            assertions: assertions,
        });
    }
}

export default Validade;
