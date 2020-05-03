import React, { useContext } from 'react'
import SVG from '../stuff/svg'
import { AppContext } from '../App'

const Item = ({ props }) => {
	const { item, is_folder } = props

	const {
		explorer,
		setExplorer,
		explorerActive,
		setExplorerActive,
		setRender,
		files,
		setFiles,
		setFileActive,
		explorerWidth
	} = useContext(AppContext)

	const edit_open = (_arr, id) => {
		const arr = [..._arr]
		arr.forEach(function checkId(arr) {
			if (arr.id === id) {
				arr.open = !arr.open
			}
			Array.isArray(arr.items) && arr.items.forEach(checkId)
		})
		return arr
	}

	return (
		<div
			className={`item-wrapper ${explorerActive === item.id && (!is_folder(item) || item.open) ? 'active' : ''}`}
			onClick={() => {
				if (!is_folder(item)) {
					const exist = file => {
						return JSON.stringify(file) === JSON.stringify(item)
					}
					if (!files.some(exist)) {
						const newFiles = [...files, item]
						setFiles(newFiles)
					}
					setFileActive(item.id)
					setRender({ current: item.render })
				} else {
					setExplorer(edit_open(explorer, item.id))
				}
				setExplorerActive(item.id)
			}}>
			<div
				className='item'
				style={{
					marginLeft: (item.level - 1) * 17,
					maxWidth: explorerWidth - 30
				}}>
				{!is_folder(item) ? null : <SVG name={`chevron_${item.open ? 'down' : 'right'}`} />}
				<SVG width={20} name={item.type + (item.open ? '_open' : '')} />
				{' ' + item.name}
			</div>
		</div>
	)
}

export default Item
