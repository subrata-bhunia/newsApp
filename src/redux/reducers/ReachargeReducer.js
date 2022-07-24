import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  token: null,
  isLoading: true,
  error: {},
  fetchOpratorResponse: {},
  fetchContactsResponse: [],
  fetchAllOperatorResponse: [],
  fetchAllCircleResponse: [],
};

const ReachargeReducer = createSlice({
  name: 'Reacharge',
  initialState,
  reducers: {
    // FETCH OPERATORS AND CIRCLE FROM MOBILE NO
    fetchOpratorRequest(state, action) {
      state.status = action.type;
    },
    fetchOpratorSuccess(state, action) {
      state.fetchOpratorResponse = action.payload;
      state.status = action.type;
    },
    fetchOpratorFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    // FETCH CONTACTS FROM PHONE
    fetchContactsRequest(state, action) {
      state.status = action.type;
    },
    fetchContactsSuccess(state, action) {
      state.fetchContactsResponse = action.payload;
      state.status = action.type;
      state.error = '';
    },
    fetchContactsFailure(state, action) {
      state.error = action.payload.error;
      state.status = action.type;
    },

    // FETCH ALL CIRCLES
    fetchAllCircleRequest(state, action) {
      state.status = action.type;
    },
    fetchAllCircleSuccess(state, action) {
      state.fetchAllCircleResponse = action.payload;
      state.status = action.type;
    },
    fetchAllCircleFailure(state, action) {
      state.error = action.payload.error;
      state.status = action.type;
    },

    // FETCH ALL OPERATORS
    fetchAllOperatorRequest(state, action) {
      state.status = action.type;
    },
    fetchAllOperatorSuccess(state, action) {
      state.fetchAllOperatorResponse = action.payload;
      state.status = action.type;
    },
    fetchAllOperatorFailure(state, action) {
      state.error = action.payload.error;
      state.status = action.type;
    },
  },
});

export const {
  fetchOpratorFailure,
  fetchOpratorRequest,
  fetchOpratorSuccess,
  fetchContactsFailure,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchAllOperatorFailure,
  fetchAllOperatorRequest,
  fetchAllOperatorSuccess,
  fetchAllCircleFailure,
  fetchAllCircleRequest,
  fetchAllCircleSuccess,
} = ReachargeReducer.actions;

export default ReachargeReducer.reducer;
