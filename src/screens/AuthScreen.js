import React, {useState} from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function AuthScreen() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    Alert.alert('Connexion', `Compte prêt à connecter: ${email || 'email à renseigner'}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>GYM STUDIO</Text>
      <Text style={styles.title}>{t('signin_title')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('email')}
        placeholderTextColor="#7D8798"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        placeholderTextColor="#7D8798"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity activeOpacity={0.84} onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>{t('signin_button')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111318',
    padding: 20,
    justifyContent: 'center'
  },
  kicker: {
    color: '#F4C95D',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 6
  },
  title: {
    color: '#FFFFFF',
    fontSize: 31,
    lineHeight: 36,
    fontWeight: '900',
    marginBottom: 18
  },
  input: {
    minHeight: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#303747',
    backgroundColor: '#181C25',
    color: '#FFFFFF',
    paddingHorizontal: 14,
    marginBottom: 12,
    fontSize: 15,
    fontWeight: '700'
  },
  button: {
    minHeight: 50,
    borderRadius: 8,
    backgroundColor: '#70D6A3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4
  },
  buttonText: {
    color: '#102018',
    fontSize: 15,
    fontWeight: '900'
  }
});
