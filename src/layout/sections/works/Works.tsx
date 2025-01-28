import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu } from './tabmenu/TabMenu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImg from './../../../assets/img/proj1.webp'
import timerImg from './../../../assets/img/timer.webp'
import { Container } from '../../../components/Container'
import { S } from './Works_Styles'

const workItems = ['All', 'landing page', 'React', 'spa']

const workData = [
	{
		title: 'Social Network',
		src: socialImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
	},
	{
		title: 'Timer',
		src: timerImg,
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
	},
]

export const Works: React.FC = () => {
	return (
		<S.Works>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu menuItems={workItems} />
				<FlexWrapper
					justify={'space-between'}
					align={'flex-start'}
					wrap={'wrap'}
				>
					{workData.map(w => {
						return <Work title={w.title} src={w.src} text={w.text} />
					})}
				</FlexWrapper>
			</Container>
		</S.Works>
	)
}
