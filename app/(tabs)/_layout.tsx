import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import Tab from './../../components/Tab';
import Calculator from './../../pages/ex1/Calculator';
import StyleAndLayout from './../../pages/ex2/StyleAndLayout';
import Props from './../../pages/ex3/Props';
import FatherFunction from './../../pages/ex4/FatherFunction';
import List from './../../pages/ex5/List';
import Axios from './../../pages/ex6/Axios';
import Carros from './../../pages/ex7/Carros';
import CoresExercicio from './../../pages/ex8/CoresExercicio';

export default function TabLayout() {
  const [tab, setTab] = useState('');

  const getComponentByTab = () => {
    switch (tab) {
      case 'Calculadora':
        return <Calculator />;
      case 'Estilo e Layout':
        return <StyleAndLayout />;
      case 'Props':
        return <Props />;
      case 'Função Pai':
        return <FatherFunction />;
      case 'Lista':
        return <List />;
      case 'Axios':
        return <Axios />
      case "Carros":
        return <Carros />;
      case "Cores":
        return <CoresExercicio />;
      default:
        return <Calculator />
    }
  };

  return (
    <View style={styles.container}>
      {getComponentByTab()}
      <Tab setTab={setTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})