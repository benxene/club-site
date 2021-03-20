import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

import { Button, Footer } from '../../components';
import { colors } from '../../constants/theme';
import { male1, male2, male3, female1, female2, female3 } from '../../images';
import validationSchema from './validationSchema';

export default function RegisterForm() {
	const [active, setActive] = useState(null);
	const [avatarError, setAvatarError] = useState(false);

	const initialValues = {
		name: '',
		registerNumber: '',
		email: '',
		phoneNumber: '',
		year: '',
		gender: '',
		dept: ''
	};

	const avatars = [
		{ url: male1, gender: 'male', id: 'male1' },
		{ url: male2, gender: 'male', id: 'male2' },
		{ url: male3, gender: 'male', id: 'male3' },
		{ url: female1, gender: 'female', id: 'female1' },
		{ url: female2, gender: 'female', id: 'female2' },
		{ url: female3, gender: 'female', id: 'female3' }
	];

	const handleSubmit = async (values, action) => {
		if (!active || active?.gender !== values.gender) {
			setAvatarError(true);
			return;
		}

		/*
		 try {
		 	await axios.post('/user/new', values);
		 	 registration successful - handle
		 	window.open('/', '_self');
		 } catch (err) {
		 	 handle the error properly
		 	console.log(err.response); // {status = HTTP STATUS CODE, data: Defined data {message, error}}
		 }
		 */
	};

	useEffect(() => {
		// hit the server to wake it up
		axios.get('/');
	}, []);

	return (
		<>
			<FormContainer>
				<h1>Registration</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched, values }) => (
						<FormikForm>
							<Box>
								<FieldContainer>
									<label htmlFor='regno'>Register Number</label>
									<Input id='regno' name='registerNumber' />
									{errors.registerNumber && touched.registerNumber ? (
										<Error>{errors.registerNumber}</Error>
									) : null}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='name'>Name of the Student</label>
									<Input id='name' name='name' />
									{errors.name && touched.name ? <Error>{errors.name}</Error> : null}
								</FieldContainer>
								<FieldContainer style={{ marginBottom: '1rem' }}>
									<label htmlFor='gender'>Gender</label>
									<RadioContainer>
										<RadioGroup>
											<Field
												id='male'
												className='radio__group-input'
												name='gender'
												value='male'
												type='radio'
											/>
											<label htmlFor='male' className='radio__group-label'>
												<span className='radio__group-button'></span>
												Male
											</label>
										</RadioGroup>
										<RadioGroup>
											<Field
												id='female'
												type='radio'
												className='radio__group-input'
												name='gender'
												value='female'
											/>
											<label htmlFor='female' className='radio__group-label'>
												<span className='radio__group-button'></span>
												<p>Female</p>
											</label>
										</RadioGroup>
									</RadioContainer>
									{errors.gender && touched.gender ? <Error>{errors.gender}</Error> : null}
									{values?.gender !== '' && (
										<>
											<label htmlFor='avatar'>Select your Avatar</label>
											<AvatarContainer>
												{avatars
													.filter(value => value.gender === values.gender)
													.map(value => {
														return (
															<Avatar
																key={value.id}
																src={value.url}
																alt='male'
																onClick={() => {
																	setActive(value);
																	setAvatarError(false);
																}}
																active={active?.id === value.id}
															/>
														);
													})}
											</AvatarContainer>
											{avatarError && <Error>Please select an avatar</Error>}
										</>
									)}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='email'>Email of the Student</label>
									<Input id='email' name='email' type='email' />
									{errors.email && touched.email ? <Error>{errors.email}</Error> : null}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='phn_num'>Phone Number</label>
									<Input
										id='phn_num'
										name='phoneNumber'
										type='tel'
										placeholder='4444444444'
										pattern='[1-9]{1} [0-9]{9}'
									/>
									{errors.phoneNumber && touched.phoneNumber ? (
										<Error>{errors.phoneNumber}</Error>
									) : null}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='year'>Year</label>
									<Field name='year' as='select' className='select'>
										<option value=''>-- Select --</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
									</Field>
									{errors.year && touched.year ? <Error>{errors.year}</Error> : null}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='dept'>Department</label>
									<Field name='dept' as='select' className='select'>
										<option value=''>-- Select --</option>
										<option value='CSE'>CSE</option>
										<option value='IT'>IT</option>
									</Field>
									{errors.dept && touched.dept ? <Error>{errors.dept}</Error> : null}
								</FieldContainer>
							</Box>
							<SubmitButton type='submit'>Submit</SubmitButton>
						</FormikForm>
					)}
				</Formik>
				<Rect3 />
				<Rect1 />
				<Rect2 />
				<MiddleRect />
			</FormContainer>
			<Footer />
		</>
	);
}
const Avatar = styled.img`
	width: 10rem;
	margin-right: 2rem;
	border-radius: 50%;
	background-color: ${props => (props.active ? `${colors.primary}` : 'none')};
	transition: all 0.2s;

	&:hover {
		background-color: ${colors.primary};
		box-shadow: ${props => `3px 3px 20px ${props.theme.secondary}`};
		cursor: pointer;
	}

	@media (max-width: 600px) {
		width: 8rem;
	}

	@media (max-width: 500px) {
		width: 6rem;
	}

	@media (max-width: 400px) {
		width: 5rem;
	}
`;

