import React from 'react'
import SVG from '../stuff/svg'
import TH from '../locale/th'
import EN from '../locale/en'
import ALIEN from '../locale/alien'

const Footer = ({ props }) => {
	const { setTheme, theme, setLang } = props
	return (
		<div className='footer'>
			<div className='config'>
				<SVG name='bulb' setTheme={setTheme} theme={theme} />
			</div>
			<div className='config'>
				<SVG name='alien' setLang={setLang} lang={ALIEN} />
				<SVG name='lang_th' setLang={setLang} lang={TH} />
				<SVG name='lang_en' setLang={setLang} lang={EN} />
			</div>
		</div>
	)
}

export default Footer
