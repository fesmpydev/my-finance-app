import { useState, useContext } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AppContext } from "../context/AppContext";

const IncomeForm = ({ onSubmit }) => {
  const { addIncome } = useContext(AppContext);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
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
    addIncome({ type, amount: parseFloat(amount), date: date.toISOString() });
    onSubmit();
  };

  return (
    <View>
      <TextInput label="Tipo de Ingreso" value={type} onChangeText={setType} />
      <TextInput
        label="Cantidad"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
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

export default IncomeForm;
