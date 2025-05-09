import http from "@/configs/customAxios";
import { IAppResposeBase } from "@/types/AppType";
import { IGroupRole } from "@/types/groupRole/GroupRoleType";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllGroupRoles = createAsyncThunk(
  "auth/getAllGroupRoles",
  async (_, { rejectWithValue }): Promise<IAppResposeBase<IGroupRole[] | null>> => {
    try {
      const groupRoles: IAppResposeBase<IGroupRole[]> = await http.get("/api/auth/get-group-roles");
      console.log("Response from getAllGroupRoles", groupRoles);
      return groupRoles;
    } catch (error: any) {
      console.log("Error from getAllGroupRoles", error);
      return rejectWithValue(error.response.data) as any;
    }
  }
);
export const appThunks = {
  getAllGroupRoles,
};

export default appThunks;
