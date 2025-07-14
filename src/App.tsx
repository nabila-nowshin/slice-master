import './app.css';
import Cart from './Components/Cart';
import PizzaList from './Components/PizzaList';
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">SliceMaster Pizza Shop</h1>
      <PizzaList />
      <Cart></Cart>
    </div>
  )
}

export default App
