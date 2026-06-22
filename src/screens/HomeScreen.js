import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const stats = [
  { label: 'Séances', value: '4/5', accent: '#F4C95D' },
  { label: 'Volume', value: '18.4t', accent: '#70D6A3' },
  { label: 'Calories', value: '2 360', accent: '#FF8A5B' }
];

const checklist = [
  { label: 'Push force', detail: 'Développé couché, épaules, triceps', done: true },
  { label: '8 000 pas', detail: 'Il reste 2 150 pas pour finir la journée', done: false },
  { label: 'Protéines', detail: '128g sur 165g', done: false }
];

const quickActions = ['Démarrer séance', 'Ajouter repas', 'Voir progrès'];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>GYM STUDIO</Text>
          <Text style={styles.title}>Ton plan du jour</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.scoreValue}>86</Text>
          <Text style={styles.scoreLabel}>forme</Text>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>Prochaine séance</Text>
        <Text style={styles.heroTitle}>Push lourd + cardio court</Text>
        <Text style={styles.heroText}>52 min, 6 exercices, repos conseillé 90s. Objectif: monter propre sur les charges sans perdre la technique.</Text>
        <View style={styles.heroActions}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action} activeOpacity={0.84} style={styles.actionButton}>
              <Text style={styles.actionText}>{action}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.statsRow}>
        {stats.map((item) => (
          <View key={item.label} style={styles.statCard}>
            <View style={[styles.statMarker, { backgroundColor: item.accent }]} />
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>À finir aujourd'hui</Text>
      {checklist.map((item) => (
        <View key={item.label} style={styles.taskRow}>
          <View style={[styles.check, item.done && styles.checkDone]}>
            <Text style={[styles.checkText, item.done && styles.checkTextDone]}>{item.done ? '✓' : ''}</Text>
          </View>
          <View style={styles.taskCopy}>
            <Text style={styles.taskTitle}>{item.label}</Text>
            <Text style={styles.taskDetail}>{item.detail}</Text>
          </View>
        </View>
      ))}

      <View style={styles.insight}>
        <Text style={styles.sectionTitle}>Conseil coach</Text>
        <Text style={styles.insightText}>Garde deux répétitions en réserve sur les deux premiers exercices. Si la barre ralentit trop, conserve le poids et gagne la série.</Text>
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
    paddingBottom: 28
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },
  kicker: {
    color: '#F4C95D',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0
  },
  title: {
    color: '#F8FAFC',
    fontSize: 31,
    lineHeight: 36,
    fontWeight: '900'
  },
  score: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#232936',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#343B4A'
  },
  scoreValue: {
    color: '#70D6A3',
    fontSize: 22,
    fontWeight: '900'
  },
  scoreLabel: {
    color: '#9DA7B8',
    fontSize: 11,
    fontWeight: '700'
  },
  hero: {
    borderRadius: 8,
    padding: 18,
    backgroundColor: '#1B202A',
    borderWidth: 1,
    borderColor: '#2D3442',
    marginBottom: 14
  },
  heroLabel: {
    color: '#70D6A3',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 8
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '900',
    marginBottom: 10
  },
  heroText: {
    color: '#B8C1D1',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 16
  },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  actionButton: {
    minHeight: 38,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#F4C95D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8
  },
  actionText: {
    color: '#171717',
    fontSize: 12,
    fontWeight: '900'
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 22
  },
  statCard: {
    flex: 1,
    minHeight: 94,
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B',
    padding: 12,
    marginRight: 8
  },
  statMarker: {
    width: 24,
    height: 4,
    borderRadius: 2,
    marginBottom: 16
  },
  statValue: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '900'
  },
  statLabel: {
    color: '#96A0B0',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 3
  },
  sectionTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10
  },
  taskRow: {
    minHeight: 76,
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B',
    padding: 13,
    marginBottom: 9,
    flexDirection: 'row',
    alignItems: 'center'
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#465065',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  checkDone: {
    backgroundColor: '#70D6A3',
    borderColor: '#70D6A3'
  },
  checkText: {
    color: '#111318',
    fontWeight: '900'
  },
  checkTextDone: {
    color: '#111318'
  },
  taskCopy: {
    flex: 1
  },
  taskTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 4
  },
  taskDetail: {
    color: '#98A3B4',
    fontSize: 13,
    lineHeight: 18
  },
  insight: {
    marginTop: 8,
    paddingTop: 6
  },
  insightText: {
    color: '#C9D1DE',
    fontSize: 14,
    lineHeight: 22
  }
});
