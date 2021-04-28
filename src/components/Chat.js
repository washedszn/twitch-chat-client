import React from 'react';
import Message from './Message';

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: []
        };
    }

    connect() {
        const WebSocket = require('websocket');

        const socket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');

        socket.send('PASS ' + 'twitch oauth')
        socket.send('NICK WashedH')
        socket.send('JOIN #thanovic')
    }

    componentDidMount() {
        // this.connect()
    }

    render() {
        return <div>test
            {
                this.state.messages.map(e => {
                    return <Message user="test" message={e} />
                })
            }
        </div>;
    }
}

export default Chat;