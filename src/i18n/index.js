import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      welcome_title: 'Bienvenue sur Gym Studio',
      welcome_subtitle: 'Planifie tes séances, suis tes progrès et garde le cap.',
      get_started: 'Commencer',
      signin_title: 'Connexion',
      email: 'Email',
      password: 'Mot de passe',
      signin_button: 'Se connecter',
      workouts_title: 'Programmes',
      profile_title: 'Profil',
      profile_subtitle: 'Tes objectifs, tes habitudes et tes statistiques',
      timer_title: 'Minuteur',
      start: 'Start',
      pause: 'Pause'
    }
  },
  en: {
    translation: {
      welcome_title: 'Welcome to Gym App',
      welcome_subtitle: 'Plan, track and progress your workouts.',
      get_started: 'Get started',
      signin_title: 'Sign in',
      email: 'Email',
      password: 'Password',
      signin_button: 'Sign in',
      workouts_title: 'Workouts',
      profile_title: 'Profile',
      profile_subtitle: 'Your training goals and stats',
      timer_title: 'Timer',
      start: 'Start',
      pause: 'Pause'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
