import { Link } from 'react-router-dom';

const NotFound = () => (
	<div className="not-found">
		<h2>Sorry</h2>
		<p>That pages cannot be found</p>
		<Link to="/">Back to the home page...</Link>
	</div>
);

export default NotFound;
