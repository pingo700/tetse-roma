import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://romapulseiras.com.br/api/produtos');
        if (Array.isArray(response.data)) {
          setProdutos(response.data);
        } else {
          throw new Error('Resposta da API não é um array');
        }
      } catch (err) {
        setError('Erro ao buscar produtos');
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestProdutos;
