import React from "react";
import FONTS from "@/constants/fonts";
import COLORS from "@/constants/color";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import GradingServicePackageStyles from "./GradingServicePackage.style";

const packages = [
  {
    id: 1,
    title: "VIP 7 NGÀY",
    price: "40.000 VNĐ",
    features: [
      "Truy cập không giới hạn đề thi",
      "Truy cập không giới hạn lượt thi",
    ],
    duration: "7 ngày",
  },
  {
    id: 2,
    title: "VIP 30 NGÀY",
    price: "50.000 VNĐ",
    features: [
      "Truy cập không giới hạn đề thi",
      "Truy cập không giới hạn lượt thi",
    ],
    duration: "30 ngày",
    saving: "Tiết kiệm hơn 250%",
  },
  {
    id: 3,
    title: "VIP 90 NGÀY",
    price: "120.000 VNĐ",
    features: [
      "Truy cập không giới hạn đề thi",
      "Truy cập không giới hạn lượt thi",
    ],
    duration: "90 ngày",
    saving: "Tiết kiệm hơn 400%",
  },
];

const GradingServicePackage = () => {
  {
    /* NHIỆM VỤ 1: Code phần gói dịch vụ ở đây */
  }
  return (
    <SafeAreaView style={GradingServicePackageStyles.safe}>
      <View style={GradingServicePackageStyles.wrapper}>
        <View style={GradingServicePackageStyles.titleRow}>
          <Text style={GradingServicePackageStyles.mainTitle}>
            Chọn gói ôn luyện phù hợp với bạn
          </Text>
        </View>
        <Text style={GradingServicePackageStyles.description}>
          Hệ thống cung cấp các gói đề thi VIP{"\n"}
          gói chấm bài tự luận & gói combo tiết kiệm, giúp bạn đạt{" "}
          <Text style={{ fontWeight: "600" }}>B1 - B2 - C1</Text> dễ dàng.
        </Text>

        <Text style={GradingServicePackageStyles.sectionHeader}>
          Gói đề thi VIP
        </Text>
        <Text style={GradingServicePackageStyles.subDescription}>
          Thí sinh được truy cập toàn bộ kho đề thi cập nhật mới nhất, chính xác
          nhất.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={GradingServicePackageStyles.container}
        >
          {packages.map((pkg) => (
            <View key={pkg.id} style={GradingServicePackageStyles.card}>
              <View style={GradingServicePackageStyles.header}>
                <Text style={GradingServicePackageStyles.headerIcon}>📅</Text>
                <Text style={GradingServicePackageStyles.title}>
                  {pkg.title}
                </Text>
              </View>

              <View style={GradingServicePackageStyles.priceRow}>
                <Text style={GradingServicePackageStyles.price}>
                  {pkg.price}
                </Text>
              </View>

              <View style={GradingServicePackageStyles.features}>
                {pkg.features.map((feature, idx) => (
                  <View
                    key={idx}
                    style={GradingServicePackageStyles.featureItem}
                  >
                    <Text style={GradingServicePackageStyles.checkIcon}>✓</Text>
                    <Text style={GradingServicePackageStyles.featureText}>
                      {feature}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={GradingServicePackageStyles.infoTable}>
                <Text style={GradingServicePackageStyles.durationText}>
                  Thời gian: {pkg.duration}
                </Text>
                {pkg.saving && (
                  <Text style={GradingServicePackageStyles.savingTextBlack}>
                    {pkg.saving}
                  </Text>
                )}
              </View>

              <TouchableOpacity
                style={GradingServicePackageStyles.button}
                activeOpacity={0.8}
              >
                <Text style={GradingServicePackageStyles.buttonText}>
                  Thanh toán ngay
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GradingServicePackage;
