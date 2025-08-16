import { View, StyleSheet } from "react-native";
import IncomeForm from "../components/IncomeForm";

const IncomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <IncomeForm onSubmit={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default IncomeScreen;
