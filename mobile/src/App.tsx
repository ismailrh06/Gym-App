import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>AthletIQ</Text>
        <Text style={styles.tag}>Coaching fitness premium</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>Transformez votre corps</Text>
        <Text style={styles.subtitle}>Programmes, nutrition et coaching IA — tout en un.</Text>
        <Pressable style={styles.cta} onPress={() => {}}>
          <Text style={styles.ctaText}>Commencer</Text>
        </Pressable>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050507',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    alignItems: 'center'
  },
  brand: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: '700'
  },
  tag: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 4
  },
  hero: {
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center'
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
    maxWidth: 320
  },
  cta: {
    marginTop: 20,
    backgroundColor: '#D4AF37',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 999
  },
  ctaText: {
    color: '#000',
    fontWeight: '700'
  }
});
