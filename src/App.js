import './scss/index.scss';

import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';
import Look from './components/look/Look';
import Download from './components/download/Download';
import Customers from './components/customers/Customers';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
        <Header/>

        <About/>

        <Features/>

        <Look/>

        <Download/>

        <Customers/>


        <Footer/>
    </div>
  );
}

export default App;
