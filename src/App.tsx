import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;