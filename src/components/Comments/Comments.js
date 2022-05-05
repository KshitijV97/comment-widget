import React, { useState } from 'react';
import Comment from '../Comment/Comment';

function Comments() {
	// Store all comments from backend here
	const [backendComments, setBackendComments] = useState([
		{
			id: '1',
			body: 'Hello World',
			parentId: null,
			createdAt: '2022-05-05T14:00:33.010+02:00',
		},
		{
			id: '2',
			body: 'Hello Earth',
			parentId: null,
			createdAt: '2022-05-05T14:01:33.010+02:00',
		},
		{
			id: '3',
			body: 'Hello World 2',
			parentId: '1',
			createdAt: '2022-05-05T14:05:33.010+02:00',
		},
		{
			id: '4',
			body: 'Hello Earth 2',
			parentId: '2',
			createdAt: '2022-05-05T14:10:33.010+02:00',
		},
		{
			id: '5',
			body: 'JavaScript',
			parentId: null,
			createdAt: '2022-05-05T14:56:33.010+02:00',
		},
		{
			id: '6',
			body: 'TypeScript',
			parentId: '5',
			createdAt: '2022-05-05T14:57:33.010+02:00',
		},
		{
			id: '7',
			body: 'Web Assembly',
			parentId: '6',
			createdAt: '2022-05-05T14:58:33.010+02:00',
		},
	]);

	// Filter out root comments by seeing whose parentId is null and render those
	const rootComments = backendComments.filter(
		(backendComment) => backendComment.parentId == null
	);

	return (
		<div>
			<h1>These are your comments </h1>
			<div>
				{rootComments.map((rootComment) => (
					<Comment
						comment={rootComment}
						allComments={backendComments}
						setBackendComments={setBackendComments}
					/>
				))}
			</div>
		</div>
	);
}

export default Comments;
