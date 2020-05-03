import React, { useState, useRef, useContext, useEffect } from 'react'
import { AppContext } from '../App'

const Header = () => {
	const { lang } = useContext(AppContext)
	const { name_is, name, _occupation, _occupations } = lang.main
	const { front_end, memer, weeb, jojo } = _occupations
	const [occupation, setOccupation] = useState('')
	const i = useRef(0)
	const j = useRef(0)
	const increasing = useRef(true)
	let occupations = [
		{ name: front_end, color: 'var(--ocp-front-end)' },
		{ name: memer, color: 'var(--ocp-memer)' },
		{ name: weeb, color: 'var(--ocp-weeb)' },
		{ name: jojo, color: 'var(--ocp-jojo)' }
	]

	const [visible, setVisible] = useState(true)
	const occupationTimer = 50
	const occupationAwaitLoop = 40
	const cursorTimer = 500

	const occupationRef = useRef('')

	const occupationLifeCycle = async () => {
		if (increasing.current) {
			occupationRef.current = occupations[i.current].name[j.current]
				? occupationRef.current + occupations[i.current].name[j.current]
				: occupationRef.current
			j.current++
			setOccupation(occupationRef.current)
			if (j.current === occupations[i.current].name.length + occupationAwaitLoop) {
				j.current = occupations[i.current].name.length
				increasing.current = false
			}
		} else {
			occupationRef.current = occupationRef.current.slice(0, -1)
			setOccupation(occupationRef.current)
			if (occupationRef.current.length === 0) {
				j.current = 0
				i.current = i.current === occupations.length - 1 ? 0 : i.current + 1
				increasing.current = true
			}
		}
	}

	const cursorLifeCycle = () => setVisible(!visible)

	useEffect(() => {
		const occupationInteval = setInterval(occupationLifeCycle, occupationTimer)
		const cursorInteval = setInterval(cursorLifeCycle, cursorTimer)
		return () => {
			clearInterval(cursorInteval)
			clearInterval(occupationInteval)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible])

	return (
		<div className='header'>
			<div>
				<div>
					{name_is}
					<span style={{ color: occupations[i.current].color }}>{name}</span>
				</div>
				<div>
					{_occupation}
					<span style={{ color: occupations[i.current].color }}>{occupation}</span>
					<span
						style={{
							visibility: visible ? 'visible' : 'hidden'
						}}
						className='cursor'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
