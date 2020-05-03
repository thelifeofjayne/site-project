import React, { useContext, useState } from 'react'
import File from './file'
import { AppContext } from '../App'

const SubHeader = () => {
	const {
		files,
		explorerWidth,
		explorerMinWidth,
		isMobileDevice
	} = useContext(AppContext)

	const [dropping, setDropping] = useState(-1)

	return (
		<div className='sub-header'>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					minWidth: explorerWidth,
					marginLeft: explorerWidth === 0 ? -explorerMinWidth : 0
				}}>
				<div style={{ marginLeft: 18 }}>EXPLORER</div>
			</div>
			<div
				className='editor-sub-header'
				style={{
					display: 'flex',
					overflowX: 'auto',
					marginLeft:
						explorerWidth === 0 ? (isMobileDevice() ? 90 : 95) : 5
				}}>
				{files.length === 0
					? null
					: files.map((file, idx) => {
							return (
								<File
									props={{
										idx,
										file,
										dropping,
										setDropping
									}}
									key={idx}
								/>
							)
					  })}
			</div>
		</div>
	)
}

export default SubHeader
