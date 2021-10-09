import { useEffect, useState } from 'react'
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;

  & > * {
    margin: .5em;
    background-color: #f5f5f5;
    padding: 0.3em .8em;
    user-select: none;
  }

  .menos {
    border-radius: 100%;
    cursor: pointer;
  }

  .quantidade {
    padding: 0.3em 1em;
  }

  .mais {
    border-radius: 100%;
    cursor: pointer;
  }
`

export default function Cont(props){
    const [qtd, setQtd] = useState(props.value);
    /*analise rapida acima criando um variavel constate, padrao embaixo ele ta chamando função de 
    outra pag tipo a função onChange e é isso*/
    function somaUm() {
        if(qtd >=10)
            return;
        setQtd(qtd+1)
    }
    function tiraUm() {
        if(qtd == 0)
            return;
        setQtd(qtd-1)
    }
    useEffect(()=>{
        props.onChange(qtd);
    },[qtd])
    return(
        <Container >
                <div className="menos" onClick={tiraUm}>
                -
            </div>

            <div className="quantidade">
                {qtd}
            </div>

            <div className="mais" onClick={somaUm}>
                +
            </div>

        </Container>
    );
}