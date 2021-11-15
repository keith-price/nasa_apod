import { log } from "../deps.ts";

interface DailyImage {
  date: string;
  title: string;
  url: string;
  description: string;
}

const dailyImage = new Map<string, DailyImage>();

const getDailyImage = async () => {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=j4gWd4PrmFjZ0QzJw7hb33y9VOTbGPIxt7ecSxff",
    {
      method: "GET",
    },
  );
  if (!response.ok) {
    throw new Error("There was a problem downloading the data");
  }

  const data = await response.json();

  const imageData = {
    date: data.date,
    title: data.title,
    url: data.url,
    description: data.explanation,
  };

  dailyImage.set(imageData.date, imageData);

  log.info(JSON.stringify(imageData));
};

await getDailyImage();
log.info(`Successfully downloaded data for APOD`);

export function getApod() {
  return Array.from(dailyImage.values());
}
