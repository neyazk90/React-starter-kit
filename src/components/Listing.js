import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import {
	Container,
	Flex,
	Grid,
	Heading,
	Spinner,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { useParams } from 'react-router';

const getPost = async () => {
	try {
		const Response = await axios.get(`https://gorest.co.in/public/v2/posts`);
		return Response;
	} catch (error) {
		throw error('Fetching Error');
	}
};
const Listing = () => {
	const { id } = useParams();

	const pageID = Number(id);
	const toast = useToast();
	const { data, isLoading } = useQuery('fetchPost', () => getPost(pageID), {
		onError: (error) => {
			toast({ status: 'error', title: error.message });
		},
	});

	return (
		<Container mt="4" maxW="1300px">
			{isLoading && (
				<Grid placeItems="center" height="100vh">
					<Spinner />
				</Grid>
			)}
			{!isLoading && (
				<Flex justify="space-between">
					<Button colorScheme="red">Prev</Button>
					<Button colorScheme="green">Next</Button>
				</Flex>
			)}

			{!isLoading &&
				data?.data.map((post) => (
					<Stack
						p="4"
						mb="3"
						boxShadow="md"
						borderRadius="xl"
						border="1px solid #ccc"
						key={post.id}
					>
						<Flex justify="space-between">
							<Text>USER ID: {post.user_id}</Text>
							<Text>POST ID: {post.id} </Text>
						</Flex>
						<Heading>{post.title}</Heading>
						<Text>{post.body}</Text>
					</Stack>
				))}
		</Container>
	);
};

export default Listing;
