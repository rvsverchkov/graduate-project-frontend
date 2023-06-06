import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000';
// const API_URL = 'https://rvsverchkov-backend.ru';

class UserService {
    getUserBoard() {
        axios.get(API_URL + '/users/me', { headers: authHeader() })
            .then(response => {
                console.log(response.data)
                return response.data.name;
            })
    }
}

export default new UserService();