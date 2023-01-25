import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setUserListData } from '../features/UserList/UserListSlice';
import { mockUserList } from './mockData';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchUserListAndSave = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    setTimeout(() => {
      dispatch(setUserListData({ userListData: mockUserList }))
    }, 200)
  }, [])
}
