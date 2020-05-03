import { rendered } from './_render'
import { useContext } from 'react'
import { AppContext } from '../App'

export const experienceData = lang => {
	const data = {
		experience: {
			title: lang.experience.title,
			nothing: lang.experience.nothing,
			list: []
		}
	}
	return data
}

export const Experience = () => {
	const { lang } = useContext(AppContext)
	const experience = experienceData(lang)
	return rendered(experience)
}
