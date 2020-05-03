import { rendered } from './_render'
import { AppContext } from '../App'
import { useContext } from 'react'

export const aboutData = lang => {
	const data = {
		about: {
			title: lang.about.title,
			me: lang.about.me,
			name: lang.about.name,
			nickname: lang.about.nickname,
			birthdate: lang.about.birthdate
		}
	}
	return data
}

export const About = () => {
	const { lang } = useContext(AppContext)
	const about = aboutData(lang)
	return rendered(about)
}
