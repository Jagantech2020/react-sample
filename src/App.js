import './App.css';
import Header from './components/header/header'
import Container from './components/container/container'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="container-fluid bg-light">
       <Header></Header>
       <Container></Container>
       <Footer></Footer>
    </div>
  
  );
}

export default App;
