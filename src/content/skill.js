import { rendered } from './_render'
import { useContext } from 'react'
import { AppContext } from '../App'

export const skillData = lang => {
	const data = {
		skill: {
			title: lang.skill.title,
			list: [
				{
					name: [
						{
							name: 'JavaScript',
							svg: 'javascript',
							color: 'var(--cnst)'
						},
						{ name: 'React', svg: 'react', color: 'var(--cnst)' },
						{ name: 'Redux', svg: 'redux', color: 'var(--cnst)' },
						{ name: 'CSS', svg: 'css', color: 'var(--cnst)' }
					],
					proficiency: lang.skill.prof.great,
					color: 'var(--cnst)'
				},
				{
					name: [{ name: 'MySQL', svg: 'mysql' }],
					proficiency: lang.skill.prof.good,
					color: 'var(--val)'
				},
				{
					name: [
						{ name: 'jQuery', svg: 'jquery' },
						{
							name: 'PHP',
							svg: 'php'
						},
						{ name: 'Codeigniter', svg: 'codeigniter' },
						{ name: 'Git', svg: 'git' },
						{ name: 'GitHub', svg: 'github' }
					],
					proficiency: lang.skill.prof.average,
					color: 'var(--vrb)'
				}
			]
		}
	}
	return data
}
export const Skill = () => {
	const { lang } = useContext(AppContext)
	const skill = skillData(lang)
	return rendered(skill)
}
