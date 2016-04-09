import React from 'react'
import { render } from 'react-dom'

// copy index.html to `./.build` folder
require('file?name=[name].[ext]!./app2.html')

const content = (
    <div>
        <h1>App 2</h1>
    </div>
)

render(content, document.getElementById('content'))
