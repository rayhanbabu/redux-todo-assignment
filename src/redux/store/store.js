import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from '../slice/CounterSlice';
import TodoSlice from '../slice/TodoSlice';

export default configureStore({
     reducer: {
        counter: CounterSlice,
        todo: TodoSlice,
      },
  })