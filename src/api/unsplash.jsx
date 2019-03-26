import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { Authorization: "Client-ID 3a139e31b7eb7756997620313d76a9cc1df304f83ee8b55fddd559d5c858e8c1" }
});
