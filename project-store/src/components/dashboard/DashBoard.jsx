import React from 'react';
import ProjectList from '../projects/ProjectLists';
import Notifications from './Notifications';

const Dashboard = () => (
	<div className="dashboard container">
		<div className="row">
			<div className="col s12 m6">
				<ProjectList />
			</div>
			<div className="col s12 m5 offset-m1">
				<Notifications />
			</div>
		</div>
	</div>
);

export default Dashboard;
