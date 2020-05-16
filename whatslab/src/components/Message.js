import React from 'react';
import styled from 'styled-components';

const MessageBody = styled.div`
    background: #fafafa;
    margin: 0;
    padding: 1rem 2rem;
    border-radius: 5px;
    > h6 {
        margin-bottom: .7rem;
    }
`

export default class Message extends React.Component {
    render() {
        return (
            <MessageBody className={this.props.class} onClick={(e) => {this.props.doubleClickHandler(e)}}>
                <h6>{this.props.user}</h6>
                <p>{this.props.message}</p>
            </MessageBody>
        );
    }
}