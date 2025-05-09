import HeaderTextBox from "@/components/ui/HeaderTextBox";
import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ListPackageStyles from "./ListPackage.style";
const ListPackage = () => {
  const listPackageDetail = [
    {
      id: 1,
      title: "Gói đề thi VIP",
      description: [
        "Làm bài thi theo định dạng đề thi thật",
        "Ngân hàng đề thi phong phú, cập nhật liên tục",
        "Xem đáp án và lời giải chi tiết",
        "Tham gia thi thử với số lần không giới hạn",
      ],
      buttonTitle: "🔥 Luyện đề ngay 🔥 Đề thi mới nhất 🔥",
      describer: ["Thí sinh tự học, muốn làm đề thi thử sát với thực tế", "Người muốn rèn luyện kỹ năng trước kỳ thi"],
    },
    {
      id: 2,
      title: "Gói chấm thi tự luận",
      description: [
        "Chấm điểm theo tiêu chí của VSTEP",
        "AI chấm điểm tự động và chính xác",
        "Nhận phản hồi chi tiết về lỗi sai và sửa lỗi",
        "Chấm bài nhanh chóng sau khi đăng ký",
      ],
      buttonTitle: "🔥 Chấm bài ngay 🔥 Nâng điểm cấp tốc 🔥",
      describer: ["Thí sinh muốn cải thiện kỹ năng nói và viết", "Cần đánh giá trình độ trước kỳ thi thật"],
    },
    {
      id: 3,
      title: "Gói combo đề thi + chấm thi",
      description: ["Làm bài thi không giới hạn", "Tiết kiệm hơn 50% so với mua lẻ", "Hỗ trợ tư vấn và giải đáp 24/7"],
      buttonTitle: "🔥 Đăng ký ngay 🔥 Nhận ưu đãi lớn 🔥",
      describer: ["Thí sinh muốn cải thiện cả bốn kỹ năng", "Muốn biết rõ điểm mạnh và yếu để cải thiện nhanh chóng"],
    },
  ];
  return (
    <View style={ListPackageStyles.container}>
      <HeaderTextBox
        titleText={"Gói dịch vụ"}
        descriptionText={
          <Text style={ListPackageStyles.descriptionText}>
            Chọn gói dịch vụ phù hợp với bạn{"\n"}để có thể ôn tập một cách hiệu quả nhất.
          </Text>
        }
      />
      {listPackageDetail.map((item) => (
        <View style={ListPackageStyles.packageItem} key={item.id}>
          <View style={ListPackageStyles.packageItemHeader}>
            <Text style={ListPackageStyles.packageItemHeaderText}>{item.title}</Text>
          </View>
          <View style={ListPackageStyles.packageItemDescription}>
            {item.description.map((desc, index) => (
              <View key={index} style={ListPackageStyles.packageItemDescriptionText}>
                <FontAwesome name='check-square' size={24} color={COLORS.primary} />
                <Text style={{ color: COLORS.secondary, fontSize: 14, fontFamily: FONTS.MERIENDA_MEDIUM, flex: 1 }}>{desc}</Text>
              </View>
            ))}
          </View>
          <View style={ListPackageStyles.packageItemDescriber}>
            <Text style={ListPackageStyles.packageDescriberText}>Dành cho:</Text>
            {item.describer.map((desc, index) => (
              <Text key={index} style={ListPackageStyles.packageItemDescriberText}>
                - {desc}
              </Text>
            ))}
          </View>
          <TouchableOpacity activeOpacity={0.6} style={ListPackageStyles.packageItemButton}>
            <Text style={ListPackageStyles.packageItemButtonText}>{item.buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ListPackage;
