import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/"
});

export const getAllUsers = async (body) => {
    baseURL = 'http://challenge-react.alkemy.org/';
    return axiosClient.post('', body)
        .then(res => {
            if (res.status < 300) return res.data;
            else console.log(`Response with status code ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
}
