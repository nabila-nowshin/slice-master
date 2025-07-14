import { pizzas, type Pizza } from "../data/pizzas";


const PizzaList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {pizzas.map((pizza: Pizza) => (
        <div
          key={pizza.id}
          className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="text-lg font-semibold">{pizza.name}</h3>
          <p className="text-gray-600">${pizza.price.toFixed(2)}</p>
          <button
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            onClick={() => alert(`Add ${pizza.name} to cart (coming soon!)`)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;