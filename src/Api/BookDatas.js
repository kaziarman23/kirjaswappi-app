import axios from "axios";

// TODO: Have to hide the api's.
const api =
  "https://api.jsonsilo.com/42bdd7bb-7066-49e8-ae50-bee747b7aa5c";
const apiKey = "3akimClnEXEa0AgAeuQtNqsf1Q6Bb38oTzkvv2keBa";

export const BookDatas = async () => {
  try {
    const headers = {
      "X-SILO-KEY": apiKey,
      "Content-Type": "application/json",
    };

    const response = await axios.get(api, { headers });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching book data:",
      error.message || error
    );

    return null;
  }
};
