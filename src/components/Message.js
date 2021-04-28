import React from 'react';
import { Container, Button } from 'reactstrap';

class Message extends React.Component {
    constructor() {
        super();

    }
    render() {
        let container = {
            width: '100%',
            height: 'fit-content'
        }

        return <Container style={container}>
            <b><a href="">{this.props.user}:</a></b>{this.props.message}
        </Container>
    }
}

export default Message;