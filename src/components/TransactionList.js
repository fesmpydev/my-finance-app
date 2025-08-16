import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const PAGE_SIZE = 5;

const TransactionList = ({ title, transactions }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleTransactions = transactions.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, transactions.length));
  };

  const hasMore = visibleCount < transactions.length;

  const renderItem = ({ item }) => (
    <Card style={styles.item}>
      <Card.Content>
        <Text>Tipo: {item.type}</Text>
        <Text>
          Cantidad: ₲{" "}
          {item.amount.toLocaleString("es-PY", { maximumFractionDigits: 0 })}
        </Text>
        {item.description && <Text>Descripción: {item.description}</Text>}
        <Text>Fecha: {new Date(item.date).toLocaleDateString("es-PY")}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={visibleTransactions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        nestedScrollEnabled={true}
      />
      {hasMore && (
        <Button
          mode="outlined"
          onPress={loadMore}
          style={styles.loadMoreButton}
        >
          Cargar más
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    marginBottom: 8,
  },
  loadMoreButton: {
    marginTop: 8,
    alignSelf: "center",
  },
});

export default TransactionList;
