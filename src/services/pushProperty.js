'use client'
import axios from 'axios';

const pushProperty = async (property) => {
  try {
    const response = await axios.post('/api/handler', property);
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao enviar propriedade:', error);
  }
};

export default pushProperty;
