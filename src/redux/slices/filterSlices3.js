import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  categoryId: 0,
  sort: {
    name: "по названию (по убыванию)",
    sortProperty: "name",
  },
  priceMin: 0,
  priceMax: 10000,
  searchManufacturer: '',
  checkboxManufacturer: [],
  productCard: [],

};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortName(state, action) {
      state.sort = action.payload;
    },
    setPriceMin(state, action) {
      state.priceMin = +action.payload;
    },
    setPriceMax(state, action) {
      state.priceMax = +action.payload;
    },
    setProductCard(state, action) {
      state.productCard = action.payload;
    },
    setCheckboxManufacturer(state, action) {
      state.checkboxManufacturer = action.payload;
    },
    pushCheckboxManufacturer(state, action) {
      state.checkboxManufacturer.push(action.payload)
    },
    filterCheckboxManufacturer(state, action) {
      state.checkboxManufacturer = state.checkboxManufacturer.filter(item => item !== action.payload)
    },
    addProductCard(state, action) {
      console.log(state.productCard[-1]);
    },
  },
});

export const { setCategoryId, setSortName, setPriceMin, setPriceMax,
  pushCheckboxManufacturer, filterCheckboxManufacturer, setProductCard,
  setCheckboxManufacturer } = filterSlice.actions

export default filterSlice.reducer