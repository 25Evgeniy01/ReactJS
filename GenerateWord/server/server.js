import app from './router';
import WebSocket from "ws";

const server = app.listen(3000, () => {
    console.log(`Server running`)
});

let saveObject = {
    saveGeneration: null,
    saveRefactoring: null
};

const wss = new WebSocket.Server({port: 8080});

wss.on('connection',  (client, req) => {


    client.on('message', (data) => {
        let dataParse = JSON.parse(data);
        switch (dataParse.type) {
            case ('SAVE_GENERATION') :
                saveObject.saveGeneration = dataParse.data;
                console.log(saveObject.saveGeneration);
                break;
            case ('GET_GENERATION') :
                client.send(JSON.stringify({data: saveObject.saveGeneration}));
                break;
        }

    });

    client.on('close', () => {
        console.log("Connection close");
    });
});


export default server;
