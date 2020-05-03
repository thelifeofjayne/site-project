import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const App2 = () => (
	<DndProvider backend={Backend}>
		<App />
	</DndProvider>
)

ReactDOM.render(<App2 />, document.getElementById('root'))
