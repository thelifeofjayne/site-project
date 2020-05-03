import React, { useRef, useState, useEffect, useContext } from 'react'
import Nothing from './nothing'
import { PDFViewer } from '@react-pdf/renderer'
import { AppContext } from '../App'

const Editor = ({ props }) => {
	const { fileActive, files, Render } = props
	const [line, setLine] = useState(1)
	const textEditor = useRef()
	const lineEditor = useRef()
	const textWrapper = useRef()

	useEffect(() => {
		if (textWrapper.current) {
			setLine(textWrapper.current.clientHeight / textWrapper.current.childNodes[0].offsetHeight)
		}
	}, [fileActive])

	const activeFile = files.find(file => file.id === fileActive)
	const isImg = !activeFile ? null : activeFile.type === 'file_img'
	const isPdf = !activeFile ? null : activeFile.type === 'file_pdf'
	const { lang, cssVar } = useContext(AppContext)

	const rendering = () => {
		if (typeof activeFile !== 'undefined') {
			if (isImg) {
				return (
					<div className='file-img'>
						<img src={activeFile.src} alt={activeFile.name} />
					</div>
				)
			} else if (isPdf) {
				return (
					<PDFViewer>
						<Render.current lang={lang} cssVar={cssVar} />
					</PDFViewer>
				)
			} else {
				return (
					<>
						<div
							className='line'
							ref={lineEditor}
							onScroll={() => (textEditor.current.scrollTop = lineEditor.current.scrollTop)}>
							{line === 0 || typeof line === 'undefined'
								? null
								: [...Array(Math.floor(line)).keys()].map(idx => <div key={idx}>{idx + 1}</div>)}
						</div>
						<div
							className='textEditor'
							ref={textEditor}
							onScroll={() => (lineEditor.current.scrollTop = textEditor.current.scrollTop)}>
							<div ref={textWrapper}>
								<Render.current />
							</div>
						</div>
					</>
				)
			}
		}
		return null
	}

	return <div className='editor'>{files.length === 0 ? <Nothing /> : rendering()}</div>
}

export default Editor
