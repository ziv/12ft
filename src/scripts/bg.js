chrome.browserAction.onClicked.addListener((tab) => {
    const url = 'https://12ft.io/' +  tab.url;
    browser.tabs.update(tab.id, {url});
});
