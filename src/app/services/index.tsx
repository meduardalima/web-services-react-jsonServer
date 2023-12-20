//esse arquivo vai criar a url da minha api
import axios, { Axios } from "axios";
//criando o link da minha api usando o método create da biblioteca axios para criar rotas.
const api = axios.create({
  baseURL: "http://localhost:5555",
});
