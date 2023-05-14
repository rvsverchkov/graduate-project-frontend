import axios from "axios";
import authHeader from "./auth-header";
const API_URL = 'http://localhost:3000';
// const API_URL = 'https://rvsverchkov-backend.ru';

class CoursesService {
    getCourses() {
        return axios
            .get(API_URL + '/courses', {
                headers: authHeader()
            })
            .then(response => {
                return response.data
            })
    }

    getCurrentCourse(id) {
        return axios
            .get(API_URL + '/courses/' + id, {
                headers: authHeader()
            })
            .then(response => {
                return response.data
            })
    }
}

export default new CoursesService();