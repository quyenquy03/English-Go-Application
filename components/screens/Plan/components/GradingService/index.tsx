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
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.wrapper}>
        <View style={styles.titleRow}>
          <Text style={styles.titleIcon}>📄</Text>
          <Text style={styles.mainTitle}>
            Chọn gói ôn luyện{" "}
            <Text style={styles.highlight}>phù hợp với bạn</Text>
          </Text>
        </View>
        <Text style={styles.description}>
          Hệ thống cung cấp các gói đề thi VIP{"\n"}
          gói chấm bài tự luận & gói combo tiết kiệm, giúp bạn đạt{" "}
          <Text style={{ fontWeight: "600" }}>B1 - B2 - C1</Text> dễ dàng.
        </Text>

        <Text style={styles.sectionHeader}>Gói đề thi VIP</Text>
        <Text style={styles.subDescription}>
          Thí sinh được truy cập toàn bộ kho đề thi cập nhật mới nhất, chính xác
          nhất.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          {packages.map((pkg) => (
            <View key={pkg.id} style={styles.card}>
              <View style={styles.header}>
                <Text style={styles.headerIcon}>📅</Text>
                <Text style={styles.title}>{pkg.title}</Text>
              </View>

              <View style={styles.priceRow}>
                <Text style={styles.price}>{pkg.price}</Text>
              </View>

              <View style={styles.features}>
                {pkg.features.map((feature, idx) => (
                  <View key={idx} style={styles.featureItem}>
                    <Text style={styles.checkIcon}>✓</Text>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.infoTable}>
                <Text style={styles.durationText}>
                  Thời gian: {pkg.duration}
                </Text>
                {pkg.saving && (
                  <Text style={styles.savingTextBlack}>{pkg.saving}</Text>
                )}
              </View>

              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Thanh toán ngay</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GradingServicePackage;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "transparent" },
  wrapper: { marginTop: 32, paddingHorizontal: 20, paddingBottom: 80 },
  titleIcon: { fontSize: 18 },
  titleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  mainTitle: {
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    textAlign: "center",
    fontSize: 16,
    color: "#FC088C",
    marginLeft: 10,
  },
  highlight: {
    color: "#FC088C",
    fontWeight: "600",
  },
  description: {
    fontFamily: FONTS.MERIENDA_LIGHT,
    fontSize: 14,
    textAlign: "center",
    color: COLORS.secondary,
    marginTop: 10,
  },
  sectionHeader: {
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    fontSize: 15,
    color: "#FC088C",
    marginTop: 12,
    marginBottom: 4,
  },
  subDescription: {
    fontFamily: FONTS.MERIENDA_LIGHT,
    fontSize: 13,
    color: COLORS.secondary,
    marginBottom: 16,
  },
  container: { paddingVertical: 16 },
  card: {
    width: 260,
    backgroundColor: "transparent",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFD3EC",
    padding: 16,
    marginRight: 16,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  headerIcon: { fontSize: 16, marginRight: 6 },
  title: { fontSize: 14, fontWeight: "600", color: "#333" },
  priceRow: { marginBottom: 12 },
  price: { fontSize: 26, fontWeight: "700", color: "#000" },
  features: { marginBottom: 12 },
  featureItem: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  checkIcon: { fontSize: 14, color: "#4CAF50", marginRight: 8 },
  featureText: { fontSize: 12, color: "#555", flexShrink: 1 },
  infoTable: { marginBottom: 16 },
  durationText: { fontSize: 12, color: "#333", marginBottom: 4 },
  savingTextBlack: { fontSize: 12, color: "#000", marginBottom: 8 },
  button: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "600" },
});
