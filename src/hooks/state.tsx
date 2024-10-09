import { useReducer } from 'react';

export default function useAppState(initialState = {}) {
  const reducer = (prevState: any, action: any) => ({ ...prevState, ...action });
  return useReducer(reducer, initialState);
}
