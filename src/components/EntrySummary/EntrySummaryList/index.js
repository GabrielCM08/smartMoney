import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = ({entriesSummary}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Categorias</Text>
      <FlatList
        data={entriesSummary}
        renderItem={({item}) => (
          <Text>
            - {item.description}: ${item.amount}
          </Text>
        )}
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
