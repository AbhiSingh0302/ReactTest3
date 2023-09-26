import { useEffect, useState, useContext } from "react";
import Header from "./components/Header";
import MedicalForm from "./components/MedicalForm";
import MedicineList from "./components/MedicineList";
import { CartContextProvider, cartContext } from "./store/CartContext";

function App() {
  const cartCtx = useContext(cartContext);

  const [items,setItems] = useState([]);
  console.log("he");
  
  useEffect(() => {
    console.log("useeffect");
    fetch(`https://crudcrud.com/api/${cartCtx.endPoint}/products`).then(res => res.json())
    .then(data => {
      if(data.length > 0){
        setItems(pre => [...pre,...data]);
      }else{
        throw new Error('No Products');
      }
    })
    .catch(err => {
      alert(err.message);
    })
  },[cartCtx.endPoint])


  const submitHandler = (item) => {
    console.log("hello");
    fetch(`https://crudcrud.com/api/${cartCtx.endPoint}/products`,{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      setItems(prev => [...prev,data]);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <CartContextProvider>
    <Header/>
    <MedicalForm onSubmit={submitHandler}/>
    <MedicineList list={items}/>
    </CartContextProvider>
  );
}

export default App;
