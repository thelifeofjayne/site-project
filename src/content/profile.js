import React from 'react'
import { aboutData, contractData, educationData, experienceData, skillData } from './index'
import { ProfilePic } from '../image/'
import { AppContext } from '../App'
import { useContext } from 'react'
import SVG from '../stuff/svg'

export const Profile = () => {
	const { lang } = useContext(AppContext)
	const { about } = aboutData(lang)
	const { contract } = contractData(lang)
	const { education } = educationData(lang)
	const { experience } = experienceData(lang)
	const { skill } = skillData(lang)

	return (
		<>
			<div>
				<br />
			</div>
			<div>
				<img height={180} style={{ marginBottom: -4 }} src={ProfilePic} alt='' />
				<div style={{ color: 'var(--lng-rd)' }}>{about.title}</div>
				<div>{about.name}</div>
				<div>{about.nickname}</div>
				<div>{about.birthdate}</div>
			</div>
			<br />
			<div>
				<div style={{ color: 'var(--lng-rd)' }}>{education.title}</div>
				<div>
					{education.list.map((education, idx) => (
						<div key={idx}>
							<div>{education.university}</div>
							<div>{education.degree}</div>
							<div>{education.gpa}</div>
							<div>{education.period}</div>
						</div>
					))}
				</div>
			</div>
			<br />
			<div>
				<div style={{ color: 'var(--lng-rd)' }}>{experience.title}</div>
				<div>---</div>
			</div>
			<br />
			<div>
				<div style={{ color: 'var(--lng-rd)' }}>{skill.title}</div>
				{skill.list.map((skill, idx) => (
					<div key={idx}>
						<div style={{ color: skill.color }}>{skill.proficiency}</div>
						{skill.name.map((skill, idx) => (
							<div
								key={idx}
								style={{
									color: skill.color === undefined ? 'var(--txt-cl)' : skill.color,
									marginLeft: 15
								}}>
								> <SVG name={skill.svg} />
								{skill.name}
							</div>
						))}
					</div>
				))}
			</div>
			<br />
			<div>
				<div style={{ color: 'var(--lng-rd)' }}>{contract.title}</div>
				{contract.list.map((contract, idx) => (
					<div key={idx}>
						<SVG name={contract.svg} /> :{' '}
						<span
							className={contract.link === undefined ? null : 'link'}
							onClick={() => {
								if (contract.link !== undefined) window.open(contract.link, '_blank').focus()
							}}>
							{contract.value}
						</span>
					</div>
				))}
			</div>
		</>
	)
}
