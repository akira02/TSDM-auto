setInterval(open, 21600000+180000);

function open(){
    var myID;
    chrome.tabs.create({"url": "http://www.tsdm.me/plugin.php?id=np_cliworkdz:work","active":false},function(tab){
        myID = tab.id
    })
    setTimeout(close,600000)
    function close(){
        chrome.tabs.remove(myID);
    }
}

