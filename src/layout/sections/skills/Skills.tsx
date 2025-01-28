import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'
import { S } from './Skills_Style'

const skillData = [
	{
		iconId: 'code',
		title: 'html5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'css',
		title: 'css3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'react',
		title: 'react',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'typescript',
		title: 'typeScript',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'styled-components',
		title: 'styled Components',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'figma',
		title: 'WEB DESIgN',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
]

export const Skills = () => {
	return (
		<S.Skills>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap={'wrap'} justify={'space-between'}>
					{skillData.map((s, index) => {
						return (
							<Skill
								iconId={s.iconId}
								key={index}
								title={s.title}
								description={s.description}
							/>
						)
					})}
				</FlexWrapper>
			</Container>
		</S.Skills>
	)
}
