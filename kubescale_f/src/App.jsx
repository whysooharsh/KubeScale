import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Deploy from './pages/Deploy'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Support from './pages/Support'

function App() {
  return (
    <>
      <div className="fixed h-screen inset-0 -z-10 w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/deploy' element={<Deploy />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App