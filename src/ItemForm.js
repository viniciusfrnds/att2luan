import React, { useState, useEffect } from 'react';
import './ItemForm.css'; // Para estilos adicionais

const ItemForm = ({ addItem, editValue, updateItem, setEditIndex }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (editValue) {
      setInputValue(editValue);
    } else {
      setInputValue('');
    }
  }, [editValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editValue) {
      updateItem(inputValue);
    } else {
      addItem(inputValue);
    }
    setInputValue('');
    setEditIndex(null);
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar/Editar item"
        required
      />
      <button type="submit">{editValue ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default ItemForm;
