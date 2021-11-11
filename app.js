// this is just test code. Will build in framework, not sure which yet

const apiData = () => {
	fetch(
		"https://api.nasa.gov/planetary/apod?api_key=j4gWd4PrmFjZ0QzJw7hb33y9VOTbGPIxt7ecSxff"
	)
		.then((response) => response.json())
		.then((data) => {
			let imgContainer = document.getElementById("img-container");
			if (data.url.includes("youtube")) {
				template = `<p class="img-title">${data.title}</p>
                        <div class="image-description-container">
                        <video class="main-img">
                        <source src="${data.url}" alt="${data.title}">
                        </video>
                        <p class="img-description">${data.explanation}</p>
                        </div>`;
			} else {
				template = `<p class="img-title">${data.title}</p>
                        <div class="image-description-container">
                        <img class="main-img" src="${data.url}" alt="${data.title}">
                        <p class="img-description">${data.explanation}</p>
                        </div>`;
			}

			imgContainer.innerHTML = template;
		});
};

apiData();
