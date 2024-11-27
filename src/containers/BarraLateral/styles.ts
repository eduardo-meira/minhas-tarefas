import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eeeeee;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 220px;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
