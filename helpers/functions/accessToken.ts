import AsyncStorage from "@react-native-async-storage/async-storage";

const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");
    return accessToken ?? undefined;
  } catch (error) {
    console.error("Error getting access token:", error);
    return undefined;
  }
};

const setAccessToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("accessToken", token);
  } catch (error) {
    console.error("Error saving access token:", error);
  }
};

const removeAccessToken = async () => {
  try {
    await AsyncStorage.removeItem("accessToken");
  } catch (error) {
    console.error("Error removing access token:", error);
  }
};

export { getAccessToken, removeAccessToken, setAccessToken };
