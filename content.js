
document.getElementById("bt1").addEventListener("click", function() {
    var name = document.getElementById("pos").value;
    var company = document.getElementById("com").value;
    var link = document.getElementById("link").value;
    var location = document.getElementById("loc").value;

    //window.alert(name + " "  + company + " " + link + " " + location);


    chrome.runtime.sendMessage({label: "bt1", n: name, c: company, l: link, loc: location}, function(response) {
        console.log(response.farewell);
      });
});

document.getElementById("bt2").addEventListener("click", function() {

    chrome.runtime.sendMessage({label: "bt2"}, function(response){
        console.log(response.farewell);
    });

});


document.getElementById("bt3").addEventListener("click", function() { 
    chrome.runtime.sendMessage({label: "bt3"}, function(response) {
        console.log(response.farewell);
    })

});

document.getElementById("changePage").addEventListener("click", function() {
    chrome.tabs.create({ url: chrome.runtime.getURL("page1.html") });


});