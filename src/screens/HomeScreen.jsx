import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../context/AppContext";
import TransactionList from "../components/TransactionList";

const HomeScreen = () => {
  const { balance, incomes, expenses } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.balance}>
              Balance Actual: ₲{" "}
              {balance.toLocaleString("es-PY", { maximumFractionDigits: 0 })}
            </Text>
          </Card.Content>
        </Card>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Income")}
          style={styles.button}
        >
          Registrar Ingreso
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Expense")}
          style={styles.button}
        >
          Registrar Egreso
        </Button>
      </View>
      <View style={styles.listsContainer}>
        <TransactionList title="Ingresos" transactions={incomes} />
        <TransactionList title="Egresos" transactions={expenses} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "transparent",
  },
  header: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginVertical: 8,
  },
  listsContainer: {
    flex: 1,
  },
});

export default HomeScreen;
