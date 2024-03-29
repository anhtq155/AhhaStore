import { useEffect, useState } from "react"
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => 
  {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct()
  {
      setProducts(prevState => [...prevState,
        {
          id: prevState.length + 101,
          name: 'product' + (prevState.length + 1), 
          price: prevState.length * 100 + 100,
          brand: 'some brand',
          description: 'some des',
          pictureUrl: 'http://picsum.photos/200'
        }])
  }
  return (
    <>
      <div className="app">
        <h1>A-H-Store</h1>
        <Catalog products = {products}/>
        <button onClick={addProduct}> Add product </button>
      </div>
      
    </>
  )
}

export default App
