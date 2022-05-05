import React from 'react';
import {useContent} from '../hooks';
import selectionFilter from '../utils/selection-map';
import BrowseContainer from '../containers/browse';

const Browse = (props) => {
	// movies & series display.. & slides
	const {series} = useContent('series');
	const {films} = useContent('films');

	const slides = selectionFilter({series, films})


	return <BrowseContainer slides={slides}/>


};

export default Browse;