import React from 'react';

const ProjectDetails = props => {
	const { id } = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Tittle {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
						necessitatibus nam praesentium tempora libero aliquid laboriosam,
						natus molestias temporibus culpa officiis explicabo qui ipsa
						cupiditate excepturi pariatur hic optio.
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Hurley</div>
					<div>2021</div>
				</div>
			</div>
		</div>
	);
};
export default ProjectDetails;
