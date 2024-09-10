import * as cheerio from 'cheerio';
export const getARandomImg = (htmlText:string)=>{
    
    const $ = cheerio.load(htmlText);
    //do cheerio logic
    return '';
}