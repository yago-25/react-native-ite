import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CoresExercicio = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [shape, setShape] = useState('square');

  const handleChangeColors = () => {
    setColor1(color2);
    setColor2(color3);
    setColor3(color1);
  };

  const getBorderRadius = () => (shape === 'circle' ? 50 : 8);

  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <TextInput
          onChangeText={setColor1}
          value={color1}
          style={styles.input}
          placeholder="Cor 1"
          placeholderTextColor="#555"
        />
        <TextInput
          onChangeText={setColor2}
          value={color2}
          style={styles.input}
          placeholder="Cor 2"
          placeholderTextColor="#555"
        />
        <TextInput
          onChangeText={setColor3}
          value={color3}
          style={styles.input}
          placeholder="Cor 3"
          placeholderTextColor="#555"
        />
      </View>

      <View style={styles.containerGeometricForm}>
        <View
          style={[
            styles.geometricForm,
            { backgroundColor: color1 || '#ccc', borderRadius: getBorderRadius() },
          ]}
        />
        <View
          style={[
            styles.geometricForm,
            { backgroundColor: color2 || '#ccc', borderRadius: getBorderRadius() },
          ]}
        />
        <View
          style={[
            styles.geometricForm,
            { backgroundColor: color3 || '#ccc', borderRadius: getBorderRadius() },
          ]}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleChangeColors}>
        <Text style={styles.buttonText}>Trocar</Text>
      </TouchableOpacity>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={shape}
          onValueChange={(itemValue) => setShape(itemValue)}
          style={styles.picker}
          dropdownIconColor="#333"
        >
          <Picker.Item label="Quadrado" value="square" />
          <Picker.Item label="Círculo" value="circle" />
        </Picker>
      </View>
    </View>
  );
};

export default CoresExercicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  containerInputs: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: '30px'
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  containerGeometricForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  geometricForm: {
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});
