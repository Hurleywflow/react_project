import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => (
	<div className="project-list section">
		{/* display dynamically single project */}
		<ProjectSummary />
		<ProjectSummary />
		<ProjectSummary />
		<ProjectSummary />
		<ProjectSummary />
	</div>
);

export default ProjectList;
