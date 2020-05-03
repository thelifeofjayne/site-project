import React from 'react'

const render_arr = arr => {
	return (
		<span className='bracket-wrap'>
			<span className='bracket'>
				{arr.map((val, idx) => (
					<div key={idx}>{render_stuff(val)}</div>
				))}
			</span>
		</span>
	)
}

const render_obj = obj => {
	return (
		<span className='brace-wrap'>
			<span className='brace'>
				{Object.keys(obj).map(key => (
					<div key={key}>
						<span className='key'>{key}</span>
						{render_stuff(obj[key])}
					</div>
				))}
			</span>
		</span>
	)
}

export const render_stuff = val => {
	if (Array.isArray(val)) {
		return render_arr(val)
	} else {
		switch (typeof val) {
			case 'object':
				return render_obj(val)
			case 'string':
				return <span className='val'>'{val}'</span>
			case 'number':
				return <span className='val'>{val}</span>
			case 'boolean':
				return <span className='val'>{val ? 'true' : 'false'}</span>
			default:
				return 'xd'
		}
	}
}

export const rendered = stuff => {
	return (
		<>
			<span className='const'>{Object.keys(stuff)[0]}</span>
			{render_stuff(stuff[Object.keys(stuff)[0]])}
			<br />
			<br />
			<span className='export'>{Object.keys(stuff)[0]}</span>
		</>
	)
}
