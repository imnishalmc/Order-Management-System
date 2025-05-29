import{BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/homePage"
import SinglePage from "./pages/singlePage"
import EditPage from "./pages/EditPage"
import CreatePage from "./pages/createPage"


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<HomePage/>}  />
    <Route path ='/singlepage/:id' element={<SinglePage/>}/>
    <Route path ='/editpage/:id' element ={<EditPage/>}/>
    <Route path ='/createpage' element ={<CreatePage/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
