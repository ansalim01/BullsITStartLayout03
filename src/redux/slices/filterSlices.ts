import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Sort = {
  name: string;
  sortProperty: string;
};

type InitialState = {
  categoryId: number;
  sort: Sort;
  priceMin: number;
  priceMax: number;
  typeCareActive: any[];
  checkboxManufacturer: any[];
  productCard: any[];
  isLoading: boolean;
  activeSettings: number;
  typeActiveSettings: any[];
};

const initialState: InitialState = {
  categoryId: 0,
  sort: {
    name: "по названию (по убыванию)",
    sortProperty: "name",
  },
  priceMin: 0,
  priceMax: 10000,
  typeCareActive: [0],

  checkboxManufacturer: [],
  productCard: [],
  isLoading: true,
  //
  activeSettings: -1,
  typeActiveSettings: [0],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortName(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setPriceMin(state, action: PayloadAction<number>) {
      state.priceMin = +action.payload;
    },
    setPriceMax(state, action: PayloadAction<number>) {
      state.priceMax = +action.payload;
    },
    setProductCard(state, action: PayloadAction<any>) {
      state.productCard = action.payload;
    },
    setCheckboxManufacturer(state, action: PayloadAction<any>) {
      state.checkboxManufacturer = action.payload;
    },
    pushCheckboxManufacturer(state, action: PayloadAction<any>) {
      state.checkboxManufacturer.push(action.payload);
    },
    filterCheckboxManufacturer(state, action: PayloadAction<any>) {
      state.checkboxManufacturer = state.checkboxManufacturer.filter(
        (item) => item !== action.payload
      );
    },
    pushTypeCareActive(state, action: PayloadAction<any>) {
      if (state.typeCareActive.includes(Number(action.payload))) {
        state.typeCareActive = state.typeCareActive.filter(
          (i: Number) => i !== action.payload
        );
      } else {
        state.typeCareActive.push(Number(action.payload));
      }
    },
    setTypeCareActive(state, action: PayloadAction<any>) {
      state.typeCareActive = action.payload;
    },

    addProductCard(state, action: PayloadAction<any>) {
      const a = action.payload;
      a.id = state.productCard[state.productCard.length - 1].id + 1;
      a.barcode = state.productCard[state.productCard.length - 1].id + 1;
      a.typeCare = state.typeCareActive;
      state.productCard.push(a);
    },
    removeProductCard(state, action: PayloadAction<number>) {
      state.productCard = state.productCard.filter(
        (i: any) => i.id !== action.payload
      );
      // productCard
    },
    setActiveSettings(state, action: PayloadAction<number>) {
      state.activeSettings = action.payload;
    },
    pushTypeActiveSettings(state, action: PayloadAction<any>) {
      if (state.typeActiveSettings.includes(Number(action.payload))) {
        state.typeActiveSettings = state.typeActiveSettings.filter(
          (i: Number) => i !== action.payload
        );
      } else {
        state.typeActiveSettings.push(Number(action.payload));
      }
    },
    setTypeActiveSettings(state, action: PayloadAction<any>) {
      state.typeActiveSettings = action.payload;
    },
    settingsProductCard(state, action: PayloadAction<any>) {
      const product = state.productCard.map((item: any, index: number) => {
        if (item.id !== action.payload.id) return;
        state.productCard[index] = {
          ...action.payload,
          typeCare: state.typeActiveSettings,
        };
      });
      // state.productCard = [...state.productCard, product];
    },
  },
});

export const {
  setCategoryId,
  setSortName,
  setPriceMin,
  setPriceMax,
  pushCheckboxManufacturer,
  filterCheckboxManufacturer,
  setProductCard,
  setCheckboxManufacturer,
  addProductCard,
  pushTypeCareActive,
  setTypeCareActive,
  removeProductCard,
  setActiveSettings,
  setTypeActiveSettings,
  pushTypeActiveSettings,
  settingsProductCard,
} = filterSlice.actions;

export default filterSlice.reducer;
