import { fetchBreedsStart, fetchBreedsSuccess, fetchBreedsFailure, fetchMoreBreedsStart, fetchMoreBreedsSuccess, fetchMoreBreedsFailure } from "../reducers/breedsSlice";
import { Dispatch } from 'redux';
import { TBreed } from '../reducers/types';

export const fetchBreeds = (params: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchBreedsStart());
    const {
      q = '',
      page = 1,
      perPage = 10
    } = params
    try {
      let url = `${process.env.API_HOST}breeds?page=${page}&limit=${perPage}`;
      
      const options = {
        method: 'GET',
        headers: {
          'x-api-key':
           `${process.env.API_TOKEN}`
         },
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch breed.');
      }
      const data: TBreed[] = await response.json();
      dispatch(fetchBreedsSuccess(data));
    } catch (error:any) {
      dispatch(fetchBreedsFailure(error.message));
    }
  };
};

export const fetchMoreBreeds = (params: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchMoreBreedsStart());
    const {
      page,
      perPage = 10
    } = params
    try {
      let url = `${process.env.API_HOST}breeds?page=${params?.page}&limit=${perPage}`;
      const options = {
        method: 'GET',
        headers: {
          'x-api-key':
           `${process.env.API_TOKEN}`
         },
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch breed.');
      }
      const data:TBreed[] = await response.json();
      dispatch(fetchMoreBreedsSuccess(data));
    } catch (error:any) {
      dispatch(fetchMoreBreedsFailure(error.message));
    }
  };
};