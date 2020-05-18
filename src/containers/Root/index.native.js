import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>This is Main page for Mobile</Text>
    </View>
  );
};

export default Main;
