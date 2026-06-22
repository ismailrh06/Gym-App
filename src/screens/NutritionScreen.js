import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const macros = [
  { label: 'Protéines', value: 128, target: 165, color: '#70D6A3' },
  { label: 'Glucides', value: 210, target: 260, color: '#F4C95D' },
  { label: 'Lipides', value: 58, target: 75, color: '#FF8A5B' }
];

const meals = [
  { name: 'Petit-déjeuner', items: 'Oeufs, avoine, banane', calories: 620 },
  { name: 'Déjeuner', items: 'Riz, poulet, légumes', calories: 780 },
  { name: 'Post-training', items: 'Shake whey, dattes', calories: 310 },
  { name: 'Dîner', items: 'Saumon, patate douce', calories: 650 }
];

const groceries = ['Poulet', 'Riz basmati', 'Skyr', 'Fruits rouges', 'Eau minérale'];

export default function NutritionScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.kicker}>NUTRITION</Text>
      <Text style={styles.title}>Manger pour progresser</Text>

      <View style={styles.caloriePanel}>
        <Text style={styles.panelLabel}>Objectif calories</Text>
        <Text style={styles.calories}>2 360 / 2 800</Text>
        <Text style={styles.panelText}>Encore 440 kcal pour finir ta journée sans casser le plan.</Text>
      </View>

      <Text style={styles.sectionTitle}>Macros</Text>
      {macros.map((macro) => {
        const percent = Math.min(100, Math.round((macro.value / macro.target) * 100));
        return (
          <View key={macro.label} style={styles.macroRow}>
            <View style={styles.macroTop}>
              <Text style={styles.macroLabel}>{macro.label}</Text>
              <Text style={styles.macroValue}>{macro.value}g / {macro.target}g</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${percent}%`, backgroundColor: macro.color }]} />
            </View>
          </View>
        );
      })}

      <Text style={styles.sectionTitle}>Repas du jour</Text>
      {meals.map((meal) => (
        <TouchableOpacity key={meal.name} activeOpacity={0.84} style={styles.mealRow}>
          <View style={styles.mealCopy}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealItems}>{meal.items}</Text>
          </View>
          <Text style={styles.mealCalories}>{meal.calories} kcal</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.groceryPanel}>
        <Text style={styles.sectionTitle}>Liste rapide</Text>
        <View style={styles.groceryGrid}>
          {groceries.map((item) => (
            <View key={item} style={styles.groceryChip}>
              <Text style={styles.groceryText}>{item}</Text>
            </View>
          ))}
        </View>
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
  kicker: {
    color: '#F4C95D',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0
  },
  title: {
    color: '#FFFFFF',
    fontSize: 31,
    lineHeight: 36,
    fontWeight: '900',
    marginBottom: 18
  },
  caloriePanel: {
    borderRadius: 8,
    backgroundColor: '#1B202A',
    borderWidth: 1,
    borderColor: '#303747',
    padding: 18,
    marginBottom: 22
  },
  panelLabel: {
    color: '#AEB8C8',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 8
  },
  calories: {
    color: '#FFFFFF',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '900',
    marginBottom: 8
  },
  panelText: {
    color: '#B7C0CE',
    fontSize: 14,
    lineHeight: 21
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10
  },
  macroRow: {
    marginBottom: 14
  },
  macroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  macroLabel: {
    color: '#DDE3EE',
    fontSize: 14,
    fontWeight: '900'
  },
  macroValue: {
    color: '#97A2B3',
    fontSize: 13,
    fontWeight: '800'
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#2A303C',
    overflow: 'hidden'
  },
  progressFill: {
    height: 8,
    borderRadius: 8
  },
  mealRow: {
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
  mealCopy: {
    flex: 1,
    paddingRight: 10
  },
  mealName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 4
  },
  mealItems: {
    color: '#98A3B4',
    fontSize: 13,
    lineHeight: 18
  },
  mealCalories: {
    color: '#F4C95D',
    fontSize: 13,
    fontWeight: '900'
  },
  groceryPanel: {
    marginTop: 10,
    paddingTop: 4
  },
  groceryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  groceryChip: {
    minHeight: 34,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#232936',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8
  },
  groceryText: {
    color: '#DDE3EE',
    fontSize: 12,
    fontWeight: '800'
  }
});
