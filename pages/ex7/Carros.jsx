import { carros } from "@/carros";
import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { DataTable } from 'react-native-paper';

const Carros = () => {
  const [textInput, setTextInput] = useState('');

  const filteredText = carros.filter((carro) => {
    const input = textInput.toLowerCase();
    return (
      carro.name.toLowerCase().includes(input) ||
      carro.brand.toLowerCase().includes(input)
    );
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar marca ou nome"
        placeholderTextColor="#888"
        style={styles.searchInput}
        onChangeText={setTextInput}
        value={textInput}
      />

      <ScrollView>
        <DataTable>
          <DataTable.Header style={styles.header}>
            <DataTable.Title textStyle={styles.headerText}>Modelo</DataTable.Title>
            <DataTable.Title textStyle={styles.headerText}>Marca</DataTable.Title>
            <DataTable.Title textStyle={styles.headerText}>Nome</DataTable.Title>
          </DataTable.Header>

          {filteredText.map((item) => (
            <DataTable.Row key={item.model} style={styles.row}>
              <DataTable.Cell textStyle={styles.cellText}>{item.model}</DataTable.Cell>
              <DataTable.Cell textStyle={styles.cellText}>{item.brand}</DataTable.Cell>
              <DataTable.Cell textStyle={styles.cellText}>{item.name}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default Carros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  header: {
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  row: {
    backgroundColor: '#131313',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  cellText: {
    color: '#dcdcdc',
    fontSize: 15,
  },
});
