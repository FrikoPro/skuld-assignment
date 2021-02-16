import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ship = ({ vesselName, member, index }) => {
	return (
		<Card as={Link} to={`/${index}`} className="m-2">
			<Card.Header>
				<Card.Title>{vesselName}</Card.Title>
				<p>{member}</p>
			</Card.Header>
		</Card>
	);
};

export default Ship;
