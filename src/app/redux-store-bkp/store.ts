import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { kondosReducer } from './reducers/kondo/kondos.reducer';

const store = configureStore({
    reducer: {
      kondos: kondosReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
  })

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/*
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = typeof store.dispatch;
export type TypedThunk<R = void> = ThunkAction<R, ReduxState, unknown, Action>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
*/