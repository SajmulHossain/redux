import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "123",
      name: "Sajmul",
      email: "sajmul@gmail.com",
    },
  ],
};

const createUser = (userData: IUser) => {
  return { id: nanoid(3), ...userData };
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const user = createUser(action.payload);
      state.users.push(user);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((data) => data.id === action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
