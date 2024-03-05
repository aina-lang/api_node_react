import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Add from './views/materiel/Add';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const MySwal = withReactContent(Swal);



  setTimeout(() => {
    setIsLoading(false);
  }, 1000)
  // setTimeout(() => {
  //   MySwal.fire({
  //     title: <p>Hello World</p>,
  //     didOpen: () => {
  //       MySwal.showLoading()
  //     },
  //   }).then(() => {
  //     return MySwal.fire(<p>Shorthand works too</p>)
  //   })
  // }, 700)

  console.log(isLoading);
  return (
    <div className="flex justify-center items-center bg-gray-100">
      {isLoading && <SplashScreen />}
  
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
