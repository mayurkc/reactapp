import './App.css';
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/learn' element={<h1>Learnpage</h1>}/>
      <Route path='/reference' element={<h1>Refencepage</h1>}/>
      <Route path='/community' element={<h1>Communitypage</h1>}/>
      <Route path='/ourcommunity' element={<h1>OurCommunitypage</h1>}/>
      <Route path='/mycommunity' element={<h1>MyCommunitypage</h1>}/>

      <Route path='/blog' element={<h1>Blogpage</h1>}/>
      <Route path='/git' element={<h1>gitpage</h1>}/>
      <Route path='/github' element={<h1>githubpage</h1>}/>
      <Route path='/register' element={<h1>Registerpage</h1>}/>





    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
