import React, { useContext } from 'react'
import Item from './item'
import { AppContext } from '../App'

const Explorer = () => {
	const {
		explorer,
		explorerWidth,
		explorerMinWidth,
		explorerActive
	} = useContext(AppContext)

	const is_folder = item => {
		return item.type === 'folder'
	}

	const selfOrChildActive = (arr, active) => {
		if (arr.id === active) return arr.id
		return arr.items.some(
			item =>
				(item.id === active && !is_folder(item)) ||
				(item.id === active && is_folder(item) && item.open === false)
		)
	}

	const display_item = arr => {
		return arr.map((item, idx) => {
			return (
				<div className={is_folder(item) ? 'parent' : ''} key={idx}>
					{!is_folder(item) ? null : (
						<div
							className='folder-line'
							style={{
								marginRight: -((item.level - 1) * 17 + 6),
								marginLeft: (item.level - 1) * 17 + 6,
								backgroundColor: selfOrChildActive(
									item,
									explorerActive
								)
									? 'var(--ex-line-active)'
									: 'var(--ex-line)',
								height: !item.open ? 0 : 'auto'
							}}
						/>
					)}
					<Item
						props={{
							item,
							is_folder
						}}
					/>
					<div className='xd'>
						{!item.open
							? null
							: !item.items
							? null
							: display_item(item.items)}
					</div>
				</div>
			)
		})
	}

	return (
		<div
			className='explorer'
			style={{
				marginLeft: explorerWidth === 0 ? -explorerMinWidth : 0
			}}>
			{display_item(explorer)}
		</div>
	)
}

export default Explorer
