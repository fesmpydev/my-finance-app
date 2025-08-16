import { useState, useContext } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AppContext } from "../context/AppContext";

const ExpenseForm = ({ onSubmit }) => {
  const { addExpense } = useContext(AppContext);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    if (
      !type ||
      !amount ||
      isNaN(amount) ||
      !Number.isInteger(parseFloat(amount))
    ) {
      alert("Por favor, ingrese un monto entero.");
      return;
    }
    addExpense({
      type,
      amount: parseFloat(amount),
      description,
      date: date.toISOString(),
    });
    onSubmit();
  };

  return (
    <View>
      <TextInput label="Tipo de Egreso" value={type} onChangeText={setType} />
      <TextInput
        label="Cantidad"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        label="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <Button onPress={() => setShowDatePicker(true)}>Seleccionar Fecha</Button>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            setDate(selectedDate || date);
          }}
        />
      )}
      <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 16 }}>
        Registrar
      </Button>
    </View>
  );
};

export default ExpenseForm;
