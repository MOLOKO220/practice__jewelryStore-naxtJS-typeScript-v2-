import { createSlice } from "@reduxjs/toolkit";

interface storeType {
  basket: any[];
}

const initialState: storeType = {
  basket: [],
};

const mainReducer = createSlice({
  name: "save date",
  initialState,
  reducers: {
    addToCart(state, action) {
      //проверяем есть ли уже такой товар в корзине
      let t = false;
      state.basket.map((e) => {
        if (e.id === action.payload.id) {
          t = true;
        }
      });

      if (t) {
        state.basket.map((e) => {
          if (e.id === action.payload.id) {
            e.number = e.number + 1;
          }
        });
      } else {
        let item = { number: 0 };
        Object.assign(item, action.payload);
        item.number = 1;
        state.basket = [...state.basket, item];
      }
    },

    incrementReducer(state, action) {
      // увеличиваем количество товара
      state.basket.map((e) => {
        if (e.id == action.payload) {
          e.number = e.number + 1;
        }
      });
    },

    decrementReducer(state, action) {
      // уменьшаем на 1 или удалить товар из корзины
      state.basket.map((e) => {
        if (e.id == action.payload) {
          e.number = e.number - 1;
          if (e.number == 0) {
            state.basket = state.basket.filter((el) => {
              if (el.id != action.payload) {
                return el;
              }
            });
          }
        }
      });
    },
  },
});

export const { addToCart, incrementReducer, decrementReducer } =
  mainReducer.actions;

export default mainReducer.reducer;
