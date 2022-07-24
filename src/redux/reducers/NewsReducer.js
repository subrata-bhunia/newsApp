import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  error: {},
  allNewsResponse: [],
  allHeadlineNewsResponse: [],
  allSourceResponse: [],
  status: '',
  isLoading: true,
};

const NewsReducer = createSlice({
  name: 'NewsReducer',
  initialState,
  reducers: {
    //  ALL NEWS REDUCER
    fetchAllNewsRequest(state, action) {
      state.status = action.type;
    },
    fetchAllNewsSuccess(state, action) {
      state.status = action.type;
      state.allNewsResponse = action.payload;
    },
    fetchAllNewsFailure(state, action) {
      state.status = action.type;
      state.error = action.payload;
    },
    //  ALL HEADLINE NEWS REDUCER
    fetchAllHeadlineNewsRequest(state, action) {
      state.status = action.type;
    },
    fetchAllHeadlineNewsSuccess(state, action) {
      state.status = action.type;
      state.allHeadlineNewsResponse = action.payload;
    },
    fetchAllHeadlineNewsFailure(state, action) {
      state.status = action.type;
      state.error = action.payload;
    },
    //  ALL SOURCE REDUCER
    allSourcesRequest(state, action) {
      state.status = action.type;
    },
    allSourcesSuccess(state, action) {
      state.status = action.type;
      state.allSourceResponse = action.payload;
    },
    allSourcesFailure(state, action) {
      state.status = action.type;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllNewsFailure,
  fetchAllNewsRequest,
  fetchAllNewsSuccess,
  allSourcesFailure,
  allSourcesRequest,
  allSourcesSuccess,
  fetchAllHeadlineNewsFailure,
  fetchAllHeadlineNewsRequest,
  fetchAllHeadlineNewsSuccess,
} = NewsReducer.actions;

export default NewsReducer.reducer;
