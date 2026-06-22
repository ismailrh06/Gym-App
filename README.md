# Gym Studio

Expo mobile/web app for people who train at the gym. The first version includes a styled dashboard, workout plans, a rest timer, nutrition tracking mock data, and a profile/progress area.

## Getting started

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the app (Expo):

```bash
npm run start
# or
yarn start
```

Notes
- Fill `/src/firebase/config.js` with your Firebase project credentials when you are ready to save real users.
- `react-i18next` is configured with French as the default language and English fallback.
- NativeWind is still enabled, but the current screens use React Native `StyleSheet` for predictable mobile layout.

## Product areas

- Today: daily plan, quick actions, checklist, and coach insight.
- Programs: workout plans by goal with exercise previews.
- Timer: rest presets, start/pause, and recovery indicators.
- Nutrition: calories, macros, meals, and shopping list.
- Profile: weekly load chart, goals, and preferences.

## Next steps

- Configure Firebase Auth and Firestore for real accounts.
- Replace mock workout/nutrition arrays with persisted models.
- Add form flows for creating sessions, meals, and goals.
- Add more French and English copy once the feature set is final.

Troubleshooting notes
- This environment experienced package registry/version errors while installing dependencies. If you see `ETARGET`/`E404` errors, check your network or try `yarn` on your machine.
