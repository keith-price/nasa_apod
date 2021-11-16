function apodData() {
	const imgContainer = document.getElementById("img-container");
	return fetch("/daily-image")
		.then((imageResponse) => imageResponse.json())
		.then((fetchedImage) => {
			if (fetchedImage[0].url.includes("youtube")) {
				template = `<p class="img-title">${fetchedImage[0].title}</p>
                        <div class="image-description-container">
                        <video class="main-img">
                        <source src="${fetchedImage[0].url}" alt="${fetchedImage[0].title}">
                        </video>
                        <p class="img-description">${fetchedImage[0].description}</p>
                        </div>`;
			} else {
				template = `<p class="img-title">${fetchedImage[0].title}</p>
                        <div class="image-description-container">
                        <img class="main-img" src="${fetchedImage[0].url}" alt="${fetchedImage[0].title}">
                        <p class="img-description">${fetchedImage[0].description}</p>
                        </div>`;
			}

			imgContainer.innerHTML = template;
		});
}

window.onload = () => {
	apodData();
};
