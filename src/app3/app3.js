import 'file?name=[name].[ext]!./app3.html'


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

    // start store with empty state
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

let store = createStore(reducer)

const render = () => {
    document.getElementById('counter').innerText = store.getState()
}
render()

store.subscribe(render)

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
})

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' })
})



