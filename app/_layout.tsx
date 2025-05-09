import ScreenWrapper from "@/components/ScreenWrapper";
import ToastCustom from "@/components/ui/Toast";
import { AppDispatch, RootState, store } from "@/stores";
import { authAction } from "@/stores/authStore/authReducer";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as Font from "expo-font";
import { Stack, useRouter } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";

interface GetInfomationProviderProps {
  children: React.ReactNode;
}
const GetInfomationProvider = ({ children }: GetInfomationProviderProps) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const { currentUser, loading, isGetCurrentUserFailed } = useSelector((state: RootState) => state.authStore);
  useEffect(() => {
    const loadUserInformation = async () => {
      dispatch(authAction.getCurrentUser());
    };
    loadUserInformation();
  }, [dispatch]);

  useLayoutEffect(() => {
    if (!loading && currentUser?.id) {
      router.replace("/(tabs)");
    }
    if (isGetCurrentUserFailed) {
      router.replace("/wellcome");
    }
  }, [currentUser?.id, loading, isGetCurrentUserFailed]);
  return children;
};

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Merienda-Black": require("../assets/fonts/Merienda-Black.ttf"),
        "Merienda-Bold": require("../assets/fonts/Merienda-Bold.ttf"),
        "Merienda-ExtraBold": require("../assets/fonts/Merienda-ExtraBold.ttf"),
        "Merienda-Light": require("../assets/fonts/Merienda-Light.ttf"),
        "Merienda-Medium": require("../assets/fonts/Merienda-Medium.ttf"),
        "Merienda-Regular": require("../assets/fonts/Merienda-Regular.ttf"),
        "Merienda-SemiBold": require("../assets/fonts/Merienda-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <GetInfomationProvider>
          <ScreenWrapper bg='#fafafa'>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: "#fafafa",
                },
              }}
            >
              <Stack.Screen name='(tabs)' />
              <Stack.Screen name='index' />
              <Stack.Screen name='exam/participate-exam/index' />
              <Stack.Screen name='wellcome' />
            </Stack>
          </ScreenWrapper>
          <ToastCustom />
        </GetInfomationProvider>
      </Provider>
    </ApplicationProvider>
  );
}
