  console.log("Getting recipe")
  // chrome.runtime.sendMessage({
  //   method: "getRecipe"
  // }, function(res) {
  //   console.log('RESPONSE', res);
  // });












// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });
//
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.farewell == "goodbye"){
//       console.log("NO DONT LEAVE ME")
//     }
//   });
//
//
// window.addEventListener('load', function () {
//     console.log("Loaded content.js")
//     // var myWindow;
//     // function startFunction() {
//     //     myWindow = window.open("https://www.google.com/", "myWindow", "width=500,height=500");
//     //
//     //     function MyMessage (){
//     //       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     //         var tab = tabs[0];
//     //         chrome.tabs.sendMessage(tab.id, {
//     //           greeting: "Can you hear me?",
//     //           theMessage: "Chrome Extension Message"
//     //         }, function(response){});
//     //       }
//     //     window.setTimeout(MyMessage , 3000);
//     // }
//     // var Process = document.getElementById('Popup Window');
//     // Process.addEventListener('click', startFunction);
// });
//
// //
// // $(function() {
// //   console.log("Hello World")
// //   $('#recipe').html('<h1> Hello Bob </h1>')
// //   $('#fetch').click(function(){
// //     console.log("CLICKED!")
// //     $('#recipe').html('<h1> Hello I WAS Clicked </h1>')
// //   })
// // });
