import React, { useState } from 'react';
import Cards from './component/cards';
import Sidebar from './component/sidebar';
import styles from "@/styles/dash.module.css";

export default function Dashboard() {
  const [filtroData, setFiltroData] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');

  // Exemplo de dados da tabela
  const dadosTabela = [
    {
      descricao: 'Item 1',
      status: 'Pendente',
      dataPagamento: '01/03/2024',
      dataExpiracao: '10/03/2024',
      valor: '$100.00'
    },
    {
      descricao: 'Item 2',
      status: 'Pago',
      dataPagamento: '05/03/2024',
      dataExpiracao: '15/03/2024',
      valor: '$150.00'
    },
    // Adicione mais objetos de dados conforme necessário
  ];

  const handleFiltrarData = () => {
    // Lógica para filtrar por data
  };

  const handleFiltrarStatus = () => {
    // Lógica para filtrar por status
  };

  const handleOutroBotao = () => {
    // Lógica para o outro botão
  };

  return (
    <div>
      <Sidebar />
        <Cards />
        <div className={styles.buttons}>
          <button onClick={handleFiltrarData}>Filtrar por Data</button>
          <button onClick={handleFiltrarStatus}>Filtrar por Status</button>
        <div className={styles.button}>
        <button onClick={handleOutroBotao}>Outro Botão</button>
        </div>
        </div>
        <div className={styles.container}>
        <table className={styles.centralizado}>
          <thead>
            <tr>
              <th className={styles.th}>Descrição</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Data de Pagamento</th>
              <th className={styles.th}>Data de Expiração</th>
              <th className={styles.th}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {dadosTabela.map((item, index) => (
              <tr key={index}>
                <td className={styles.td}>{item.descricao}</td>
                <td className={styles.td}>{item.status}</td>
                <td className={styles.td}>{item.dataPagamento}</td>
                <td className={styles.td}>{item.dataExpiracao}</td>
                <td className={styles.td}>{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
