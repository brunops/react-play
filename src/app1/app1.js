import React from 'react'
import { render } from 'react-dom'

import Menu from '../Menu'

// copy index.html to `./.build` folder
require('file?name=[name].[ext]!./app1.html')

const content = (
    <div>
        <Menu />
        <h1>App 1</h1>
    </div>
)

render(content, document.getElementById('content'))
