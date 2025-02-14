import styled from 'styled-components'
import { theme } from '../../styles/Theme'

const Footer = styled.footer`
	background-color: ${theme.colors.primaryBg};
	padding: 40px 0;
	position: relative;
`

const Name = styled.span`
	font-family: 'Josefin Sans', sans-serif;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 3px;
`

const SocialList = styled.ul`
	display: flex;
	gap: 20px;
	margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
	border-radius: 25px;
	background-color: rgba(255, 255, 255, 0.1);
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: ${theme.animation.transition};
	color: ${theme.colors.accent};
	&:hover {
		color: ${theme.colors.primaryBg};
		transform: translateY(-4px);
	}
`

const Copyright = styled.small`
	opacity: 0.5;
	text-align: center;
	font-size: 12px;
	font-weight: 400;
`
export const S = {
	Footer,
	Name,
	SocialList,
	SocialItem,
	SocialLink,
	Copyright,
}
