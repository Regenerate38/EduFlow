import icons from './assets/icons.svg'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div className="bg-[url('../assets/background.png')] w-[100vw] bg-cover bg-no-repeat h-[100vh] flex ">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  )
}

export default App
