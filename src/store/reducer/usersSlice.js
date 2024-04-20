import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import ApiRequest from '../../Services/ApiRequest';

const initialState = {
  loading: false,
  users: {},
}
// First, define the reducer and action creators via `createSlice`
export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    usersLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      state.loading = true;
    },
    usersLoadingEnd(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      state.loading = false;
    },
    usersReceived(state, action) {
      state.users = action.payload;
    },
    userLogout(state) {
      state.loading = initialState.loading;
      state.users = initialState.users;
    },
  },
});

// // Action creators are generated for each case reducer function
// Destructure and export the plain action creators
export const {
  usersLoading,
  usersReceived,
  userLogout,
  usersLoadingEnd,
} = usersSlice.actions;

// Define a thunk that dispatches those action creators
export const fetchUsers = () => async dispatch => {
  const user_id = await AsyncStorage.getItem('user_id');
  dispatch(usersLoading())
  if (user_id) {
    try {
      const response = await ApiRequest({ type: "get_data", table_name: 'companies', id: user_id });
      dispatch(usersReceived(response.data.data[0]));
    } catch (error) { } finally { dispatch(usersLoadingEnd()) }
  }
};