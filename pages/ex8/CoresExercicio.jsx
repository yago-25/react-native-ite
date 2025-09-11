import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CoresExercicio = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [shape, setShape] = useState('square');

  const translateColor = (color) => {
    if (!color) return color;

    const mapaCores = {
      vermelho: 'red',
      azul: 'blue',
      verde: 'green',
      amarelo: 'yellow',
      preto: 'black',
      branco: 'white',
      cinza: 'gray',
      laranja: 'orange',
      rosa: 'pink',
      roxo: 'purple',
      marrom: 'brown',
      ciano: 'cyan',
      magenta: 'magenta',
      dourado: 'gold',
      prata: 'silver',
      bege: 'beige',
      violeta: 'violet',
      índigo: 'indigo',
      turquesa: 'turquoise',
      coral: 'coral',
      lavanda: 'lavender',
      oliva: 'olive',
      limão: 'lime',
      azulclaro: 'lightblue',
      azulescuro: 'darkblue',
      verdeclaro: 'lightgreen',
      verdeescuro: 'darkgreen',
      vermelhoclaro: 'lightcoral',
      vermelhescuro: 'darkred',
      cinzaclaro: 'lightgray',
      cinzaescuro: 'darkgray',
      marinho: 'navy',
      marfim: 'ivory',
      chocolate: 'chocolate',
      khaki: 'khaki',
      teal: 'teal',
      orquídea: 'orchid',
      salmão: 'salmon',
      trigo: 'wheat',
      aqua: 'aqua',
      fúcsia: 'fuchsia',
      índigoclaro: 'mediumslateblue',
    };

    const cor = color.toLowerCase().trim();
    return mapaCores[cor] || color; 
  };


  const handleChangeColors = () => {
    setColor1(color2);
    setColor2(color3);
    setColor3(color1);
  };

  const getShapeStyle = (color) => {
    const translatedColor = translateColor(color);

    if (shape === 'circle') {
      return { backgroundColor: translatedColor || '#ccc', borderRadius: 50 };
    }
    if (shape === 'triangle') {
      return {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderStyle: 'solid',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: translatedColor || '#ccc',
        shadowColor: 'transparent',
        elevation: 0,
      };
    }
    return { backgroundColor: translatedColor || '#ccc', borderRadius: 8 };
  };

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
        {color1.toLowerCase() === 'bolsonaro' ? (
         <ImageBackground
          source={require('./image.png')}
          style={{ width: 100, height: 100 }}
         >
          <Text style={{ color: 'white' }}></Text>
         </ImageBackground>
        ) : (
          <View style={[styles.geometricForm, getShapeStyle(color1)]} />
        )}
        <View style={[styles.geometricForm, getShapeStyle(color2)]} />
        <View style={[styles.geometricForm, getShapeStyle(color3)]} />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={handleChangeColors}>
          <Text style={styles.buttonText}>Trocar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={shape}
          onValueChange={(itemValue) => setShape(itemValue)}
          style={styles.picker}
          dropdownIconColor="#333"
        >
          <Picker.Item label="Quadrado" value="square" />
          <Picker.Item label="Círculo" value="circle" />
          <Picker.Item label="Triângulo" value="triangle" />
        </Picker>
      </View>
    </View>
  );
};

export default CoresExercicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  containerInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: '30px',
    backgroundColor: 'green',
    padding: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90px'
  },
  containerGeometricForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    marginTop: 150
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
  containerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: '100px'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pickerContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    height: '30px',
    width: '200px',
  },
});
