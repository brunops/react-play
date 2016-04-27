import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

import Menu from '../components/Menu'

import 'file?name=[name].[ext]!./app7.html'

let id = 0

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: ++id,
                text: action.text,
                completed: false
            }

        case 'TOGGLE_TODO':
            if (state.id === action.id) {
                return {
                    ...state,
                    completed: !state.completed
                }
            }

            return state

        default:
            state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]

        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action))

        case 'DELETE_TODO':
            return state.filter(t => t.id !== action.id)

        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

const FilterLink = ({ dispatch, filter, currentFilter, children }) => {
    if (filter === currentFilter) {
        return <span>{children}</span>
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault()

                dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: filter
                })
            }}
            >
            {children}
        </a>
    )
}

const getVisibleTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        default:
            return todos
    }
}

class TodoApp extends React.Component {
    render() {
        const {
            dispatch,
            todos,
            visibilityFilter
        } = this.props

        const visibleTodos = getVisibleTodos(todos, visibilityFilter).map(t => {
            const style = {
                textDecoration: t.completed ? 'line-through' : ''
            }

            return (
                <li key={t.id}
                    onClick={e => {
                        dispatch({
                            type: 'TOGGLE_TODO',
                            id: t.id
                        })
                    }}
                    style={style}>
                    {t.text}
                    {' '}
                    <a href="#"
                        onClick={e => {
                            e.preventDefault()

                            dispatch({
                                type: 'DELETE_TODO',
                                id: t.id
                            })
                        }}>
                        x
                    </a>
                </li>
            )
        })

        return (
            <div>
                <Menu />
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

                <FilterLink dispatch={dispatch}
                    filter='SHOW_ALL'
                    currentFilter={visibilityFilter}>
                    All
                </FilterLink>
                {' '}
                <FilterLink dispatch={dispatch}
                    filter='SHOW_ACTIVE'
                    currentFilter={visibilityFilter}>
                    Active
                </FilterLink>
                {' '}
                <FilterLink dispatch={dispatch}
                    filter='SHOW_COMPLETED'
                    currentFilter={visibilityFilter}>
                    Completed
                </FilterLink>
            </div>
        )
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

const store = createStore(todoApp)

const render = () => {
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
