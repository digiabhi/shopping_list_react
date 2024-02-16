import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function ItemList({ shoppingItems }) {
  return (
    <>
      <div className="shopping-items-wrapper">
        {shoppingItems &&
          shoppingItems.map((item) => {
            return (
              <div key={item.id}>
                <div className="change-quantity add-item">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <Item
                  itemName={item.name}
                  key={item.id}
                  quantity={item.quantity}
                />
                <div className="change-quantity remove-item">
                  <FontAwesomeIcon icon={faMinus} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ItemList;
