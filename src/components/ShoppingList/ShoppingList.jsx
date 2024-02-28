import "./ShoppingList.css";
import "react-toastify/dist/ReactToastify.css";

// Context Import
import {
  ShoppingItemsContext,
  ShoppingDispatchContext,
} from "../../providers/ShoppingContext";

//Components Import
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from "react-toastify";
import { useReducer } from "react";

// reducer import
import ItemReducer from "../../reducers/itemReducer";

function ShoppingList() {
  // const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingItems, dispatch] = useReducer(ItemReducer, []);

  return (
    <>
      <ShoppingItemsContext.Provider value={shoppingItems}>
        <ShoppingDispatchContext.Provider value={dispatch}>
          <Header />
          <ToastContainer />
          <div className="current-shopping-list">
            <InputItem />
            <ItemList />
          </div>
        </ShoppingDispatchContext.Provider>
      </ShoppingItemsContext.Provider>
    </>
  );
}

export default ShoppingList;
