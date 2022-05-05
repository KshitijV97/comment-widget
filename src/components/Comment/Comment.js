import React, { useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import { compareJsonObjects } from '../../helpers/compareJsonObjects';

function Comment({ comment, allComments, setBackendComments }) {
	const [showCommentForm, setShowCommentForm] = useState(false);

	const replies = allComments.filter(
		(potentialChild) => potentialChild.parentId === comment.id
	);

	return (
		<div
			style={{
				marginLeft: '1em',
				marginTop: '0.5em',
				padding: '0.5em',
				border: '1px solid black',
			}}
		>
			<span style={{ margin: '0.3em' }}>{comment.body}</span>
			<span>
				<button
					onClick={() => setShowCommentForm(!showCommentForm)}
					style={{ marginLeft: '1em' }}
				>
					Reply
				</button>
			</span>
			<span>
				<button
					onClick={() => {
						allComments.filter((potentialFind) => {
							// Comparae two objects() potentialFind and comment
							if (compareJsonObjects(potentialFind, comment)) {
								// If found then take its Id and remove that comment
							} // No need ofeslse
							for (let potentialComment of allComments) {
								console.log(
									'Logging potential Comments',
									potentialComment
								);

							}

						});
						// Find the comment in state
						// Mutate the state array to remove
						// Call setter
					}}
					style={{ marginLeft: '1em' }}
				>
					Delete
				</button>
			</span>
			{showCommentForm ? <CommentForm allComments={allComments} /> : null}
			{replies.length > 0 && (
				<div>
					{replies.map((reply) => {
						return (
							<Comment
								comment={reply}
								allComments={allComments}
								setBackendComments={setBackendComments}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Comment;

/**
 * Dispatch action - addComment({
 * 	type: 'add comment'
 * 	payload: details about the comment
 * })
 *
 */
