
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/?q=bikini&page=1&key=36683079-f7ca8efdb46bf14669a93b6f2&image_type=photo&orientation=horizontal&per_page=10',

})

const getAllPics = () => {
    return instance.get('/')
}

export default getAllPics;