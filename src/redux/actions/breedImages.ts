import { fetchBreedImagesStart, fetchBreedImagesSuccess, fetchBreedImagesFailure } from '../reducers/breedImagesSlice';
import { TBreedImage } from '../reducers/types';
import { Dispatch } from 'redux';

export const fetchBreedImages = (params: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchBreedImagesStart());
    const {
      id = '',
      page = 1,
      perPage = 10
    } = params
    try {
      let url = `${process.env.API_HOST}images/search?breed_ids=${id}`;
      
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
      const data: TBreedImage[] = await response.json();
      dispatch(fetchBreedImagesSuccess(data));
    } catch (error:any) {
      dispatch(fetchBreedImagesFailure(error.message));
    }
  };
};