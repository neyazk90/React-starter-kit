import React from 'react';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
import HighChart from './charts/HighChart';
import NewsListing from './NewsListing';

const Home = () => {
	const news = [
		{
			id: 1,
			title: 'Inflation',
			subtitle: '',
			content:
				'lorem	ipsum odiremsdj jkhkhj lorem ipsum odiremsdj loremlorem ipsum odiremsdj	ipsum odiremsdj hghjghj lorem lorem	ipsum odiremsdj',
			publishedDate: new Date().getDate,
			author: 'Neyaz',
		},
		{
			id: 2,
			title: 'Politics',
			subtitle: '',
			content:
				'lorem	ipsum odiremsdj jkhkhj lorem ipsum odiremsdj loremlorem ipsum odiremsdj	ipsum odiremsdj hghjghj lorem lorem	ipsum odiremsdj',
			publishedDate: new Date().getDate,
			author: 'Neyaz',
		},
		{
			id: 3,
			title: 'Gas Cylinder',
			subtitle: '',
			content:
				'lorem	ipsum odiremsdj jkhkhj lorem ipsum odiremsdj loremlorem ipsum odiremsdj	ipsum odiremsdj hghjghj lorem lorem	ipsum odiremsdj',
			publishedDate: new Date().getDate,
			author: 'Neyaz',
		},
	];
	return (
		<div>
			<HighChart />
			<br />
			<BarChart />
			<br />
			<PieChart />
			<NewsListing Stories={news} NewsProvider="NDTV" />
		</div>
	);
};

export default Home;
