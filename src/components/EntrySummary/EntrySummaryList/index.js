import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustivel: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'},
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

export default EntrySummaryList;
