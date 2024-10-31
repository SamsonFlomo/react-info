//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//mport viteLogo from '/vite.svg'
import './App.css';
import NavBar from './navBar';
import Footer from './footer';
import MainContent from './mainContent';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <Container fluid id="App">
      <NavBar />
      <MainContent />
      <span></span>
      <Footer />
    </Container>
  )
}

export default App
