import React from 'react'
import { AppContainer, Button, InputContainer, InputMessage, InputName, Main, Screen } from './styles'

export class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    messageValue: '',
  }

  onChengeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onChengeMessageValue = (event) => {
    this.setState({ messageValue: event.target.value })
  }
  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }
    console.log(newMessage)
    const newMessagesArray = [newMessage, ...this.state.messages]
    this.setState({messages: newMessagesArray, messageValue: ''})
  }
  render() {
    return (
      <AppContainer >
          <Screen>
            {this.state.messages.map((mes, index) => {
              return (
              <p key={index}>
                <strong>{mes.user}</strong>:
                <span> {mes.text}</span>
              </p>)
            })}
          </Screen>

          <InputContainer>
            <InputName
              placeholder='Nome'
              onChange={this.onChengeUserValue}
              value={this.state.userValue}
            />

            <InputMessage
              placeholder='Mensagem'
              onChange={this.onChengeMessageValue}
              value={this.state.messageValue}
            />

            <Button
              onClick={this.sendMessage}
            >
              Enviar
            </Button>
          </InputContainer>
      </AppContainer>
    );
  }
}

