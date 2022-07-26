import React from 'react';

const NewsListing = ({ Stories }) => {
	return (
		<div>
			{Stories &&
				Stories.map((newsItem) => <h1 key={newsItem.id}>{newsItem.title}</h1>)}
		</div>
	);
};

export default NewsListing;
