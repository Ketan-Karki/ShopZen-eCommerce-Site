const wishReducer = (state, action) => {
  if (action.type === "ADD_TO_WISH") {
    var curElem = action.payload;
    console.log("curElem", curElem);
    let wishProduct;
    wishProduct = {
      id: curElem?.id,
      name: curElem?.name,
      image: curElem?.image,
    };
    return {
      ...state,
      wish: [...state.wish, wishProduct],
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedWish = state.wish.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      wish: updatedWish,
    };
  }
};

export default wishReducer;
