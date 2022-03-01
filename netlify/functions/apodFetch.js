export async function handler(event, context) {
	console.log(event);
	console.log(context);
	try {
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}`
		);
		return {
			statusCode: 200,
			body: JSON.stringify(response),
		};
	} catch (err) {
		return {
			statusCode: 404,
			body: err.toString(),
		};
	}
}
