import http from "@/configs/customAxios";
import { IAppResposeBase } from "@/types/AppType";
import { ILoginRequestData, ILoginResponseData } from "@/types/auth/LoginType";
import { IRegisterRequestData, IRegisterResponseData } from "@/types/auth/RegisterType";

const login = async (loginData: ILoginRequestData): Promise<IAppResposeBase<ILoginResponseData>> => {
  try {
    const response: IAppResposeBase<ILoginResponseData> = await http.post("/api/auth/login", loginData);
    console.log("response", response);
    return response;
  } catch (error: any) {
    console.log("error", error);
    throw error;
  }
};
const register = async (registerData: IRegisterRequestData): Promise<IAppResposeBase<IRegisterResponseData>> => {
  try {
    const response: IAppResposeBase<IRegisterResponseData> = await http.post("/api/auth/register", registerData);
    return response;
  } catch (error: any) {
    throw error.response.data;
  }
};

const authService = {
  login,
  register,
};
export default authService;
