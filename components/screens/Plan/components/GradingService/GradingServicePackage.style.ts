import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const GradingServicePackageStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "transparent" },
  wrapper: { marginTop: 32, paddingHorizontal: 10, paddingBottom: 80 },
  titleIcon: { fontSize: 18 },
  titleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  mainTitle: {
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    textAlign: "center",
    fontSize: 16,
    color: "#FC088C",
    marginLeft: 10,
    width: "100%",
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
    textAlign: "center",
  },
  subDescription: {
    fontFamily: FONTS.MERIENDA_LIGHT,
    fontSize: 13,
    color: COLORS.secondary,
    marginBottom: 16,
    textAlign: "center",
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
  featureText: { fontSize: 13, color: "#555", flexShrink: 1 },
  infoTable: { marginBottom: 16, minHeight: 50 },
  durationText: { fontSize: 13, color: "#333", marginBottom: 4 },
  savingTextBlack: { fontSize: 12, color: "#000", marginBottom: 8 },
  button: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "600" },
});
export default GradingServicePackageStyles;
