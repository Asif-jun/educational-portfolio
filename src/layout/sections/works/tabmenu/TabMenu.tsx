import styled from 'styled-components'
import { Link } from '../../../../components/Link'

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabMenuPropsType = {
	tabsItems: Array<{
		status: TabsStatusType
		title: string
	}>
	changeFilterStatus: (value: TabsStatusType) => void
	currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.tabsItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link
								active={props.currentFilterStatus === item.status}
								as={'button'}
								onClick={() => {
									props.changeFilterStatus(item.status)
								}}
							>
								{item.title}
							</Link>
						</ListItem>
					)
				})}
			</ul>
		</StyledTabMenu>
	)
}

const StyledTabMenu = styled.nav`
	margin-bottom: 40px;
	ul {
		display: flex;
		justify-content: center;
		max-width: 369px;
		width: 100%;
		margin: 0 auto 40px;
		gap: 5px;
	}
`
const ListItem = styled.li``
