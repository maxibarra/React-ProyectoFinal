import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner';



function App(){
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailConteiner/>
    </div>
  );
}

export default App;
