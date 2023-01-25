import { createSlice } from "@reduxjs/toolkit";

export type UserDataType = {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
};

type UserListState = {
  userListData: UserDataType[];
}

const initialState = {
  userListData: []
} as UserListState;

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setUserListData(state, action) {
      state.userListData = action.payload.userListData;
    },
  },
});

export const { setUserListData } = userListSlice.actions;
export default userListSlice.reducer;
