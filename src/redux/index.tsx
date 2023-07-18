import { configureStore } from '@reduxjs/toolkit'
import themeModeReducer from './reducers/themeModeSlice'
import breedReducer from './reducers/breedsSlice'

export const store = configureStore({
  reducer: {
    themeMode : themeModeReducer,
    breeds: breedReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch