function onCommand(command) {
    if (command === '_cmd_openIn12ft') {
        // Browser Action popup pages aren't part of any tab, so tabs.getCurrent() won't work.
        // We need to use browser.tabs.query instead.
        browser.tabs.query({ currentWindow: true, active: true }, tabs => {
            if (tabs && tabs[0].url.startsWith('http')) {
                reopenIn12ft(tabs[0]);
            }
        });
    }
}

function reopenIn12ft(tab) {
    const url = `https://12ft.io/${tab.url}`;
    browser.tabs.update(tab.id, {url});
}

chrome.browserAction.onClicked.addListener((tab) => {
    reopenIn12ft(tab);
});

browser.commands.onCommand.addListener(onCommand);
