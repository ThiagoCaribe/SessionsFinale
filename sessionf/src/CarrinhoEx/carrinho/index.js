import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoItem'

export default function Carrinho(){
    const [produto, setProduto] = useState([]);

    useEffect(cCarrinho, []);
    /*explicação rapida embaixo ele vai carrega o arquivo da Cockie e é muito parecido com a pagina detalhes*/
    function cCarrinho(){
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined ? JSON.parse(carrinho) : [];
        setProduto(carrinho);
    }
   
    function altProduto(id, qtd){
        let produtoAlt = produto.filter(item => item.id === id)[0];
        produtoAlt.qtd = qtd;
        // acima a funsão filter ira selecionar o id do item 

        Cookie.set('carrinho', JSON.stringify(produto));
    }
    function rmvProduto(id) {
        let produtoRmv = produto.filter(item => item.id !== id);
        Cookie.set('carrinho', JSON.stringify(produto));
        setProduto([...produtoRmv]);
    }

    return(
        
        <Container>
            <h1>Carrinho </h1>
            <Link to='/'>Volta</Link>

            <div className='itens'>
                {produto.map(item =>
                    <CarrinhoItem key={item.id} 
                    
                      info={item}
                      alterando={altProduto}
                      removendo={rmvProduto} />
                    )}
            </div>

        </Container>
    );
}