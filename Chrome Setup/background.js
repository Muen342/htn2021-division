chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  var msg = {
    message: "user clicked!"
  }

  chrome.tabs.sendMessage(tab.id, msg);
}

// chrome.runtime.onStartup.addListener(function() {
//   chrome.window.create('index.html', {
//     id: 'main',
//     bounds: { width: 620, height: 500 }
//   });
// });

// chrome.app.runtime.onLaunched.addListener(function(){
//     chrome.app.window.create('index.html', {
//       id:'main',
//       bounds: {width: 620, height: 500 }
//     });
// });

// chrome.alarms.onAlarm.addListener(function( alarm) {
//   console.log("alarm", alarm);
// });
