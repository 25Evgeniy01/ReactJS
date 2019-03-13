const ws = new WebSocket('ws://localhost:8080');

const open = () => {
    ws.onopen = () => {
        console.log("Connection success");
    };
};

const sentMessage = (message) => {
    ws.send(message);
};

ws.onmessage = (message) => {
   console.log(JSON.parse(message.data));
};

export {
    open,
    sentMessage
}