import React from 'react';
import Recipient from './components/Header/Recipient';
import Message from './components/Main/Message';
import Sender from './components/Footer/Sender';
import { Header, Main, Footer } from './AppStyles.js';

export default class App extends React.Component {

  state = {
      messageList: [
        {
          id: 0,
          user: "",
          message: ""
        }
      ],
      recipientList: [
        {
          id: 1,
          name: "Eu"
        },
        {
          id: 2,
          name: "John Doe"
        }
      ],
      idCount: 3,
      userInput: "",
      messageInput: "",
      newRecipientInput: "",
      selectedId: 2,
      selectedName: "John Doe",
      clickInterval: []
  };

  onChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  onClickRecipientButton = () => {
    if (this.state.newRecipientInput !== "") {
      let count = this.state.idCount;
      const newRecipient = {
        id: count,
        name: this.state.newRecipientInput
      };

      count++;

      const newRecipientList = [...this.state.recipientList, newRecipient];

      this.setState({
        recipientList: newRecipientList,
        newRecipientInput: "",
        idCount: count
      });

    } else {
      alert("Erro: informe o campo de novo contato.");
    }
  }

  onSelectOption = (e) => {
    let id = Number(e.target.value);
    let name = this.filterSelectedRecipient(id).name;
    this.setState({
      selectedId: id,
      selectedName: name
    });
  }

  filterSelectedRecipient = (id) => {
    const recipient = this.state.recipientList.filter((recipient) => {
      return recipient.id === id;
    });
    return recipient[0];
  }

  onClickMessageButton = () => {
    if (this.state.messageInput !== "") {
      let count = this.state.idCount;
      let user = this.filterSelectedRecipient(this.state.selectedId);

      const newMessage = {
        id: count,
        user: user.name,
        message: this.state.messageInput
      };
      count++

      const newMessageList = [newMessage, ...this.state.messageList];
      this.setState({
        messageList: newMessageList,
        idCount: count,
        messageInput: ""
      });
    } else {
      alert("Erro: informe o campo de mensagem.");
    }
  }

  onInputEnter = (e) => {
    if (e.key === "Enter") {
      if (e.target.id === "newRecipientInput") {
        this.onClickRecipientButton();
      } else if (e.target.id === "messageInput") {
        this.onClickMessageButton();
      }
    }
  }

  onMessageDoubleClick = (targetId) => {
    const doubleClick = () => {
      const newMessageList = this.state.messageList.filter((message) => {
        return message.id !== targetId
      });
      this.setState({
        messageList: newMessageList
      });
    }

    let clicks = [...this.state.clickInterval];
    let timeout;

    clicks.push(new Date().getTime());

    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
        if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
            if (window.confirm("Tem certeza que quer deletar essa mensagem?")) {
              doubleClick();
            }
        }
    }, 250);

    this.setState({
      clickInterval: clicks
    })

  }

  render() {
    return (<>

      <Header>
        <Recipient
          name={this.state.selectedName}
          img="https://picsum.photos/100"
          newRecipient={this.state.newRecipientInput}
          inputHandler={this.onChangeInput}
          recipientButton={this.onClickRecipientButton}
          onEnter={this.onInputEnter}
        />
      </Header>

      <Main>
          <Message
            messageList={this.state.messageList}
            onDoubleClick={this.onMessageDoubleClick}
          />
      </Main>

      <Footer>
        <Sender
          recipientList={this.state.recipientList}
          selected={this.state.selectedId}
          selectHandler={this.onSelectOption}
          message={this.state.messageInput}
          inputHandler={this.onChangeInput}
          onClickMessageButton={this.onClickMessageButton}
          onEnter={this.onInputEnter}
        />
      </Footer>

    </>);
  }
}