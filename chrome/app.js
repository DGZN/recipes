
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getRecipe") {
    $('#recipe').html(request.recipe);
  }
  if (request.action == "saveRecipe") {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/api/v1/recipes',
      data: {
        "name": $('#recipe h2').html(),
        "recipe": $('#recipe').html()
      },
      success: function(xhr){
        console.log("SUCCESS")
      }
    });
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
  window.document.getElementById('save-btn').onclick = saveRecipe;

}

function saveRecipe(){
  chrome.tabs.executeScript(null, {
    file: "saveRecipe.js"
  }, function() {
    if (chrome.runtime.lastError) {
      $('#recipe').innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });
}

window.onload = onWindowLoad;
