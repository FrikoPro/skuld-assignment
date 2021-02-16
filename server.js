const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

const port = 8080;

app.use(cors());

app.get('/getData', async (req, res) => {
	try {
		const result = await axios
			.get('https://extranet-api.skuld.com/vesselsearch/?query=tiger')
			.then((response) => res.json(response.data));
	} catch (err) {
		console.log(err);
	}
});

app.listen(port, () => {
	console.log('server started at port: ', port);
});
