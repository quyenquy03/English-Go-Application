import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import HeaderStyles from "./Header.style";
interface ITimeCountdownProps {
  initTime?: number;
  handleSubmit: () => void;
  key?: string;
}
const TimeCountdown = ({ initTime, handleSubmit, key }: ITimeCountdownProps) => {
  const [timeCountDown, setTimeCountDown] = useState(initTime);

  useEffect(() => {
    setTimeCountDown(initTime);
  }, [initTime, key]);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (timeCountDown) {
        setTimeCountDown(timeCountDown - 1);
      }
    }, 1000);
    if (timeCountDown == 0) {
      // Call api to submit skill
      handleSubmit();
      clearInterval(interval);
      return;
    }

    return () => clearTimeout(interval);
  }, [handleSubmit, timeCountDown]);
  return (
    <View style={HeaderStyles.timeCountdownBox}>
      <View style={HeaderStyles.minuteBox}>
        <Text style={HeaderStyles.timeText}>
          {timeCountDown && Math.floor(timeCountDown / 60) >= 0 ? `0${Math.floor(timeCountDown / 60)}`.slice(-2) : "00"}
        </Text>
      </View>
      <View style={HeaderStyles.spaceBox}>
        <Text style={HeaderStyles.timeText}>:</Text>
      </View>
      <View style={HeaderStyles.secondBox}>
        <Text style={HeaderStyles.timeText}>
          {timeCountDown && timeCountDown % 60 >= 0 ? `0${timeCountDown % 60}`.slice(-2) : "00"}
        </Text>
      </View>
    </View>
  );
};
export default TimeCountdown;
