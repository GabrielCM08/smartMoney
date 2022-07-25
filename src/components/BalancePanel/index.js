import {View, Button, StyleSheet} from 'react-native';
import React from 'react';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default BalancePanel;
