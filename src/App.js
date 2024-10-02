import './scss/index.scss';

import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';


function App() {
  return (
    <div className="App">
        <Header/>

        <About/>

        <Features/>
    </div>
  );
}

export default App;
