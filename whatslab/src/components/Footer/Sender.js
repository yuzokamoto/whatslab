import React from 'react';

export default class Sender extends React.Component {
    render() {
        const recipientOptions = this.props.recipientList.map((recipient) => {
            return (
            <option key={recipient.id} value={recipient.id}>{recipient.name}</option>
            );
        });

        return (
            <div> 
                <select value={this.props.selected} onChange={(e) => {this.props.selectHandler(e)}}>
                    {recipientOptions}
                </select>
                <input placeholder="Mensagem" id="messageInput"
                    value={this.props.message}
                    onChange={(e) => {this.props.inputHandler(e)}}
                    onKeyDown={(e) => {this.props.onEnter(e)}}
                />
                <button onClick={this.props.onClickMessageButton}>Enviar</button>
            </div>
        );
    }
}