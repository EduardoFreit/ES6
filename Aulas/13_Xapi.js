import axios from 'axios'; //importando biblioteca axios

const api = axios.create({ //criando um axiosBase (no caso api do gitHub)
    baseURL: 'https://api.github.com',
});

export default api; //exportando a função 'api' como default(só pode haver 1 no arquivo)