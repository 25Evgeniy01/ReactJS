import app from './router';
import WebSocket from "ws";
import http from 'http';

const server = app.listen(8080, () => {
    console.log(`Server running`)
});


const wss = new WebSocket.Server({port: 8081});

wss.on('connection',  (client, req) => {


    client.on('message', (data) => {
        let dataParse = JSON.parse(data);
        console.log(dataParse);
        switch (dataParse.commandName) {
            case ('getJSON'):
                let req = http.get("http://dev.frevend.com/json/users.json", (res) => {

                    res.on('data',  (body) => {
                        client.send(body.toString());
                    });

                });

                req.on("error", (err) => {
                    console.log(err.message);
                });
            break;
        }

    });

    client.on('close', () => {
        console.log("Connection close");
    });
});


export default server;
