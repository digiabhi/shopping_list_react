import "./InputItem.css";
import { showError, showSuccess } from "../../utils/showToasts.js";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";

// Context Import
import { ShoppingDispatchContext } from "../../providers/ShoppingContext.js";

function InputItem() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useContext(ShoppingDispatchContext);

  const handleFormSubmission = (data) => {
    dispatch({
      type: "add_item",
      itemName: data.item,
    });
    showSuccess("Successfully added item!");
  };
  // useEffect(() => {
  //   if (errors.item && errors.item.type == "required") {
  //     showError("Item Cannot be Empty");
  //   }
  //   if (errors.item && errors.item.type == "minLength") {
  //     showError("Item Cannot be less than 3 length");
  //   }
  // }, [errors.item && errors.item.type]);
  return (
    <div className="item-input-wrapper">
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <input
          className="item-input"
          type="text"
          placeholder="Add an item..."
          name="item"
          {...register("item", { required: true, minLength: 3 })}
        />
        <button className="add-item-button">Add</button>
      </form>
      <div>
        {errors.item && errors.item.type == "required" && (
          <p>Item is missing</p>
        )}
        {errors.item && errors.item.type == "minLength" && (
          <p>Item name cannot be less than 3</p>
        )}
      </div>
    </div>
  );
}

export default InputItem;
