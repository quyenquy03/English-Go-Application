import { CloudPresets } from "@/constants/CloudPreset";
import ENV from "@/constants/environment";
import { IAppResposeBase, IUploadImageResponse } from "@/types/AppType";
import axios from "axios";

const uploadAnImage = async (
  image: File,
  CloudPreset?: CloudPresets
): Promise<IAppResposeBase<IUploadImageResponse>> => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("cloud_name", String(ENV.CLOUD_NAME));
    formData.append("upload_preset", CloudPreset ?? CloudPresets.IMAGE);
    const response = await axios.post(
      `${ENV.CLOUD_BASE_URL}${ENV.CLOUD_NAME}/image/upload`,
      formData
    );
    const data: IAppResposeBase<IUploadImageResponse> = {
      success: true,
      data: response.data,
      status: response.status,
      message: "",
    };
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response.data;
  }
};

export const uploadAnAudio = async (
  audioUri: string, // đây là file local uri
  CloudPreset?: CloudPresets
): Promise<IAppResposeBase<IUploadImageResponse>> => {
  try {
    const formData = new FormData();
    formData.append("file", {
      uri: audioUri,
      type: "audio/m4a", // hoặc audio/mp3 nếu là mp3
      name: "recording.m4a",
    } as any);
    formData.append("upload_preset", CloudPreset ?? CloudPresets.AUDIO);
    formData.append("cloud_name", String(ENV.CLOUD_NAME));

    const response = await axios.post(
      `${ENV.CLOUD_BASE_URL}${ENV.CLOUD_NAME}/video/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const data: IAppResposeBase<IUploadImageResponse> = {
      success: true,
      data: response.data,
      status: response.status,
      message: "",
    };

    return data;
  } catch (error: any) {
    throw error.response?.data ?? error;
  }
};

const deleteAnImage = async (
  url: string
): Promise<IAppResposeBase<IUploadImageResponse>> => {
  try {
    if (!url || !url.trim()) {
      throw new Error("Invalid url");
    }
    const publicId = url.split("/").pop()?.split(".")[0];
    if (!publicId) {
      throw new Error("Invalid url");
    }
    const params = {
      public_id: publicId,
      api_key: ENV.CLOUD_API_KEY,
      api_secret: ENV.CLOUD_API_SECRET,
    };
    const response = await axios.post(
      `${ENV.CLOUD_BASE_URL}${ENV.CLOUD_NAME}/image/destroy`,
      params
    );
    const data: IAppResposeBase<IUploadImageResponse> = {
      success: true,
      data: response.data,
      status: response.status,
      message: "",
    };
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response.data;
  }
};

const uploadService = {
  uploadAnImage,
  uploadAnAudio,
  deleteAnImage,
};
export default uploadService;
