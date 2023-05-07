import axios from "axios";
const API_URL = 'http://localhost:3000';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + '/signin', {
                email: user.email,
                password: user.password,
                name: user.name
            })
            .then(response => {
                if (response.data.token) {
                    console.log('123')
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            })
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        console.log(user);
        return axios.post(API_URL + '/signup', {
            email: user.email,
            password: user.password,
            name: user.name
        })
    }
}

export default new AuthService();