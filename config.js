/* Settings for Emma's netball app (same app code as Training, different setup). */
window.APP_CFG = {
  ns: 'nb',                       // own storage on the phone
  name: 'Netball',
  food: false,                    // no food tracking
  fitbit: false,                  // no Fitbit
  schedule: {},                   // no fixed weekdays: the 8-week program decides
  program: { weeks: 8 },
  checkin: [],                    // weight only
  weightGoal: null,               // add "Goal weight" + "Start weight" in the Info sheet if wanted
  sport: {
    type: 'netball', label: 'Netball', icon: '🏐', sub: 'Training, matches, shooting practice', defMin: 90,
    kinds: [['Training', '🏐'], ['Match', '🏆'], ['Club session', '👟'], ['Shooting', '🎯'], ['Footwork', '👣']],
    match: ['Match'], res: ['Goals for', 'Goals against'], resWord: 'score', resFmt: 'score'
  },
  accent: { acc: '#b49bff', ink: '#160b3a', rgb: '180,155,255' }
};
