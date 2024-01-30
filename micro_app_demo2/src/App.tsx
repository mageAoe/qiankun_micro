import './App.css'
import { HashRouter, Routes , Route, Navigate} from 'react-router-dom'
import Home from './views/home/index'
import Blog from './views/blog/index'
import About from './views/about/index'

import Main from './layout/main'

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<Main />}>
            {/* <Route index element={<Home />}></Route> */}
            <Route path="" element={ <Navigate to='/micro-app/micro-app-demo2/home' /> } />
            <Route path="/micro-app/micro-app-demo2/home" element={ <Home /> } />
            <Route path='/micro-app/micro-app-demo2/blog' element={<Blog />}></Route>
            <Route path='/micro-app/micro-app-demo2/about' element={<About />}></Route>
          </Route>
        </Routes>
      {/* <IndexRouter/> */}
    </HashRouter>
  )
}

export default App
