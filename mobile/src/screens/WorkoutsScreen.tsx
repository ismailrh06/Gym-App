import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Card, SectionHeader, Meter, Chip, VoltButton } from '../components/UI';
import { colors, spacing, radius, photos } from '../theme';

const heroVideo = require('../assets/hero.mp4');

type DayStatus = 'today' | 'upcoming' | 'rest';

const WEEK_DAYS: { name: string; detail: string; status: DayStatus; photo: string }[] = [
  { name: 'Push Day', detail: '6 exercices · 45 min', status: 'today', photo: photos.pushDay },
  { name: 'Pull Day', detail: '6 exercices · 50 min', status: 'upcoming', photo: photos.pullDay },
  { name: 'Leg Day', detail: '7 exercices · 55 min', status: 'upcoming', photo: photos.legDay },
  { name: 'Mobilité', detail: 'Récupération · 20 min', status: 'rest', photo: photos.mobility },
  { name: 'Upper Body', detail: '8 exercices · 60 min', status: 'upcoming', photo: photos.upperBody }
];

const TODAY_EXERCISES = [
  { name: 'Développé couché', sets: '4 × 8', charge: '85 kg' },
  { name: 'Développé incliné haltères', sets: '4 × 10', charge: '30 kg' },
  { name: 'Développé militaire', sets: '4 × 10', charge: '50 kg' },
  { name: 'Élévations latérales', sets: '3 × 15', charge: '10 kg' },
  { name: 'Dips lestés', sets: '3 × 12', charge: '+15 kg' },
  { name: 'Extensions poulie', sets: '3 × 12', charge: '25 kg' }
];

export default function WorkoutsScreen() {
  const player = useVideoPlayer(heroVideo, (p) => {
    p.loop = true;
    p.muted = true;
    p.play();
  });

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Entraînements</Text>

      <View style={styles.videoCard}>
        <VideoView
          player={player}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          nativeControls={false}
        />
        <LinearGradient
          colors={['rgba(0,0,0,0.10)', 'rgba(0,0,0,0.55)', 'rgba(0,0,0,0.92)']}
          locations={[0, 0.6, 1]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.videoContent}>
          <Chip>PROGRAMME EN COURS</Chip>
          <Text style={styles.videoTitle}>Hypertrophie{'\n'}Push · Pull · Legs</Text>
          <View style={styles.videoMetaRow}>
            <Text style={styles.videoMeta}>Semaine 3 / 8</Text>
            <Text style={styles.videoMeta}>14 séances faites</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Meter value={3 / 8} height={6} />
          </View>
        </View>
      </View>

      <SectionHeader>Cette semaine</SectionHeader>
      <View style={styles.dayList}>
        {WEEK_DAYS.map((day) => (
          <View key={day.name} style={styles.dayCard}>
            <Image source={{ uri: day.photo }} style={styles.dayThumb} />
            <View style={{ flex: 1 }}>
              <Text style={styles.dayName}>{day.name}</Text>
              <Text style={styles.dayDetail}>{day.detail}</Text>
            </View>
            {day.status === 'today' ? (
              <Chip>AUJOURD'HUI</Chip>
            ) : day.status === 'rest' ? (
              <Chip tone="cyan">RÉCUP</Chip>
            ) : (
              <Ionicons name="chevron-forward" size={18} color={colors.muted} />
            )}
          </View>
        ))}
      </View>

      <SectionHeader>Push Day — Détail</SectionHeader>
      <Card>
        {TODAY_EXERCISES.map((ex, i) => (
          <View key={ex.name} style={[styles.exerciseRow, i > 0 && styles.exerciseDivider]}>
            <View style={styles.exerciseIndex}>
              <Text style={styles.exerciseIndexText}>{i + 1}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.exerciseName}>{ex.name}</Text>
              <Text style={styles.exerciseMeta}>{ex.sets}</Text>
            </View>
            <Text style={styles.exerciseCharge}>{ex.charge}</Text>
          </View>
        ))}
        <View style={{ marginTop: spacing.md }}>
          <VoltButton label="Commencer Push Day" />
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: 130 },
  title: { color: colors.text, fontSize: 32, fontWeight: '800', marginBottom: spacing.lg },
  videoCard: {
    height: 240,
    borderRadius: radius.xl,
    overflow: 'hidden',
    backgroundColor: colors.card
  },
  videoContent: { flex: 1, justifyContent: 'flex-end', padding: spacing.lg },
  videoTitle: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    marginTop: 10,
    lineHeight: 31
  },
  videoMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  videoMeta: { color: colors.secondary, fontSize: 13, fontWeight: '600' },
  dayList: { gap: 10 },
  dayCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: 12,
    gap: 12
  },
  dayThumb: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.cardAlt
  },
  dayName: { color: colors.text, fontSize: 16, fontWeight: '700' },
  dayDetail: { color: colors.muted, fontSize: 12, marginTop: 3 },
  exerciseRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  exerciseDivider: { borderTopWidth: 1, borderTopColor: colors.separator },
  exerciseIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.voltDim,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  exerciseIndexText: { color: colors.volt, fontWeight: '800', fontSize: 13 },
  exerciseName: { color: colors.text, fontSize: 15, fontWeight: '600' },
  exerciseMeta: { color: colors.muted, fontSize: 12, marginTop: 2 },
  exerciseCharge: { color: colors.secondary, fontSize: 14, fontWeight: '700' }
});
