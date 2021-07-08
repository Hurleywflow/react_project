import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';

// import { BrowserRouter as Router, Route, Switch, Link, useParams,useHistory } from 'react-router-dom'; when we install react-router-dom package

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/blogs/:id">
							{/* set up blog details dynamically by :id or :name Of Id */}
							<BlogDetail />
						</Route>
						<Route path="*">
							{/* this the path to catch up any wrong url on this web */}
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
