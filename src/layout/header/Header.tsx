import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { HeaderMenu } from './headerMenu/HeaderMenu'

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
	return (
		<StyledHeader>
			<FlexWrapper justify={'space-between'} align={'center'}>
				<Container>
					<Logo />
					<HeaderMenu menuItems={items} />
				</Container>
			</FlexWrapper>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background: #1f1f20e5;
	padding: 20px 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99999;
`
