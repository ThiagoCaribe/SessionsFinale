import { Link } from 'react-router-dom'
import { Container } from './styled'


export default function Produto(props){
    return(
        /* Os dados enviado pela pagina home foi utilizado para  criar os objeto abaixo*/   
        <Container>
            
            <img className="capa" src={props.info.imagem} alt='' />
            <div className='titulo'>{props.info.titulo}</div>
            <div className='preco'>{props.info.preco}</div>
            
            <Link to={{
                /* acima esta pagina tambem irá enviar dados(o state ali ó) para pagina detalhes, indentificada no pathname */
                pathname: '/detalhe',
            /* aqui ó -->*/    state:props.info
            }}><button> Ao detalhes </button></Link>

        </Container>
    );
}