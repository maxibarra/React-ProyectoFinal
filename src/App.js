import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/ItemListConteiner'
import ItemCount from './components/ItemCount'


function App(){
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting="Bienvenido a mi Web con react"/>
    </div>
  );
}

export default App;
