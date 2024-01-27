
import axios from 'axios';



const getAllPics = () => {
    return axios.get('https://pixabay.com/api/?q=kiss&page=1&key=36683079-f7ca8efdb46bf14669a93b6f2&image_type=photo&orientation=horizontal&per_page=12')
}

export default getAllPics;