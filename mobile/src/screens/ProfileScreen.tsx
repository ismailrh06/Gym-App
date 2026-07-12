import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, StatBox, Chip } from '../components/UI';
import { colors, spacing, photos } from '../theme';

type IoniconName = keyof typeof Ionicons.glyphMap;

const SETTINGS: { label: string; hint?: string; icon: IoniconName; danger?: boolean }[] = [
  { label: 'Objectifs', hint: 'Prise de muscle', icon: 'flag-outline' },
  { label: 'Notifications', hint: 'Activées', icon: 'notifications-outline' },
  { label: 'Unités', hint: 'kg · cm', icon: 'options-outline' },
  { label: 'Abonnement', hint: 'Premium', icon: 'star-outline' },
  { label: 'Aide & support', icon: 'help-circle-outline' },
  { label: 'Se déconnecter', icon: 'log-out-outline', danger: true }
];

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Profil</Text>

      <View style={styles.identity}>
        <Image source={{ uri: photos.kettlebell }} style={styles.avatar} />
        <Text style={styles.name}>Ismaël R.</Text>
        <View style={{ marginTop: 8 }}>
          <Chip>★ MEMBRE PREMIUM</Chip>
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatBox value="38" label="séances" />
        <StatBox value="12" label="jours de suite" color={colors.volt} />
        <StatBox value="4" label="PRs ce mois" />
      </View>

      <Card style={{ marginTop: spacing.lg, paddingVertical: 4, paddingHorizontal: 0 }}>
        {SETTINGS.map((item, i) => (
          <Pressable
            key={item.label}
            style={({ pressed }) => [
              styles.settingRow,
              i > 0 && styles.settingDivider,
              pressed && { backgroundColor: 'rgba(255,255,255,0.04)' }
            ]}
          >
            <View style={[styles.settingIcon, item.danger && styles.settingIconDanger]}>
              <Ionicons
                name={item.icon}
                size={17}
                color={item.danger ? colors.danger : colors.secondary}
              />
            </View>
            <Text style={[styles.settingLabel, item.danger && { color: colors.danger }]}>
              {item.label}
            </Text>
            <View style={styles.settingRight}>
              {item.hint ? <Text style={styles.settingHint}>{item.hint}</Text> : null}
              {!item.danger && (
                <Ionicons name="chevron-forward" size={16} color={colors.muted} />
              )}
            </View>
          </Pressable>
        ))}
      </Card>

      <Text style={styles.version}>AthletIQ Mobile · v1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: 130 },
  title: { color: colors.text, fontSize: 32, fontWeight: '800', marginBottom: spacing.lg },
  identity: { alignItems: 'center', marginBottom: spacing.lg },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.volt
  },
  name: { color: colors.text, fontSize: 22, fontWeight: '800', marginTop: 12 },
  statsRow: { flexDirection: 'row', gap: 10 },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    gap: 12
  },
  settingDivider: { borderTopWidth: 1, borderTopColor: colors.separator },
  settingIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: colors.cardAlt,
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingIconDanger: { backgroundColor: 'rgba(255,69,58,0.14)' },
  settingLabel: { color: colors.text, fontSize: 15, fontWeight: '600', flex: 1 },
  settingRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  settingHint: { color: colors.muted, fontSize: 13 },
  version: {
    color: colors.muted,
    fontSize: 12,
    textAlign: 'center',
    marginTop: spacing.xl
  }
});
