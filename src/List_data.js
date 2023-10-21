import React, { useState } from "react";

function ListCreator() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() === "") {
      return; // Leerzeichen oder leere Eingabe werden ignoriert
    }

    setItems([...items, newItem]); // Hier wird das neue Element hinzugefügt
    setNewItem(""); // Zurücksetzen des Eingabefelds
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Neues Element eingeben"
      />
      <button onClick={handleAddItem}>Hinzufügen</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListCreator;
