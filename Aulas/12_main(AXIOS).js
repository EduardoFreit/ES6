import axios from 'axios';// importando axios

class Api{ // criando uma classe para trabalhar com requisições assincronas
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            
            console.log(response);
        } catch (err) {
            console.warn('ERRO!');
        }
    }
}

Api.getUserInfo('EduardoFreit');//chamando a função da classe com axios
