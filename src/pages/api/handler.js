const fs = require('fs-extra');
import properties from '@/data/properties.json';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const property = req.body;
    properties.push(property);

    fs.writeFile('src/data/properties.json', JSON.stringify(properties, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Erro ao gravar o arquivo:', err);
        res.status(500).json({ error: 'Erro ao gravar o arquivo' });
      } else {
        console.log('Arquivo JSON atualizado com sucesso!');
        res.status(200).json({ message: 'Arquivo JSON atualizado com sucesso!' });
      }
    });
  } else {
    res.status(404).json({ error: 'Endpoint não encontrado' });
  }
}
