import axios from "axios";

const url = "https://pixabay.com/api";
const apiKey = "16066160-428c3572059e3ac75e3b72a10";
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
/*
`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
    this.state.searchText
  }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
*/

const fetchImages = async (searchText, amount) => {
  try {
    const pixaUrl = `${url}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`;

    //console.log("pixaUrl ", pixaUrl);

    const response = await axios.get(pixaUrl);
    //console.log("response: ", response);
    return response;
  } catch (error) {
    return error;
  }
};

export default fetchImages;
