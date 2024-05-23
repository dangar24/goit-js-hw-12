 const options = {
    key: '43845947-8a1e30f8a3261d274f42ac52c',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
};

const BASE_URL = 'https://pixabay.com/api/';


export const fetchPick = (value) => {
    let params = `?key=${options.key}&q=${value}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}`
        return fetch(`${BASE_URL}${params}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Запит виконався з помилкою")
                };
                return response.json();
            })
    };