import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchAllProducts } from './sanity/productsServices'

function App() {
  
  const [products, setProducts ] = useState([]);

  const getAllproducts =async ()=>{
    const data =  await fetchAllProducts();
    console.log(data);
  };

  useEffect(()=>{
    getAllproducts();
  },[])

  return (
    <>
      <main>
      <h1>Min nettbutikk</h1>
      {products?.map(product => ) (
        <article key={products}>
          <h3>{product.product.name}</h3>
          <img src={product.imageasset.url} alt=

        </article>
      )}
      </main>
      </>
  )
}

export default App
