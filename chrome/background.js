
chrome.tabs.onUpdated.addListener(showIntercomAction);

function showIntercomAction(tabId, changeInfo, tab) {
  if (tab.url.indexOf('intercom.io') > -1) {
    // Show icon for page action in the current tab.
    chrome.pageAction.show(tabId);
  }
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getLocalStorage")
    sendResponse({data: 'Hey Bob'});
  else
    sendResponse({});
});
