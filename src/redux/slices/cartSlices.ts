import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  totalPrice: number;
  itemsCount: number;
  items: any;
};

const initialState: InitialState = {
  totalPrice: 0,
  itemsCount: 0,
  items: [],
};

export const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem(state, action) {
    //     state.items.push(action.payload);
    //     state.totalPrice = state.totalPrice + action.payload.price
    // },
    addItem(state, action: PayloadAction<any>) {
      const findItem = state.items.find(
        (obj: any) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.itemsCount += 1;
      state.totalPrice += action.payload.price;
    },
    reduceItem(state, action: PayloadAction<number>) {
      state.items.forEach((item: any) => {
        if (item.id === action.payload) {
          state.itemsCount -= 1;
          state.totalPrice -= item.price;
          item.count -= 1;
        }
      });
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items.forEach((item: any) => {
        if (item.id === action.payload) {
          state.itemsCount -= item.count;
          state.totalPrice -= item.count * item.price;
        }
      });
      state.items = state.items.filter((obj: any) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
      state.itemsCount = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, reduceItem } =
  cartSlices.actions;

export default cartSlices.reducer;
