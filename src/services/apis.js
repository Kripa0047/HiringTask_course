const envoirnment = process.env.NODE_ENV;
const apis = {
    BASE_LOCAL_URL: envoirnment === "development" ? "http://localhost:3000" : "",
    BASE_SERVER_URL: envoirnment === "development" ? "" : "",

};

export default apis;
