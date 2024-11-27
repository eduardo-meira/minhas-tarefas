import BotaoAd from '../../components/Botaoad'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTarefas />
    <BotaoAd />
  </>
)

export default Home
