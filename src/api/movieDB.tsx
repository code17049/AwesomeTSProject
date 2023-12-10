import axios from "axios";

const movieDB = axios.create({
   baseURL: 'https://api.themoviedb.org/3/movie',
   params: {
    api_key: 'e13ebbc9de63c9fb1d5f08c13bd49986',
    language: 'es-ES'
   }
});

export default movieDB;