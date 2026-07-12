import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, SectionHeader, Chip } from '../components/UI';
import { colors, spacing } from '../theme';

// Séries effectuées par semaine
const WEEKLY_VOLUME = [64, 72, 68, 80, 76, 88, 84, 92];

const PRS = [
  { name: 'Squat', value: '140 kg', delta: '+5 kg', date: '2 juil.' },
  { name: 'Développé couché', value: '100 kg', delta: '+2,5 kg', date: '28 juin' },
  { name: 'Soulevé de terre', value: '180 kg', delta: '+7,5 kg', date: '21 juin' },
  { name: 'Traction lestée', value: '+30 kg', delta: '+5 kg', date: '14 juin' }
];

const CHART_HEIGHT = 100;

export default function ProgressScreen() {
  const max = Math.max(...WEEKLY_VOLUME);

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Progrès</Text>

      <View style={styles.heroRow}>
        <Card style={styles.heroCard}>
          <Text style={styles.heroLabel}>POIDS</Text>
          <View style={styles.heroValueRow}>
            <Text style={styles.heroValue}>78,4</Text>
            <Text style={styles.heroUnit}>kg</Text>
          </View>
          <Chip tone="cyan">−2,6 kg / 8 sem.</Chip>
        </Card>
        <Card style={styles.heroCard}>
          <Text style={styles.heroLabel}>FORCE</Text>
          <View style={styles.heroValueRow}>
            <Text style={[styles.heroValue, { color: colors.volt }]}>+14</Text>
            <Text style={styles.heroUnit}>%</Text>
          </View>
          <Chip>depuis le début</Chip>
        </Card>
      </View>

      <SectionHeader>Volume d'entraînement</SectionHeader>
      <Card>
        <View style={styles.chart}>
          {WEEKLY_VOLUME.map((v, i) => {
            const isLast = i === WEEKLY_VOLUME.length - 1;
            return (
              <View key={`w${i + 1}`} style={styles.barCol}>
                {isLast && <Text style={styles.barLabel}>{v}</Text>}
                <View
                  style={[
                    styles.bar,
                    {
                      height: (v / max) * CHART_HEIGHT,
                      opacity: isLast ? 1 : 0.45
                    }
                  ]}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.axisLine} />
        <View style={styles.axisLabels}>
          {WEEKLY_VOLUME.map((_, i) => (
            <Text key={`s${i + 1}`} style={styles.axisLabel}>
              S{i + 1}
            </Text>
          ))}
        </View>
        <Text style={styles.chartHint}>séries par semaine · +43% vs semaine 1</Text>
      </Card>

      <SectionHeader>Records personnels</SectionHeader>
      <Card style={{ paddingVertical: 4 }}>
        {PRS.map((pr, i) => (
          <View key={pr.name} style={[styles.prRow, i > 0 && styles.prDivider]}>
            <View style={styles.prIcon}>
              <Ionicons name="trophy" size={16} color={colors.volt} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.prName}>{pr.name}</Text>
              <Text style={styles.prDate}>{pr.date}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.prValue}>{pr.value}</Text>
              <Text style={styles.prDelta}>{pr.delta}</Text>
            </View>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: 130 },
  title: { color: colors.text, fontSize: 32, fontWeight: '800', marginBottom: spacing.lg },
  heroRow: { flexDirection: 'row', gap: 10 },
  heroCard: { flex: 1, paddingVertical: 18 },
  heroLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 6
  },
  heroValueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    marginBottom: 10
  },
  heroValue: { color: colors.text, fontSize: 34, fontWeight: '800' },
  heroUnit: { color: colors.muted, fontSize: 15, fontWeight: '600', marginBottom: 6 },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    height: CHART_HEIGHT + 18,
    marginTop: 6
  },
  barCol: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  bar: {
    width: '100%',
    backgroundColor: colors.volt,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  barLabel: { color: colors.volt, fontSize: 11, fontWeight: '800', marginBottom: 4 },
  axisLine: { height: 1, backgroundColor: colors.separator },
  axisLabels: { flexDirection: 'row', gap: 8, marginTop: 6 },
  axisLabel: { flex: 1, textAlign: 'center', color: colors.muted, fontSize: 10 },
  chartHint: { color: colors.muted, fontSize: 12, marginTop: 10 },
  prRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 13 },
  prDivider: { borderTopWidth: 1, borderTopColor: colors.separator },
  prIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.voltDim,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  prName: { color: colors.text, fontSize: 15, fontWeight: '700' },
  prDate: { color: colors.muted, fontSize: 12, marginTop: 2 },
  prValue: { color: colors.text, fontSize: 16, fontWeight: '800' },
  prDelta: { color: colors.volt, fontSize: 12, fontWeight: '700', marginTop: 2 }
});
