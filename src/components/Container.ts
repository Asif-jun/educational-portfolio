import styled from 'styled-components'

type ContainerPropsType = {
	display?: string
	justify?: string
}

export const Container = styled.div<ContainerPropsType>`
	display: ${props => props.display || 'block'};
	justify-content: ${props => props.justify || 'flex-start'};
	max-width: 1170px;
	width: 100%;
	min-height: 100%;
	padding: 0 15px;
	margin: 0 auto;
	outline: 1px solid red;
`
