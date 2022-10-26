import React from 'react';
import '../styles/MenuLateral.css';

function MenuLateral(){

    let controlador = 0;
    const abreFecha = (opcoes) => {
        if (controlador === 0){
            document.getElementById(opcoes).style.height='10vh';
            controlador = 1;
        }
        else{
            document.getElementById(opcoes).style.height='0';
            controlador = 0;
        }
    } 
    return (
        <>
        <div className="menu">
            <p onClick={()=>abreFecha('opc1')}>Meu perfil</p>
            <div id='opc1'>
                <ul>
                    <li>Minhas informações</li>
                    <li>Meus Contatos - Pix</li>
                </ul>
                </div>
            <p onClick={()=>abreFecha('opc2')}>Extrato</p>
            <div id='opc2'>
                <ul>
                    <li>Meu Extrato Atual</li>
                    <li>Extratos Passados</li>
                </ul>
            </div>
            <p onClick={()=>abreFecha('opc3')}>Empréstimos</p>
            <div id='opc3'>
                <ul>
                    <li>Fazer um novo Empréstimo</li>
                    <li>Pagamento Empréstimos</li>
                </ul>
            </div>
            <p onClick={()=>abreFecha('opc4')}>Transações</p>
            <div id='opc4'>
                <ul>
                    <li>Fazer uma nova Transação</li>    
                    <li>Visualizar Transações Passadas</li>    
                </ul>    
            </div>
            <p onClick={()=>abreFecha('opc5')}>Cartões</p>
            <div id='opc5'>
                <ul>
                    <li>Visualizar Meus Cartões</li>
                    <li>Novo Cartão</li>
                </ul>
            </div>
            <p onClick={()=>abreFecha('opc6')}>Minhas faturas</p>
            <div id='opc6'>
                <ul>
                    <li>Pagar Fatura</li>
                    <li>Visualizar Minhas Faturas</li>
                </ul>
            </div>
        </div>
        </>
    )

}
export default MenuLateral;