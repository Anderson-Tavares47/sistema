import React, { useState } from 'react';
import Cards from './component/cards';
import Sidebar from './component/sidebar';
import styles from "@/styles/dash.module.css";

export default function Dashboard() {
    const [filtroData, setFiltroData] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);

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
    ];

    const handleFiltrarData = () => {
        // Lógica para filtrar por data
    };

    const handleFiltrarStatus = () => {
        // Lógica para filtrar por status
    };

    const handleOutroBotao = () => {
        // Lógica para mostrar o modal
        setMostrarModal(true);
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setMostrarModal(false);
    };

    const enviarDados = () => {
        const tituloElement = document.getElementById('titulo');
        const descricaoElement = document.getElementById('descricao');
        const valorElement = document.getElementById('valor');
        const dataExpiracaoElement = document.getElementById('dataExpiracao');
        const metodoPagamentoElement = document.getElementById('metodoPagamento');

        if (tituloElement && descricaoElement && valorElement && dataExpiracaoElement && metodoPagamentoElement) {
            const titulo = (tituloElement as HTMLInputElement).value;
            const descricao = (descricaoElement as HTMLInputElement).value;
            const valor = (valorElement as HTMLInputElement).value;
            const dataExpiracao = (dataExpiracaoElement as HTMLInputElement).value;
            const metodoPagamento = (metodoPagamentoElement as HTMLSelectElement).value;

            console.log('Dados enviados:');
            console.log('Título:', titulo);
            console.log('Descrição:', descricao);
            console.log('Valor:', valor);
            console.log('Data de Expiração:', dataExpiracao);
            console.log('Método de Pagamento:', metodoPagamento);

            fecharModal();
        } else {
            console.error('Um ou mais elementos não foram encontrados.');
        }
    };

    return (
        <div>
            <Sidebar />
            <Cards />
            <div className={styles.buttons}>
                <button className={styles.btnDefault} onClick={handleFiltrarData}>Filtro Data</button>
                <button className={styles.space} onClick={handleFiltrarStatus} >Status de pagamento</button>
                <div className={styles.button}>
                    <button className={styles.enviarBtn} onClick={handleOutroBotao}>
                        Criar novo link <span className={styles.icone}>+</span>
                    </button>

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
            {mostrarModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.divFechar}>
                            <button className={styles.fecharButton} onClick={fecharModal}>X</button>
                        </div>
                        <h2>Criar Link de Pagamento</h2>
                        <div className={styles.modalDiv}>
                            <input className={styles.modalInput} type="text" id="titulo" placeholder="Título" />
                        </div>
                        <div className={styles.modalDiv}>
                            <textarea className={styles.modalTextArea} id="descricao" placeholder="Descrição" />
                        </div>
                        <div className={styles.modalDiv}>
                            <input className={styles.modalInput} type="text" id="valor" placeholder="Valor" />
                        </div>
                        <div className={styles.modalDiv}>
                            <input className={styles.modalInput} type="date" id="dataExpiracao" />
                        </div>
                        <div className={styles.modalDiv}>
                            <select className={styles.modalInput} id="metodoPagamento">
                                <option value="pendente" defaultChecked>Metodo de pagamento</option>
                                <option value="pago">Pago</option>
                                <option value="cancelado">Cancelado</option>
                            </select>
                        </div>
                        <div className={styles.divEnviar}>
                            <button className={styles.enviarBtn} onClick={enviarDados}>Enviar Dados</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
