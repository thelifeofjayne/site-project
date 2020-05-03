import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import DarkTheme from './theme/dark'
import LightTheme from './theme/light'
import SubHeader from './component/sub-header'
import Explorer from './component/explorer'
import Resizer from './component/resizer'
import Footer from './component/footer'
import Editor from './component/editor'
import Header from './component/header'
import EN from './locale/en'
import { About, Education, Experience, Skill, Contract, Profile, Resume } from './content'
import { ProfilePic, ReactLogo } from './image'

export const AppContext = createContext()

const App = () => {
	const explorerMinWidth = 180
	const [explorerWidth, setExplorerWidth] = useState(window.innerWidth <= 480 ? 0 : explorerMinWidth)
	const [explorer, setExplorer] = useState([
		{
			id: 1,
			name: 'Data',
			type: 'folder',
			open: true,
			level: 1,
			items: [
				{
					parentId: 1,
					id: 11,
					name: 'resume',
					type: 'file_pdf',
					render: Resume,
					level: 2,
					dragging: false
				},
				{
					parentId: 1,
					id: 17,
					name: 'Profile',
					type: 'file_txt',
					render: Profile,
					level: 2,
					dragging: false
				},
				{
					parentId: 1,
					id: 12,
					name: 'About',
					type: 'file_js',
					render: About,
					level: 2,
					dragging: false
				},
				{
					parentId: 1,
					id: 13,
					name: 'Education',
					type: 'file_js',
					render: Education,
					level: 2,
					dragging: false
				},
				{
					parentId: 1,
					id: 14,
					name: 'Experience',
					type: 'file_js',
					render: Experience,
					level: 2,
					dragging: false
				},
				{
					parentId: 1,
					id: 15,
					name: 'Skill',
					type: 'file_js',
					render: Skill,
					level: 2,
					dragging: false
				},
				{
					parentId: 1,
					id: 16,
					name: 'Contract',
					type: 'file_js',
					render: Contract,
					level: 2,
					dragging: false
				}
			]
		},
		{
			id: 2,
			name: 'TESING ZONE',
			type: 'folder',
			open: false,
			level: 1,
			items: [
				{
					parentId: 2,
					id: 20,
					name: 'THIS FILE NAME IS TOO LONG',
					type: 'file_txt',
					render: () => {
						return <div>THIS_FILE_NAME_IS_TOO_LONG</div>
					},
					level: 2,
					dragging: false
				},
				{
					parentId: 2,
					id: 21,
					name: 'THIS FOLDER NAME IS TOO LONG',
					type: 'folder',
					open: false,
					level: 2,
					items: [
						{
							parentId: 21,
							id: 210,
							name: 'FILE LV 3 [1]',
							type: 'file_txt',
							render: () => {
								return <div>FILE LV 3 [1]</div>
							},
							level: 3,
							dragging: false
						},
						{
							parentId: 21,
							id: 221,
							name: 'FOLDER LV 3',
							type: 'folder',
							open: false,
							level: 3,
							items: [
								{
									parentId: 221,
									id: 2110,
									name: 'FILE LV 4',
									type: 'file_txt',
									render: () => {
										return <div>FILE LV 4</div>
									},
									level: 4,
									dragging: false
								},
								{
									parentId: 221,
									id: 2111,
									name: 'FOLDER LV 4',
									type: 'folder',
									open: false,
									level: 4,
									items: [
										{
											parentId: 2111,
											id: 21110,
											name: 'FILE LV 5',
											type: 'file_txt',
											render: () => {
												return <div>FILE LV 5</div>
											},
											level: 5,
											dragging: false
										}
									]
								}
							]
						},
						{
							parentId: 21,
							id: 212,
							name: 'FILE LV 3 [2]',
							type: 'file_txt',
							render: () => {
								return <div>FILE LV 3 [2]</div>
							},
							level: 3,
							dragging: false
						}
					]
				}
			]
		},
		{
			id: 3,
			name: 'Image',
			type: 'folder',
			open: false,
			level: 1,
			items: [
				{
					parentId: 3,
					id: 30,
					name: 'profile-picture.png',
					type: 'file_img',
					src: ProfilePic,
					level: 2,
					dragging: false
				},
				{
					parentId: 3,
					id: 31,
					name: 'react.png',
					type: 'file_img',
					src: ReactLogo,
					level: 2,
					dragging: false
				}
			]
		},
		{
			id: 4,
			name: 'PDF',
			type: 'folder',
			open: false,
			level: 1,
			items: []
		}
	])
	const [Render, setRender] = useState(null)
	const [files, setFiles] = useState([])
	const [explorerActive, setExplorerActive] = useState(null)
	const [fileActive, setFileActive] = useState(null)

	const checkResize = () => {
		document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
	}

	useEffect(() => {
		setInterval(checkResize, 100)
		setFiles([{ ...explorer[0].items[0], dragging: false }])
		setExplorerActive(11)
		setRender({ current: explorer[0].items[0].render })
		setFileActive(11)
		return () => {
			clearInterval(checkResize)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const [theme, setTheme] = useState('dark')
	const [lang, setLang] = useState(EN)
	const [cssVar, setCssVar] = useState([])

	useEffect(() => {
		document.body.style.setProperty('--font', lang.font)
	}, [lang])

	useEffect(() => {
		const _theme = theme === 'dark' ? DarkTheme : LightTheme
		var temp = {}
		Object.keys(_theme).forEach(key => {
			temp[key] = _theme[key]
			document.body.style.setProperty(key, _theme[key])
		})
		setCssVar(temp)
	}, [theme])

	function isMobileDevice() {
		return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
	}
	return (
		<AppContext.Provider value={{ lang, cssVar }}>
			<div
				className='container'
				style={{
					gridTemplateColumns: `${explorerWidth}px ${isMobileDevice() ? '0' : '5'}px auto`
				}}>
				<Header />
				<AppContext.Provider
					value={{
						files,
						setFiles,
						setRender,
						explorer,
						setExplorer,
						setExplorerActive,
						fileActive,
						setFileActive,
						explorerWidth,
						explorerActive,
						isMobileDevice,
						explorerMinWidth,
						setExplorerWidth
					}}>
					<SubHeader />
					<Explorer />
					<Resizer />
				</AppContext.Provider>
				<Editor props={{ fileActive, files, Render }} />
				<Footer props={{ setTheme, theme, setLang }} />
			</div>
			<div style={{ position: 'fixed', top: 0, width: '100vw', color: 'var(--white)' }}>
				not finished the profile/pdf thingy yet too lazy :)
			</div>
		</AppContext.Provider>
	)
}

export default App
