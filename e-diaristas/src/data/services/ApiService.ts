import axios from "axios";

const url = "https://ediaristas-workshop.herokuapp.com";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "aplication/json",
  }, //tem aspas pois tem um travessão ai tem q fazer dele uma string para conseguir ler tudo
});
