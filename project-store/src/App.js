import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './components/dashboard/DashBoard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails.jsx';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={DashBoard} />
						<Route path="/project/:id" component={ProjectDetails} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
