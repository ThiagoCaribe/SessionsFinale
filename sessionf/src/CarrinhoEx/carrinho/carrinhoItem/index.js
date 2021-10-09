import Cookie from 'js-cookie'
import { useState } from 'react';

import Contador from '../cont'
import { Container, RemoverIcon } from './styled'



export default function Citem(props){
    const [produto,setproduto] = useState(props.info);

    function altQtd(qtd){
        setproduto({...produto, qtd});

        // na linha abaixo ele ira chama uma funcão da pag que esta chamando ele 
        props.alterando(produto.id, qtd);

    }
    function remover() {
        props.removendo(produto.id);
      }
    return(
        <Container>
            <div>
                <img className='capa' src={produto.imagem} alt='' />
                <Contador  onChange={altQtd} value={produto.qtd} />
            </div>
            <div className='titulo'>
                {produto.titulo}           
            </div>
            <div className='preco'>
                <span>Preço unitario</span>
                <br />
                {produto.preco}
            </div>
            <div className='qtd'>
            <span>Qtd</span>
                <br />
                {produto.qtd}
            </div>
            <div className='remover' ><RemoverIcon onClick={remover} /></div>
        </Container>
    );
}