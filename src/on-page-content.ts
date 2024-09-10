import * as cheerio from 'cheerio';
export const getARandomImg = (htmlText: string) => {
  const $ = cheerio.load(htmlText);
  //do cheerio logic
  return 'TBD';
};

export const onChromeTabActive = (): Promise<string> => {
  return new Promise((resolve) => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (results: chrome.tabs.Tab[]) => {
        if (results.length !== 0) {
          const [tab] = results;
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id! },
              func: () => document.documentElement.outerHTML,
            },
            (results: any[]) => {
              const [data] = results;
              if (data) {
                const imageSRC = getARandomImg(data.result);
                resolve(imageSRC);
              }
            }
          );
        }
      }
    );
  });
};
