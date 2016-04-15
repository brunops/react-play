import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Menu from '../components/Menu'
import TextInput from '../components/TextInput'

import 'file?name=[name].[ext]!./app6.html'

const getInitialState = () => {
    return {
        fields: {
            field1: {
                component: 'TextInput',
                label: 'Field 1',
                attributes: {
                    className: 'text-input',
                    id: 'field1',
                    name: 'field1',
                    value: '',
                    placeholder: 'type field 1'
                },
                wrapperAttributes: {
                    className: 'wrapper col-md-12'
                }
            },
            field2: {
                component: 'TextInput',
                label: 'Field 2',
                attributes: {
                    className: 'text-input',
                    id: 'field2',
                    name: 'field2',
                    value: '',
                    placeholder: 'type field 2'
                },
                wrapperAttributes: {
                    className: 'wrapper col-md-6'
                }
            }
        }
    }
}

const fields = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'UPDATE_FIELD_VALUE':
            return {
                fields: {
                    ...state.fields,
                    [action.field]: {
                        ...state.fields[action.field],
                        attributes: {
                            ...state.fields[action.field].attributes,
                            value: action.value
                        }
                    }
                }
            }
        default:
            return state
    }
}

const store = createStore(fields)

const onChange = (field, dispatch) => (e) => {
    dispatch({
        type: 'UPDATE_FIELD_VALUE',
        field: field,
        value: e.target.value
    })
}

const Form = ({ fields, dispatch }) => {
    const formFields = Object.keys(fields).map((field) => {
        return (
            <TextInput
                key={field}
                field={fields[field]}
                onChange={onChange(field, dispatch)}
            />
        )
    })

    return (
        <form>
            {formFields}
        </form>
    )
}

const App = ({ fields, dispatch }) => {
    return (
        <div>
            <Menu />
            <Form
                fields={fields}
                dispatch={dispatch}
            />
        </div>
    )
}

const render = () => {
    ReactDOM.render(
        <App
            fields={store.getState().fields}
            dispatch={store.dispatch}
        />,
        document.getElementById('content')
    )
}

store.subscribe(render)
render()

