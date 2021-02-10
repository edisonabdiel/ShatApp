import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

    const projectID = 'c8b7c520-5773-4ae3-a13f-81020068acc9';

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName="zombiotch"
            userSecret="notasecret"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
};

export default App;
