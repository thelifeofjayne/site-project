import { rendered } from './_render'
import { useContext } from 'react'
import { AppContext } from '../App'

export const educationData = lang => {
	const data = {
		education: {
			title: 'Education',
			list: [
				{
					university: lang.education.university,
					degree: lang.education.degree,
					gpa: lang.education.gpa,
					period: lang.education.period
				}
			]
		}
	}
	return data
}

export const Education = () => {
	const { lang } = useContext(AppContext)
	const education = educationData(lang)
	return rendered(education)
}
