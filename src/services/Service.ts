import axios from 'axios';

// Conexão Front X Back
const  api = axios.create({
    baseURL: "https://blog-pessoal-64gy.onrender.com/"
}); 

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }