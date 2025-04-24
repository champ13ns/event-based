import axios from 'axios'
class AdminController {
    async getAllUsers() {
        const users = await axios.get('http://localhost:4001/v1/user/list');
        const usersData = users.data;
        return usersData;
    }
}

export { AdminController }