import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = ({navigation}) => {
  const currentBalance = 2102.45;
  const entriesSummary = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustivel', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];
  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
  ];
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas as Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesSummary={entriesSummary} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" color={'red'} />
        <Button title="Fechar" onPress={() => navigation.goBack()} />
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
