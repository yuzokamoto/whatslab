import React from 'react';

export default class Message extends React.Component {
    render() {

        const messages = this.props.messageList.map((msg) => {
            if (msg.message !== "") {
                if(msg.user === "Eu") {
                    return (
                        <div key={msg.id}>
                            <span id="user" onClick={() => {this.props.onDoubleClick(msg.id)}}>
                                <p>{msg.message}</p>
                            </span>
                        </div>
                    );
                } else {
                    return (
                        <div key={msg.id}>
                            <span onClick={() => {this.props.onDoubleClick(msg.id)}}>
                                <h1>{msg.user}</h1>
                                <p>{msg.message}</p>
                            </span>
                        </div>
                    );
                }
            } else {
                return (
                    <div key={'emptyDiv'} id="hidden"></div>
                );
            }
        });

        return (
            <div>
                {messages}
            </div>
        );
    }
}