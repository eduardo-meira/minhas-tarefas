import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 0 auto;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  @media only screen and (max-width: 768px) {
    margin: 220px auto 40px auto;
    height: calc(100vh - 200px);
    width: 100%;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #666666;
  border: #666666 2px solid;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
