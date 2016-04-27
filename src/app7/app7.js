import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

import Menu from '../components/Menu'

import 'file?name=[name].[ext]!./app7.html'

let id = 0

const todos = (state = [], action) => {
    console.log('sup?')
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: ++id,
                    text: action.text,
                    completed: false
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(t => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }

                return t
            })

        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SHOW_ALL':
        case 'SHOW_COMPLETED':
        case 'SHOW_UNCOMPLETED':
            return action.filter
        default:
            return state
    }
}


class TodoApp extends React.Component {
    render() {
        const {
            dispatch,
            todos,
            visibilityFilter
        } = this.props

        const visibleTodos = todos.map(t => {
            const style = {
                textDecoration: t.completed ? 'line-through' : ''
            }

            return (
                <li
                    key={t.id}
                    onClick={e => {
                        dispatch({
                            type: 'TOGGLE_TODO',
                            id: t.id
                        })
                    }}
                    style={style}>
                    {t.text}
                </li>
            )
        })

        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={e => {
                    dispatch({
                        type: 'ADD_TODO',
                        text: this.refs.input.value
                    })
                    this.refs.input.value = ''
                }}>
                Add Todo
                </button>
                <ul>
                    {visibleTodos}
                </ul>
            </div>
        )
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

console.log(todoApp)

const store = createStore(todoApp)

const render = () => {
    console.log(store.getState())
    ReactDOM.render(
        <TodoApp
            dispatch={store.dispatch}
            {...store.getState()}
        />,
        document.getElementById('content')
    )
}

store.subscribe(render)
render()
