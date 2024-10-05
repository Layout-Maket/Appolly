import './scss/index.scss';

import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';
import Look from './components/look/Look';
import Download from './components/download/Download';
import Customers from './components/customers/Customers';
import Footer from './components/footer/Footer';

import AnimatedBlock from './components/animated/AnimatedBlock';



function App() {
  return (
    <div className="App">
        <AnimatedBlock>
            <Header/>
        </AnimatedBlock>

        <AnimatedBlock>
            <About/>
        </AnimatedBlock>


        <AnimatedBlock>
            <Features/>
        </AnimatedBlock>

        <AnimatedBlock>
            <Look/>
        </AnimatedBlock>

        <AnimatedBlock>
            <Download/>
        </AnimatedBlock>
        

        <AnimatedBlock>
            <Customers/>
        </AnimatedBlock>

        
        <AnimatedBlock>
            <Footer/>
        </AnimatedBlock>
        
    </div>
  );
}

export default App;
