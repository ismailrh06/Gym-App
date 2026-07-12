import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Pressable,
  Image,
  ImageSourcePropType
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radius, spacing } from '../theme';

export function Card({
  children,
  style
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return <View style={[styles.card, style]}>{children}</View>;
}

/** Apple-style uppercase section header */
export function SectionHeader({ children }: { children: string }) {
  return <Text style={styles.sectionHeader}>{children.toUpperCase()}</Text>;
}

export function Meter({
  value,
  color = colors.volt,
  height = 7
}: {
  value: number;
  color?: string;
  height?: number;
}) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <View style={[styles.meterTrack, { height, borderRadius: height / 2 }]}>
      <View
        style={[
          styles.meterFill,
          { width: `${pct}%`, backgroundColor: color, borderRadius: height / 2 }
        ]}
      />
    </View>
  );
}

export function StatBox({
  value,
  label,
  color = colors.text
}: {
  value: string;
  label: string;
  color?: string;
}) {
  return (
    <View style={styles.statBox}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export function Chip({
  children,
  tone = 'volt'
}: {
  children: string;
  tone?: 'volt' | 'neutral' | 'cyan';
}) {
  const map = {
    volt: { bg: colors.voltDim, fg: colors.volt },
    neutral: { bg: 'rgba(255,255,255,0.10)', fg: colors.secondary },
    cyan: { bg: 'rgba(0,215,185,0.16)', fg: colors.ringCyan }
  } as const;
  const t = map[tone];
  return (
    <View style={[styles.chip, { backgroundColor: t.bg }]}>
      <Text style={[styles.chipText, { color: t.fg }]}>{children}</Text>
    </View>
  );
}

export function VoltButton({
  label,
  onPress,
  small
}: {
  label: string;
  onPress?: () => void;
  small?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.voltButton,
        small && styles.voltButtonSmall,
        pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] }
      ]}
    >
      <Text style={[styles.voltButtonText, small && { fontSize: 14 }]}>{label}</Text>
    </Pressable>
  );
}

/** Photo card with dark gradient overlay — Fitness+ hero style */
export function PhotoCard({
  source,
  height = 210,
  children,
  style
}: {
  source: ImageSourcePropType;
  height?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.photoCard, { height }, style]}>
      <Image source={source} style={StyleSheet.absoluteFill} resizeMode="cover" />
      <LinearGradient
        colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.45)', 'rgba(0,0,0,0.88)']}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.photoCardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg
  },
  sectionHeader: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.6,
    marginBottom: spacing.sm,
    marginTop: spacing.xl
  },
  meterTrack: {
    backgroundColor: colors.track,
    overflow: 'hidden',
    width: '100%'
  },
  meterFill: { height: '100%' },
  statBox: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingVertical: 16,
    alignItems: 'center'
  },
  statValue: { fontSize: 22, fontWeight: '800' },
  statLabel: { color: colors.muted, fontSize: 11, marginTop: 4, letterSpacing: 0.3 },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.pill,
    alignSelf: 'flex-start'
  },
  chipText: { fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  voltButton: {
    backgroundColor: colors.volt,
    borderRadius: radius.pill,
    paddingVertical: 15,
    alignItems: 'center'
  },
  voltButtonSmall: { paddingVertical: 10, paddingHorizontal: 18 },
  voltButtonText: { color: '#000', fontWeight: '800', fontSize: 16 },
  photoCard: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    backgroundColor: colors.card
  },
  photoCardContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.lg
  }
});
