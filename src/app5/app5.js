import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Menu from '../Menu'

import 'file?name=[name].[ext]!./app5.html'

const text = (state = '', action) => {
    switch (action.type) {
        case 'RESET':
            return ''
        case 'UPDATE':
            return action.value
        default:
            return state
    }
}

const store = createStore(text)

const App = ({ value, onChange, onForceUpdate }) => {
    return (
        <div>
            <Menu />
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </form>
            <button onClick={onForceUpdate}>Force update</button>
        </div>
    )
}

const onChange = (e) => {
    console.log(arguments, e.target.value)
    store.dispatch({
        type: 'UPDATE',
        value: e.target.value
    })
}

const onForceUpdate = () => {
    store.dispatch({
        type: 'UPDATE',
        value: 'forced value!'
    })
}

const render = () => {
    console.log('state: %s', store.getState())
    ReactDOM.render(
        <App
            value={store.getState()}
            onChange={onChange}
            onForceUpdate={onForceUpdate}
        />,
        document.getElementById('content')
    )
}

store.subscribe(render)
render()



