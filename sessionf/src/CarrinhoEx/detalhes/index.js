import Cookie from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styled'

export default function DetalheProduto(props) {
    // o dados enviado da pagina produto é recebido pela props.states ali ó
    const [produto, setProduto]= useState(props.location.state);
    const navigation = useHistory();
    
    function comprar(){
            /* aqui é simples precisamos  cria uma variavel (o let carrionho) e depois pega os cockies 'carrinho',
             que ainda nao entedi muito bem, o que é, mas depois com um operador ternario verifica se ele é inexistente(acho)
             pq se for terá que ele vai passa o carrinho para um objeto json ou js mas vai passa, se não ele ele ira cria
             uma array vazia  */
            let carrinho = Cookie.get('carrinho');
            carrinho = carrinho !== undefined ? JSON.parse(carrinho) : [];

            /*abaixo com algumas funçoes nova ex .some, esta sera usada para verifica se ja um item semelhante
            ao enviado 
             */
            if(carrinho.some(item => item.id === produto.id) === false)
                carrinho.push({...produto, qtd :1});
            //a funçao acima o push ele adiciona itens a array os reticessias(palavra escrita muito errada), siginifica copiar o que ja ah no objeto
            // a função abaixo .stringify ele converte o carrinho para um json,
            Cookie.set('carrinho', JSON.stringify(carrinho))
            navigation.push('/carrinho'); // so ta chamando a pagina carrinho
    }   

    return(
        <Container>
            <div>
                <Link to='/'> Volta </Link> <br/>
                
                <div><img src={produto.imagem} alt=' '/></div>
                <div><h1>{produto.titulo}</h1></div>
                <div><h3>{produto.preco}</h3> </div>

            </div>
            <div>
                <h2> Descrição </h2>
                <div>{produto.descricao}</div>

                <h2> Especificações </h2>
                <div>{produto.especificacoes}</div>

                <div><button onClick={comprar}>Comprar</button> </div>

            </div>
        </Container>
    );
    
}