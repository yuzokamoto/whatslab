import React from 'react';

export default class Sender extends React.Component {
    render() {
        return (
            <div> 
                <select>
                    <option>Eu</option>
                    <option>John Doe</option>
                    <option>Eduardo e Mônica do Renato Russo</option>
                </select>
                <input placeholder="Mensagem" />
                <button>Enviar</button>
            </div>
        );
    }
}