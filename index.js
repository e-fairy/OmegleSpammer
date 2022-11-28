const amountToSend = 1; // default = 1
const tickTimeInMilliseconds = 1000; // default = 1000
const message = `
Put message here
`

// DO NOT EDIT BELOW THIS LINE (unless you know what you're doing)
const chattingQuery = "You're now chatting with a random stranger"
const strangerDisconnectedQuery = "Stranger has disconnected.";
const disconnectedQuery = "You have disconnected.";

let chatBox;
let sendButton;
let newButton;
let statusLogs;

function Tick() {
    chatBox = document.querySelector("body > div.chatbox3 > div > div > div.controlwrapper > table > tbody > tr > td.chatmsgcell > div > textarea");
    sendButton = document.querySelector("body > div.chatbox3 > div > div > div.controlwrapper > table > tbody > tr > td.sendbthcell > div > button");
    newButton = document.querySelector("body > div.chatbox3 > div > div > div.controlwrapper > table > tbody > tr > td.disconnectbtncell > div > button")
    statusLogs = document.getElementsByClassName("statuslog");

    if (ShouldSend()) {
        console.log("Sending message");
        SendMessage();
        setTimeout(() => {
            FindNewChat();
        }, amountToSend * 100);
    }

    else {
        console.log("Finding new")
        FindNewChat();
    }
}

function SendMessage() {
    for (let i = amountToSend; i > 0; i--) {
        chatBox.innerText = message;
        setTimeout(() => {
            sendButton.click();
        }, 50);
            
    }
}

function ShouldSend() {
    for (const item in statusLogs) {
        if (Object.hasOwnProperty.call(statusLogs, item)) {
            const element = statusLogs[item];
            if (element.innerText === strangerDisconnectedQuery || element.innerText === disconnectedQuery) {
                console.log("Disconnected")
                return false;
            }
        }
    }
    
    return true;
}

function FindNewChat() {
    newButton.click();
}

setInterval(() => {
    Tick();
}, tickTimeInMilliseconds);
