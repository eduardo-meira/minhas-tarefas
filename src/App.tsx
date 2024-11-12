import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/LsitaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal>
        <Container>
          <BarraLateral />
          <ListaDeTarefas />
        </Container>
      </EstiloGlobal>
    </>
  )
}

export default App
