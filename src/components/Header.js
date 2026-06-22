import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}){
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 16,
    backgroundColor: '#151820',
    borderBottomWidth: 1,
    borderBottomColor: '#272B35'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900'
  }
});
