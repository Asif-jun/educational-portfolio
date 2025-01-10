import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
	return (
		<StyledHeader>
			<FlexWrapper justify={'space-between'} align={'center'}>
				<Container>
					<Logo />
					<Menu menuItems={items} />
				</Container>
			</FlexWrapper>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: #d4ffd3;
`
