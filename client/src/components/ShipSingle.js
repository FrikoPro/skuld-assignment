import { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ShipContext } from '../contexts/ShipContext';

const ShipSingle = ({ history }) => {
	const { id } = useParams();

	const ships = useContext(ShipContext);

	const [ship, setShip] = useState({});

	useEffect(() => {
		if (ships.length !== 0) {
			setShip({
				...ships[id],
				certificates: ships[id].certificates.map((cert) => (
					<li>
						<div>Certificate: {cert.certificate}</div>
						<div>Certificate type: {cert.certificateType}</div>
					</li>
				)),
			});
		}
	}, [ships, id]);

	return (
		<Card className="m-2">
			<Card.Header>
				<Card.Title>{ship.vesselName}</Card.Title>
				<p>{ship.member}</p>
			</Card.Header>
			<Card.Body>
				<Button onClick={history.goBack}>Go Back</Button>
				<p>Name of vessel: {ship.vesselName}</p>
				<p>Member: {ship.member}</p>
				<p>Req owner: {ship.currentRegOwner}</p>
				<p>Flag: {ship.flagDescription}</p>
				<p>GT: {ship.grossTonnage}</p>
				<p>IMO no: {ship.imo}</p>
				<p>Year built: {ship.builtYear}</p>
				<p>Vessel type: {ship.vesselType}</p>
				<p>Business units: {ship.businessUnit}</p>
				<p>Certificates: </p>
				<ul>{ship.certificates}</ul>
				<img
					src={`https://photos.marinetraffic.com/ais/showphoto.aspx?imo=${ship.imo}`}
					alt=""></img>
			</Card.Body>
		</Card>
	);
};

export default ShipSingle;
