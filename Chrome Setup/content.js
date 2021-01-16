console.log('Whats up hoe');

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);
chrome.windows.create(
        {
            url: "index.html"
        }, receiver
        );


// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
    // Do something!
    console.log(request.message);

  }
}
//let imgs = document.getElementsByTagName('img');

// for (let imgElt of imgs) {

//   let url = chrome.extension.getURL(file);
//   console.log(url);
// }