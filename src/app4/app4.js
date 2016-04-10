import React from 'react'
import ReactDOM from 'react-dom'

import Menu from '../Menu'

require('file?name=[name].[ext]!./app4.html')

const createStore = (reducer) => {
    let state,
        listeners = []

    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener)
        // return an unsubscribe function
        return () => {
            listeners.filter(l => l !== listener)
        }
    }

    // initialize store
    dispatch({})

    return { getState, dispatch, subscribe }
}

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const Counter = ({ store }) => {
    return (
        <div>
            <Menu />
            <p>Count: {store.getState()}</p>
            <button
                onClick={() => {
                    store.dispatch({ type: 'INCREMENT' })
                }}>+</button>
            <button
                onClick={() => {
                    store.dispatch({ type: 'DECREMENT' })
                }}>-</button>
        </div>
    )
}


const render = () => {
    ReactDOM.render(
        <Counter store={store} />,
        document.getElementById('content')
    )
}

let store = createStore(reducer)
store.subscribe(render)
render()





