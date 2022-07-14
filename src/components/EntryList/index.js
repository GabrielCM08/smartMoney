import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Últimos lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $190'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  tittle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
  },
});

export default EntryList;
