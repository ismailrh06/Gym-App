# AthletIQ Mobile

Application mobile de fitness (iOS / Android) construite avec **Expo** et **React Native** en **TypeScript**. Elle accompagne l'utilisateur dans son entraînement, sa nutrition et le suivi de sa progression.

## Fonctionnalités

- **Accueil** — tableau de bord quotidien et accès rapide aux séances
- **Training** — programmes et séances d'entraînement
- **Nutrition** — suivi nutritionnel et recommandations
- **Progrès** — statistiques et évolution des performances
- **Profil** — informations et préférences de l'utilisateur

L'interface repose sur un thème sombre premium (dégradés, effets de flou, iconographie Ionicons) avec un écran d'accueil immersif.

## Stack technique

| Outil | Version |
| --- | --- |
| Expo SDK | 57 |
| React Native | 0.86 |
| React | 19.2 |
| TypeScript | 5.x |

Modules Expo utilisés : `expo-blur`, `expo-linear-gradient`, `expo-video`, `expo-status-bar`, `@expo/vector-icons`.

## Prérequis

- **Node.js** ≥ 20 et **npm**
- **Xcode** + Command Line Tools (pour iOS) et **CocoaPods**
- **Android Studio** + un émulateur ou un appareil physique (pour Android)

## Installation

```bash
cd mobile
npm install
npx pod-install   # dépendances natives iOS
```

## Lancement

```bash
npm run ios       # compile et lance sur le simulateur iOS
npm run android   # compile et lance sur un émulateur/appareil Android
npm run start     # démarre uniquement le serveur de développement (Metro)
```

## Structure du projet

```
mobile/
├── src/
│   ├── App.tsx            # Point d'entrée : écran d'accueil + navigation par onglets
│   ├── theme.ts           # Couleurs, typographie et assets du thème
│   ├── components/
│   │   └── UI.tsx         # Composants UI réutilisables (boutons, cartes…)
│   └── screens/
│       ├── HomeScreen.tsx
│       ├── WorkoutsScreen.tsx
│       ├── NutritionScreen.tsx
│       ├── ProgressScreen.tsx
│       └── ProfileScreen.tsx
├── ios/                   # Projet natif iOS (généré par Expo prebuild)
├── app.json               # Configuration Expo (nom, bundle id, icônes…)
└── package.json
```

## Dépannage

- **Erreur de codesign iOS** (« resource fork, Finder information… ») : nettoyer les attributs étendus avant de recompiler :
  ```bash
  xattr -cr node_modules ios/Pods
  ```
- **Scripts de build introuvables** (`with-environment.sh: No such file or directory`) : relancer `npx pod-install` après toute réinstallation de `node_modules`.
- **Bundle obsolète après une modification** : recharger l'app une seconde fois ou redémarrer Metro avec `npm run start -- --clear`.
