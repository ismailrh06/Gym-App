import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

const heroImage = require('../assets/gym-ai-hero.png');

const navItems = ['AI Coach', 'Programmes', 'Nutrition', 'Tarifs'];

const liveStats = [
  { value: '91', label: 'readiness', color: '#C9FF5B' },
  { value: '+2.5kg', label: 'charge conseillée', color: '#42F3FF' },
  { value: '76 min', label: 'séance optimale', color: '#FFD166' }
];

const modules = [
  {
    code: '01',
    title: 'Workout Engine',
    text: 'Séances calculées selon ton niveau, ta fatigue, ton matériel et ton historique.'
  },
  {
    code: '02',
    title: 'Recovery Scan',
    text: 'Score de forme, sommeil, intensité et signaux faibles avant de pousser lourd.'
  },
  {
    code: '03',
    title: 'Macro Control',
    text: 'Calories, protéines et repas reliés à ton objectif physique, pas juste à une liste.'
  }
];

const programCards = [
  { title: 'Alpha Strength', meta: '5x5 • lourd • 72 min', accent: '#C9FF5B', score: '98%' },
  { title: 'Hypertrophy Lab', meta: 'volume • pump • 61 min', accent: '#42F3FF', score: '92%' },
  { title: 'Cut Protocol', meta: 'full body • conditioning', accent: '#FFD166', score: '89%' }
];

const nutritionRows = [
  { label: 'Protéines', value: '168g', width: '88%', color: '#C9FF5B' },
  { label: 'Glucides', value: '244g', width: '72%', color: '#42F3FF' },
  { label: 'Lipides', value: '68g', width: '64%', color: '#FFD166' }
];

const plans = [
  { name: 'Start', price: '0€', text: 'Découvrir le suivi, les bases et les programmes starter.' },
  { name: 'Athlete AI', price: '19€', text: 'Le cockpit complet: entraînement, nutrition, récupération.' },
  { name: 'Coach Pro', price: '49€', text: 'Gestion clients, plans premium et analyse de progression.' }
];

