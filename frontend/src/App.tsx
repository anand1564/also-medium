
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Blogs from './pages/blogs'
import UploadBlogs from './pages/UploadBlogs'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin />}/>
    <Route path='/blogs/:id' element={<Blogs/>}/>
    <Route path='/blogs/create' element={<UploadBlogs />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
