import React from 'react';
import './ItemList.css'; // Para estilos adicionais

const ItemList = ({ itens, removeItem, editItem }) => {
  return (
    <ul className="item-list">
      {itens.map((item, index) => (
        <li key={index}>
          <span className="item-text">{item}</span>
          <div className="item-buttons">
            <button className="edit-button" onClick={() => editItem(index)}>Editar</button>
            <button className="remove-button" onClick={() => removeItem(index)}>Remover</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
