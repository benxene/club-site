import styled from 'styled-components';
import { fonts } from '../constants/theme';

export default function AboutCard({ imgSrc, name }) {
	return (
		<Container>
			<img src={imgSrc} alt={name}></img>
			<Content>
				<h2>Krishna Moorthy</h2>
				<p>III CSE</p>
				<p>Tech Lead</p>
				<p>"call it as things pa"</p>
				<Rect1 />
				<Rect2 />
				<Triangle />
			</Content>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 50rem;
	height: 23rem;
	margin: 1rem;
	padding: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${props => props.theme.lightGrey};
	border-radius: 2rem;
	z-index: -2;

	& img {
		object-fit: cover;
		object-position: center;
		border-radius: 10%;
		border: 0.3rem solid ${props => props.theme.primary};
	}

	& h2 {
		font-family: ${fonts.sansSerif};
		color: ${p => p.theme.primary};
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: 0;
	background-color: ${props => `${props.theme.secondary}80`};
	width: 23rem;
	height: 4rem;
	transform: skew(0deg, -25deg);
	z-index: -1;
`;

const Rect2 = styled.div`
	position: absolute;
	top: 35%;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}`};
	width: 20rem;
	height: 1.5rem;
	transform: skew(0deg, -25deg);
	z-index: -1;
`;

const Triangle = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}80`};
	clip-path: polygon(100% 0, 0 100%, 100% 100%);
	width: 30rem;
	height: 13rem;
	z-index: -1;
`;
