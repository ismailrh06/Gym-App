import React, {useState, useRef, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const presets = [
  { label: 'Force', seconds: 180 },
  { label: 'Hypertrophie', seconds: 90 },
  { label: 'Circuit', seconds: 45 }
];

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default function TimerScreen(){
  const [seconds, setSeconds] = useState(90);
  const [selectedPreset, setSelectedPreset] = useState('Hypertrophie');
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(()=>{
    if(running){
      intervalRef.current = setInterval(()=>{
        setSeconds((current) => {
          if (current <= 1) {
            setRunning(false);
            return 0;
          }
          return current - 1;
        });
      }, 1000);
    } else if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return ()=> clearInterval(intervalRef.current);
  },[running]);

  const pickPreset = (preset) => {
    setSelectedPreset(preset.label);
    setSeconds(preset.seconds);
    setRunning(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.kicker}>REPOS</Text>
      <Text style={styles.title}>Minuteur intelligent</Text>

      <View style={styles.timerPanel}>
        <Text style={styles.timerLabel}>{selectedPreset}</Text>
        <Text style={styles.timerValue}>{formatTime(seconds)}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${Math.max(8, Math.min(100, (seconds / 180) * 100))}%` }]} />
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity activeOpacity={0.84} onPress={() => setSeconds((value) => Math.max(15, value - 15))} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>-15s</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.84} onPress={() => setRunning((value) => !value)} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{running ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.84} onPress={() => setSeconds((value) => Math.min(300, value + 15))} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>+15s</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Presets</Text>
      <View style={styles.presets}>
        {presets.map((preset) => {
          const selected = selectedPreset === preset.label;
          return (
            <TouchableOpacity
              key={preset.label}
              activeOpacity={0.84}
              onPress={() => pickPreset(preset)}
              style={[styles.presetButton, selected && styles.presetButtonActive]}
            >
              <Text style={[styles.presetLabel, selected && styles.presetLabelActive]}>{preset.label}</Text>
              <Text style={[styles.presetTime, selected && styles.presetLabelActive]}>{formatTime(preset.seconds)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.recoveryPanel}>
        <Text style={styles.sectionTitle}>Récupération</Text>
        <View style={styles.recoveryRow}>
          <Text style={styles.recoveryName}>Sommeil</Text>
          <Text style={styles.recoveryValue}>7h24</Text>
        </View>
        <View style={styles.recoveryRow}>
          <Text style={styles.recoveryName}>Fatigue déclarée</Text>
          <Text style={styles.recoveryValue}>Moyenne</Text>
        </View>
        <View style={styles.recoveryRow}>
          <Text style={styles.recoveryName}>Charge conseillée</Text>
          <Text style={styles.recoveryValue}>+2.5kg</Text>
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
    color: '#70D6A3',
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
  timerPanel: {
    borderRadius: 8,
    backgroundColor: '#1B202A',
    borderWidth: 1,
    borderColor: '#303747',
    padding: 18,
    marginBottom: 22
  },
  timerLabel: {
    color: '#AEB8C8',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6
  },
  timerValue: {
    color: '#FFFFFF',
    fontSize: 70,
    lineHeight: 78,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 12
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#2A303C',
    overflow: 'hidden',
    marginBottom: 18
  },
  progressFill: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#F4C95D'
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  secondaryButton: {
    width: 72,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#232936',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondaryButtonText: {
    color: '#DDE3EE',
    fontSize: 14,
    fontWeight: '900'
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F4C95D',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  primaryButtonText: {
    color: '#151515',
    fontSize: 15,
    fontWeight: '900'
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10
  },
  presets: {
    flexDirection: 'row',
    marginBottom: 22
  },
  presetButton: {
    flex: 1,
    minHeight: 78,
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B',
    padding: 11,
    marginRight: 8,
    justifyContent: 'center'
  },
  presetButtonActive: {
    borderColor: '#70D6A3',
    backgroundColor: '#1E3028'
  },
  presetLabel: {
    color: '#AEB8C8',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 8
  },
  presetTime: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900'
  },
  presetLabelActive: {
    color: '#70D6A3'
  },
  recoveryPanel: {
    borderRadius: 8,
    backgroundColor: '#181C25',
    borderWidth: 1,
    borderColor: '#292F3B',
    padding: 16
  },
  recoveryRow: {
    minHeight: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#292F3B'
  },
  recoveryName: {
    color: '#AEB8C8',
    fontSize: 14,
    fontWeight: '700'
  },
  recoveryValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900'
  }
});
