import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { S } from './Header_Styles'
import React from 'react'
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu'
import { DesktopMenu } from './headerMenu/desktopMenu/DeskTopMenu'

export const Header: React.FC = () => {
	const [width, setWidth] = React.useState(window.innerWidth)
	const breakpoint = 768

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return (
		<S.Header>
			<FlexWrapper justify={'space-between'} align={'center'}>
				<Container justify={'space-between'} display={'flex'}>
					<Logo />
					{width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
				</Container>
			</FlexWrapper>
		</S.Header>
	)
}
