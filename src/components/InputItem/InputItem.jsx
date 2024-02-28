import "./InputItem.css";
import { showSuccess } from "../../utils/showToasts.js";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function InputItem({ addItem }) {
  const [itemName, setItemName] = useState("");
  return (
    <div className="item-input-wrapper">
      <input
        className="item-input"
        type="text"
        placeholder="Add an item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        className="add-item-button"
        onClick={() => {
          addItem(itemName);
          setItemName("");
          showSuccess("Successfully added item!");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputItem;
