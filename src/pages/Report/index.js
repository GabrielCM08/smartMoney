import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-community/picker';

import Entrylabel from '../../components/BalancePanel/BalancePanelLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
    <View style={styles.container}>
      <Entrylabel />
      <Picker>
        <Picker.Item label="teste" />
      </Picker>
      <EntrySummary />
      <EntryList />
      <View>
        <Button title="Salvar" color={'red'} />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default Report;
