import { ADD_COUNT, REDUCE_COUNT } from '../constants';
import { Dispatch } from 'redux'
// import MyTypes from 'MyTypes';

const addCount = (count: number = 0) => {
  return {
    type: ADD_COUNT,
    count
  }
}
const reduceCount = (count: number = 0) => {
  return (dispatch: Dispatch) => {
    return {
      type: REDUCE_COUNT,
      count
    }
  }
}

export default {
  addCount,
  reduceCount
}