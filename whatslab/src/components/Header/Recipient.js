import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <img src="https://picsum.photos/100" alt="profile icon" />
                <h1>John Doe</h1>
            </div>
        );
    }
}