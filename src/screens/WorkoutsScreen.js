import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const filters = ['Force', 'Hypertrophie', 'Perte de gras'];

const programs = [
  {
    id: 'push',
    goal: 'Force',
    title: 'Push Force',
    duration: '52 min',
    level: 'Intermédiaire',
    focus: 'Pecs, épaules, triceps',
    exercises: ['Développé couché 5x5', 'Développé militaire 4x6', 'Dips lestés 4x8']
  },
  {
    id: 'legs',
    goal: 'Hypertrophie',
    title: 'Jambes Volume',
    duration: '64 min',
    level: 'Avancé',
    focus: 'Quadriceps, ischios, mollets',
    exercises: ['Squat 4x8', 'Presse 4x12', 'Leg curl 3x15']
  },
  {
    id: 'metcon',
    goal: 'Perte de gras',
    title: 'Full Body Brûleur',
    duration: '38 min',
    level: 'Tous niveaux',
    focus: 'Cardio, gainage, mobilité',
    exercises: ['Rameur 8 min', 'Circuit kettlebell 5 tours', 'Core 10 min']
  },
  {
    id: 'pull',
    goal: 'Hypertrophie',
    title: 'Pull Dos Large',
    duration: '58 min',
    level: 'Intermédiaire',
    focus: 'Dos, biceps, arrière épaule',
    exercises: ['Tractions 4 séries', 'Rowing 4x10', 'Curl incliné 3x12']
  }
];

export default function WorkoutsScreen() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const filteredPrograms = programs.filter((program) => program.goal === activeFilter);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.kicker}>PROGRAMMES</Text>
      <Text style={styles.title}>Choisis ta séance</Text>

      <View style={styles.segmented}>
        {filters.map((filter) => {
          const selected = activeFilter === filter;
          return (
            <TouchableOpacity
              key={filter}
              activeOpacity={0.84}
              onPress={() => setActiveFilter(filter)}
              style={[styles.segment, selected && styles.segmentActive]}
            >
              <Text style={[styles.segmentText, selected && styles.segmentTextActive]} numberOfLines={1}>
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {filteredPrograms.map((program) => (
        <TouchableOpacity key={program.id} activeOpacity={0.9} style={styles.programCard}>
          <View style={styles.programHead}>
            <View style={styles.programCopy}>
              <Text style={styles.programTitle}>{program.title}</Text>
              <Text style={styles.programMeta}>{program.duration} • {program.level}</Text>
            </View>
            <View style={styles.playButton}>
              <Text style={styles.playButtonText}>Start</Text>
            </View>
          </View>
          <Text style={styles.focus}>{program.focus}</Text>
          <View style={styles.exerciseList}>
            {program.exercises.map((exercise, index) => (
              <View key={exercise} style={styles.exerciseRow}>
                <Text style={styles.exerciseIndex}>{index + 1}</Text>
                <Text style={styles.exerciseText}>{exercise}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.builder}>
        <Text style={styles.builderTitle}>Créateur rapide</Text>
        <Text style={styles.builderText}>Assemble une séance par muscle, durée et matériel disponible. Les modèles sont prêts pour brancher une base de données ensuite.</Text>
        <View style={styles.builderGrid}>
          {['Machine', 'Haltères', 'Poids du corps', 'Câbles'].map((item) => (
            <View key={item} style={styles.builderChip}>
              <Text style={styles.builderChipText}>{item}</Text>
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
    color: '#FF8A5B',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0
  },
  title: {
    color: '#FFFFFF',
    fontSize: 31,
    lineHeight: 36,
    fontWeight: '900',
    marginBottom: 16
  },
  segmented: {
    minHeight: 46,
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#2B313D',
    padding: 4,
    flexDirection: 'row',
    marginBottom: 14
  },
  segment: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6
  },
  segmentActive: {
    backgroundColor: '#F4C95D'
  },
  segmentText: {
    color: '#9BA5B6',
    fontSize: 12,
    fontWeight: '800'
  },
  segmentTextActive: {
    color: '#171717'
  },
  programCard: {
    borderRadius: 8,
    backgroundColor: '#1B202A',
    borderWidth: 1,
    borderColor: '#303747',
    padding: 16,
    marginBottom: 12
  },
  programHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  programCopy: {
    flex: 1,
    paddingRight: 10
  },
  programTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    lineHeight: 25,
    fontWeight: '900'
  },
  programMeta: {
    color: '#97A2B3',
    fontSize: 13,
    marginTop: 4,
    fontWeight: '700'
  },
  playButton: {
    width: 64,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#70D6A3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playButtonText: {
    color: '#102018',
    fontSize: 12,
    fontWeight: '900'
  },
  focus: {
    color: '#D5DAE4',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12
  },
  exerciseList: {
    borderTopWidth: 1,
    borderTopColor: '#303747',
    paddingTop: 10
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 30
  },
  exerciseIndex: {
    width: 24,
    color: '#F4C95D',
    fontSize: 13,
    fontWeight: '900'
  },
  exerciseText: {
    flex: 1,
    color: '#ABB5C5',
    fontSize: 14,
    fontWeight: '700'
  },
  builder: {
    marginTop: 8,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B'
  },
  builderTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8
  },
  builderText: {
    color: '#AEB8C8',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 12
  },
  builderGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  builderChip: {
    minHeight: 34,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#232936',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8
  },
  builderChipText: {
    color: '#DDE3EE',
    fontSize: 12,
    fontWeight: '800'
  }
});
