import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Ship from './Ship';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ShipContext } from '../contexts/ShipContext';

const ShipList = () => {
	const [ascending, setAscending] = useState(true);
	const [filteredShips, setFilteredShips] = useState([]);

	const ships = useContext(ShipContext);

	useEffect(() => {
		setFilteredShips([...ships]);
	}, [ships]);

	const filterBoats = (val) => {
		setFilteredShips(
			ships.filter((item) => item.vesselName.includes(val.toUpperCase()))
		);
	};

	const sortArray = () => {
		setFilteredShips(filteredShips.reverse());
		setAscending(!ascending);
	};

	return (
		<Container className="m-5">
			<Row>
				<Col>
					<Button onClick={sortArray}>
						{ascending ? 'ascending' : 'descending'}
					</Button>
				</Col>
				<Col>
					<input
						placeholder="filter boats"
						className="form-control"
						onChange={(e) => filterBoats(e.target.value)}
					/>
				</Col>
			</Row>

			{filteredShips.map((ship, i) => (
				<Ship index={i} {...ship} key={i} />
			))}
		</Container>
	);
};

export default ShipList;
