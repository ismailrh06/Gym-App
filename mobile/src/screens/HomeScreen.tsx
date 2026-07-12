import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, SectionHeader, Meter, StatBox, Chip, VoltButton, PhotoCard } from '../components/UI';
import { colors, spacing, photos } from '../theme';

const ACTIVITY = [
  { label: 'Mouvement', value: 420, target: 600, unit: 'kcal', color: colors.ringRed },
  { label: 'Exercice', value: 38, target: 45, unit: 'min', color: colors.volt },
  { label: 'Debout', value: 9, target: 12, unit: 'h', color: colors.ringCyan }
];

export default function HomeScreen({ onStartWorkout }: { onStartWorkout?: () => void }) {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.kicker}>JEUDI 10 JUILLET</Text>
          <Text style={styles.greeting}>Bonjour, Ismaël</Text>
        </View>
        <Image
          source={{ uri: photos.kettlebell }}
          style={styles.avatar}
        />
      </View>

      <PhotoCard source={{ uri: photos.pushDay }} height={340}>
        <Chip>SÉANCE DU JOUR</Chip>
        <Text style={styles.heroTitle}>Push Day</Text>
        <Text style={styles.heroMeta}>
          <Ionicons name="time-outline" size={13} color={colors.secondary} /> 45 min
          {'   '}
          <Ionicons name="barbell-outline" size={13} color={colors.secondary} /> 6 exercices
          {'   '}
          <Ionicons name="flame-outline" size={13} color={colors.secondary} /> ~430 kcal
        </Text>
        <View style={{ marginTop: 14 }}>
          <VoltButton label="Démarrer" onPress={onStartWorkout} />
        </View>
      </PhotoCard>

      <SectionHeader>Activité</SectionHeader>
      <Card>
        {ACTIVITY.map((a, i) => (
          <View key={a.label} style={[styles.activityRow, i > 0 && { marginTop: 16 }]}>
            <View style={styles.activityHead}>
              <Text style={styles.activityLabel}>{a.label}</Text>
              <Text style={styles.activityValue}>
                {a.value}
                <Text style={styles.activityTarget}>
                  {' '}/ {a.target} {a.unit}
                </Text>
              </Text>
            </View>
            <Meter value={a.value / a.target} color={a.color} />
          </View>
        ))}
      </Card>

      <SectionHeader>Cette semaine</SectionHeader>
      <View style={styles.statsRow}>
        <StatBox value="12" label="jours de suite" color={colors.volt} />
        <StatBox value="4" label="séances" />
        <StatBox value="+14%" label="force" color={colors.volt} />
      </View>

      <SectionHeader>Coach IA</SectionHeader>
      <Card style={styles.coachCard}>
        <View style={styles.coachIcon}>
          <Ionicons name="sparkles" size={18} color={colors.volt} />
        </View>
        <Text style={styles.coachText}>
          Ta progression au développé couché stagne. Réduis le volume de 10% cette
          semaine pour mieux surcompenser.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: 130 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg
  },
  kicker: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2
  },
  greeting: { color: colors.text, fontSize: 32, fontWeight: '800', marginTop: 2 },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.card
  },
  heroTitle: { color: colors.text, fontSize: 34, fontWeight: '800', marginTop: 10 },
  heroMeta: { color: colors.secondary, fontSize: 13, marginTop: 6, fontWeight: '600' },
  activityRow: {},
  activityHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  activityLabel: { color: colors.text, fontSize: 15, fontWeight: '600' },
  activityValue: { color: colors.text, fontSize: 14, fontWeight: '700' },
  activityTarget: { color: colors.muted, fontWeight: '500' },
  statsRow: { flexDirection: 'row', gap: 10 },
  coachCard: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  coachIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.voltDim,
    alignItems: 'center',
    justifyContent: 'center'
  },
  coachText: { color: colors.secondary, fontSize: 14, lineHeight: 21, flex: 1 }
});
