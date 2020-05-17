import React from 'react';
import Recipient from './components/Header/Recipient';
import Message from './components/Main/Message';
import Sender from './components/Footer/Sender';
import { Header, Main, Footer } from './AppStyles.js';

export default class App extends React.Component {
  render() {
    return (<>

      <Header>
        <Recipient />
      </Header>

      <Main>
          <Message />
          <Message />
          <Message />
      </Main>

      <Footer>
        <Sender />
      </Footer>

    </>);
  }
}