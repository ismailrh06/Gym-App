import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, photos } from './theme';
import { VoltButton } from './components/UI';
import HomeScreen from './screens/HomeScreen';
import WorkoutsScreen from './screens/WorkoutsScreen';
import NutritionScreen from './screens/NutritionScreen';
import ProgressScreen from './screens/ProgressScreen';
import ProfileScreen from './screens/ProfileScreen';

type Tab = 'accueil' | 'training' | 'nutrition' | 'progres' | 'profil';
type IoniconName = keyof typeof Ionicons.glyphMap;

const TABS: { key: Tab; icon: IoniconName; iconActive: IoniconName; label: string }[] = [
  { key: 'accueil', icon: 'home-outline', iconActive: 'home', label: 'Accueil' },
  { key: 'training', icon: 'barbell-outline', iconActive: 'barbell', label: 'Training' },
  { key: 'nutrition', icon: 'nutrition-outline', iconActive: 'nutrition', label: 'Nutrition' },
  { key: 'progres', icon: 'stats-chart-outline', iconActive: 'stats-chart', label: 'Progrès' },
  { key: 'profil', icon: 'person-outline', iconActive: 'person', label: 'Profil' }
];

export default function App() {
  const [started, setStarted] = useState(false);
  const [tab, setTab] = useState<Tab>('accueil');

  if (!started) {
    return (
      <View style={styles.welcomeRoot}>
        <Image
          source={{ uri: photos.heroWelcome }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(0,0,0,0.55)', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.92)']}
          locations={[0, 0.4, 1]}
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.welcomeHeader}>
          <Text style={styles.brand}>ATHLETIQ</Text>
        </View>

        <View style={styles.welcomeBottom}>
          <Text style={styles.welcomeTitle}>
            L'entraînement,{'\n'}version premium.
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Programmes, nutrition et coaching IA.{'\n'}Conçu pour la progression.
          </Text>
          <View style={{ marginTop: 22, alignSelf: 'stretch' }}>
            <VoltButton label="Commencer" onPress={() => setStarted(true)} />
          </View>
        </View>

        <StatusBar style="light" />
      </View>
    );
  }

  return (
    <View style={styles.appRoot}>
      <View style={styles.screen}>
        {tab === 'accueil' && <HomeScreen onStartWorkout={() => setTab('training')} />}
        {tab === 'training' && <WorkoutsScreen />}
        {tab === 'nutrition' && <NutritionScreen />}
        {tab === 'progres' && <ProgressScreen />}
        {tab === 'profil' && <ProfileScreen />}
      </View>

      <BlurView intensity={60} tint="dark" style={styles.tabBar}>
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <Pressable key={t.key} style={styles.tabItem} onPress={() => setTab(t.key)}>
              <Ionicons
                name={active ? t.iconActive : t.icon}
                size={23}
                color={active ? colors.volt : colors.muted}
              />
              <Text style={[styles.tabLabel, active && { color: colors.volt }]}>
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </BlurView>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  // ---- Welcome ----
  welcomeRoot: { flex: 1, backgroundColor: colors.bg },
  welcomeHeader: {
    position: 'absolute',
    top: 74,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  brand: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 6
  },
  welcomeBottom: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 64
  },
  welcomeTitle: {
    color: colors.text,
    fontSize: 40,
    fontWeight: '800',
    lineHeight: 46,
    letterSpacing: -0.5
  },
  welcomeSubtitle: {
    color: colors.secondary,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12
  },

  // ---- App shell ----
  appRoot: { flex: 1, backgroundColor: colors.bg },
  screen: { flex: 1, paddingTop: 62 },
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 30,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255,255,255,0.15)',
    overflow: 'hidden'
  },
  tabItem: { flex: 1, alignItems: 'center', gap: 3 },
  tabLabel: { color: colors.muted, fontSize: 10, fontWeight: '600' }
});
