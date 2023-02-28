import actionTypes from "../../constants/actionTypes";
import { isEmptyObject, parseToInt, sumTotalArray } from "../../utils/utils";

const initialState = {
  TotalAmount: 0,
  TotalItem: 0,
  ListItem: [],
};

function cartReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case actionTypes.ORDER_SAVE_CART: {
      const { listItem = [] } = action.response;
      const totalAmount = sumTotalArray(listItem, "TotalPrice");
      const totalItem = sumTotalArray(listItem, "Quantity");
      return {
        ...state,
        TotalAmount: totalAmount,
        TotalItem: totalItem,
        ListItem: listItem,
      };
    }
    case actionTypes.ORDER_REMOVE_ITEM_CART: {
      const { item } = action.response;
      let listItem = state.ListItem || [];
      listItem = listItem.filter(
        (m) => m.ProductId != item.ProductId
      );
      const totalAmount = sumTotalArray(listItem, "TotalPrice");
      const totalItem = sumTotalArray(listItem, "Quantity");
      return {
        ...state,
        TotalAmount: totalAmount,
        TotalItem: totalItem,
        ListItem: listItem,
      };
    }
    case actionTypes.ORDER_CHANGE_QUALITY_CART: {
      const { item } = action.response;
      let listItem = state.ListItem || [];

      if (item.Quantity <= 0) {
        listItem = listItem.filter((m) => m.ProductId != item.ProductId);
      } else {
        listItem = listItem.map((m) => {
          if (m.ProductId == item.ProductId) {
            return {
              ProductId: m.ProductId,
              ProductName: m.ProductName,
              ProductUrl: m.ProductUrl,
              Quantity: item.Quantity,
              ProductPrice: m.ProductPrice,
              ProductImage: m.ProductImage,
              TotalPrice: parseToInt(m.ProductPrice * item.Quantity),
            };
          } else {
            return m;
          }
        });
      }
      const totalAmount = sumTotalArray(listItem, "TotalPrice");
      const totalItem = sumTotalArray(listItem, "Quantity");
      return {
        ...state,
        TotalAmount: totalAmount,
        TotalItem: totalItem,
        ListItem: listItem,
      };
    }
    case actionTypes.ORDER_ADD_TO_CART: {
      let { item } = action.response;
      let listItem = state.ListItem || [];
      item.Quantity = item.Quantity || 1;
      
      const itemExist = listItem.find((m) => m.ProductId == item.ProductId);
      if (!isEmptyObject(itemExist)) {
        listItem = listItem.map((m) => {
          if (m.ProductId == item.ProductId) {
            var quantity = m.Quantity + item.Quantity;
            return {
              ProductId: m.ProductId,
              ProductName: m.ProductName,
              ProductUrl: m.ProductUrl,
              Quantity: quantity,
              ProductPrice: m.ProductPrice,
              ProductImage: m.ProductImage,
              TotalPrice: parseToInt(m.ProductPrice * quantity),
            };
          }
          return m;
        });
      } else {
        //Thêm mới
        listItem = [
          ...listItem,
          {
            ProductId: item.ProductId,
            ProductName: item.ProductName,
            ProductUrl: item.ProductUrl,
            Quantity: item.Quantity,
            ProductPrice: item.ProductPrice,
            ProductImage: item.ProductImage,
            TotalPrice: parseToInt(item.ProductPrice * item.Quantity),
          },
        ];
      }

      const totalAmount = sumTotalArray(listItem, "TotalPrice");
      const totalItem = sumTotalArray(listItem, "Quantity");
      return {
        ...state,
        TotalAmount: totalAmount,
        TotalItem: totalItem,
        ListItem: listItem,
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
