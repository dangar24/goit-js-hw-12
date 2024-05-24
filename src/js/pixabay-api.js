import axios from "axios";

const options = {
    key: '43845947-8a1e30f8a3261d274f42ac52c',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: 1,
};

const BASE_URL = 'https://pixabay.com/api/';


export const fetchPick = async (value, pages) => {
    let params = `?key=${options.key}&q=${value}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&per_page=${options.per_page}&page=${pages}`
    const response = await axios.get(`${BASE_URL}${params}`);
    return response;
};