import { useState } from "react";
import Header from "./components/Header";
import MedicalForm from "./components/MedicalForm";
import MedicineList from "./components/MedicineList";

function App() {
  const [items,setItems] = useState([]);

  const submitHandler = (item) => {
    setItems(pre => [...pre,item])
  }
  
  return (
    <>
    <Header/>
    <MedicalForm onSubmit={submitHandler}/>
    <MedicineList list={items}/>
    </>
  );
}

export default App;
