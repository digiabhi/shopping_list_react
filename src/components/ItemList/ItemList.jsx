import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./ItemList.css";
import React, { useContext } from "react";

import { showError } from "../../utils/showToasts";
import {
  ShoppingItemsContext,
  ShoppingDispatchContext,
} from "../../providers/ShoppingContext";

function ItemList() {
  const shoppingItems = useContext(ShoppingItemsContext);
  const dispatch = useContext(ShoppingDispatchContext);
  return (
    <div className="shopping-items-wrapper">
      {shoppingItems &&
        shoppingItems.map((item) => {
          return (
            <div key={item.id} className="items-list">
              <div
                className="change-quantity add-item"
                onClick={() =>
                  dispatch({ type: "increment_item", itemId: item.id })
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item
                itemName={item.name}
                key={item.id}
                quantity={item.quantity}
              />
              <div
                className="change-quantity remove-item"
                onClick={() => {
                  if (item.quantity == 1)
                    showError(`${item.name} removed from the list`);
                  dispatch({ type: "decrement_item", itemId: item.id });
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(ItemList);
