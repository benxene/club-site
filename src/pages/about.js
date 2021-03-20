import styled from 'styled-components';

import { Card, Heading, Footer, Container } from '../components';
import { man } from '../images';

export default function About() {
	return (
		<>
			<Container>
				<Heading gradient margin='huge'>
					About Us
				</Heading>
				<TeamContainer>
					<h2>Management Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>Technical Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>Staff Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>External Affairs Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
				<TeamContainer>
					<h2>Teaching Team :</h2>
					<InnerContainer>
						<Card imgSrc={man} name='man' position='Vice President' />
						<Card imgSrc={man} name='man' position='President' />
						<Card imgSrc={man} name='man' position='Tech Lead' />
					</InnerContainer>
				</TeamContainer>
			</Container>
			<Footer />
		</>
	);
}

const TeamContainer = styled.div`
	padding: 1em;
	h2 {
		font-size: 2.5rem;
		font-family: inherit;
	}
`;

const InnerContainer = styled.div`
	padding: 1em 0;
	display: flex;
	gap: 1em;
	flex-wrap: wrap;
	justify-content: space-around;
`;
