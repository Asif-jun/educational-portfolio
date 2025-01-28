import { Menu } from '../menu/Menu'
import { S } from '../HeaderMenu_Styles'
import { useState } from 'react'

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
	menuItems: Array<string>
}) => {
	const [menuIsopen, setmenuIsopen] = useState(false)
	const onBurgerBtnClick = () => {
		setmenuIsopen(!menuIsopen)
	}
	return (
		<S.MobileMenu>
			<S.BurgerButton isOpen={menuIsopen} onClick={onBurgerBtnClick}>
				<span></span>
			</S.BurgerButton>

			<S.MobileMenuPopup
				isOpen={menuIsopen}
				onClick={() => {
					setmenuIsopen(false)
				}}
			>
				<Menu menuItems={props.menuItems} />
			</S.MobileMenuPopup>
		</S.MobileMenu>
	)
}
