import styled from 'styled-components';
import { Card, Container } from '../../components';
import { colors } from '../../constants/theme';

import Bheem from '../../images/man.png';

export default function Members() {
	return (
		<Container>
			<Head>Our core members</Head>
			<CoreBox>
				<Card imgSrc={Bheem} name='Bheem' position='Vice President' />
				<Card imgSrc={Bheem} name='Bheem' position='President' isSpecial />
				<Card imgSrc={Bheem} name='Bheem' position='Tech Lead' />
			</CoreBox>
		</Container>
	);
}

const CoreBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	& > div {
		@media (min-width: 600px) {
			&:not(:last-child) {
				margin-right: 4rem;
			}
		}

		@media (max-width: 600px) {
			margin-bottom: 3rem;

			&:last-child {
				margin-left: 2rem;
			}
		}
	}

	@media (max-width: 600px) {
		& > div:nth-child(even) {
			order: -1;
		}
	}
`;

const Head = styled.h1`
	background: -webkit-linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
	margin-bottom: 3rem;
`;
