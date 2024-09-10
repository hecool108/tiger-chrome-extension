console.log('Background script running');
chrome.alarms.create('checkAmazon', {
  periodInMinutes: 5, // Run every 5 minutes
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'checkAmazon') {
    chrome.tabs.query({ url: '*://www.amazon.co.jp/*' }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id! },
          files: ['content.js'],
        });
      }
    });
  }
});
