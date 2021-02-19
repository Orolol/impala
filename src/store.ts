
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listBookReducer from './Components/ListBookStore';

export const store = configureStore({
  reducer: {
    listBook: listBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;