
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getRecipe") {
    $('#recipe').html(request.recipe);
  }
});

function onWindowLoad() {
  chrome.tabs.executeScript(null, {
    file: "eventPage.js"
  }, function() {
    if (chrome.runtime.lastError) {
      $('#recipe').innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });
}

window.onload = onWindowLoad;
