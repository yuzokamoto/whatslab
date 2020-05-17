import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} alt="profile icon" />
                <h1>{this.props.name}</h1>
                <div>
                    <input placeholder="novo contato" id="newRecipientInput"
                        value={this.props.newRecipient}
                        onChange={(e) => {this.props.inputHandler(e)}}
                        onKeyDown={(e) => {this.props.onEnter(e)}}
                    />
                    <button onClick={this.props.recipientButton}>+</button>
                </div>
            </div>
        );
    }
}