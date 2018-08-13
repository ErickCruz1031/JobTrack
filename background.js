chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.label === "bt1") {
        console.log(message.n + " " + message.c + " " + message.l + " " + message.loc)
        sendResponse({farewell:"We know the button was hit bro "});
        var currentMessage = {pos: message.n, com: message.c, link: message.l,loc: message.loc};
        
        chrome.storage.sync.get("key", function(obj) {
            console.log("The key is " + obj.key);
            if (obj.key[0] == null) {
                console.log("First");
                var array = [currentMessage];
                chrome.storage.sync.set({"key": array}, function() {
                    console.log("This was a new array");
                });
            }

            else{
                console.log("Second");
                var newArray = obj.key.slice();
                newArray.push(currentMessage);
                chrome.storage.sync.set({"key": newArray}, function() {
                    console.log("New array is " + newArray)
                });
            }
        });



    }
    if (message.label === "bt2") {
        sendResponse({farewell: "Retrieving"});
        console.log("Getting array back...");
        chrome.storage.sync.get(["key"], function(object) {
            console.log("About to log it...");
            for(var i = 0; i < object.key.length; i++) {
                console.log("The i is " + i);
                console.log(object.key[i]);
            }
        });
    

    }

    if (message.label === "bt3") {
        sendResponse({farewell : "Clearing..."});
        var obj = {};

        chrome.storage.sync.get(["key"], function(object){
            console.log("The current one is " + object);
            chrome.storage.sync.set({"key": obj}, function() {
                console.log("cleared");
            });

        });
    }

  });