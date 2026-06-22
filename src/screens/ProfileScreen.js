import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const chart = [
  { day: 'L', value: 56 },
  { day: 'M', value: 72 },
  { day: 'M', value: 46 },
  { day: 'J', value: 88 },
  { day: 'V', value: 64 },
  { day: 'S', value: 92 },
  { day: 'D', value: 34 }
];

const goals = [
  { label: 'Poids cible', value: '78 kg', progress: 62 },
  { label: 'Développé couché', value: '110 kg', progress: 74 },
  { label: 'Tractions propres', value: '15 reps', progress: 80 }
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.profileHead}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>IK</Text>
        </View>
        <View style={styles.profileCopy}>
          <Text style={styles.kicker}>PROFIL</Text>
          <Text style={styles.title}>Athlète régulier</Text>
          <Text style={styles.subtitle}>Objectif: prise de muscle propre</Text>
        </View>
      </View>

      <View style={styles.levelPanel}>
        <View>
          <Text style={styles.levelLabel}>Niveau</Text>
          <Text style={styles.levelValue}>Intermédiaire +</Text>
        </View>
        <TouchableOpacity activeOpacity={0.84} style={styles.editButton}>
          <Text style={styles.editButtonText}>Modifier</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Charge hebdo</Text>
      <View style={styles.chart}>
        {chart.map((bar, index) => (
          <View key={`${bar.day}-${index}`} style={styles.barColumn}>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { height: `${bar.value}%` }]} />
            </View>
            <Text style={styles.barLabel}>{bar.day}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Objectifs</Text>
      {goals.map((goal) => (
        <View key={goal.label} style={styles.goalRow}>
          <View style={styles.goalTop}>
            <Text style={styles.goalLabel}>{goal.label}</Text>
            <Text style={styles.goalValue}>{goal.value}</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${goal.progress}%` }]} />
          </View>
        </View>
      ))}

      <View style={styles.settingsPanel}>
        <Text style={styles.sectionTitle}>Préférences</Text>
        {['Salle équipée', '4 à 5 séances/semaine', 'Rappels à 18:30'].map((item) => (
          <View key={item} style={styles.settingRow}>
            <Text style={styles.settingText}>{item}</Text>
            <Text style={styles.settingState}>Actif</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111318'
  },
  content: {
    padding: 20,
    paddingBottom: 30
  },
  profileHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 8,
    backgroundColor: '#F4C95D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14
  },
  avatarText: {
    color: '#171717',
    fontSize: 22,
    fontWeight: '900'
  },
  profileCopy: {
    flex: 1
  },
  kicker: {
    color: '#FF8A5B',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0
  },
  title: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 32,
    fontWeight: '900'
  },
  subtitle: {
    color: '#9DA7B8',
    fontSize: 14,
    marginTop: 3,
    fontWeight: '700'
  },
  levelPanel: {
    minHeight: 86,
    borderRadius: 8,
    backgroundColor: '#1B202A',
    borderWidth: 1,
    borderColor: '#303747',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22
  },
  levelLabel: {
    color: '#AEB8C8',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 5
  },
  levelValue: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900'
  },
  editButton: {
    width: 84,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#70D6A3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  editButtonText: {
    color: '#102018',
    fontSize: 12,
    fontWeight: '900'
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10
  },
  chart: {
    height: 174,
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 22
  },
  barColumn: {
    width: 30,
    alignItems: 'center'
  },
  barTrack: {
    width: 18,
    height: 112,
    borderRadius: 8,
    backgroundColor: '#2A303C',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 8
  },
  barFill: {
    width: 18,
    borderRadius: 8,
    backgroundColor: '#F4C95D'
  },
  barLabel: {
    color: '#9DA7B8',
    fontSize: 12,
    fontWeight: '900'
  },
  goalRow: {
    minHeight: 78,
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B',
    padding: 13,
    marginBottom: 9
  },
  goalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  goalLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900'
  },
  goalValue: {
    color: '#70D6A3',
    fontSize: 14,
    fontWeight: '900'
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#2A303C',
    overflow: 'hidden'
  },
  progressFill: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#70D6A3'
  },
  settingsPanel: {
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B',
    padding: 16
  },
  settingRow: {
    minHeight: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#292F3B'
  },
  settingText: {
    color: '#AEB8C8',
    fontSize: 14,
    fontWeight: '700'
  },
  settingState: {
    color: '#F4C95D',
    fontSize: 12,
    fontWeight: '900'
  }
});
