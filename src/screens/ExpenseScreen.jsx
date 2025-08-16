import { View, StyleSheet } from "react-native";
import ExpenseForm from "../components/ExpenseForm";

const ExpenseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ExpenseForm onSubmit={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default ExpenseScreen;
