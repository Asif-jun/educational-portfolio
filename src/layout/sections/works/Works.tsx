import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu, TabsStatusType } from './tabmenu/TabMenu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImg from './../../../assets/img/proj1.webp'
import timerImg from './../../../assets/img/timer.webp'
import { Container } from '../../../components/Container'
import { S } from './Works_Styles'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const tabsItems: Array<{
	status: TabsStatusType
	title: string
}> = [
	{
		title: 'All',
		status: 'all',
	},
	{
		title: 'landing page',
		status: 'landing',
	},
	{
		title: 'React',
		status: 'react',
	},
	{
		title: 'spa',
		status: 'spa',
	},
]

const worksData = [
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		type: 'spa',
		id: 1,
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		type: 'react',
		id: 2,
	},
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		type: 'spa',
		id: 3,
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		type: 'react',
		id: 4,
	},
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		type: 'spa',
		id: 5,
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		type: 'react',
		id: 6,
	},
]

export const Works: React.FC = () => {
	const [currentFilterStatus, setcurrentFilterStatus] = useState('all')
	let filteredWorks = worksData

	if (currentFilterStatus === 'landing') {
		filteredWorks = worksData.filter(work => work.type === 'landing')
	}
	if (currentFilterStatus === 'react') {
		filteredWorks = worksData.filter(work => work.type === 'react')
	}
	if (currentFilterStatus === 'spa') {
		filteredWorks = worksData.filter(work => work.type === 'spa')
	}

	function changeFilterStatus(value: TabsStatusType) {
		setcurrentFilterStatus(value)
	}

	return (
		<S.Works id={'works'}>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu
					tabsItems={tabsItems}
					changeFilterStatus={changeFilterStatus}
					currentFilterStatus={currentFilterStatus}
				/>
				<FlexWrapper
					justify={'space-between'}
					align={'flex-start'}
					wrap={'wrap'}
				>
					<AnimatePresence>
						{filteredWorks.map(w => {
							return (
								<motion.div
									style={{ width: '400px', flexGrow: '1', maxWidth: '540px' }}
									layout
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5 }}
									key={w.id}
								>
									<Work title={w.title} src={w.src} text={w.text} key={w.id} />
								</motion.div>
							)
						})}
					</AnimatePresence>
				</FlexWrapper>
			</Container>
		</S.Works>
	)
}
