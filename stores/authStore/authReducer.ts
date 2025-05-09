/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccessToken } from "@/helpers/functions/accessToken";
import { ICurrentUser } from "@/types/auth/AuthType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authThunks } from "./authThunks";

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  currentUser: ICurrentUser | null;
  isGetCurrentUserFailed: boolean;
  isSubmitting: boolean;
  isOpenModalFirstUpdate: boolean;
}

const initialState: AuthState = {
  token: getAccessToken()?.toString() || null,
  isAuthenticated: false,
  loading: false,
  error: null,
  currentUser: null,
  isOpenModalFirstUpdate: false,
  isGetCurrentUserFailed: false,
  isSubmitting: false,
};

export const AuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.currentUser = null;
      // deleteCookie("accessToken");
    },
    changeIsOpenModalFirstUpdate: (state, action: PayloadAction<boolean>) => {
      state.isOpenModalFirstUpdate = action.payload;
    },
    changeIsSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authThunks.getCurrentUser.pending, (state) => {
        state.loading = true;
        state.isGetCurrentUserFailed = false;
      })
      .addCase(authThunks.getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.data;
        state.isAuthenticated = true;
        state.isGetCurrentUserFailed = false;
        state.loading = false;
      })
      .addCase(authThunks.getCurrentUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.isGetCurrentUserFailed = true;
        state.loading = false;
      });

    builder
      .addCase(authThunks.firstUpdateProfile.pending, (state) => {
        state.loading = true;
        state.isSubmitting = true;
      })
      .addCase(authThunks.firstUpdateProfile.fulfilled, (state, action) => {
        state.currentUser = action.payload.data;
        state.loading = false;
        state.isOpenModalFirstUpdate = false;
        state.isSubmitting = false;
      })
      .addCase(authThunks.firstUpdateProfile.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.isSubmitting = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const authAction = {
  ...AuthSlice.actions,
  ...authThunks,
};

export default AuthSlice.reducer;
