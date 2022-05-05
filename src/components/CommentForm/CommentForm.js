import React, { useState, useEffect } from 'react';
import { debounce } from '../../utilities/debounce';

function CommentForm({ allComments, setAllComments }) {
	const [currentContent, setCurrentContent] = useState();

	useEffect(() => {
		console.log('Current content is', currentContent);
	}, [currentContent]);
	return (
		<div style={{ margin: '0.5em' }}>
			<input
				type='text'
				value={currentContent}
				onChange={(event) => {
					setCurrentContent(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					// You have the state variable allComments
					// Find the latest ID
					// Make a new Comment Object and add it to the Array with latestID + 1
				}}
				style={{ marginLeft: '0.5em' }}
			>
				POST
			</button>
		</div>
	);
}

export default CommentForm;
