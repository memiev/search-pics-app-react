import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GHej13Ce9VTM0etV7QnVMa5qzKpVzDvSX-T52lZnONs'
    }
});