import React from 'react'
import { render } from 'react-dom'

import Menu from '../Menu'

// copy index.html to `./.build` folder
require('file?name=[name].[ext]!./app2.html')

const content = (
    <div>
        <Menu />
        <h1>App 2</h1>
    </div>
)

render(content, document.getElementById('content'))