const AvatarContainer = styled.div`
	margin: 1rem 1rem 3rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Box = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 60rem;
	padding: 3rem 4rem;
	background-color: ${colors.white};
	border-radius: 3%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

	@media (max-width: 640px) {
		min-width: 100%;
		box-shadow: none;
	}
`;

const Error = styled.p`
	color: ${props => props.theme.tomato};
	font-size: 1.3rem;
`;

const FieldContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.select {
		width: 100%;
		font: inherit;
		font-size: 1.4rem;
		margin: 0.5rem auto 3rem auto;
		padding: 0.7rem 1.25rem;
		border-radius: 0.5rem;
		border: 2px solid transparent;
		background-color: #f2f2f2;
		box-shadow: ${props => `1px 1px 10px ${props.theme.primary}50`};
		transition: all 0.2s;

		:focus {
			outline: none;
			color: ${colors.primary};
			border: 2px solid ${colors.primary};
			box-shadow: ${props => `3px 3px 20px ${props.theme.primary}50`};
		}
	}
`;

const FormContainer = styled.div`
	position: relative;
	margin: 4rem 0;
	padding: 4rem 0;
	overflow-x: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;
`;

const FormikForm = styled(Form)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Input = styled(Field)`
	width: 100%;
	font: inherit;
	font-size: 1.4rem;
	margin: 0.5rem auto 1rem auto;
	padding: 0.7rem 1.25rem;
	border-radius: 0.5rem;
	border: 2px solid transparent;
	background-color: ${colors.grey};
	box-shadow: ${props => `1px 1px 10px ${props.theme.primary}50`};
	transition: all 0.2s;

	:focus {
		outline: none;
		color: ${colors.primary};
		border: 2px solid ${colors.primary};
		box-shadow: ${props => `3px 3px 20px ${props.theme.primary}50`};
	}
`;
const MiddleRect = styled.div`
	position: absolute;
	top: 48.2%;
	left: -6rem;
	background-color: #0048aa;
	width: 20rem;
	height: 1rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 16rem;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const RadioContainer = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 400px) {
		flex-direction: column;
	}
`;

const RadioGroup = styled.div`
	width: 49%;
	display: flex;
	flex-direction: row;
	margin: 0.75rem;

	.radio__group {
		&-input {
			display: none;
		}

		&-label {
			font-size: 1.6rem;
			cursor: pointer;
			position: relative;

			display: flex;
			align-items: center;
			justify-content: center;
		}

		&-button {
			height: 2.5rem;
			width: 2.5rem;
			border: 5px solid ${colors.tertiary};
			border-radius: 50%;
			display: inline-block;
			position: relative;
			margin-right: 2rem;

			&::after {
				content: '';
				display: block;
				height: 0.85rem;
				width: 0.85rem;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
				background-color: ${colors.tertiary};
				opacity: 0;
				-webkit-transition: opacity 0.2s;
				transition: opacity 0.2s;
			}
		}
	}

	.radio__group-input:checked ~ .radio__group-label .radio__group-button::after {
		opacity: 1;
	}
`;

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: -6rem;
	background-color: ${colors.tertiary};
	width: 20rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 16rem;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const Rect2 = styled.div`
	position: absolute;
	top: 48%;
	left: -6rem;
	background-color: #0295dd;
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 20rem;
		top: 48.4%;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const Rect3 = styled.div`
	position: absolute;
	top: 20%;
	right: -4.3%;
	background-color: ${colors.primary};
	width: 27.5rem;
	height: 4rem;
	transform: skew(0deg, -15deg);
	z-index: -1;

	@media (max-width: 1000px) {
		width: 20rem;
		top: 25.3%;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const SubmitButton = styled(Button)`
	margin-top: 3rem;

	@media (max-width: 700px) {
		margin-top: 0rem;
	}
`;