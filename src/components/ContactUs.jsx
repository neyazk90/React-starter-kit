import React, { useState } from 'react';
import {
	Container,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Button,
	Radio,
	RadioGroup,
	Stack,
	Checkbox,
	Box,
} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';

const ContactUs = () => {
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
	const [amount, setAmount] = useState('');
	const [quantity, setQuantity] = useState('');
	const [value, setValue] = React.useState('1');
	const inputHandler = () => {
		setTitle('Neyaz');
		setEmail('khan.neyaz90@gmail.com');
		setAmount(10);
		setQuantity(2);
	};
	return (
		<div>
			<Container maxW="500">
				<Box backgroundColor="blackAlpha.50" borderRadius="8" padding="5">
					<Heading mb="10">Contact us</Heading>
					<div className="row">
						<div className="col-sm-6">
							<FormControl>
								<FormLabel>Title</FormLabel>
								<Input type="text" onChange={inputHandler} value={title} />
							</FormControl>
						</div>
						<div className="col-sm-6">
							<FormControl mt="5">
								<FormLabel>Email</FormLabel>
								<Input type="email" onChange={inputHandler} value={email} />
								<FormHelperText>
									We&lsquo;ll never share your email.
								</FormHelperText>
							</FormControl>
							<RadioGroup onChange={setValue} mt="5" value={value}>
								<FormLabel>Gender</FormLabel>
								<Stack direction="row">
									<Radio value="1">Male</Radio>
									<Radio value="2">Female</Radio>
									<Radio value="3">TransGender</Radio>
								</Stack>
							</RadioGroup>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<FormControl mt="5">
								<FormLabel>Amount</FormLabel>
								<Input type="number" onChange={inputHandler} value={amount} />
							</FormControl>
						</div>
						<div className="col-sm-6">
							<FormControl mt="5">
								<FormLabel>Quantity</FormLabel>
								<Input type="number" onChange={inputHandler} value={quantity} />
							</FormControl>
						</div>
					</div>
					<div className="row">
						<FormControl mt="5">
							<Stack spacing={5} direction="row">
								<Checkbox colorScheme="green" defaultChecked>
									Accepted T&C.
								</Checkbox>
							</Stack>
						</FormControl>
						<Button colorScheme="blue" mt="5" paddingY="3">
							Button
						</Button>
					</div>
				</Box>
			</Container>
		</div>
	);
};

export default ContactUs;
