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

const getPost = async () => {
	try {
		const Response = await axios.get('https://gorest.co.in/public/v2/posts');
		return Response;
	} catch (error) {
		throw error('Fetching Error');
	}
};
function Listing() {
	const toast = useToast();
	const { data, isLoading } = useQuery('fetchPost', getPost, {
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
}

export default Listing;
