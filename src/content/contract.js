import { rendered } from './_render'
import { useContext } from 'react'
import { AppContext } from '../App'

export const contractData = lang => {
	const contract = {
		contract: {
			title: lang.contract.title,
			list: [
				{
					name: lang.contract.phone,
					value: '+66804714xxx',
					svg: 'phone'
				},
				{
					name: lang.contract.email,
					value: 'thelifeofjanye@gmail.com',
					svg: 'email',
					link: 'mailto:thelifeofjanye@gmail.com'
				},
				{
					name: lang.contract.facebook,
					value: 'facebook.com/jolyne40536',
					svg: 'facebook',
					link: 'https://www.facebook.com/jolyne40536'
				},
				{
					name: lang.contract.github,
					value: 'github.com/thelifeofjanye',
					svg: 'github',
					link: 'https://www.github.com/thelifeofjanye'
				},
				{
					name: lang.contract.website,
					value: '---',
					svg: 'website',
					link: 'https://www.stackoverflow.com'
				}
			]
		}
	}
	return contract
}

export const Contract = () => {
	const { lang } = useContext(AppContext)
	const contract = contractData(lang)
	return rendered(contract)
}
