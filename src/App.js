import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
