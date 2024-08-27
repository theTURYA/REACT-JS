import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
    return (
        <div>
            <h1>Custom App </h1>
        </div>
    )
}

/*
const ReactElement = {
    type: "a",
    props: {
      href: "https://google.com",
      target: "_blank",
    },
    children: "Click here to visit google",
};
*/
const anotherUser = "FIFA WORLD CUP 2018!!"
const reactElement = React.createElement(
    'a',
    { href: 'https://youtube.com', target: '_blank' },
    'Click here to visit YouTube',
    anotherUser
)

const anotherElement = (
    <a href="https:\\google.com" target='_blank'>Visit
        Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
    render(
      
        anotherElement
    )
