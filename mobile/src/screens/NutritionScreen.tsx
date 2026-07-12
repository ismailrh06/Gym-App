import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, SectionHeader, Meter, Chip, PhotoCard } from '../components/UI';
import { colors, spacing, photos } from '../theme';

const MACROS = [
  { name: 'Protéines', current: 142, target: 160, unit: 'g', color: colors.ringRed },
  { name: 'Glucides', current: 180, target: 220, unit: 'g', color: colors.volt },
  { name: 'Lipides', current: 58, target: 70, unit: 'g', color: colors.ringCyan }
];

const MEALS = [
  { name: 'Petit-déjeuner', desc: 'Œufs, flocons d’avoine, banane', kcal: 520, done: true },
  { name: 'Déjeuner', desc: 'Poulet, riz basmati, brocoli', kcal: 680, done: true },
  { name: 'Collation', desc: 'Skyr, amandes, miel', kcal: 310, done: true },
  { name: 'Dîner', desc: 'Saumon, patate douce, épinards', kcal: 630, done: false }
];

export default function NutritionScreen() {
  const eaten = 1840;
  const target = 2140;

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Nutrition</Text>

      <PhotoCard source={{ uri: photos.nutrition }} height={200}>
        <Chip tone="volt">CALORIES DU JOUR</Chip>
        <View style={styles.calRow}>
          <Text style={styles.calValue}>{eaten.toLocaleString('fr-FR')}</Text>
          <Text style={styles.calUnit}>/ {target.toLocaleString('fr-FR')} kcal</Text>
        </View>
        <Meter value={eaten / target} height={6} />
      </PhotoCard>

      <SectionHeader>Macronutriments</SectionHeader>
      <Card>
        {MACROS.map((m, i) => (
          <View key={m.name} style={i > 0 && { marginTop: 18 }}>
            <View style={styles.macroHead}>
              <Text style={styles.macroName}>{m.name}</Text>
              <Text style={styles.macroValue}>
                {m.current}
                <Text style={styles.macroTarget}> / {m.target} {m.unit}</Text>
              </Text>
            </View>
            <Meter value={m.current / m.target} color={m.color} />
          </View>
        ))}
      </Card>

      <SectionHeader>Repas du jour</SectionHeader>
      <Card style={{ paddingVertical: 4 }}>
        {MEALS.map((meal, i) => (
          <View key={meal.name} style={[styles.mealRow, i > 0 && styles.mealDivider]}>
            <View style={[styles.mealCheck, meal.done && styles.mealCheckDone]}>
              {meal.done && <Ionicons name="checkmark" size={13} color="#000" />}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.mealName}>{meal.name}</Text>
              <Text style={styles.mealDesc}>{meal.desc}</Text>
            </View>
            <Text style={styles.mealKcal}>{meal.kcal} kcal</Text>
          </View>
        ))}
      </Card>

      <Card style={styles.tipCard}>
        <Ionicons name="water-outline" size={20} color={colors.ringCyan} />
        <Text style={styles.tipText}>
          Hydratation : 1,8 L / 2,5 L aujourd'hui. Pense à boire pendant ta séance.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: 130 },
  title: { color: colors.text, fontSize: 32, fontWeight: '800', marginBottom: spacing.lg },
  calRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginTop: 8,
    marginBottom: 10
  },
  calValue: { color: colors.text, fontSize: 40, fontWeight: '800' },
  calUnit: { color: colors.secondary, fontSize: 15, fontWeight: '600', marginBottom: 7 },
  macroHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  macroName: { color: colors.text, fontSize: 15, fontWeight: '600' },
  macroValue: { color: colors.text, fontSize: 14, fontWeight: '700' },
  macroTarget: { color: colors.muted, fontWeight: '500' },
  mealRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14
  },
  mealDivider: { borderTopWidth: 1, borderTopColor: colors.separator },
  mealCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.separator,
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mealCheckDone: { backgroundColor: colors.volt, borderColor: colors.volt },
  mealName: { color: colors.text, fontSize: 15, fontWeight: '700' },
  mealDesc: { color: colors.muted, fontSize: 12, marginTop: 2 },
  mealKcal: { color: colors.secondary, fontSize: 13, fontWeight: '700', marginLeft: 10 },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: spacing.md
  },
  tipText: { color: colors.secondary, fontSize: 13, lineHeight: 19, flex: 1 }
});
