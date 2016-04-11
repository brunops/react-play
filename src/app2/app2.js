import React from 'react'
import { render } from 'react-dom'

import Menu from '../components/Menu'

// copy index.html to `./.build` folder
import 'file?name=[name].[ext]!./app2.html'

const Hello = () => {
    return (
        <p>Hello world</p>
    )
}

const content = (
    <div>
        <Menu />
        <Hello />
    </div>
)

render(content, document.getElementById('content'))
