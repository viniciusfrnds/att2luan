import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import './App.css'; // Para estilos adicionais

const App = () => {
  const [itens, setItens] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addItem = (item) => {
    setItens([...itens, item]);
  };

  const removeItem = (index) => {
    const newItems = itens.filter((_, i) => i !== index);
    setItens(newItems);
  };

  const editItem = (index) => {
    setEditIndex(index);
    setEditValue(itens[index]);
  };

  const updateItem = (newValue) => {
    const updatedItems = itens.map((item, index) => (index === editIndex ? newValue : item));
    setItens(updatedItems);
    setEditIndex(null);
    setEditValue('');
  };

  const sendItems = () => {
    alert(`Itens enviados: ${itens.join(', ')}`);
  };

  return (
    <div className="container">
      <h1>Gerenciador de Conta</h1>
      <ItemForm 
        addItem={addItem} 
        editValue={editValue} 
        updateItem={updateItem} 
        setEditIndex={setEditIndex}
      />
      <ItemList 
        itens={itens} 
        removeItem={removeItem} 
        editItem={editItem} 
      />
      <button className="send-button" onClick={sendItems} disabled={itens.length === 0}>
        Enviar Itens
      </button>
    </div>
  );
};

export default App;
