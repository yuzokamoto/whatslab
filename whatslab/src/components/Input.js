import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem .7rem;

    > * {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: none;
        margin: 0 .5rem;
    }

    input {
        flex: 69;
        padding: 0 .7rem;
    }

    input#userInput {
        flex: 18;
    }

    button {
        flex: 13;
        font-weight: bold;
    }
`

export default class Input extends React.Component {
    render() {
        return (
            <InputContainer>   
                <input id="userInput"
                    placeholder="Usuário"
                    onChange={(e) => {this.props.userInputHandler(e)}}
                    value={this.props.userInput}
                />

                <input id="messageInput"
                    placeholder="Mensagem"
                    onChange={(e) => {this.props.messageInputHandler(e)}}
                    value={this.props.messageInput}
                />

                <button onClick={(e) => {this.props.buttonHandler(e)}}>Enviar</button>
            </InputContainer>
        );
    }
}