export default function App() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 980;
  const isTablet = width >= 720;
  const containerStyle = isTablet ? { width: Math.min(width - 56, 1180) } : styles.mobileContainer;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <View style={[styles.hero, isDesktop ? styles.heroDesktop : styles.heroMobile]}>
          <Image source={heroImage} resizeMode="cover" style={styles.heroImage} />
          <View style={styles.heroOverlay} />
          <View style={styles.gridOverlay}>
            {Array.from({ length: 9 }).map((_, index) => (
              <View key={`line-${index}`} style={styles.gridLine} />
            ))}
          </View>

          <View style={[styles.nav, containerStyle]}>
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>GS</Text>
              </View>
              <View>
                <Text style={styles.brandName}>Gym Studio</Text>
                <Text style={styles.brandSub}>AI Performance</Text>
              </View>
            </View>
            {isTablet && (
              <View style={styles.navLinks}>
                {navItems.map((item) => (
                  <Text key={item} style={styles.navLink}>{item}</Text>
                ))}
              </View>
            )}
            {isTablet && (
              <TouchableOpacity activeOpacity={0.86} style={styles.navButton}>
                <Text style={styles.navButtonText}>Entrer</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.heroInner, containerStyle, isDesktop && styles.heroInnerDesktop]}>
            <View style={[styles.heroCopy, !isTablet && styles.heroCopyMobile, isDesktop && styles.heroCopyDesktop]}>
              <View style={styles.aiBadge}>
                <View style={styles.badgePulse} />
                <Text style={styles.aiBadgeText}>AI COACH ONLINE</Text>
              </View>
              <Text style={[styles.heroTitle, !isDesktop && styles.heroTitleMobile]}>
                {isTablet ? 'Transforme ta salle en cockpit de performance.' : 'Cockpit AI pour ta salle.'}
              </Text>
              <Text style={[styles.heroText, !isTablet && styles.heroTextMobile]}>
                {isTablet
                  ? 'Programmes intelligents, nutrition, récupération et progression dans une expérience sombre, premium et taillée pour les vrais pratiquants.'
                  : 'Programmes, nutrition et coaching dans un mood premium.'}
              </Text>
              <View style={[styles.heroActions, !isTablet && styles.heroActionsMobile]}>
                <TouchableOpacity activeOpacity={0.86} style={[styles.primaryButton, !isTablet && styles.mobileButton]}>
                  <Text style={styles.primaryButtonText}>Démarrer le scan</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.86} style={[styles.secondaryButton, !isTablet && styles.mobileButton]}>
                  <Text style={styles.secondaryButtonText}>Voir le système</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.aiPanel, !isDesktop && styles.aiPanelMobile]}>
              <View style={styles.panelTop}>
                <View>
                  <Text style={styles.panelMini}>LIVE ATHLETE SCAN</Text>
                  <Text style={styles.panelTitle}>Push Protocol</Text>
                </View>
                <View style={styles.panelStatus}>
                  <Text style={styles.panelStatusText}>ACTIVE</Text>
                </View>
              </View>

              <View style={styles.signalBox}>
                <Text style={styles.signalLabel}>AI verdict</Text>
                <Text style={styles.signalValue}>Monte la charge, garde 2 reps en réserve.</Text>
              </View>

              <View style={[styles.statsGrid, !isTablet && styles.statsGridMobile]}>
                {liveStats.map((item) => (
                  <View key={item.label} style={[styles.liveStat, !isTablet && styles.liveStatMobile]}>
                    <Text style={[styles.liveStatValue, { color: item.color }]}>{item.value}</Text>
                    <Text style={styles.liveStatLabel}>{item.label}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.exerciseStack}>
                {['Bench press 5x5', 'Incline dumbbell 4x8', 'Sled push 10 min'].map((item, index) => (
                  <View key={item} style={styles.exerciseLine}>
                    <Text style={styles.exerciseIndex}>0{index + 1}</Text>
                    <Text style={styles.exerciseName}>{item}</Text>
                    <View style={styles.exerciseDot} />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.darkBand}>
          <View style={[styles.metricsStrip, containerStyle, !isTablet && styles.metricsStripMobile]}>
            {liveStats.map((item) => (
              <View key={item.label} style={styles.metricCell}>
                <Text style={[styles.metricValue, { color: item.color }]}>{item.value}</Text>
                <Text style={styles.metricLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          <View style={[styles.sectionHeader, containerStyle]}>
            <Text style={styles.sectionEyebrow}>SYSTEME COMPLET</Text>
            <Text style={[styles.sectionTitle, !isDesktop && styles.sectionTitleMobile]}>
              Tout ressemble à une salle premium. Tout réagit comme un coach intelligent.
            </Text>
          </View>

          <View style={[styles.moduleGrid, containerStyle, !isDesktop && styles.moduleGridMobile]}>
            {modules.map((module) => (
              <View key={module.code} style={styles.moduleCard}>
                <Text style={styles.moduleCode}>{module.code}</Text>
                <Text style={styles.moduleTitle}>{module.title}</Text>
                <Text style={styles.moduleText}>{module.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.labBand}>
          <View style={[styles.labLayout, containerStyle, !isDesktop && styles.labLayoutMobile]}>
            <View style={styles.labCopy}>
              <Text style={styles.sectionEyebrow}>AI COMMAND CENTER</Text>
              <Text style={[styles.sectionTitle, !isDesktop && styles.sectionTitleMobile]}>
                Une interface qui donne envie de s'entraîner avant même d'arriver à la salle.
              </Text>
              <Text style={styles.sectionText}>
                Chaque bloc donne une décision utile: quoi faire, combien charger, quand récupérer, comment manger. Pas de bruit, seulement ce qui fait progresser.
              </Text>
            </View>

            <View style={styles.commandScreen}>
              <View style={styles.commandHeader}>
                <Text style={styles.commandTitle}>SESSION INTELLIGENCE</Text>
                <Text style={styles.commandTime}>18:30</Text>
              </View>
              <View style={styles.commandRows}>
                {programCards.map((program) => (
                  <View key={program.title} style={styles.commandRow}>
                    <View style={[styles.commandAccent, { backgroundColor: program.accent }]} />
                    <View style={styles.commandCopy}>
                      <Text style={styles.commandName}>{program.title}</Text>
                      <Text style={styles.commandMeta}>{program.meta}</Text>
                    </View>
                    <Text style={[styles.commandScore, { color: program.accent }]}>{program.score}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.programBand}>
          <View style={[styles.programLayout, containerStyle, !isDesktop && styles.programLayoutMobile]}>
            <View style={styles.programBoard}>
              <Text style={styles.boardLabel}>NEXT 7 DAYS</Text>
              {['Force', 'Volume', 'Conditioning', 'Recovery'].map((day, index) => (
                <View key={day} style={styles.boardRow}>
                  <Text style={styles.boardDay}>{day}</Text>
                  <View style={styles.boardTrack}>
                    <View style={[styles.boardFill, { width: `${54 + index * 10}%` }]} />
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.programCopyBlock}>
              <Text style={styles.sectionEyebrow}>PROGRAMMES</Text>
              <Text style={[styles.sectionTitle, !isDesktop && styles.sectionTitleMobile]}>
                Des protocoles qui ont l'air sérieux parce qu'ils le sont.
              </Text>
              <Text style={styles.sectionText}>
                Force, prise de muscle, perte de gras ou retour à la régularité: le site doit vendre une sensation de contrôle, pas juste une liste d'exercices.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.nutritionBand}>
          <View style={[styles.nutritionLayout, containerStyle, !isDesktop && styles.nutritionLayoutMobile]}>
            <View style={styles.nutritionCopy}>
              <Text style={styles.sectionEyebrow}>NUTRITION SYNC</Text>
              <Text style={[styles.sectionTitle, !isDesktop && styles.sectionTitleMobile]}>
                Les repas suivent le plan, pas l'inverse.
              </Text>
            </View>
            <View style={styles.macroPanel}>
              {nutritionRows.map((row) => (
                <View key={row.label} style={styles.macroRow}>
                  <View style={styles.macroTop}>
                    <Text style={styles.macroName}>{row.label}</Text>
                    <Text style={[styles.macroValue, { color: row.color }]}>{row.value}</Text>
                  </View>
                  <View style={styles.macroTrack}>
                    <View style={[styles.macroFill, { width: row.width, backgroundColor: row.color }]} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.priceBand}>
          <View style={[styles.sectionHeader, containerStyle]}>
            <Text style={styles.sectionEyebrow}>MEMBERSHIP</Text>
            <Text style={[styles.sectionTitle, !isDesktop && styles.sectionTitleMobile]}>
              Une offre premium, claire, prête à vendre.
            </Text>
          </View>
          <View style={[styles.priceGrid, containerStyle, !isDesktop && styles.priceGridMobile]}>
            {plans.map((plan, index) => (
              <View key={plan.name} style={[styles.priceCard, index === 1 && styles.priceCardFeatured]}>
                <Text style={styles.planName}>{plan.name}</Text>
                <Text style={styles.planPrice}>{plan.price}</Text>
                <Text style={styles.planText}>{plan.text}</Text>
                <TouchableOpacity activeOpacity={0.86} style={[styles.planButton, index === 1 && styles.planButtonFeatured]}>
                  <Text style={[styles.planButtonText, index === 1 && styles.planButtonTextFeatured]}>Choisir</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#05070A'
  },
  page: {
    flex: 1,
    backgroundColor: '#05070A'
  },
  mobileContainer: {
    alignSelf: 'center',
    width: 'calc(100vw - 36px)'
  },
  hero: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#05070A'
  },
  heroDesktop: {
    minHeight: 880
  },
  heroMobile: {
    minHeight: 940
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%'
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 4, 7, 0.48)'
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.16,
    flexDirection: 'row'
  },
  gridLine: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: 'rgba(66, 243, 255, 0.24)'
  },
  nav: {
    alignSelf: 'center',
    maxWidth: 1180,
    minHeight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  brandMark: {
    width: 46,
    height: 46,
    borderRadius: 8,
    backgroundColor: '#C9FF5B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    shadowColor: '#C9FF5B',
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 0 }
  },
  brandMarkText: {
    color: '#05070A',
    fontSize: 14,
    fontWeight: '900'
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900'
  },
  brandSub: {
    color: '#7E8B9C',
    fontSize: 11,
    fontWeight: '900',
    marginTop: 2
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navLink: {
    color: '#DCE6F1',
    fontSize: 14,
    fontWeight: '900',
    marginHorizontal: 14
  },
  navButton: {
    height: 44,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(201, 255, 91, 0.55)',
    backgroundColor: 'rgba(201, 255, 91, 0.10)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navButtonText: {
    color: '#C9FF5B',
    fontSize: 13,
    fontWeight: '900'
  },
  heroInner: {
    alignSelf: 'center',
    maxWidth: 1180,
    paddingTop: 92,
    paddingBottom: 76,
    zIndex: 2
  },
  heroInnerDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heroCopy: {
    width: '100%',
    maxWidth: 650
  },
  heroCopyMobile: {
    maxWidth: 330
  },
  heroCopyDesktop: {
    width: '55%',
    paddingRight: 38
  },
  aiBadge: {
    alignSelf: 'flex-start',
    minHeight: 38,
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(66, 243, 255, 0.40)',
    backgroundColor: 'rgba(66, 243, 255, 0.10)',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18
  },
  badgePulse: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#42F3FF',
    marginRight: 9
  },
  aiBadgeText: {
    color: '#DDFBFF',
    fontSize: 12,
    fontWeight: '900'
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 72,
    lineHeight: 76,
    fontWeight: '900',
    marginBottom: 20
  },
  heroTitleMobile: {
    fontSize: 42,
    lineHeight: 46
  },
  heroText: {
    color: '#D9E4EF',
    fontSize: 18,
    lineHeight: 29,
    maxWidth: 600,
    marginBottom: 30
  },
  heroTextMobile: {
    maxWidth: 315
  },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heroActionsMobile: {
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  primaryButton: {
    minHeight: 54,
    borderRadius: 8,
    backgroundColor: '#C9FF5B',
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginBottom: 12,
    shadowColor: '#C9FF5B',
    shadowOpacity: 0.38,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 8 }
  },
  primaryButtonText: {
    color: '#05070A',
    fontSize: 15,
    fontWeight: '900'
  },
  secondaryButton: {
    minHeight: 54,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.28)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900'
  },
  mobileButton: {
    width: '100%',
    maxWidth: 330,
    alignSelf: 'flex-start',
    marginRight: 0
  },
  aiPanel: {
    width: 410,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(66, 243, 255, 0.22)',
    backgroundColor: 'rgba(5, 9, 14, 0.82)',
    padding: 18,
    shadowColor: '#42F3FF',
    shadowOpacity: 0.2,
    shadowRadius: 34,
    shadowOffset: { width: 0, height: 0 }
  },
  aiPanelMobile: {
    width: '100%',
    maxWidth: 330,
    alignSelf: 'flex-start',
    marginTop: 34
  },
  panelTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  panelMini: {
    color: '#42F3FF',
    fontSize: 11,
    fontWeight: '900',
    marginBottom: 5
  },
  panelTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900'
  },
  panelStatus: {
    height: 32,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(201, 255, 91, 0.12)',
    justifyContent: 'center'
  },
  panelStatusText: {
    color: '#C9FF5B',
    fontSize: 11,
    fontWeight: '900'
  },
  signalBox: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    padding: 14,
    marginBottom: 14
  },
  signalLabel: {
    color: '#7E8B9C',
    fontSize: 11,
    fontWeight: '900',
    marginBottom: 6
  },
  signalValue: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '900'
  },
  statsGrid: {
    flexDirection: 'row',
    marginBottom: 14
  },
  statsGridMobile: {
    flexDirection: 'column'
  },
  liveStat: {
    flex: 1,
    minHeight: 82,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    padding: 10,
    marginRight: 8,
    justifyContent: 'center'
  },
  liveStatMobile: {
    marginRight: 0,
    marginBottom: 8
  },
  liveStatValue: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 5
  },
  liveStatLabel: {
    color: '#8E9CAF',
    fontSize: 10,
    fontWeight: '900'
  },
  exerciseStack: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.09)'
  },
  exerciseLine: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.07)'
  },
  exerciseIndex: {
    width: 34,
    color: '#42F3FF',
    fontSize: 12,
    fontWeight: '900'
  },
  exerciseName: {
    flex: 1,
    color: '#DDE7F2',
    fontSize: 14,
    fontWeight: '900'
  },
  exerciseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C9FF5B'
  },
  darkBand: {
    backgroundColor: '#05070A',
    paddingBottom: 92
  },
  metricsStrip: {
    alignSelf: 'center',
    marginTop: -54,
    minHeight: 118,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(66, 243, 255, 0.22)',
    backgroundColor: '#0A0E14',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOpacity: 0.45,
    shadowRadius: 28,
    shadowOffset: { width: 0, height: 18 }
  },
  metricsStripMobile: {
    flexDirection: 'column',
    marginTop: -32
  },
  metricCell: {
    flex: 1,
    minHeight: 112,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.07)'
  },
  metricValue: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 6
  },
  metricLabel: {
    color: '#8492A6',
    fontSize: 12,
    fontWeight: '900'
  },
  sectionHeader: {
    alignSelf: 'center',
    maxWidth: 1180,
    paddingTop: 92,
    paddingBottom: 30
  },
  sectionEyebrow: {
    color: '#C9FF5B',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 12
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 50,
    lineHeight: 56,
    fontWeight: '900',
    maxWidth: 850
  },
  sectionTitleMobile: {
    fontSize: 32,
    lineHeight: 38
  },
  sectionText: {
    color: '#9AA8BA',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 610,
    marginTop: 16
  },
  moduleGrid: {
    alignSelf: 'center',
    maxWidth: 1180,
    flexDirection: 'row'
  },
  moduleGridMobile: {
    flexDirection: 'column'
  },
  moduleCard: {
    flex: 1,
    minHeight: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.10)',
    backgroundColor: '#0B1017',
    padding: 22,
    marginRight: 14,
    marginBottom: 14
  },
  moduleCode: {
    color: '#42F3FF',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 34
  },
  moduleTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 12
  },
  moduleText: {
    color: '#94A2B4',
    fontSize: 15,
    lineHeight: 24
  },
  labBand: {
    backgroundColor: '#080B10',
    paddingVertical: 92
  },
  labLayout: {
    alignSelf: 'center',
    maxWidth: 1180,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labLayoutMobile: {
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  labCopy: {
    flex: 1,
    paddingRight: 42
  },
  commandScreen: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(201, 255, 91, 0.22)',
    backgroundColor: '#0D121A',
    padding: 18
  },
  commandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  commandTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900'
  },
  commandTime: {
    color: '#42F3FF',
    fontSize: 13,
    fontWeight: '900'
  },
  commandRows: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)'
  },
  commandRow: {
    minHeight: 96,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)'
  },
  commandAccent: {
    width: 5,
    height: 48,
    borderRadius: 3,
    marginRight: 14
  },
  commandCopy: {
    flex: 1
  },
  commandName: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 6
  },
  commandMeta: {
    color: '#8997AA',
    fontSize: 13,
    fontWeight: '800'
  },
  commandScore: {
    fontSize: 17,
    fontWeight: '900'
  },
  programBand: {
    backgroundColor: '#05070A',
    paddingVertical: 92
  },
  programLayout: {
    alignSelf: 'center',
    maxWidth: 1180,
    flexDirection: 'row',
    alignItems: 'center'
  },
  programLayoutMobile: {
    flexDirection: 'column-reverse',
    alignItems: 'stretch'
  },
  programBoard: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(66, 243, 255, 0.18)',
    backgroundColor: '#0B1017',
    padding: 22,
    marginRight: 38
  },
  boardLabel: {
    color: '#42F3FF',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 18
  },
  boardRow: {
    marginBottom: 22
  },
  boardDay: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 9
  },
  boardTrack: {
    height: 10,
    borderRadius: 8,
    backgroundColor: '#1D2631',
    overflow: 'hidden'
  },
  boardFill: {
    height: 10,
    borderRadius: 8,
    backgroundColor: '#C9FF5B'
  },
  programCopyBlock: {
    flex: 1
  },
  nutritionBand: {
    backgroundColor: '#081014',
    paddingVertical: 92
  },
  nutritionLayout: {
    alignSelf: 'center',
    maxWidth: 1180,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nutritionLayoutMobile: {
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  nutritionCopy: {
    flex: 1,
    paddingRight: 38
  },
  macroPanel: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#0B1017',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.10)',
    padding: 22
  },
  macroRow: {
    marginBottom: 22
  },
  macroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  macroName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900'
  },
  macroValue: {
    fontSize: 15,
    fontWeight: '900'
  },
  macroTrack: {
    height: 10,
    borderRadius: 8,
    backgroundColor: '#1D2631',
    overflow: 'hidden'
  },
  macroFill: {
    height: 10,
    borderRadius: 8
  },
  priceBand: {
    backgroundColor: '#05070A',
    paddingBottom: 100
  },
  priceGrid: {
    alignSelf: 'center',
    maxWidth: 1180,
    flexDirection: 'row'
  },
  priceGridMobile: {
    flexDirection: 'column'
  },
  priceCard: {
    flex: 1,
    minHeight: 270,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.10)',
    backgroundColor: '#0B1017',
    padding: 22,
    marginRight: 14,
    marginBottom: 14
  },
  priceCardFeatured: {
    borderColor: 'rgba(201, 255, 91, 0.55)',
    backgroundColor: '#111A13'
  },
  planName: {
    color: '#42F3FF',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 14
  },
  planPrice: {
    color: '#FFFFFF',
    fontSize: 46,
    fontWeight: '900',
    marginBottom: 14
  },
  planText: {
    color: '#9AA8BA',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 22
  },
  planButton: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  planButtonFeatured: {
    backgroundColor: '#C9FF5B',
    borderColor: '#C9FF5B'
  },
  planButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900'
  },
  planButtonTextFeatured: {
    color: '#05070A'
  }
});
