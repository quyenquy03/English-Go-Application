import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import { Camera as ExpoCamera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import ExamRoomStyles from "../ExamRoom.style";

const CandidateInfo = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<any | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  if (hasPermission === null) return <Text>Đang kiểm tra quyền camera...</Text>;
  if (hasPermission === false) return <Text>Không có quyền dùng camera.</Text>;

  return (
    <ScrollView contentContainerStyle={ExamRoomStyles.container}>
      {/* Tiêu đề */}
      <View style={ExamRoomStyles.header}>
        <View style={ExamRoomStyles.circle}>
          <Text style={ExamRoomStyles.circleText}>3</Text>
        </View>
        <Text style={ExamRoomStyles.title}>Thông tin thí sinh</Text>
      </View>

      {/* NHIỆM VỤ 2: Design giao diện cho tab thông tin bài thi */}
      {/* Camera hoặc ảnh đã chụp */}
      <View style={ExamRoomStyles.cameraWrapper}>
        {
          photoUri ? (
            <Image source={{ uri: photoUri }} style={ExamRoomStyles.camera} />
          ) : null
          // (
          //   <ExpoCamera
          //     ref={cameraRef}
          //     style={ExamRoomStyles.camera}
          //     type={CameraType.front}
          //     ratio="16:9"
          //   />
          // )
        }
        {!photoUri && (
          <TouchableOpacity
            style={ExamRoomStyles.captureButton}
            onPress={takePhoto}
          >
            <Ionicons name="camera" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>

      {/* Thông tin thí sinh */}
      <View style={ExamRoomStyles.infoBox}>
        <Text style={ExamRoomStyles.row}>
          <Text style={ExamRoomStyles.label}>Họ và tên: </Text>Nguyễn Tạ Quyền
        </Text>
        <Text style={ExamRoomStyles.row}>
          <Text style={ExamRoomStyles.label}>Email: </Text>admin@gmail.com
        </Text>
        <Text style={ExamRoomStyles.row}>
          <Text style={ExamRoomStyles.label}>Tên tài khoản: </Text>admin
        </Text>
        <Text style={ExamRoomStyles.row}>
          <Text style={ExamRoomStyles.label}>Loại tài khoản: </Text>Miễn phí
        </Text>
        <Text style={ExamRoomStyles.row}>
          <Text style={ExamRoomStyles.label}>Mã lượt thi: </Text>EXAMPRO-575632
        </Text>
      </View>
    </ScrollView>
  );
};

export default CandidateInfo;
