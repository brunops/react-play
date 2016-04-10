import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import Menu from '../Menu'

require('file?name=[name].[ext]!./app4.html')

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const Counter = ({ value, onIncrement, onDecrement }) => {
    return (
        <div>
            <Menu />
            <p>Count: {value}</p>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

const store = createStore(counter)

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => {
                store.dispatch({ type: 'INCREMENT' })
            }}
            onDecrement={() => {
                store.dispatch({ type: 'DECREMENT' })
            }}
        />,
        document.getElementById('content')
    )
}

store.subscribe(render)
render()





