import React from 'react'
import Message from "./Message";


export default class MessageField extends React.Component {
    state = {
        messages: ["Hello", 'How are you?'],
        messagesBot: [],
        input: "",
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.input !== '' && this.state.input === '') {
            const messagesBot = this.state.messagesBot.slice();
            messagesBot.push('Отстаьте от меня кожанные уб*ки');
            setTimeout(() => {
                this.setState({messagesBot});
            }, 1000);

        }
    };

    handleSendMessage = () => {
        const messages = this.state.messages.slice();
        messages.push(this.state.input);
        this.setState({messages, input: ''});
    }

    handleInput = (e) => {
        this.setState({input: e.target.value});
    }

    render() {
        const messages = this.state.messages.map((message, index) =>
            <Message key={`${message}_${index}`} message={message}/>);

        const messagesBot = this.state.messagesBot.map((messageBot, index) =>
            <Message key={`${messageBot}_${index}`} message={messageBot}/>);

        const div = {
            textAlign: 'center',
        }

        const divMes = {
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
        }

        return (
            <div>
                <div style={divMes}>
                    <div>
                        {messages}
                    </div>
                    <div>
                        {messagesBot}
                    </div>
                </div>
                <div style={div}>
                    <input name="input" value={this.state.input} onChange={this.handleInput}/>
                    <button onClick={this.handleSendMessage}>Отправить сообщение</button>
                </div>
            </div>
        );
    }
}