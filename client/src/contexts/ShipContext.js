import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const ShipContext = createContext();

export const ShipProvider = (props) => {
	const [ships, setShips] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/getData')
			.then((response) => setShips(sortArray(response.data)));
	}, []);

	const sortArray = (array) => {
		let mutatedShips = array;

		if (mutatedShips.length <= 1) return mutatedShips;

		const quickSort = (arr, start, end) => {
			let i = start;
			let j = end;

			let pivot = arr[Math.floor(start + (end - start) / 2)];
			while (i <= j) {
				while (arr[i].vesselName.localeCompare(pivot.vesselName) < 0) i++;

				while (arr[j].vesselName.localeCompare(pivot.vesselName) > 0) j--;

				if (i <= j) {
					[arr[i], arr[j]] = [arr[j], arr[i]];
					i++;
					j--;
				}
			}

			if (j > start) quickSort(arr, start, j);

			if (i < end) quickSort(arr, i, end);
		};

		quickSort(mutatedShips, 0, mutatedShips.length - 1);

		return mutatedShips;
	};

	return (
		<ShipContext.Provider value={ships}>{props.children}</ShipContext.Provider>
	);
};
