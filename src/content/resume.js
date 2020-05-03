import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer'
import { aboutData, contractData, educationData, experienceData, skillData } from './index'
import Kanit from '../stuff/Kanit.ttf'
import { ProfilePic } from '../image'

export const Resume = ({ lang, cssVar }) => {
	const { about } = aboutData(lang)
	const { education } = educationData(lang)
	const { skill } = skillData(lang)
	const { experience } = experienceData(lang)
	const { contract } = contractData(lang)

	const sliceVar = variable => {
		if (variable !== undefined) return variable.startsWith('--') ? variable : variable.slice(4, variable.length - 1)
		return null
	}

	const styles = StyleSheet.create({
		page: {
			backgroundColor: cssVar['--bg-cl-2'],
			fontSize: 12,
			fontFamily: 'Kanit',
			color: cssVar['--txt-cl']
		},
		header: {
			marginVertical: 15,
			borderBottomWidth: 5,
			borderBottomColor: cssVar['--white'],
			borderBottomStyle: 'solid',
			fontSize: 18
		},
		container: { marginHorizontal: 50 },
		section: { marginBottom: 15 },
		row: { flexDirection: 'row' },
		about: {
			marginTop: -15,
			flexDirection: 'column',
			justifyContent: 'center',
			minWidth: '70%'
		},
		title: {
			borderBottomWidth: 1,
			borderBottomColor: cssVar['--white'],
			borderBottomStyle: 'solid'
		}
	})

	Font.register({
		family: 'Kanit',
		src: Kanit
	})

	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.container}>
						{about.name} ({about.nickname})
					</Text>
				</View>
				<View style={styles.container}>
					<View style={styles.row}>
						<Image
							style={{
								height: 150,
								width: 150,
								marginBottom: 15,
								marginRight: 15,
								minWidth: '30%'
							}}
							src={ProfilePic}
						/>
						<View style={styles.about}>
							<Text style={styles.title}>{about.title}</Text>
							<Text>{about.me}</Text>
						</View>
					</View>
					<View style={styles.section}>
						<Text style={styles.title}>{education.title}</Text>
						{education.list.map((education, idx) => (
							<View key={idx}>
								<Text>{education.university}</Text>
								<Text>{education.degree}</Text>
								<Text>{education.gpa}</Text>
								<Text>{education.period}</Text>
							</View>
						))}
					</View>
					<View style={styles.section}>
						<Text style={styles.title}>{skill.title}</Text>
						{skill.list.map((skill, idx) => (
							<View key={idx}>
								<Text
									style={{
										color: cssVar[sliceVar(skill.color)]
									}}>
									{skill.proficiency}
								</Text>
								<View style={styles.row}>
									{skill.name.map((_skill, idx) => (
										<View key={idx} style={styles.row}>
											<Text
												key={idx}
												style={{
													color: cssVar[sliceVar(_skill.color)],
													marginLeft: idx === 0 ? 15 : 6
												}}>
												{idx === 0 ? '_ ' : null}
												{_skill.name}
											</Text>
										</View>
									))}
								</View>
							</View>
						))}
					</View>
					<View style={styles.section}>
						<Text style={styles.title}>{experience.title}</Text>
						{experience.list.length === 0 ? (
							<Text>{experience.nothing}</Text>
						) : (
							experience.list.map((experience, idx) => (
								<View key={idx}>
									<Text>{experience.name}</Text>
								</View>
							))
						)}
					</View>
					<View style={styles.section}>
						<Text style={styles.title}>{contract.title}</Text>
						{contract.list.map((contract, idx) => (
							<View style={styles.row} key={idx}>
								<Text>{`${contract.name} : `}</Text>
								<Link src={contract.link}>{contract.value}</Link>
							</View>
						))}
					</View>
				</View>
			</Page>
		</Document>
	)
}
