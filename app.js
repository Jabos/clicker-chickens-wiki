/* Clicker Chickens Classic Wiki Application */
(function() {
  let WIKI = window.WIKI_DATA || null;
  let currentLang = localStorage.getItem('cc_wiki_lang') || 'es';
  let currentTheme = localStorage.getItem('cc_wiki_theme') || 'light';
  let currentView = 'pollopedia';
  let currentChickenFilterZone = 'all';
  let currentChickenFilterRole = 'all';
  let currentChickenSort = 'id_asc';
  let currentChickenViewMode = 'grid'; // 'grid' or 'table'
  let currentItemTypeFilter = 'all';
  let currentItemZoneFilter = 'all';

  const t = {
    es: {
      siteTitle: "Wiki Clicker Chickens",
      siteSubtitle: "Enciclopedia Oficial",
      searchPlaceholder: "Buscar pollos, objetos, poderes, pasivas...",
      themeDark: "Modo Oscuro",
      themeLight: "Modo Claro",
      navSecEncyclopedia: "Enciclopedia",
      navChickens: "Pollopedia",
      navItems: "Objetos",
      navPowers: "Poderes",
      navPassives: "Pasivas",
      navStates: "Efectos de Estado",
      navZones: "Zonas y Torneos",
      navAchievements: "Logros",
      navMechanics: "Guías y Mecánicas",
      calcStatsNav: "Calculadora de Stats",
      sim2vs2Nav: "Simulador 2vs2",
      secChickensDesc: "Lista completa de los 151 pollos, estadísticas base, habilidades y hábitats.",
      secItemsDesc: "Catálogo completo de los 75 objetos consumibles y equipables con sus efectos.",
      secPowersDesc: "52 poderes especiales activables en combate y los pollos que los poseen.",
      secPassivesDesc: "151 habilidades pasivas que alteran el combate y qué pollos las tienen.",
      secStatesDesc: "Los 7 efectos de estado, cómo funcionan por turno y cómo contrarrestarlos.",
      secZonesDesc: "Las 9 zonas del juego, costos de viaje, especies salvajes, tiendas y torneos.",
      secAchievementsDesc: "Los 22 logros del juego y sus requisitos de desbloqueo.",
      secMechanicsDesc: "Fórmulas de experiencia, crianza de huevos, probabilidades shiny y laboratorio de fusión.",
      filterAllZones: "Todas las zonas",
      filterEvolutions: "Evoluciones",
      sortIdAsc: "Número (#1-#151)",
      sortNameAsc: "Nombre (A-Z)",
      sortLifeDesc: "Vida más alta",
      sortDmgDesc: "Daño más alto",
      sortArmDesc: "Armadura más alta",
      sortSpdDesc: "Velocidad más alta",
      sortPwrDesc: "Poder más alto",
      sortTotalDesc: "Total de Stats más alto",
      viewGrid: "Cuadrícula",
      viewTable: "Tabla",
      thId: "#",
      thSprite: "Sprite",
      thName: "Nombre",
      thHp: "Vida",
      thAtk: "Daño",
      thDef: "Armadura",
      thSpd: "Velocidad",
      thPwr: "Poder",
      thTotal: "Total",
      thPassive: "Pasiva",
      thPower: "Poder",
      thItem: "Objeto",
      thType: "Tipo",
      thPrice: "Venta",
      thShopPrice: "Tienda",
      thWhere: "Zonas",
      thEffect: "Efecto",
      thChickens: "Pollos con esta habilidad",
      thChickensHidden: "Pollos con este Poder Oculto",
      thIcon: "Icono",
      thTitle: "Título",
      thUnlockReq: "Requisito de Desbloqueo",
      consumable: "Consumible",
      equipable: "Equipable",
      allTypes: "Todos los tipos",
      statBaseTitle: "Estadísticas Base",
      statLife: "Vida (HP)",
      statDamage: "Daño (ATK)",
      statArmor: "Armadura (DEF)",
      statSpeed: "Velocidad (SPD)",
      statPowerAmount: "Poder (PWR)",
      statTotal: "Total de Stats",
      combatSkillsTitle: "⚡ Habilidades de Combate",
      passiveSkill: "Habilidad Pasiva",
      activePower: "Poder Activo",
      hiddenPower: "Poder Oculto",
      noHiddenPower: "No puede poseer poder oculto (Transformación en combate)",
      powerCost: "Coste de Carga de Poder",
      energyPoints: "puntos de energía.",
      viewAllWithPassive: "→ Ver todos los pollos con esta pasiva",
      viewAllWithPower: "→ Ver todos los pollos con este poder",
      viewCombatPowers: "→ Ver poderes de combate",
      tacticalGuideTitle: "Guía Táctica de Combate 2vs2",
      tacticalArchetype: "Arquetipo Táctico",
      powerCycle: "Ciclo de Poder",
      turn: "turno",
      turns: "turnos",
      tacticalDuoRole: "Función en el Dúo 2vs2:",
      recommendedPartners: "Compañeros Recomendados:",
      key2vs2Items: "Ítems Clave en 2vs2:",
      howToCounter: "Cómo Contrarrestarlo (Si es tu Rival):",
      defaultItem: "Objeto Inicial",
      evolutionHeader: "Línea de Evolución",
      evolutionOnlyWarn: "Pollo de Evolución: No puede aparecer en combates salvajes, tienda diaria ni huevos.",
      habitatsHeader: "Hábitats y Obtención",
      wildCombats: "Combates Salvajes",
      eggPools: "Eclosión de Huevos",
      wildHabitats: "Hábitat Salvaje",
      noWild: "No aparece en estado salvaje",
      noEgg: "No disponible en huevos de tienda",
      zoneShopTitle: "🛒 Tienda de la Zona",
      recommendedLevel: "Nivel recomendado:",
      travelCost: "Costo de viaje:",
      speciesCount: "especies",
      tournamentCup: "Copa del Torneo",
      entryFee: "Inscripción",
      prizeMoney: "Premio",
      roundsCount: "Rondas:",
      tournamentRule: "Regla Especial",
      tournamentRewards: "Recompensas por Victoria",
      tournamentRoster: "Equipos Rivales por Ronda",
      round: "Ronda",
      lvl: "Nivel",
      prevBtn: "« Anterior",
      nextBtn: "Siguiente »",
      backToList: "← Volver a la lista",
      notFound: "No se encontraron resultados.",
      searchBadgeChicken: "Pollo",
      searchBadgeItem: "Objeto",
      searchBadgePassive: "Pasiva",
      searchBadgePower: "Poder",
      searchBadgeZone: "Zona",
      searchBadgeAchievement: "Logro",
      footerGen: "Generada directamente de los datos del juego v0.121",
      footerHosting: "Diseñada para alojarse gratis en",
      footerStyle: "Estilo clásico, rápido y ligero",
      navSecTools: "Herramientas y Combate",
      navCompare: "Comparador",
      navTeamBuilder: "Creador de Equipos",
      navRanking: "Ranking de Stats",
      navChangelog: "Notas de Parche",
      filterAllRoles: "Todos los Roles",
      roleTank: "Tanques Defensivos",
      roleCannon: "Cañones de Cristal",
      roleSpeed: "Velocistas Ágiles",
      roleBattery: "Baterías de Poder",
      roleFreeze: "Control / Congelar",
      rolePoison: "Veneno / Infección",
      roleHealer: "Soporte Curativo",
      roleRevive: "Resurrección",
      compareTitle: "Comparador Cara a Cara",
      compareDesc: "Compara estadísticas base, ciclos de poder y habilidades entre dos pollos lado a lado.",
      chickenA: "Primer Pollo",
      chickenB: "Segundo Pollo",
      swapChickens: "⇄ Intercambiar",
      randomChickens: "🎲 Aleatorio",
      teamBuilderTitle: "Creador de Equipos 2vs2",
      teamBuilderDesc: "Diseña tu dúo titular con objetos equipados y analiza sus sinergias de combate en tiempo real.",
      slot1Title: "Posición 1 (Vanguardia)",
      slot2Title: "Posición 2 (Retaguardia)",
      selectItem: "Seleccionar Objeto",
      noItem: "-- Sin Objeto --",
      synergyAnalysis: "Análisis Táctico del Dúo",
      testInSimulator: "⚔️ Probar Dúo en el Simulador 2vs2",
      combinedLife: "Vida Combinada",
      avgSpeed: "Velocidad Promedio",
      estDamage: "Daño Total",
      savedTeams: "Equipos Guardados",
      saveTeam: "Guardar Equipo",
      loadTeam: "Cargar",
      deleteTeam: "Eliminar",
      exportCode: "Exportar Código",
      importCode: "Importar Código",
      teamName: "Nombre del Equipo",
      levelLabel: "Nivel",
      geneticsLabel: "Valores Genéticos",
      compareRadarTitle: "Radar Comparativo de Estadísticas Base",
      compareRadarDesc: "Superposición poligonal de atributos para visualizar la especialización de ambos pollos.",
      trainingLabel: "Valores de Entrenamiento",
      targetAiLabel: "Objetivo Táctico",
      useHiddenPowerLabel: "Usar Poder Oculto",
      useBasePower: "⚡ Poder Base",
      useHiddenPower: "✨ Poder Oculto",
      powerInBattle: "Poder en Batalla",
      combatStatsLabel: "Estadísticas en Combate",
      teamSavedSuccess: "¡Equipo guardado con éxito!",
      teamLoadedSuccess: "¡Equipo cargado con éxito!",
      teamDeletedSuccess: "Equipo eliminado.",
      codeCopied: "¡Código de equipo copiado al portapapeles!",
      invalidCode: "Código de equipo no válido.",
      promptImportCode: "Pega aquí el código del equipo (formato CC-T1_...):",
      promptTeamName: "Ingresa el nombre para tu equipo:",
      presetMetaHeader: "⭐ Metagame & Presets Oficiales",
      customTeamsHeader: "💾 Mis Equipos Guardados",
      randomTeamBtn: "Equipo Aleatorio",
      rankingTitle: "Ranking de Estadísticas",
      rankingDesc: "Clasificación oficial de los mejores pollos del juego según estadísticas base, potencial máximo y roles tácticos.",
      rankingTabMax: "⚡ Máximos en Combate (Nv. 100 Perfectos)",
      rankingTabBase: "🌱 Estadísticas Base (Nacimiento)",
      rankingTabArchetypes: "🎖️ Mejores por Arquetipo",
      rankingMaxDesc: "Estadísticas reales calculadas a Nivel 100 con Genética 100 (Deseo) y Entrenamiento al 2.00x (Perfectos).",
      rankingBaseDesc: "Clasificación según los atributos base puros de nacimiento de cada especie (Nivel 1 sin entrenar).",
      rankingArchDesc: "Los pollos más determinantes del metagame agrupados por su rol táctico y función en equipos 2vs2.",
      topSpeed: "⚡ Mayor Velocidad Base",
      topDamage: "🗡️ Mayor Daño Base",
      topArmor: "🛡️ Mayor Armadura Base",
      topLife: "❤️ Mayor Vida Base",
      topPower: "✨ Mayor Carga de Poder Base",
      topTotal: "👑 Mayor Suma Total Base",
      topSpeedMax: "⚡ Mayor Velocidad Real (Nv. 100)",
      topDamageMax: "🗡️ Mayor Daño Real (Nv. 100)",
      topArmorMax: "🛡️ Mayor Armadura Real (Nv. 100)",
      topLifeMax: "❤️ Mayor Vida Real (Nv. 100)",
      topPowerMax: "✨ Mayor Carga de Poder (Nv. 100)",
      topTotalMax: "👑 Mayor Poder Total (Nv. 100)",
      archTanksTitle: "🛡️ Tanques & Bastiones Defensivos",
      archTanksSub: "Especialistas en absorber daño, reducir impactos y proteger a su compañero.",
      archStrikersTitle: "🗡️ Cañones de Cristal & Rematadores",
      archStrikersSub: "Poder ofensivo demoledor para derribar amenazas en los primeros turnos.",
      archSpeedstersTitle: "⚡ Velocistas & Evasión",
      archSpeedstersSub: "Dominan la iniciativa de turno y eluden ataques con alta esquiva.",
      archBatteriesTitle: "✨ Baterías de Poder (Casters)",
      archBatteriesSub: "Generan energía masiva para activar habilidades devastadoras cada 1-2 turnos.",
      archFreezeTitle: "❄️ Control de Estado & Congelamiento",
      archFreezeSub: "Anulan turnos enemigos mediante congelación, sueño o parálisis.",
      archPoisonTitle: "🧪 Veneno, Quemadura & Desgaste",
      archPoisonSub: "Desgastan la salud rival gradualmente turno tras turno ignorando armadura.",
      archHealersTitle: "💚 Soporte Curativo & Regeneración",
      archHealersSub: "Restauran vitalidad y sostienen al equipo en combates prolongados.",
      archReviveTitle: "🔄 Resurrección & Supervivencia Extrema",
      archReviveSub: "Capaces de volver a la vida tras caer derrotados o resistir golpes fatales.",
      changelogTitle: "Registro de Versiones y Notas de Parche",
      changelogDesc: "Historial oficial de cambios, novedades, balances de combate y correcciones del juego."
    },
    en: {
      siteTitle: "Clicker Chickens Wiki",
      siteSubtitle: "Official Encyclopedia",
      searchPlaceholder: "Search chickens, items, powers, passives...",
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
      navSecEncyclopedia: "Encyclopedia",
      navChickens: "Chickens",
      navItems: "Items",
      navPowers: "Powers",
      navPassives: "Passives",
      navStates: "Status Effects",
      navZones: "Zones & Tournaments",
      navAchievements: "Achievements",
      navMechanics: "Guides & Mechanics",
      calcStatsNav: "Stats Calculator",
      sim2vs2Nav: "2vs2 Simulator",
      secChickensDesc: "Complete encyclopedia of all 151 chickens, base stats, skills and habitats.",
      secItemsDesc: "Complete catalog of all 75 consumable and equipable items and effects.",
      secPowersDesc: "52 active powers usable during combat and which chickens possess them.",
      secPassivesDesc: "151 combat passive skills and the chickens that have them.",
      secStatesDesc: "The 7 status effects, turn triggers, damage formulas and counters.",
      secZonesDesc: "The 9 game zones, travel costs, wild encounters, shop catalogs and tournaments.",
      secAchievementsDesc: "All 22 achievements and their unlock conditions.",
      secMechanicsDesc: "Experience formula, egg breeding, shiny odds and laboratory fusion.",
      filterAllZones: "All Zones",
      filterEvolutions: "Evolutions",
      sortIdAsc: "Number (#1-#151)",
      sortNameAsc: "Name (A-Z)",
      sortLifeDesc: "Highest Life",
      sortDmgDesc: "Highest Damage",
      sortArmDesc: "Highest Armor",
      sortSpdDesc: "Highest Speed",
      sortPwrDesc: "Highest Power",
      sortTotalDesc: "Highest Total Stats",
      viewGrid: "Grid",
      viewTable: "Table",
      thId: "#",
      thSprite: "Sprite",
      thName: "Name",
      thHp: "Life",
      thAtk: "Damage",
      thDef: "Armor",
      thSpd: "Speed",
      thPwr: "Power",
      thTotal: "Total",
      thPassive: "Passive",
      thPower: "Power",
      thItem: "Item",
      thType: "Type",
      thPrice: "Sell",
      thShopPrice: "Shop",
      thWhere: "Zones",
      thEffect: "Effect",
      thChickens: "Chickens with this skill",
      thChickensHidden: "Chickens with this Hidden Power",
      thIcon: "Icon",
      thTitle: "Title",
      thUnlockReq: "Unlock Requirement",
      consumable: "Consumable",
      equipable: "Equipable",
      allTypes: "All Types",
      statBaseTitle: "Base Stats",
      statLife: "Life (HP)",
      statDamage: "Damage (ATK)",
      statArmor: "Armor (DEF)",
      statSpeed: "Speed (SPD)",
      statPowerAmount: "Power (PWR)",
      statTotal: "Total Stats",
      combatSkillsTitle: "⚡ Combat Skills",
      passiveSkill: "Passive Skill",
      activePower: "Active Power",
      hiddenPower: "Hidden Power",
      noHiddenPower: "Cannot possess hidden power (Combat transformation)",
      powerCost: "Power Energy Required",
      energyPoints: "energy points.",
      viewAllWithPassive: "→ View all chickens with this passive",
      viewAllWithPower: "→ View all chickens with this power",
      viewCombatPowers: "→ View combat powers",
      tacticalGuideTitle: "2vs2 Combat Tactical Guide",
      tacticalArchetype: "Tactical Archetype",
      powerCycle: "Power Cycle",
      turn: "turn",
      turns: "turns",
      tacticalDuoRole: "2vs2 Duo Role:",
      recommendedPartners: "Recommended Partners:",
      key2vs2Items: "Key 2vs2 Items:",
      howToCounter: "How to Counter (If Enemy):",
      defaultItem: "Held Item",
      evolutionHeader: "Evolution Line",
      evolutionOnlyWarn: "Evolution Chicken: Cannot appear in wild combats, daily shop, or eggs.",
      habitatsHeader: "Habitats & Locations",
      wildCombats: "Wild Combats",
      eggPools: "Egg Pools",
      wildHabitats: "Wild Habitat",
      noWild: "Does not appear wild",
      noEgg: "Not available in shop eggs",
      zoneShopTitle: "🛒 Zone Shop",
      recommendedLevel: "Recommended Level:",
      travelCost: "Travel cost:",
      speciesCount: "species",
      tournamentCup: "Tournament Cup",
      entryFee: "Entry Fee",
      prizeMoney: "Prize",
      roundsCount: "Rounds:",
      tournamentRule: "Special Rule",
      tournamentRewards: "Victory Rewards",
      tournamentRoster: "Opponent Teams by Round",
      round: "Round",
      lvl: "Level",
      prevBtn: "« Previous",
      nextBtn: "Next »",
      backToList: "← Back to list",
      notFound: "No matching results found.",
      searchBadgeChicken: "Chicken",
      searchBadgeItem: "Item",
      searchBadgePassive: "Passive",
      searchBadgePower: "Power",
      searchBadgeZone: "Zone",
      searchBadgeAchievement: "Achievement",
      footerGen: "Generated directly from game data v0.121",
      footerHosting: "Designed for free hosting on",
      footerStyle: "Classic, lightweight and fast style",
      navSecTools: "Tools & Combat",
      navCompare: "Comparator",
      navTeamBuilder: "Team Builder",
      navRanking: "Stat Rankings",
      navChangelog: "Patch Notes",
      filterAllRoles: "All Roles",
      roleTank: "Defensive Tanks",
      roleCannon: "Glass Cannons",
      roleSpeed: "Agile Speedsters",
      roleBattery: "Skill Batteries",
      roleFreeze: "Control / Freeze",
      rolePoison: "Poison / Infection",
      roleHealer: "Healing Support",
      roleRevive: "Revival",
      compareTitle: "Head-to-Head Comparator",
      compareDesc: "Compare species base stats, power cycles and combat abilities side-by-side.",
      chickenA: "First Chicken",
      chickenB: "Second Chicken",
      swapChickens: "⇄ Swap",
      randomChickens: "🎲 Random",
      teamBuilderTitle: "2vs2 Team Builder",
      teamBuilderDesc: "Design your starting duo with held items and evaluate combat synergies in real time.",
      slot1Title: "Position 1 (Frontline)",
      slot2Title: "Position 2 (Backline)",
      selectItem: "Select Item",
      noItem: "-- No Item --",
      synergyAnalysis: "Duo Tactical Synergy Analysis",
      testInSimulator: "⚔️ Test Duo in 2vs2 Simulator",
      combinedLife: "Combined HP",
      avgSpeed: "Average Speed",
      estDamage: "Total Damage",
      savedTeams: "Saved Teams",
      saveTeam: "Save Team",
      loadTeam: "Load",
      deleteTeam: "Delete",
      exportCode: "Export Code",
      importCode: "Import Code",
      teamName: "Team Name",
      levelLabel: "Level",
      geneticsLabel: "Birth Genetics",
      compareRadarTitle: "Base Stat Comparative Radar",
      compareRadarDesc: "Polygonal stat overlay visualizing the specialization of both chickens.",
      trainingLabel: "Training Values",
      targetAiLabel: "Target Priority",
      useHiddenPowerLabel: "Use Hidden Power",
      useBasePower: "⚡ Base Power",
      useHiddenPower: "✨ Hidden Power",
      powerInBattle: "Battle Power",
      combatStatsLabel: "Combat Stats",
      teamSavedSuccess: "Team saved successfully!",
      teamLoadedSuccess: "Team loaded successfully!",
      teamDeletedSuccess: "Team deleted.",
      codeCopied: "Team code copied to clipboard!",
      invalidCode: "Invalid team code.",
      promptImportCode: "Paste your team code here (CC-T1_... format):",
      promptTeamName: "Enter a name for your team:",
      presetMetaHeader: "⭐ Official Metagame Presets",
      customTeamsHeader: "💾 My Saved Teams",
      randomTeamBtn: "Random Team",
      rankingTitle: "Stat Leaderboards",
      rankingDesc: "Official leaderboards for top chickens based on base stats, max combat potential and tactical roles.",
      rankingTabMax: "⚡ Max Combat Stats (Lv. 100 Perfect)",
      rankingTabBase: "🌱 Base Stats (Birth)",
      rankingTabArchetypes: "🎖️ Best by Archetype",
      rankingMaxDesc: "Real combat statistics calculated at Level 100 with perfect Genetics (100) and max Training (2.00x).",
      rankingBaseDesc: "Official rankings based on pure innate birth attributes of each species (Level 1 untrained).",
      rankingArchDesc: "The most dominant metagame chickens grouped by their tactical role and synergy in 2vs2 teams.",
      topSpeed: "⚡ Highest Base Speed",
      topDamage: "🗡️ Highest Base Damage",
      topArmor: "🛡️ Highest Base Armor",
      topLife: "❤️ Highest Base Life",
      topPower: "✨ Highest Base Power",
      topTotal: "👑 Highest Base Total",
      topSpeedMax: "⚡ Highest Combat Speed (Lv. 100)",
      topDamageMax: "🗡️ Highest Combat Damage (Lv. 100)",
      topArmorMax: "🛡️ Highest Combat Armor (Lv. 100)",
      topLifeMax: "❤️ Highest Combat Life (Lv. 100)",
      topPowerMax: "✨ Highest Combat Power (Lv. 100)",
      topTotalMax: "👑 Highest Combat Rating (Lv. 100)",
      archTanksTitle: "🛡️ Defensive Tanks & Bastions",
      archTanksSub: "Specialists in absorbing damage, mitigating hits and shielding partners.",
      archStrikersTitle: "🗡️ Glass Cannons & Strikers",
      archStrikersSub: "Devastating offensive power designed to take down threats early.",
      archSpeedstersTitle: "⚡ Speedsters & Evasion",
      archSpeedstersSub: "Dominate turn initiative and dodge incoming attacks with high agility.",
      archBatteriesTitle: "✨ Power Batteries (Casters)",
      archBatteriesSub: "Generate massive energy to cast devastating powers every 1-2 turns.",
      archFreezeTitle: "❄️ Crowd Control & Freeze",
      archFreezeSub: "Nullify enemy turns via freeze, sleep or paralyze effects.",
      archPoisonTitle: "🧪 Poison, Burn & Attrition",
      archPoisonSub: "Whittle down rival HP turn after turn, piercing raw defense.",
      archHealersTitle: "💚 Healing Support & Sustain",
      archHealersSub: "Restore HP and keep the duo healthy through drawn-out battles.",
      archReviveTitle: "🔄 Immortals & Revive",
      archReviveSub: "Able to rise after falling or survive fatal finishing blows.",
      changelogTitle: "Version History & Patch Notes",
      changelogDesc: "Official log of game updates, balance adjustments, UI improvements and bug fixes."
    },
    pt: {
      siteTitle: "Wiki Clicker Chickens",
      siteSubtitle: "Enciclopédia Oficial",
      searchPlaceholder: "Pesquisar frangos, itens, poderes, passivas...",
      themeDark: "Modo Escuro",
      themeLight: "Modo Claro",
      navSecEncyclopedia: "Enciclopédia",
      navChickens: "Frangopédia",
      navItems: "Itens",
      navPowers: "Poderes",
      navPassives: "Passivas",
      navStates: "Efeitos de Estado",
      navZones: "Zonas e Torneios",
      navAchievements: "Conquistas",
      navMechanics: "Guias e Mecânicas",
      calcStatsNav: "Calculadora de Atributos",
      sim2vs2Nav: "Simulador 2vs2",
      secChickensDesc: "Lista completa dos 151 frangos, atributos base, habilidades e habitats.",
      secItemsDesc: "Catálogo completo dos 75 itens consumíveis e equipáveis com seus efeitos.",
      secPowersDesc: "52 poderes especiais ativáveis em combate e os frangos que os possuem.",
      secPassivesDesc: "151 habilidades passivas de combate e quais frangos as possuem.",
      secStatesDesc: "Os 7 efeitos de estado, funcionamento por turno e como neutralizá-los.",
      secZonesDesc: "As 9 zonas do jogo, custos de viagem, encontros selvagens, lojas e torneios.",
      secAchievementsDesc: "Todas as 22 conquistas do jogo e requisitos de desbloqueio.",
      secMechanicsDesc: "Fórmulas de experiência, criação de ovos, chances de shiny e laboratório de fusão.",
      filterAllZones: "Todas as zonas",
      filterEvolutions: "Evoluções",
      sortIdAsc: "Número (#1-#151)",
      sortNameAsc: "Nome (A-Z)",
      sortLifeDesc: "Maior Vida",
      sortDmgDesc: "Maior Dano",
      sortArmDesc: "Maior Armadura",
      sortSpdDesc: "Maior Velocidade",
      sortPwrDesc: "Maior Poder",
      sortTotalDesc: "Maior Total de Atributos",
      viewGrid: "Grade",
      viewTable: "Tabela",
      thId: "#",
      thSprite: "Sprite",
      thName: "Nome",
      thHp: "Vida",
      thAtk: "Dano",
      thDef: "Armadura",
      thSpd: "Velocidade",
      thPwr: "Poder",
      thTotal: "Total",
      thPassive: "Passiva",
      thPower: "Poder",
      thItem: "Item",
      thType: "Tipo",
      thPrice: "Venda",
      thShopPrice: "Loja",
      thWhere: "Zonas",
      thEffect: "Efeito",
      thChickens: "Frangos com esta habilidade",
      thChickensHidden: "Frangos com este Poder Oculto",
      thIcon: "Ícone",
      thTitle: "Título",
      thUnlockReq: "Requisito de Desbloqueio",
      consumable: "Consumível",
      equipable: "Equipável",
      allTypes: "Todos os tipos",
      statBaseTitle: "Atributos Base",
      statLife: "Vida (HP)",
      statDamage: "Dano (ATK)",
      statArmor: "Armadura (DEF)",
      statSpeed: "Velocidade (SPD)",
      statPowerAmount: "Poder (PWR)",
      statTotal: "Total de Atributos",
      combatSkillsTitle: "⚡ Habilidades de Combate",
      passiveSkill: "Habilidade Passiva",
      activePower: "Poder Ativo",
      hiddenPower: "Poder Oculto",
      noHiddenPower: "Não pode ter poder oculto (Transformação em combate)",
      powerCost: "Custo de Carga de Poder",
      energyPoints: "pontos de energia.",
      viewAllWithPassive: "→ Ver todas as galinhas com esta passiva",
      viewAllWithPower: "→ Ver todas as galinhas com este poder",
      viewCombatPowers: "→ Ver poderes de combate",
      tacticalGuideTitle: "Guia Tático de Combate 2vs2",
      tacticalArchetype: "Arquétipo Tático",
      powerCycle: "Ciclo de Poder",
      turn: "turno",
      turns: "turnos",
      tacticalDuoRole: "Função na Dupla 2vs2:",
      recommendedPartners: "Parceiros Recomendados:",
      key2vs2Items: "Itens Chave no 2vs2:",
      howToCounter: "Como Neutralizar (Se for Inimigo):",
      defaultItem: "Item Inicial",
      evolutionHeader: "Linha de Evolução",
      evolutionOnlyWarn: "Frango de Evolução: Não aparece em combates selvagens, loja diária ou ovos.",
      habitatsHeader: "Habitats e Obtenção",
      wildCombats: "Combates Selvagens",
      eggPools: "Eclosão de Ovos",
      wildHabitats: "Habitat Selvagem",
      noWild: "Não aparece no estado selvagem",
      noEgg: "Não disponível em ovos da loja",
      zoneShopTitle: "🛒 Loja da Zona",
      recommendedLevel: "Nível recomendado:",
      travelCost: "Custo de viagem:",
      speciesCount: "espécies",
      tournamentCup: "Copa do Torneio",
      entryFee: "Inscrição",
      prizeMoney: "Prêmio",
      roundsCount: "Rodadas:",
      tournamentRule: "Regra Especial",
      tournamentRewards: "Recompensas por Vitória",
      tournamentRoster: "Equipes Adversárias por Rodada",
      round: "Rodada",
      lvl: "Nível",
      prevBtn: "« Anterior",
      nextBtn: "Próximo »",
      backToList: "← Voltar à lista",
      notFound: "Nenhum resultado encontrado.",
      searchBadgeChicken: "Frango",
      searchBadgeItem: "Item",
      searchBadgePassive: "Passiva",
      searchBadgePower: "Poder",
      searchBadgeZone: "Zona",
      searchBadgeAchievement: "Conquista",
      footerGen: "Gerada diretamente dos dados do jogo v0.121",
      footerHosting: "Criada para hospedagem gratuita no",
      footerStyle: "Estilo clássico, rápido e leve",
      navSecTools: "Ferramentas e Combate",
      navCompare: "Comparador",
      navTeamBuilder: "Criador de Equipes",
      navRanking: "Ranking de Atributos",
      navChangelog: "Notas de Atualização",
      filterAllRoles: "Todos os Papéis",
      roleTank: "Tanques Defensivos",
      roleCannon: "Canhões de Cristal",
      roleSpeed: "Velocistas Ágeis",
      roleBattery: "Baterias de Poder",
      roleFreeze: "Controle / Congelar",
      rolePoison: "Veneno / Infecção",
      roleHealer: "Suporte Curativo",
      roleRevive: "Ressurreição",
      compareTitle: "Comparador Frente a Frente",
      compareDesc: "Compare atributos base, ciclos de poder e habilidades entre dois frangos lado a lado.",
      chickenA: "Primeiro Frango",
      chickenB: "Segundo Frango",
      swapChickens: "⇄ Inverter",
      randomChickens: "🎲 Aleatório",
      teamBuilderTitle: "Criador de Equipes 2vs2",
      teamBuilderDesc: "Monte sua dupla titular com itens equipados e analise sinergias táticas em tempo real.",
      slot1Title: "Posição 1 (Vanguarda)",
      slot2Title: "Posição 2 (Retaguarda)",
      selectItem: "Selecionar Item",
      noItem: "-- Sem Item --",
      synergyAnalysis: "Análise Tática da Dupla",
      testInSimulator: "⚔️ Testar Dupla no Simulador 2vs2",
      combinedLife: "Vida Combinada",
      avgSpeed: "Velocidade Média",
      estDamage: "Dano Total",
      savedTeams: "Times Salvos",
      saveTeam: "Salvar Time",
      loadTeam: "Carregar",
      deleteTeam: "Excluir",
      exportCode: "Exportar Código",
      importCode: "Importar Código",
      teamName: "Nome do Time",
      levelLabel: "Nível",
      geneticsLabel: "Valores Genéticos",
      compareRadarTitle: "Radar Comparativo de Atributos Base",
      compareRadarDesc: "Sobreposição poligonal de atributos para visualizar a especialização de ambos os frangos.",
      trainingLabel: "Valores de Treinamento",
      targetAiLabel: "Alvo Tático",
      useHiddenPowerLabel: "Usar Poder Oculto",
      useBasePower: "⚡ Poder Base",
      useHiddenPower: "✨ Poder Oculto",
      powerInBattle: "Poder em Batalha",
      combatStatsLabel: "Atributos em Combate",
      teamSavedSuccess: "Time salvo com sucesso!",
      teamLoadedSuccess: "Time carregado com sucesso!",
      teamDeletedSuccess: "Time excluído.",
      codeCopied: "Código do time copiado para a área de transferência!",
      invalidCode: "Código de time inválido.",
      promptImportCode: "Cole aqui o código do time (formato CC-T1_...):",
      promptTeamName: "Digite o nome para o seu time:",
      presetMetaHeader: "⭐ Metagame & Presets Oficiais",
      customTeamsHeader: "💾 Meus Times Salvos",
      randomTeamBtn: "Time Aleatório",
      rankingTitle: "Classificação de Atributos",
      rankingDesc: "Classificação oficial dos melhores frangos do jogo segundo atributos base, potencial máximo e papéis táticos.",
      rankingTabMax: "⚡ Máximos em Combate (Nv. 100 Perfeitos)",
      rankingTabBase: "🌱 Atributos Base (Nascimento)",
      rankingTabArchetypes: "🎖️ Melhores por Arquétipo",
      rankingMaxDesc: "Atributos reais calculados no Nível 100 com Genética 100 (Desejo) e Treinamento a 2.00x (Perfeitos).",
      rankingBaseDesc: "Classificação oficial de acordo com os atributos base puros de nascimento de cada espécie (Nível 1 sem treino).",
      rankingArchDesc: "Os frangos mais determinantes do metagame agrupados por seu papel tático e sinergia em equipes 2vs2.",
      topSpeed: "⚡ Maior Velocidade Base",
      topDamage: "🗡️ Maior Dano Base",
      topArmor: "🛡️ Maior Armadura Base",
      topLife: "❤️ Maior Vida Base",
      topPower: "✨ Maior Carga de Poder Base",
      topTotal: "👑 Maior Soma Total Base",
      topSpeedMax: "⚡ Maior Velocidade Real (Nv. 100)",
      topDamageMax: "🗡️ Maior Dano Real (Nv. 100)",
      topArmorMax: "🛡️ Maior Armadura Real (Nv. 100)",
      topLifeMax: "❤️ Maior Vida Real (Nv. 100)",
      topPowerMax: "✨ Maior Carga de Poder (Nv. 100)",
      topTotalMax: "👑 Maior Poder Total (Nv. 100)",
      archTanksTitle: "🛡️ Tanques & Bastiões Defensivos",
      archTanksSub: "Especialistas em absorver dano, mitigar golpes e proteger o parceiro.",
      archStrikersTitle: "🗡️ Canhões de Cristal & Finalizadores",
      archStrikersSub: "Poder ofensivo avassalador para derrubar ameaças nos primeiros turnos.",
      archSpeedstersTitle: "⚡ Velocistas & Evasão",
      archSpeedstersSub: "Dominam a iniciativa do turno e esquivam de ataques com agilidade.",
      archBatteriesTitle: "✨ Baterias de Poder (Conjuradores)",
      archBatteriesSub: "Geram energia massiva para disparar poderes devastadores a cada 1-2 turnos.",
      archFreezeTitle: "❄️ Controle de Grupo & Congelamento",
      archFreezeSub: "Anulam turnos inimigos através de congelamento, sono ou paralisia.",
      archPoisonTitle: "🧪 Veneno, Queimadura & Desgaste",
      archPoisonSub: "Desgastam a vida rival turno a turno, perfurando armaduras.",
      archHealersTitle: "💚 Suporte Curativo & Regeneração",
      archHealersSub: "Restauram vitalidade e sustentam a dupla em batalhas prolongadas.",
      archReviveTitle: "🔄 Imortais & Ressurreição",
      archReviveSub: "Capazes de retornar à vida após derrotados ou resistir a golpes fatais.",
      changelogTitle: "Histórico de Versões e Atualizações",
      changelogDesc: "Registro oficial de mudanças, novidades, balanço de combate e correções do jogo."
    },
    ru: {
      siteTitle: "Clicker Chickens Вики",
      siteSubtitle: "Официальная Энциклопедия",
      searchPlaceholder: "Поиск цыплят, предметов, сил, пассивок...",
      themeDark: "Темная тема",
      themeLight: "Светлая тема",
      navSecEncyclopedia: "Энциклопедия",
      navChickens: "Куропедия",
      navItems: "Предметы",
      navPowers: "Способности",
      navPassives: "Пассивки",
      navStates: "Эффекты состояния",
      navZones: "Зоны и Турниры",
      navAchievements: "Достижения",
      navMechanics: "Гайды и Механики",
      calcStatsNav: "Калькулятор характеристик",
      sim2vs2Nav: "Симулятор 2на2",
      secChickensDesc: "Полный список 151 цыпленка, базовые параметры, способности и ареалы обитания.",
      secItemsDesc: "Полный каталог 75 расходуемых и экипируемых предметов с их эффектами.",
      secPowersDesc: "52 боевые активные способности и цыплята, обладающие ими.",
      secPassivesDesc: "151 пассивная способность, влияющая на ход битвы, и их носители.",
      secStatesDesc: "7 эффектов состояния, механика срабатывания по ходам и контрмеры.",
      secZonesDesc: "9 игровых зон, стоимость путешествий, дикие цыплята, магазины и турниры.",
      secAchievementsDesc: "Все 22 достижения игры и условия их разблокировки.",
      secMechanicsDesc: "Формулы опыта, разведение яиц, шансы Shiny и лаборатория слияния.",
      filterAllZones: "Все зоны",
      filterEvolutions: "Эволюции",
      sortIdAsc: "Номер (#1-#151)",
      sortNameAsc: "Имя (А-Я)",
      sortLifeDesc: "Максимум Здоровья",
      sortDmgDesc: "Максимум Урона",
      sortArmDesc: "Максимум Брони",
      sortSpdDesc: "Максимум Скорости",
      sortPwrDesc: "Максимум Силы",
      sortTotalDesc: "Максимум Суммы параметров",
      viewGrid: "Сетка",
      viewTable: "Таблица",
      thId: "#",
      thSprite: "Спрайт",
      thName: "Имя",
      thHp: "Здоровье",
      thAtk: "Урон",
      thDef: "Броня",
      thSpd: "Скорость",
      thPwr: "Сила",
      thTotal: "Сумма",
      thPassive: "Пассивка",
      thPower: "Способность",
      thItem: "Предмет",
      thType: "Тип",
      thPrice: "Продажа",
      thShopPrice: "Магазин",
      thWhere: "Зоны",
      thEffect: "Эффект",
      thChickens: "Цыплята с этой способностью",
      thChickensHidden: "Цыплята со скрытой силой",
      thIcon: "Значок",
      thTitle: "Название",
      thUnlockReq: "Условие открытия",
      consumable: "Расходник",
      equipable: "Экипируемый",
      allTypes: "Все типы",
      statBaseTitle: "Базовые параметры",
      statLife: "Здоровье (HP)",
      statDamage: "Урон (ATK)",
      statArmor: "Броня (DEF)",
      statSpeed: "Скорость (SPD)",
      statPowerAmount: "Сила (PWR)",
      statTotal: "Сумма параметров",
      combatSkillsTitle: "⚡ Боевые навыки",
      passiveSkill: "Пассивная способность",
      activePower: "Активная способность",
      hiddenPower: "Скрытая способность",
      noHiddenPower: "Не может иметь скрытой силы (Боевая трансформация)",
      powerCost: "Требуемая энергия способности",
      energyPoints: "очков энергии.",
      viewAllWithPassive: "→ Все цыплята с этой пассивкой",
      viewAllWithPower: "→ Все цыплята с этой способностью",
      viewCombatPowers: "→ Посмотреть боевые способности",
      tacticalGuideTitle: "Тактический гайд для боя 2на2",
      tacticalArchetype: "Тактический архетип",
      powerCycle: "Цикл способности",
      turn: "ход",
      turns: "ходов",
      tacticalDuoRole: "Роль в дуэте 2на2:",
      recommendedPartners: "Рекомендуемые союзники:",
      key2vs2Items: "Ключевые предметы в 2на2:",
      howToCounter: "Как контрить (если враг):",
      defaultItem: "Стартовый предмет",
      evolutionHeader: "Линия эволюции",
      evolutionOnlyWarn: "Эволюционный цыпленок: не встречается в дикой природе, магазине или яйцах.",
      habitatsHeader: "Среда обитания и получение",
      wildCombats: "Дикие битвы",
      eggPools: "Вылупление из яиц",
      wildHabitats: "Дикая среда",
      noWild: "Не встречается в дикой природе",
      noEgg: "Недоступен в яйцах из магазина",
      zoneShopTitle: "🛒 Магазин зоны",
      recommendedLevel: "Рекомендуемый уровень:",
      travelCost: "Стоимость поездки:",
      speciesCount: "видов",
      tournamentCup: "Кубок турнира",
      entryFee: "Взнос",
      prizeMoney: "Приз",
      roundsCount: "Раунды:",
      tournamentRule: "Особое правило",
      tournamentRewards: "Награды за победу",
      tournamentRoster: "Команды соперников по раундам",
      round: "Раунд",
      lvl: "Уровень",
      prevBtn: "« Пред.",
      nextBtn: "След. »",
      backToList: "← Назад к списку",
      notFound: "Ничего не найдено.",
      searchBadgeChicken: "Цыпленок",
      searchBadgeItem: "Предмет",
      searchBadgePassive: "Пассивка",
      searchBadgePower: "Способность",
      searchBadgeZone: "Зона",
      searchBadgeAchievement: "Достижение",
      footerGen: "Сгенерировано напрямую из данных игры v0.121",
      footerHosting: "Разработано для бесплатного хостинга на",
      footerStyle: "Классический, быстрый и легкий стиль",
      navSecTools: "Инструменты и Бой",
      navCompare: "Сравнение",
      navTeamBuilder: "Создание команд",
      navRanking: "Рейтинг параметров",
      navChangelog: "Список изменений",
      filterAllRoles: "Все роли",
      roleTank: "Танки",
      roleCannon: "Стеклянные пушки",
      roleSpeed: "Скоростные",
      roleBattery: "Батарейки способностей",
      roleFreeze: "Контроль / Заморозка",
      rolePoison: "Яд / Инфекция",
      roleHealer: "Лекари",
      roleRevive: "Воскрешение",
      compareTitle: "Сравнение цыплят лицом к лицу",
      compareDesc: "Сравните базовые характеристики, цикл способностей и боевые навыки двух цыплят бок о бок.",
      chickenA: "Первый цыпленок",
      chickenB: "Второй цыпленок",
      swapChickens: "⇄ Поменять местами",
      randomChickens: "🎲 Случайно",
      teamBuilderTitle: "Конструктор команд 2на2",
      teamBuilderDesc: "Соберите дуэт с экипировкой и оцените боевую синергию в реальном времени.",
      slot1Title: "Позиция 1 (Авангард)",
      slot2Title: "Позиция 2 (Арьергард)",
      selectItem: "Выбрать предмет",
      noItem: "-- Без предмета --",
      synergyAnalysis: "Тактический анализ синергии дуэта",
      testInSimulator: "⚔️ Проверить дуэт в Симуляторе 2на2",
      combinedLife: "Суммарное здоровье",
      avgSpeed: "Средняя скорость",
      estDamage: "Общий урон",
      savedTeams: "Сохраненные команды",
      saveTeam: "Сохранить команду",
      loadTeam: "Загрузить",
      deleteTeam: "Удалить",
      exportCode: "Экспорт кода",
      importCode: "Импорт кода",
      teamName: "Имя команды",
      levelLabel: "Уровень",
      geneticsLabel: "Генетика",
      compareRadarTitle: "Сравнительный радар базовых характеристик",
      compareRadarDesc: "Наложение многоугольников характеристик для сравнения специализаций обоих цыплят.",
      trainingLabel: "Боевая тренировка",
      targetAiLabel: "Приоритет цели",
      useHiddenPowerLabel: "Использовать скрытую силу",
      useBasePower: "⚡ Базовая сила",
      useHiddenPower: "✨ Скрытая сила",
      powerInBattle: "Сила в бою",
      combatStatsLabel: "Боевые параметры",
      teamSavedSuccess: "Команда успешно сохранена!",
      teamLoadedSuccess: "Команда загружена!",
      teamDeletedSuccess: "Команда удалена.",
      codeCopied: "Код команды скопирован в буфер обмена!",
      invalidCode: "Неверный код команды.",
      promptImportCode: "Вставьте код команды (формат CC-T1_...):",
      promptTeamName: "Введите имя вашей команды:",
      presetMetaHeader: "⭐ Официальные мета-пресеты",
      customTeamsHeader: "💾 Мои сохраненные команды",
      randomTeamBtn: "Случайная команда",
      rankingTitle: "Рейтинг характеристик",
      rankingDesc: "Официальный рейтинг лучших цыплят по базовым статам, боевому максимуму и тактическим ролям.",
      rankingTabMax: "⚡ Боевой максимум (Ур. 100 Идеал)",
      rankingTabBase: "🌱 Базовые хар-ки (Ур. 1)",
      rankingTabArchetypes: "🎖️ Лучшие по архетипам",
      rankingMaxDesc: "Реальные боевые статы на 100 уровне с идеальной генетикой (100) и тренировкой (2.00x).",
      rankingBaseDesc: "Рейтинг по врожденным базовым характеристикам каждого вида (1 уровень).",
      rankingArchDesc: "Сильнейшие цыплята метагейма по тактическим ролям и синергии в командах 2vs2.",
      topSpeed: "⚡ Базовая скорость",
      topDamage: "🗡️ Базовый урон",
      topArmor: "🛡️ Базовая броня",
      topLife: "❤️ Базовое HP",
      topPower: "✨ Базовый заряд силы",
      topTotal: "👑 Базовая сумма статов",
      topSpeedMax: "⚡ Макс. скорость в бою (Ур. 100)",
      topDamageMax: "🗡️ Макс. урон в бою (Ур. 100)",
      topArmorMax: "🛡️ Макс. броня в бою (Ур. 100)",
      topLifeMax: "❤️ Макс. HP в бою (Ур. 100)",
      topPowerMax: "✨ Макс. заряд силы (Ур. 100)",
      topTotalMax: "👑 Высшая боевая мощь (Ур. 100)",
      archTanksTitle: "🛡️ Танки и бастионы",
      archTanksSub: "Специалисты по поглощению урона и защите напарника.",
      archStrikersTitle: "🗡️ Стеклянные пушки и дамагеры",
      archStrikersSub: "Сокрушительный урон для быстрого устранения угроз.",
      archSpeedstersTitle: "⚡ Быстрые и уклонение",
      archSpeedstersSub: "Доминируют по инициативе и уклоняются от атак.",
      archBatteriesTitle: "✨ Батарейки энергии (Кастеры)",
      archBatteriesSub: "Накапливают заряд для активации способностей каждые 1-2 хода.",
      archFreezeTitle: "❄️ Контроль и заморозка",
      archFreezeSub: "Лишают противника ходов заморозкой, сном или параличом.",
      archPoisonTitle: "🧪 Яд, горение и изнурение",
      archPoisonSub: "Истощают здоровье врага каждый ход, игнорируя броню.",
      archHealersTitle: "💚 Поддержка и лечение",
      archHealersSub: "Восстанавливают здоровье и поддерживают команду в затяжных боях.",
      archReviveTitle: "🔄 Бессмертные и воскрешение",
      archReviveSub: "Способны возрождаться после гибели или выдерживать смертельный урон.",
      changelogTitle: "История версий и изменений",
      changelogDesc: "Официальный журнал обновлений, правок баланса, улучшений интерфейса и исправлений ошибок."
    }
  };

  function str(key) {
    return (t[currentLang] && t[currentLang][key]) || (t['es'] && t['es'][key]) || key;
  }

  function getLocalized(obj) {
    if (!obj) return "";
    if (typeof obj === 'string') return obj;
    return obj[currentLang] || obj['es'] || obj['en'] || "";
  }

  function norm(str) {
    if (!str) return "";
    return String(str).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function matchLoc(obj, qNorm) {
    if (!obj || !qNorm) return false;
    if (typeof obj === 'string' || typeof obj === 'number') return norm(obj).includes(qNorm);
    return Object.values(obj).some(val => val && norm(val).includes(qNorm));
  }

  // Init App
  function init() {
    if (!WIKI && window.WIKI_DATA) {
      WIKI = window.WIKI_DATA;
    }
    if (!WIKI) {
      fetch('data.json')
        .then(r => r.json())
        .then(data => {
          WIKI = data;
          finishInit();
        })
        .catch(err => {
          console.error("Failed to load wiki data:", err);
          document.getElementById('wikiContent').innerHTML = "<p style='color:red;padding:20px;'>Error al cargar los datos de la wiki.</p>";
        });
    } else {
      finishInit();
    }
  }

  function finishInit() {
    applyTheme(currentTheme);
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.value = currentLang;
    }
    document.documentElement.setAttribute('lang', currentLang);
    updateNavLabels();
    setupEventListeners();
    handleRoute();
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cc_wiki_theme', theme);
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.textContent = theme === 'dark' ? '☀️ ' + str('themeLight') : '🌙 ' + str('themeDark');
    }
  }

  function applyLang(lang) {
    if (!t[lang]) lang = 'es';
    currentLang = lang;
    localStorage.setItem('cc_wiki_lang', lang);
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.value = lang;
    }
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.textContent = lang.toUpperCase();
    }
    document.documentElement.setAttribute('lang', lang);
    updateNavLabels();
    handleRoute();
  }

  function updateNavLabels() {
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.placeholder = str('searchPlaceholder');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (k) {
        if (k === 'siteSubtitle') {
          const v = (WIKI && WIKI.version) ? ` • v${WIKI.version}` : ' • v0.107';
          el.textContent = str(k) + v;
        } else {
          const val = str(k);
          if (val && val !== k) {
            el.textContent = val;
          }
        }
      }
    });

    if (WIKI) {
      const countMap = {
        pollopedia: WIKI.chickens ? WIKI.chickens.length : null,
        items: WIKI.items ? WIKI.items.length : null,
        powers: WIKI.powers ? WIKI.powers.length : null,
        passives: WIKI.passives ? WIKI.passives.length : null,
        states: WIKI.states ? WIKI.states.length : null,
        zones: WIKI.zones ? WIKI.zones.length : null,
        achievements: WIKI.achievements ? WIKI.achievements.length : null
      };
      Object.keys(countMap).forEach(view => {
        if (countMap[view] !== null) {
          const badge = document.querySelector(`li[data-view="${view}"] .sidebar-count`);
          if (badge) badge.textContent = countMap[view];
        }
      });
    }
  }

  // Routing
  window.addEventListener('hashchange', handleRoute);

  function handleRoute() {
    const hash = window.location.hash.replace(/^#/, '');
    const parts = hash.split('/');
    const mainRoute = parts[0] || 'pollopedia';

    // Update active sidebar nav
    document.querySelectorAll('.sidebar-nav li').forEach(li => {
      li.classList.toggle('active', li.getAttribute('data-view') === mainRoute.split('-')[0]);
    });

    if (mainRoute.startsWith('chicken-')) {
      const cid = parseInt(mainRoute.replace('chicken-', ''), 10);
      renderChickenDetail(cid);
    } else if (mainRoute === 'items') {
      renderItems();
    } else if (mainRoute === 'powers') {
      renderPowers();
    } else if (mainRoute === 'passives') {
      renderPassives();
    } else if (mainRoute === 'states') {
      renderStates();
    } else if (mainRoute === 'zones') {
      renderZones();
    } else if (mainRoute === 'achievements') {
      renderAchievements();
    } else if (mainRoute === 'mechanics') {
      renderMechanics();
    } else if (mainRoute === 'compare') {
      renderCompare();
    } else if (mainRoute === 'teambuilder') {
      renderTeamBuilder();
    } else if (mainRoute === 'ranking') {
      renderRanking();
    } else if (mainRoute === 'changelog') {
      renderChangelog();
    } else {
      renderPollopedia();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Setup Event Listeners
  function setupEventListeners() {
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.value = currentLang;
      langSelect.addEventListener('change', (e) => {
        applyLang(e.target.value);
      });
    }

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const langs = ['es', 'en', 'pt', 'ru'];
        const nextIdx = (langs.indexOf(currentLang) + 1) % langs.length;
        applyLang(langs[nextIdx]);
      });
    }

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('wikiSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (mobileBtn && sidebar) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('mobile-open');
        if (backdrop) backdrop.classList.toggle('active', isOpen);
      });
      if (backdrop) {
        backdrop.addEventListener('click', () => {
          sidebar.classList.remove('mobile-open');
          backdrop.classList.remove('active');
        });
      }
      // Close sidebar when clicking links
      sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          sidebar.classList.remove('mobile-open');
          if (backdrop) backdrop.classList.remove('active');
        });
      });
    }

    // Global Search
    setupGlobalSearch();
  }

  // Global Search
  function setupGlobalSearch() {
    const input = document.getElementById('globalSearch');
    const dropdown = document.getElementById('searchDropdown');
    if (!input || !dropdown) return;

    input.addEventListener('input', () => {
      const q = input.value.trim();
      const qNorm = norm(q);
      if (!qNorm || qNorm.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
      }

      const results = [];

      // Search Chickens (name in all languages, id, passive, active power, hidden power)
      WIKI.chickens.forEach(c => {
        const pObj = WIKI.passives[c.passive_id];
        const pwObj = WIKI.powers[c.power_id];
        const hpObj = (c.hidden_power_id !== null && c.hidden_power_id !== undefined && c.hidden_power_id >= 0 && WIKI.powers[c.hidden_power_id]) ? WIKI.powers[c.hidden_power_id] : null;

        if (matchLoc(c.name, qNorm) ||
            c.id.toString() === qNorm ||
            (c.id + 1).toString() === qNorm ||
            String(c.id + 1).padStart(3, '0') === qNorm ||
            (pObj && matchLoc(pObj.description, qNorm)) ||
            (pwObj && matchLoc(pwObj.description, qNorm)) ||
            (hpObj && matchLoc(hpObj.description, qNorm))) {
          results.push({
            type: 'chicken',
            badge: str('searchBadgeChicken'),
            title: `#${String(c.id + 1).padStart(3, '0')} ${getLocalized(c.name)}`,
            subtitle: `HP ${c.stats.life} | ATK ${c.stats.damage} | DEF ${c.stats.armor}`,
            image: c.sprite,
            hash: `chicken-${c.id}`
          });
        }
      });

      // Search Items (name in all languages, description in all languages, id)
      WIKI.items.forEach(it => {
        if (matchLoc(it.name, qNorm) || matchLoc(it.description, qNorm) || it.id.toString() === qNorm || (it.id + 1).toString() === qNorm || String(it.id + 1).padStart(2, '0') === qNorm) {
          results.push({
            type: 'item',
            badge: str('searchBadgeItem'),
            title: `#${String(it.id + 1).padStart(2, '0')} ${getLocalized(it.name)}`,
            subtitle: getLocalized(it.description).substring(0, 60) + '...',
            image: it.sprite,
            hash: 'items'
          });
        }
      });

      // Search Passives
      WIKI.passives.forEach(p => {
        if (matchLoc(p.description, qNorm) || p.id.toString() === qNorm || (p.id + 1).toString() === qNorm) {
          results.push({
            type: 'passive',
            badge: str('searchBadgePassive'),
            title: `${str('navPassives')} #${p.id + 1}`,
            subtitle: getLocalized(p.description).substring(0, 60) + '...',
            image: 'images/items/21.png',
            hash: 'passives'
          });
        }
      });

      // Search Powers
      WIKI.powers.forEach(pw => {
        if (matchLoc(pw.description, qNorm) || pw.id.toString() === qNorm || (pw.id + 1).toString() === qNorm) {
          results.push({
            type: 'power',
            badge: str('searchBadgePower'),
            title: `${str('navPowers')} #${pw.id + 1}`,
            subtitle: getLocalized(pw.description).substring(0, 60) + '...',
            image: 'images/items/12.png',
            hash: 'powers'
          });
        }
      });

      // Search Zones
      WIKI.zones.forEach(z => {
        if (matchLoc(z.name, qNorm)) {
          results.push({
            type: 'zone',
            badge: str('searchBadgeZone'),
            title: getLocalized(z.name),
            subtitle: `${str('lvl')} ${z.level_range[0]}-${z.level_range[1]} | ${str('travelCost')} ${z.travel_price} 💰`,
            image: z.banner,
            hash: 'zones'
          });
        }
      });

      if (results.length === 0) {
        dropdown.innerHTML = `<div style="padding:12px;color:var(--wiki-text-muted);font-size:12px;text-align:center;">${str('notFound')}</div>`;
      } else {
        dropdown.innerHTML = results.slice(0, 10).map(r => `
          <div class="search-item" onclick="location.hash='${r.hash}'; document.getElementById('searchDropdown').classList.remove('open');">
            <img class="pixelated" src="${r.image}" alt="">
            <div>
              <div style="font-weight:600;font-size:13px;">${r.title}</div>
              <div style="font-size:11px;color:var(--wiki-text-muted);">${r.subtitle}</div>
            </div>
            <span class="search-item-badge">${r.badge}</span>
          </div>
        `).join('');
      }
      dropdown.classList.add('open');
    });

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  }

  // Helper to match chicken tactical role
  function matchesChickenRole(c, role) {
    const pwObj = WIKI.powers[c.power_id];
    const pObj = WIKI.passives[c.passive_id];
    const pwDesc = (pwObj && pwObj.description && pwObj.description.es) ? pwObj.description.es.toLowerCase() : '';
    const pDesc = (pObj && pObj.description && pObj.description.es) ? pObj.description.es.toLowerCase() : '';
    switch(role) {
      case 'tank': return c.stats.life >= 60 || c.stats.armor >= 50;
      case 'cannon': return c.stats.damage >= 70 || (c.stats.damage >= 65 && c.stats.speed >= 55);
      case 'speed': return c.stats.speed >= 70;
      case 'battery': return c.stats.power_amount >= 45 || ((c.power_max + c.stats.power_amount - 1) / (c.stats.power_amount || 1) <= 2);
      case 'freeze': return pwDesc.includes('congel') || pDesc.includes('congel');
      case 'poison': return pwDesc.includes('envenen') || pwDesc.includes('infect') || pDesc.includes('envenen') || pDesc.includes('infect');
      case 'healer': return pwDesc.includes('cura') || pDesc.includes('cura');
      case 'revive': return pwDesc.includes('reviv') || pDesc.includes('reviv');
      default: return true;
    }
  }

  // --- VIEWS ---

  // 1. POLLOPEDIA VIEW
  function renderPollopedia() {
    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">🐔 ${str('navChickens')}</h1>
        <p class="page-subtitle">${str('secChickensDesc')}</p>
      </div>

      <div class="wiki-toolbar">
        <div class="filter-group">
          <select id="chickenZoneFilter" class="filter-select">
            <option value="all">${str('filterAllZones')}</option>
            ${WIKI.zones.map(z => `<option value="${z.id}" ${currentChickenFilterZone == z.id ? 'selected' : ''}>${str('searchBadgeZone')} ${z.id + 1}: ${getLocalized(z.name)}</option>`).join('')}
            <option value="evolutions" ${currentChickenFilterZone === 'evolutions' ? 'selected' : ''}>⭐ ${str('filterEvolutions')}</option>
          </select>

          <select id="chickenRoleFilter" class="filter-select">
            <option value="all">${str('filterAllRoles')}</option>
            <option value="tank" ${currentChickenFilterRole === 'tank' ? 'selected' : ''}>🛡️ ${str('roleTank')}</option>
            <option value="cannon" ${currentChickenFilterRole === 'cannon' ? 'selected' : ''}>💥 ${str('roleCannon')}</option>
            <option value="speed" ${currentChickenFilterRole === 'speed' ? 'selected' : ''}>⚡ ${str('roleSpeed')}</option>
            <option value="battery" ${currentChickenFilterRole === 'battery' ? 'selected' : ''}>🔋 ${str('roleBattery')}</option>
            <option value="freeze" ${currentChickenFilterRole === 'freeze' ? 'selected' : ''}>❄️ ${str('roleFreeze')}</option>
            <option value="poison" ${currentChickenFilterRole === 'poison' ? 'selected' : ''}>🧪 ${str('rolePoison')}</option>
            <option value="healer" ${currentChickenFilterRole === 'healer' ? 'selected' : ''}>💖 ${str('roleHealer')}</option>
            <option value="revive" ${currentChickenFilterRole === 'revive' ? 'selected' : ''}>🔄 ${str('roleRevive')}</option>
          </select>

          <select id="chickenSort" class="sort-select">
            <option value="id_asc" ${currentChickenSort === 'id_asc' ? 'selected' : ''}>${str('sortIdAsc')}</option>
            <option value="name_asc" ${currentChickenSort === 'name_asc' ? 'selected' : ''}>${str('sortNameAsc')}</option>
            <option value="life_desc" ${currentChickenSort === 'life_desc' ? 'selected' : ''}>${str('sortLifeDesc')}</option>
            <option value="dmg_desc" ${currentChickenSort === 'dmg_desc' ? 'selected' : ''}>${str('sortDmgDesc')}</option>
            <option value="arm_desc" ${currentChickenSort === 'arm_desc' ? 'selected' : ''}>${str('sortArmDesc')}</option>
            <option value="spd_desc" ${currentChickenSort === 'spd_desc' ? 'selected' : ''}>${str('sortSpdDesc')}</option>
            <option value="pwr_desc" ${currentChickenSort === 'pwr_desc' ? 'selected' : ''}>${str('sortPwrDesc')}</option>
            <option value="total_desc" ${currentChickenSort === 'total_desc' ? 'selected' : ''}>${str('sortTotalDesc')}</option>
          </select>

          <input type="text" id="chickenSearch" class="filter-select" placeholder="${str('searchPlaceholder')}" style="min-width: 180px;">
        </div>

        <div class="view-toggle">
          <button id="viewGridBtn" class="view-toggle-btn ${currentChickenViewMode === 'grid' ? 'active' : ''}">${str('viewGrid')}</button>
          <button id="viewTableBtn" class="view-toggle-btn ${currentChickenViewMode === 'table' ? 'active' : ''}">${str('viewTable')}</button>
        </div>
      </div>

      <div id="chickensContainer"></div>
    `;

    document.getElementById('chickenZoneFilter').addEventListener('change', (e) => {
      currentChickenFilterZone = e.target.value;
      updateChickensList();
    });

    document.getElementById('chickenRoleFilter').addEventListener('change', (e) => {
      currentChickenFilterRole = e.target.value;
      updateChickensList();
    });

    document.getElementById('chickenSort').addEventListener('change', (e) => {
      currentChickenSort = e.target.value;
      updateChickensList();
    });

    document.getElementById('chickenSearch').addEventListener('input', () => {
      updateChickensList();
    });

    document.getElementById('viewGridBtn').addEventListener('click', () => {
      currentChickenViewMode = 'grid';
      document.getElementById('viewGridBtn').classList.add('active');
      document.getElementById('viewTableBtn').classList.remove('active');
      updateChickensList();
    });

    document.getElementById('viewTableBtn').addEventListener('click', () => {
      currentChickenViewMode = 'table';
      document.getElementById('viewTableBtn').classList.add('active');
      document.getElementById('viewGridBtn').classList.remove('active');
      updateChickensList();
    });

    updateChickensList();
  }

  function updateChickensList() {
    const listWrap = document.getElementById('chickensContainer');
    const searchVal = (document.getElementById('chickenSearch')?.value || '').toLowerCase().trim();

    let list = WIKI.chickens.slice();

    // Filter by Zone or Evolutions
    if (currentChickenFilterZone === 'evolutions') {
      list = list.filter(c => c.evolution !== null);
    } else if (currentChickenFilterZone !== 'all') {
      const zid = parseInt(currentChickenFilterZone, 10);
      const targetZone = WIKI.zones[zid];
      if (targetZone) {
        const pool = targetZone.combat_pool.concat(targetZone.egg_pool);
        list = list.filter(c => pool.includes(c.id));
      }
    }

    // Filter by Role
    if (currentChickenFilterRole !== 'all') {
      list = list.filter(c => matchesChickenRole(c, currentChickenFilterRole));
    }

    // Search filter
    if (searchVal) {
      const qNorm = norm(searchVal);
      list = list.filter(c => {
        const pObj = WIKI.passives[c.passive_id];
        const pwObj = WIKI.powers[c.power_id];
        return matchLoc(c.name, qNorm) ||
               c.id.toString() === qNorm ||
               (c.id + 1).toString() === qNorm ||
               String(c.id + 1).padStart(3, '0') === qNorm ||
               (pObj && matchLoc(pObj.description, qNorm)) ||
               (pwObj && matchLoc(pwObj.description, qNorm));
      });
    }

    // Sort
    list.sort((a, b) => {
      switch (currentChickenSort) {
        case 'name_asc': return getLocalized(a.name).localeCompare(getLocalized(b.name));
        case 'life_desc': return b.stats.life - a.stats.life;
        case 'dmg_desc': return b.stats.damage - a.stats.damage;
        case 'arm_desc': return b.stats.armor - a.stats.armor;
        case 'spd_desc': return b.stats.speed - a.stats.speed;
        case 'pwr_desc': return b.stats.power_amount - a.stats.power_amount;
        case 'total_desc': return b.stat_total - a.stat_total;
        case 'id_asc':
        default: return a.id - b.id;
      }
    });

    if (list.length === 0) {
      listWrap.innerHTML = `<p style="padding:20px;text-align:center;color:var(--wiki-text-muted);">${str('notFound')}</p>`;
      return;
    }

    if (currentChickenViewMode === 'grid') {
      listWrap.innerHTML = `
        <div class="chickens-grid">
          ${list.map(c => `
            <div class="chicken-card" onclick="location.hash='chicken-${c.id}'">
              <span class="chicken-card-id">#${String(c.id + 1).padStart(3, '0')}</span>
              <img class="chicken-card-sprite pixelated" src="${c.sprite}" alt="${getLocalized(c.name)}">
              <div class="chicken-card-name">${getLocalized(c.name)}</div>
              <div class="chicken-card-stats">
                <div class="stat-pill hp" title="${str('statLife')}">${c.stats.life}</div>
                <div class="stat-pill atk" title="${str('statDamage')}">${c.stats.damage}</div>
                <div class="stat-pill def" title="${str('statArmor')}">${c.stats.armor}</div>
                <div class="stat-pill spd" title="${str('statSpeed')}">${c.stats.speed}</div>
                <div class="stat-pill pwr" title="${str('statPowerAmount')}">${c.stats.power_amount}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      listWrap.innerHTML = `
        <div class="wiki-table-wrap">
          <table class="wiki-table">
            <thead>
              <tr>
                <th>${str('thId')}</th>
                <th>${str('thSprite')}</th>
                <th>${str('thName')}</th>
                <th>${str('thHp')}</th>
                <th>${str('thAtk')}</th>
                <th>${str('thDef')}</th>
                <th>${str('thSpd')}</th>
                <th>${str('thPwr')}</th>
                <th>${str('thTotal')}</th>
                <th>${str('thPassive')}</th>
                <th>${str('thPower')}</th>
                <th>${str('thItem')}</th>
              </tr>
            </thead>
            <tbody>
              ${list.map(c => {
                const pDesc = WIKI.passives[c.passive_id] ? getLocalized(WIKI.passives[c.passive_id].description) : "-";
                const pwDesc = WIKI.powers[c.power_id] ? getLocalized(WIKI.powers[c.power_id].description) : "-";
                const itName = (c.default_item_id >= 0 && WIKI.items[c.default_item_id]) ? getLocalized(WIKI.items[c.default_item_id].name) : "-";
                return `
                  <tr onclick="location.hash='chicken-${c.id}'" style="cursor:pointer;">
                    <td style="font-weight:700;color:var(--wiki-text-muted);">#${String(c.id + 1).padStart(3, '0')}</td>
                    <td><img class="pixelated" src="${c.sprite}" width="32" height="32" alt=""></td>
                    <td style="font-weight:700;"><a href="#chicken-${c.id}">${getLocalized(c.name)}</a></td>
                    <td style="color:#c92a2a;font-weight:600;">${c.stats.life}</td>
                    <td style="color:#d9480f;font-weight:600;">${c.stats.damage}</td>
                    <td style="color:#1864ab;font-weight:600;">${c.stats.armor}</td>
                    <td style="color:#087f5b;font-weight:600;">${c.stats.speed}</td>
                    <td style="color:#862e9c;font-weight:600;">${c.stats.power_amount}</td>
                    <td style="font-weight:700;">${c.stat_total}</td>
                    <td style="font-size:11px;" title="${pDesc}">${pDesc.length > 35 ? pDesc.substring(0, 35) + '...' : pDesc}</td>
                    <td style="font-size:11px;" title="${pwDesc}">${pwDesc.length > 35 ? pwDesc.substring(0, 35) + '...' : pwDesc}</td>
                    <td style="font-size:11px;">${itName}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  function getChickenTacticalAnalysis(chicken, lang) {
    lang = lang || currentLang || 'es';
    if (chicken.tactical_guide) {
      const tg = chicken.tactical_guide[lang] || chicken.tactical_guide.es;
      return {
        role: tg.role,
        roleTitle: tg.role_title,
        turns: chicken.tactical_guide.turns || 1,
        duo: tg.duo,
        allies: tg.allies,
        items: tg.items,
        counter: tg.counter
      };
    }
    const fallbacks = {
      es: { role: 'Todoterreno Equilibrado', roleTitle: 'Equilibrado', duo: 'Compañero versátil para cualquier posición del dúo 2vs2.', allies: 'Combina con cualquier arquetipo.', items: 'Triflor; Circuito Vital; Poción mágica.', counter: 'Observar qué rol cumple y aislarlo.' },
      en: { role: 'Balanced All-Rounder', roleTitle: 'All-Rounder', duo: 'Versatile partner for either position in 2vs2.', allies: 'Pairs well with any archetype.', items: 'Triflower; Vital Circuit; Magic Potion.', counter: 'Identify its role and isolate it.' },
      pt: { role: 'Polivalente Equilibrado', roleTitle: 'Equilibrado', duo: 'Parceiro versátil para qualquer posição na dupla 2vs2.', allies: 'Combina com qualquer arquétipo.', items: 'Triflor; Circuito Vital; Poção Mágica.', counter: 'Identificar seu papel e isolá-lo.' },
      ru: { role: 'Универсал', roleTitle: 'Универсал', duo: 'Универсальный напарник для любой позиции в дуэте 2на2.', allies: 'Сочетается с любым архетипом.', items: 'Трицвет; Контур жизни; Волшебное зелье.', counter: 'Определить его роль и изолировать.' }
    };
    const fb = fallbacks[lang] || fallbacks.es;
    return {
      role: fb.role,
      roleTitle: fb.roleTitle,
      turns: 1,
      duo: fb.duo,
      allies: fb.allies,
      items: fb.items,
      counter: fb.counter
    };
  }

  // 2. CHICKEN DETAIL ARTICLE
  function renderChickenDetail(cid) {
    const c = WIKI.chickens.find(x => x.id === cid);
    if (!c) {
      renderPollopedia();
      return;
    }

    const prevId = cid > 0 ? cid - 1 : WIKI.chickens.length - 1;
    const nextId = cid < WIKI.chickens.length - 1 ? cid + 1 : 0;
    const prevChicken = WIKI.chickens[prevId];
    const nextChicken = WIKI.chickens[nextId];

    const passiveObj = WIKI.passives[c.passive_id];
    const powerObj = WIKI.powers[c.power_id];
    const hiddenPowerObj = (c.hidden_power_id !== null && c.hidden_power_id !== undefined && c.hidden_power_id >= 0) ? WIKI.powers[c.hidden_power_id] : null;
    const itemObj = c.default_item_id >= 0 ? WIKI.items[c.default_item_id] : null;

    // Stat bars percentage based on max 100
    const calcWidth = (val) => Math.min(100, Math.round((val / 100) * 100));

    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
        <a href="#pollopedia" class="btn-control">${str('backToList')}</a>
        <div style="display:flex;gap:8px;">
          <a href="#compare" onclick="window.setCompareA(${c.id})" class="btn-control" style="color:var(--wiki-accent);font-weight:700;">⚖️ ${str('navCompare')}</a>
          <a href="#chicken-${prevId}" class="btn-control">${str('prevBtn')} (#${String(prevId + 1).padStart(3, '0')})</a>
          <a href="#chicken-${nextId}" class="btn-control">${str('nextBtn')} (#${String(nextId + 1).padStart(3, '0')})</a>
        </div>
      </div>

      <div class="wiki-article-layout">
        <!-- Main Article Body -->
        <div class="wiki-article-main">
          <div class="page-header" style="border:none;margin-bottom:8px;">
            <h1 class="page-title">#${String(c.id + 1).padStart(3, '0')} ${getLocalized(c.name)}</h1>
          </div>

          <!-- Evolution Warning if applicable -->
          ${c.evolution && c.evolution.evolution_only ? `
            <div class="article-box" style="background:#fff3bf;border-color:#ffe066;color:#d9480f;">
              <strong>⚠️ ${str('evolutionOnlyWarn')}</strong>
              <div style="font-size:12px;margin-top:4px;">${getLocalized(c.evolution.desc)}</div>
            </div>
          ` : ''}

          <!-- Base Stats Section -->
          <h2 class="article-h2">${str('statBaseTitle')}</h2>
          <div class="stat-bars-container">
            <div class="stat-bar-row">
              <div class="stat-bar-label">${str('statLife')}</div>
              <div class="stat-bar-num" style="color:#c92a2a;">${c.stats.life}</div>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${calcWidth(c.stats.life)}%;background:var(--stat-life);"></div></div>
            </div>
            <div class="stat-bar-row">
              <div class="stat-bar-label">${str('statDamage')}</div>
              <div class="stat-bar-num" style="color:#d9480f;">${c.stats.damage}</div>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${calcWidth(c.stats.damage)}%;background:var(--stat-dmg);"></div></div>
            </div>
            <div class="stat-bar-row">
              <div class="stat-bar-label">${str('statArmor')}</div>
              <div class="stat-bar-num" style="color:#1864ab;">${c.stats.armor}</div>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${calcWidth(c.stats.armor)}%;background:var(--stat-arm);"></div></div>
            </div>
            <div class="stat-bar-row">
              <div class="stat-bar-label">${str('statSpeed')}</div>
              <div class="stat-bar-num" style="color:#087f5b;">${c.stats.speed}</div>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${calcWidth(c.stats.speed)}%;background:var(--stat-spd);"></div></div>
            </div>
            <div class="stat-bar-row">
              <div class="stat-bar-label">${str('statPowerAmount')}</div>
              <div class="stat-bar-num" style="color:#862e9c;">${c.stats.power_amount}</div>
              <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${calcWidth(c.stats.power_amount)}%;background:var(--stat-pwr);"></div></div>
            </div>
            <div style="font-weight:700;font-size:13px;margin-top:6px;text-align:right;">
              ${str('statTotal')}: <span style="color:var(--wiki-accent);">${c.stat_total}</span>
            </div>
          </div>

          <!-- Combat Skills -->
          <h2 class="article-h2">${str('combatSkillsTitle')}</h2>
          <div class="article-box">
            <h4>${str('passiveSkill')} (#${c.passive_id + 1})</h4>
            <p style="font-size:13px;line-height:1.5;">${passiveObj ? getLocalized(passiveObj.description) : '-'}</p>
            <div style="margin-top:8px;">
              <a href="#passives" style="font-size:12px;">${str('viewAllWithPassive')}</a>
            </div>
          </div>

          <div class="article-box">
            <h4>✨ ${str('activePower')} (#${c.power_id + 1})</h4>
            <p style="font-size:13px;line-height:1.5;">${powerObj ? getLocalized(powerObj.description) : '-'}</p>
            <div style="font-size:12px;color:var(--wiki-text-muted);margin-top:6px;">
              <strong>${str('powerCost')}:</strong> ${c.power_max} ${str('energyPoints')}
            </div>
            <div style="margin-top:8px;">
              <a href="#powers" style="font-size:12px;">${str('viewAllWithPower')}</a>
            </div>
          </div>

          <div class="article-box">
            <h4>🔮 ${str('hiddenPower')} ${c.hidden_power_id !== null && c.hidden_power_id !== undefined && c.hidden_power_id >= 0 ? `(#${c.hidden_power_id + 1})` : ''}</h4>
            ${hiddenPowerObj ? `
              <p style="font-size:13px;line-height:1.5;">${getLocalized(hiddenPowerObj.description)}</p>
              <div style="font-size:12px;color:var(--wiki-text-muted);margin-top:6px;">
                <strong>${str('powerCost')}:</strong> ${hiddenPowerObj.cost} ${str('energyPoints')}
              </div>
              <div style="margin-top:8px;">
                <a href="#powers" style="font-size:12px;">${str('viewCombatPowers')}</a>
              </div>
            ` : `
              <p style="font-size:13px;line-height:1.5;color:var(--wiki-text-muted);">${str('noHiddenPower')}</p>
            `}
          </div>

          
          <!-- Guía Táctica 2vs2 -->
          ${(() => {
            const tactical = getChickenTacticalAnalysis(c, currentLang);
            const turnsWord = tactical.turns === 1 ? str('turn') : str('turns');
            return `
              <h2 class="article-h2">🎯 ${str('tacticalGuideTitle')}</h2>
              <div class="article-box" style="border-left: 4px solid #f59e0b; background: var(--wiki-bg-card, var(--wiki-bg));">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
                  <div>
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--wiki-text-muted);display:block;">
                      ${str('tacticalArchetype')}
                    </span>
                    <span style="font-size:15px;font-weight:700;color:#f59e0b;">${tactical.role}</span>
                  </div>
                  <div style="text-align:right;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--wiki-text-muted);display:block;">
                      ${str('powerCycle')}
                    </span>
                    <span style="font-size:13px;font-weight:600;font-family:monospace;color:var(--wiki-accent);">
                      ~${tactical.turns} ${turnsWord}
                    </span>
                  </div>
                </div>

                <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;line-height:1.5;">
                  <div>
                    <strong style="color:#d97706;display:block;margin-bottom:2px;">
                      ⚔️ ${str('tacticalDuoRole')}
                    </strong>
                    <p style="margin:0;">${tactical.duo}</p>
                  </div>

                  <div style="border-top:1px solid var(--wiki-border-light);padding-top:8px;">
                    <strong style="color:#059669;display:block;margin-bottom:2px;">
                      🤝 ${str('recommendedPartners')}
                    </strong>
                    <p style="margin:0;color:var(--wiki-text-muted);">${tactical.allies}</p>
                  </div>

                  <div style="border-top:1px solid var(--wiki-border-light);padding-top:8px;">
                    <strong style="color:#2563eb;display:block;margin-bottom:2px;">
                      🎒 ${str('key2vs2Items')}
                    </strong>
                    <p style="margin:0;color:var(--wiki-text-muted);">${tactical.items}</p>
                  </div>

                  <div style="border-top:1px solid var(--wiki-border-light);padding-top:8px;">
                    <strong style="color:#e11d48;display:block;margin-bottom:2px;">
                      🔴 ${str('howToCounter')}
                    </strong>
                    <p style="margin:0;color:var(--wiki-text-muted);">${tactical.counter}</p>
                  </div>
                </div>
              </div>
            `;
          })()}

          <!-- Evolution Tree -->
          ${c.evolution ? `
            <h2 class="article-h2">🔄 ${str('evolutionHeader')}</h2>
            <div class="article-box" style="border-left:4px solid var(--wiki-accent);">
              <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
                ${c.evolution.type === 'evolves_into' ? `
                  <div style="display:flex;align-items:center;gap:8px;">
                    <img class="pixelated" src="${c.sprite}" width="40" height="40" alt="">
                    <strong>${getLocalized(c.name)}</strong>
                  </div>
                  <span style="font-size:18px;">➔</span>
                  <div style="display:flex;align-items:center;gap:8px;cursor:pointer;" onclick="location.hash='chicken-${c.evolution.target_id}'">
                    <img class="pixelated" src="images/chickens/${c.evolution.target_id}.png" width="40" height="40" alt="">
                    <a href="#chicken-${c.evolution.target_id}"><strong>${WIKI.chickens[c.evolution.target_id] ? getLocalized(WIKI.chickens[c.evolution.target_id].name) : c.evolution.target_name} (#${String(c.evolution.target_id + 1).padStart(3, '0')})</strong></a>
                  </div>
                ` : `
                  <div style="display:flex;align-items:center;gap:8px;cursor:pointer;" onclick="location.hash='chicken-${c.evolution.source_id}'">
                    <img class="pixelated" src="images/chickens/${c.evolution.source_id}.png" width="40" height="40" alt="">
                    <a href="#chicken-${c.evolution.source_id}"><strong>${WIKI.chickens[c.evolution.source_id] ? getLocalized(WIKI.chickens[c.evolution.source_id].name) : c.evolution.source_name} (#${String(c.evolution.source_id + 1).padStart(3, '0')})</strong></a>
                  </div>
                  <span style="font-size:18px;">➔</span>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <img class="pixelated" src="${c.sprite}" width="40" height="40" alt="">
                    <strong>${getLocalized(c.name)}</strong>
                  </div>
                `}
              </div>
              <p style="font-size:12px;margin-top:8px;color:var(--wiki-text-muted);">${getLocalized(c.evolution.desc)}</p>
            </div>
          ` : ''}

          <!-- Habitats -->
          ${(() => {
            const wildNames = (c.habitats.wild_ids || []).map(zid => WIKI.zones[zid] ? getLocalized(WIKI.zones[zid].name) : '');
            const eggNames = (c.habitats.egg_ids || []).map(zid => WIKI.zones[zid] ? getLocalized(WIKI.zones[zid].name) : '');
            return `
              <h2 class="article-h2">🗺️ ${str('habitatsHeader')}</h2>
              <div class="article-box">
                <div style="margin-bottom:12px;">
                  <strong>${str('wildCombats')}:</strong>
                  ${wildNames.length > 0 ? wildNames.map(z => `<span class="badge badge-zone" style="margin-left:6px;">${z}</span>`).join('') : `<span style="color:var(--wiki-text-muted);margin-left:6px;">${str('noWild')}</span>`}
                </div>
                <div>
                  <strong>${str('eggPools')}:</strong>
                  ${eggNames.length > 0 ? eggNames.map(z => `<span class="badge badge-zone" style="margin-left:6px;">${z}</span>`).join('') : `<span style="color:var(--wiki-text-muted);margin-left:6px;">${str('noEgg')}</span>`}
                </div>
              </div>
            `;
          })()}
        </div>

        <!-- Classic MediaWiki Infobox -->
        <div class="wiki-infobox">
          <div class="infobox-title">#${String(c.id + 1).padStart(3, '0')} - ${getLocalized(c.name)}</div>
          <div class="infobox-image-box">
            <img class="infobox-image pixelated" src="${c.sprite}" alt="${getLocalized(c.name)}">
          </div>
          <div class="infobox-row">
            <div class="infobox-label">${str('thId')}</div>
            <div class="infobox-value">#${String(c.id + 1).padStart(3, '0')}</div>
          </div>
          <div class="infobox-row">
            <div class="infobox-label">${str('thHp')} / ${str('thAtk')}</div>
            <div class="infobox-value">${c.stats.life} / ${c.stats.damage}</div>
          </div>
          <div class="infobox-row">
            <div class="infobox-label">${str('thDef')} / ${str('thSpd')}</div>
            <div class="infobox-value">${c.stats.armor} / ${c.stats.speed}</div>
          </div>
          <div class="infobox-row">
            <div class="infobox-label">${str('thPwr')} / Max</div>
            <div class="infobox-value">${c.stats.power_amount} / ${c.power_max}</div>
          </div>
          <div class="infobox-row">
            <div class="infobox-label">${str('statTotal')}</div>
            <div class="infobox-value" style="font-weight:700;">${c.stat_total}</div>
          </div>
          <div class="infobox-row">
            <div class="infobox-label">${str('defaultItem')}</div>
            <div class="infobox-value">
              ${itemObj ? `
                <div style="display:flex;align-items:center;gap:6px;">
                  <img class="pixelated" src="${itemObj.sprite}" width="20" height="20" alt="">
                  <a href="#items">${getLocalized(itemObj.name)}</a>
                </div>
              ` : '-'}
            </div>
          </div>
          <div class="infobox-row">
            <div class="infobox-label">${str('wildHabitats')}</div>
            <div class="infobox-value" style="font-size:11px;">
              ${(() => {
                const wildNames = (c.habitats.wild_ids || []).map(zid => WIKI.zones[zid] ? getLocalized(WIKI.zones[zid].name) : '');
                return wildNames.length > 0 ? wildNames.join(', ') : str('noWild');
              })()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 3. ITEMS VIEW
  function renderItems() {
    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">🎒 ${str('navItems')}</h1>
        <p class="page-subtitle">${str('secItemsDesc')}</p>
      </div>

      <div class="wiki-toolbar">
        <div class="filter-group">
          <select id="itemTypeFilter" class="filter-select">
            <option value="all">${str('allTypes')}</option>
            <option value="equipable" ${currentItemTypeFilter === 'equipable' ? 'selected' : ''}>${str('equipable')}</option>
            <option value="consumable" ${currentItemTypeFilter === 'consumable' ? 'selected' : ''}>${str('consumable')}</option>
          </select>

          <input type="text" id="itemSearch" class="filter-select" placeholder="${str('searchPlaceholder')}" style="min-width: 200px;">
        </div>
      </div>

      <div id="itemsContainer"></div>
    `;

    document.getElementById('itemTypeFilter').addEventListener('change', (e) => {
      currentItemTypeFilter = e.target.value;
      updateItemsList();
    });

    document.getElementById('itemSearch').addEventListener('input', () => {
      updateItemsList();
    });

    updateItemsList();
  }

  function updateItemsList() {
    const listWrap = document.getElementById('itemsContainer');
    const searchVal = (document.getElementById('itemSearch')?.value || '').toLowerCase().trim();

    let list = WIKI.items.slice();

    if (currentItemTypeFilter === 'equipable') {
      list = list.filter(i => !i.consumable);
    } else if (currentItemTypeFilter === 'consumable') {
      list = list.filter(i => i.consumable);
    }

    if (searchVal) {
      const qNorm = norm(searchVal);
      list = list.filter(i => {
        return matchLoc(i.name, qNorm) ||
               matchLoc(i.description, qNorm) ||
               i.id.toString() === qNorm ||
               (i.id + 1).toString() === qNorm;
      });
    }

    listWrap.innerHTML = `
      <div class="wiki-table-wrap">
        <table class="wiki-table">
          <thead>
            <tr>
              <th>${str('thId')}</th>
              <th>${str('thSprite')}</th>
              <th>${str('thName')}</th>
              <th>${str('thType')}</th>
              <th>${str('thShopPrice')}</th>
              <th>${str('thPrice')}</th>
              <th>${str('thWhere')}</th>
              <th>${str('thEffect')}</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(it => {
              const zoneNames = [];
              if (it.found_in_zone_ids) {
                it.found_in_zone_ids.forEach(zid => {
                  if (WIKI.zones[zid]) zoneNames.push(getLocalized(WIKI.zones[zid].name));
                });
              }
              if (it.found_in_special) {
                it.found_in_special.forEach(sp => {
                  zoneNames.push(getLocalized(sp));
                });
              }
              if (zoneNames.length === 0 && it.found_in_zones && it.found_in_zones.length > 0) {
                zoneNames.push(...it.found_in_zones);
              }
              const whereStr = zoneNames.length > 0 ? zoneNames.join(', ') : '-';
              return `
                <tr>
                  <td style="font-weight:700;color:var(--wiki-text-muted);">#${String(it.id + 1).padStart(2, '0')}</td>
                  <td><img class="pixelated" src="${it.sprite}" width="32" height="32" alt=""></td>
                  <td style="font-weight:700;white-space:nowrap;">${getLocalized(it.name)}</td>
                  <td><span class="badge ${it.consumable ? 'badge-evo' : 'badge-zone'}">${it.consumable ? str('consumable') : str('equipable')}</span></td>
                  <td style="font-weight:600;color:var(--wiki-gold);">${it.shop_price} 💰</td>
                  <td style="color:var(--wiki-text-muted);">${it.price} 💰</td>
                  <td style="font-size:11px;">${whereStr}</td>
                  <td style="font-size:12px;line-height:1.4;">${getLocalized(it.description)}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 4. POWERS VIEW
  function renderPowers() {
    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">✨ ${str('navPowers')}</h1>
        <p class="page-subtitle">${str('secPowersDesc')}</p>
      </div>

      <div class="wiki-table-wrap">
        <table class="wiki-table">
          <thead>
            <tr>
              <th style="width:60px;">${str('thId')}</th>
              <th>${str('thEffect')}</th>
              <th>${str('thChickens')}</th>
            </tr>
          </thead>
          <tbody>
            ${WIKI.powers.map(p => `
              <tr>
                <td style="font-weight:700;color:var(--wiki-text-muted);">#${p.id + 1}</td>
                <td style="font-weight:600;font-size:13px;">${getLocalized(p.description)}</td>
                <td>
                  ${p.chickens && p.chickens.length > 0 ? `
                    <div style="font-size:11px;font-weight:700;margin-bottom:4px;color:var(--wiki-text-muted);">${str('thChickens')}:</div>
                    <div class="mini-chicken-list">
                      ${p.chickens.map(ch => `
                        <div class="mini-chicken-chip" onclick="location.hash='chicken-${ch.id}'">
                          <img class="pixelated" src="${ch.sprite}" alt="">
                          <span>${getLocalized(ch.name)}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                  ${p.chickens_hidden && p.chickens_hidden.length > 0 ? `
                    <div style="font-size:11px;font-weight:700;margin-top:${p.chickens && p.chickens.length > 0 ? '8px' : '0'};margin-bottom:4px;color:var(--wiki-accent);">${str('thChickensHidden')}:</div>
                    <div class="mini-chicken-list">
                      ${p.chickens_hidden.map(ch => `
                        <div class="mini-chicken-chip" style="border-color:#b197fc;" onclick="location.hash='chicken-${ch.id}'">
                          <img class="pixelated" src="${ch.sprite}" alt="">
                          <span>${getLocalized(ch.name)}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                  ${(!p.chickens || p.chickens.length === 0) && (!p.chickens_hidden || p.chickens_hidden.length === 0) ? `
                    <span style="font-size:12px;color:var(--wiki-text-muted);">-</span>
                  ` : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 5. PASSIVES VIEW
  function renderPassives() {
    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">⚡ ${str('navPassives')}</h1>
        <p class="page-subtitle">${str('secPassivesDesc')}</p>
      </div>

      <div class="wiki-table-wrap">
        <table class="wiki-table">
          <thead>
            <tr>
              <th style="width:60px;">${str('thId')}</th>
              <th>${str('thEffect')}</th>
              <th>${str('thChickens')}</th>
            </tr>
          </thead>
          <tbody>
            ${WIKI.passives.map(p => `
              <tr>
                <td style="font-weight:700;color:var(--wiki-text-muted);">#${p.id + 1}</td>
                <td style="font-size:13px;line-height:1.4;">${getLocalized(p.description)}</td>
                <td>
                  <div class="mini-chicken-list">
                    ${p.chickens.map(ch => `
                      <div class="mini-chicken-chip" onclick="location.hash='chicken-${ch.id}'">
                        <img class="pixelated" src="${ch.sprite}" alt="">
                        <span>${getLocalized(ch.name)}</span>
                      </div>
                    `).join('')}
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 6. STATUS EFFECTS VIEW
  function renderStates() {
    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">🧪 ${str('navStates')}</h1>
        <p class="page-subtitle">${str('secStatesDesc')}</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;">
        ${WIKI.states.map(s => {
          const sName = getLocalized(s.name);
          const sDesc = getLocalized(s.description);
          return `
            <div class="article-box" style="border-left: 6px solid ${s.color};">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
                <span class="badge" style="background:${s.color};color:#fff;font-size:13px;padding:4px 10px;">${sName}</span>
                <span style="font-size:12px;color:var(--wiki-text-muted);font-weight:600;">ID: ${s.id + 1}</span>
              </div>
              <p style="font-size:14px;font-weight:500;margin-bottom:8px;">${sDesc}</p>
              <div style="font-size:12px;color:var(--wiki-text-muted);background:var(--wiki-surface);padding:8px 12px;border-radius:4px;border:1px solid var(--wiki-border-light);">
                ${getStatusTips(s.id, currentLang)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function getStatusTips(stateId, lang) {
    lang = lang || currentLang || 'es';
    const tips = {
      0: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Curado por <em>Gota milagro (#48)</em> o <em>Poción mágica (#35)</em>. Rufux y otros pollos ganan vida al golpear enemigos envenenados.",
        en: "💡 <strong>Counters & Synergies:</strong> Cleansed by <em>Miracle Drop (#48)</em> or <em>Magic Potion (#35)</em>. Rufux and other chickens heal when attacking poisoned foes.",
        pt: "💡 <strong>Contramedidas e Sinergias:</strong> Curado por <em>Gota Milagrosa (#48)</em> ou <em>Poção Mágica (#35)</em>. Rufux e outros frangos recuperam vida ao atingir inimigos envenenados.",
        ru: "💡 <strong>Противодействие и синергия:</strong> Снимается предметами <em>Чудо-капля (#48)</em> или <em>Волшебное зелье (#35)</em>. Rufux и другие восстанавливают здоровье при атаке отравленных врагов."
      },
      1: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Se activa tanto al atacar como al recibir daño. Curado por <em>Flama burbujeante (#16)</em>. El objeto <em>Sanación ardiente (#11)</em> convierte el daño de quemadura en curación!",
        en: "💡 <strong>Counters & Synergies:</strong> Triggers both when attacking and when struck. Cleansed by <em>Flame fizz (#16)</em>. Equipping <em>Sizzle heal (#11)</em> reverses burn damage into healing!",
        pt: "💡 <strong>Contramedidas e Sinergias:</strong> Ativa ao atacar e ao receber dano. Curado por <em>Chama Efervescente (#16)</em>. O item <em>Cura Ardente (#11)</em> converte o dano de queimadura em cura!",
        ru: "💡 <strong>Противодействие и синергия:</strong> Срабатывает при атаке и получении урона. Снимается <em>Гаситель пламени (#16)</em>. Предмет <em>Жгучее лечение (#11)</em> превращает ожог в исцеление!"
      },
      2: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Impide que el pollo actúe mientras está congelado. Curado por <em>Té caliente (#41)</em>. Ciertos pollos helados causan daño extra a objetivos congelados.",
        en: "💡 <strong>Counters & Synergies:</strong> Prevents the frozen chicken from taking actions. Cleansed by <em>Hot Tea (#41)</em>. Attacking frozen targets can trigger critical bonus damage.",
        pt: "💡 <strong>Contramedidas e Sinergias:</strong> Impede ações enquanto congelado. Curado por <em>Chá Quente (#41)</em>. Ataques contra alvos congelados causam dano bônus.",
        ru: "💡 <strong>Противодействие и синергия:</strong> Полностью блокирует действия цели. Снимается <em>Горячий чай (#41)</em>. Атаки по замороженным врагам могут наносить повышенный урон."
      },
      3: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Reduce el daño, velocidad y armadura a la mitad (50%). Curado por <em>Reinicio Neural (#55)</em>. Ideal para incapacitar enemigos rápidos o con alta defensa.",
        en: "💡 <strong>Counters & Synergies:</strong> Halves (50%) damage, speed, and armor. Cleansed by <em>Neural Reset (#55)</em>. Excellent for crippling high-speed or heavily armored foes.",
        pt: "💡 <strong>Contramedidas e Sinergias:</strong> Reduz dano, velocidade e armadura pela metade (50%). Curado por <em>Reinício Neural (#55)</em>. Excelente para neutralizar alvos velozes.",
        ru: "💡 <strong>Противодействие и синергия:</strong> Снижает урон, скорость и броню вдвое (50%). Снимается <em>Нейроперезагрузка (#55)</em>. Идеально против быстрых и бронированных врагов."
      },
      4: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Bloquea cualquier curación y causa 10% de daño si la criatura intenta curarse. Curado por <em>Poción mágica (#35)</em>. Letal contra equipos basados en pociones y regeneración.",
        en: "💡 <strong>Counters & Synergies:</strong> Blocks all healing and inflicts 10% damage if the afflicted unit attempts to heal. Cleansed by <em>Magic Potion (#35)</em>.",
        pt: "💡 <strong>Contramedidas e Sinergias:</strong> Bloqueia qualquer cura e causa 10% de dano se a unidade tentar se curar. Curado por <em>Poção Mágica (#35)</em>.",
        ru: "💡 <strong>Противодействие и синергия:</strong> Блокирует любое лечение и наносит 10% урона при попытке исцелиться. Снимается <em>Волшебное зелье (#35)</em>."
      },
      5: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Impide acumular energía para desatar poderes especiales. Curado por <em>Gran pico (#18)</em>. Muy eficaz contra jefes con poderes devastadores.",
        en: "💡 <strong>Counters & Synergies:</strong> Blocks charging power energy. Cleansed by <em>Big Beak (#18)</em>. Strong against boss encounters with devastating powers.",
        pt: "💡 <strong>Contramedidas e Sinergias:</strong> Impede o carregamento de energia para usar poderes especiais. Curado por <em>Grande Bico (#18)</em>.",
        ru: "💡 <strong>Противодействие и синергия:</strong> Не дает накапливать энергию для применения способностей. Снимается <em>Большой клюв (#18)</em>."
      },
      6: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Causa daño al portador y al mismo tiempo cura a sus enemigos un 5% de su vida máxima al empezar una acción. Curado por <em>Medicina (#27)</em>.",
        en: "💡 <strong>Counters & Synergies:</strong> Drains the victim's life and simultaneously heals the opposing team on each action. Cleansed by <em>Cure-All (#27)</em>.",
        pt: "💡 <strong>Contramedidas e Sinergias:</strong> Drena a vida da vítima e cura a equipe adversária em 5% da vida máxima a cada ação. Curado por <em>Cura-Tudo (#27)</em>.",
        ru: "💡 <strong>Противодействие и синергия:</strong> Истощает здоровье жертвы и лечит команду врага на 5% от макс. здоровья за каждое действие. Снимается <em>Панацея (#27)</em>."
      }
    };
    const tEntry = tips[stateId];
    return tEntry ? (tEntry[lang] || tEntry['es']) : "";
  }

  // 7. ZONES VIEW
  function renderZones() {
    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">🗺️ ${str('navZones')}</h1>
        <p class="page-subtitle">${str('secZonesDesc')}</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:28px;">
        ${WIKI.zones.map(z => {
          const zName = getLocalized(z.name);
          const t = z.tournament;
          return `
            <div class="zone-card">
              <div class="zone-header-banner" style="background-image: url('${z.banner}');">
                <div class="zone-banner-title">${str('searchBadgeZone')} ${z.id + 1}: ${zName}</div>
              </div>
              <div class="zone-body">
                <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:13px;margin-bottom:16px;color:var(--wiki-text-muted);">
                  <div><strong>${str('recommendedLevel')}</strong> ${z.level_range[0]} - ${z.level_range[1]}</div>
                  <div><strong>${str('travelCost')}</strong> ${z.travel_price} 💰</div>
                </div>

                <!-- Wild Combats -->
                <h4 style="font-size:13px;margin-bottom:6px;">⚔️ ${str('wildCombats')} (${z.combat_pool.length} ${str('speciesCount')})</h4>
                <div class="mini-chicken-list" style="margin-bottom:16px;">
                  ${z.combat_pool.map(cid => {
                    const ch = WIKI.chickens[cid];
                    if (!ch) return '';
                    return `
                      <div class="mini-chicken-chip" onclick="location.hash='chicken-${ch.id}'">
                        <img class="pixelated" src="${ch.sprite}" alt="">
                        <span>${getLocalized(ch.name)}</span>
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Eggs in Zone -->
                <h4 style="font-size:13px;margin-bottom:6px;">🥚 ${str('eggPools')} (${z.egg_pool.length} ${str('speciesCount')})</h4>
                <div class="mini-chicken-list" style="margin-bottom:16px;">
                  ${z.egg_pool.map(cid => {
                    const ch = WIKI.chickens[cid];
                    if (!ch) return '';
                    return `
                      <div class="mini-chicken-chip" onclick="location.hash='chicken-${ch.id}'">
                        <img class="pixelated" src="${ch.sprite}" alt="">
                        <span>${getLocalized(ch.name)}</span>
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Shop Items -->
                <h4 style="font-size:13px;margin-bottom:6px;">${str('zoneShopTitle')}</h4>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;">
                  ${z.shop_item_ids.map(iid => {
                    const it = WIKI.items[iid];
                    if (!it) return '';
                    return `
                      <div style="display:flex;align-items:center;gap:6px;background:var(--wiki-bg);border:1px solid var(--wiki-border-light);padding:4px 8px;border-radius:4px;font-size:12px;">
                        <img class="pixelated" src="${it.sprite}" width="20" height="20" alt="">
                        <span>${getLocalized(it.name)} (${it.shop_price} 💰)</span>
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Tournament Section -->
                ${t && t.cup_name ? `
                  <div class="article-box" style="border:1px solid var(--wiki-accent);background:var(--wiki-accent-light);">
                    <h4 style="color:var(--wiki-accent);font-size:14px;margin-bottom:8px;">🏆 ${getLocalized(t.cup_name)}</h4>
                    <div style="font-size:12px;display:flex;gap:16px;flex-wrap:wrap;margin-bottom:10px;">
                      <div><strong>${str('entryFee')}:</strong> ${t.entry_fee} 💰</div>
                      <div><strong>${str('prizeMoney')}:</strong> ${t.prize} 💰</div>
                      <div><strong>${str('roundsCount')}</strong> ${t.rounds_count}</div>
                    </div>
                    <div style="font-size:13px;margin-bottom:8px;">
                      <strong>${str('tournamentRule')}:</strong> <em>${getLocalized(t.rule)}</em>
                    </div>

                    <!-- Tournament Rewards -->
                    <div style="font-size:12px;margin-top:8px;">
                      <strong>${str('tournamentRewards')}:</strong>
                      <div style="display:flex;gap:8px;margin-top:4px;">
                        ${t.reward_item_ids.map(iid => {
                          const it = WIKI.items[iid];
                          if (!it) return '';
                          return `
                            <div style="display:flex;align-items:center;gap:6px;background:var(--wiki-surface);border:1px solid var(--wiki-border);padding:3px 8px;border-radius:4px;">
                              <img class="pixelated" src="${it.sprite}" width="18" height="18" alt="">
                              <span>${getLocalized(it.name)}</span>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // 8. ACHIEVEMENTS VIEW
  function renderAchievements() {
    const container = document.getElementById('wikiContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">🏆 ${str('navAchievements')}</h1>
        <p class="page-subtitle">${str('secAchievementsDesc')}</p>
      </div>

      <div class="wiki-table-wrap">
        <table class="wiki-table">
          <thead>
            <tr>
              <th style="width:50px;">${str('thId')}</th>
              <th style="width:60px;">${str('thIcon')}</th>
              <th>${str('thTitle')}</th>
              <th>${str('thUnlockReq')}</th>
            </tr>
          </thead>
          <tbody>
            ${WIKI.achievements.map(a => `
              <tr>
                <td style="font-weight:700;color:var(--wiki-text-muted);">#${String(a.id + 1).padStart(2, '0')}</td>
                <td><img class="pixelated" src="${a.sprite}" width="36" height="36" alt=""></td>
                <td style="font-weight:700;font-size:14px;white-space:nowrap;">${getLocalized(a.name)}</td>
                <td style="font-size:13px;line-height:1.4;">${getLocalized(a.description)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 9. MECHANICS VIEW
  function renderMechanics() {
    const container = document.getElementById('wikiContent');
    const m = WIKI.mechanics;
    const catKeys = Object.keys(m);

    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">📖 ${str('navMechanics')}</h1>
        <p class="page-subtitle">${str('secMechanicsDesc')}</p>
      </div>

      <!-- Quick Jump Navigation Pills -->
      <div class="mechanics-nav-bar">
        ${catKeys.map(key => {
          const cat = m[key];
          const icon = cat.icon || '📌';
          return `<a class="mechanics-pill" href="#cat-${key}" onclick="event.preventDefault(); document.getElementById('cat-${key}').scrollIntoView({ behavior: 'smooth' });">${icon} ${getLocalized(cat.title)}</a>`;
        }).join('')}
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        ${catKeys.map(key => {
          const cat = m[key];
          const icon = cat.icon || '📌';
          return `
            <div class="mechanics-category" id="cat-${key}">
              <div class="mechanics-category-header">
                <span style="font-size:24px;">${icon}</span>
                <h2 class="mechanics-category-title">${getLocalized(cat.title)}</h2>
              </div>
              ${cat.sections.map(sec => `
                <div class="mechanics-card">
                  <h4>${getLocalized(sec.title)}</h4>
                  <p>${getLocalized(sec.content)}</p>
                  ${sec.formula ? `
                    <div class="mechanics-formula-box">
                      <span>📐</span>
                      <code>${sec.formula}</code>
                    </div>
                  ` : ''}
                  ${sec.tip ? `
                    <div class="mechanics-tip-box">
                      ${getLocalized(sec.tip)}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // 10. COMPARE VIEW
  function generateCompareRadarSvg(cA, cB) {
    const CX = 180;
    const CY = 145;
    const R = 85;
    const axes = [
      { key: 'life', label: str('thHp'), max: 130 },
      { key: 'damage', label: str('thAtk'), max: 130 },
      { key: 'speed', label: str('thSpd'), max: 120 },
      { key: 'armor', label: str('thDef'), max: 100 },
      { key: 'power_amount', label: str('thPwr'), max: 100 }
    ];

    const angles = axes.map((_, i) => -Math.PI / 2 + (i * 2 * Math.PI) / 5);

    // Background concentric pentagons (20%, 40%, 60%, 80%, 100%)
    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
    const gridSvg = gridLevels.map(lvl => {
      const pts = angles.map(a => {
        const x = CX + R * lvl * Math.cos(a);
        const y = CY + R * lvl * Math.sin(a);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      }).join(' ');
      return `<polygon points="${pts}" fill="none" stroke="var(--wiki-border-light, #38434f)" stroke-width="${lvl === 1.0 ? '1.5' : '1'}" stroke-dasharray="${lvl === 1.0 ? 'none' : '3 3'}" opacity="0.6"/>`;
    }).join('');

    // Radial axis lines & text labels
    const axisLines = angles.map((a, i) => {
      const xEnd = CX + R * Math.cos(a);
      const yEnd = CY + R * Math.sin(a);
      const xLabel = CX + (R + 24) * Math.cos(a);
      const yLabel = CY + (R + 18) * Math.sin(a);
      const valA = cA.stats[axes[i].key];
      const valB = cB.stats[axes[i].key];
      const unit = axes[i].key === 'armor' ? '%' : '';
      const anchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');

      return `
        <line x1="${CX}" y1="${CY}" x2="${xEnd.toFixed(1)}" y2="${yEnd.toFixed(1)}" stroke="var(--wiki-border-light, #38434f)" stroke-width="1" opacity="0.5"/>
        <text x="${xLabel.toFixed(1)}" y="${yLabel.toFixed(1)}" text-anchor="${anchor}" font-size="11" font-weight="700" fill="var(--wiki-text-muted, #8b949e)">
          ${axes[i].label}
          <tspan dy="12" x="${xLabel.toFixed(1)}" text-anchor="${anchor}" font-size="10" font-weight="800">
            <tspan fill="#3b82f6">${valA}${unit}</tspan> vs <tspan fill="#ef4444">${valB}${unit}</tspan>
          </tspan>
        </text>
      `;
    }).join('');

    // Polygons for A and B
    const ptsA = angles.map((a, i) => {
      const pct = Math.max(0.08, Math.min(1.0, cA.stats[axes[i].key] / axes[i].max));
      const x = CX + R * pct * Math.cos(a);
      const y = CY + R * pct * Math.sin(a);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    const ptsB = angles.map((a, i) => {
      const pct = Math.max(0.08, Math.min(1.0, cB.stats[axes[i].key] / axes[i].max));
      const x = CX + R * pct * Math.cos(a);
      const y = CY + R * pct * Math.sin(a);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    return `
      <svg viewBox="0 0 360 295" style="width:100%;max-width:440px;height:auto;margin:0 auto;display:block;">
        ${gridSvg}
        ${axisLines}
        <!-- Polygon A (Blue) -->
        <polygon points="${ptsA}" fill="rgba(59, 130, 246, 0.25)" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round"/>
        ${angles.map((a, i) => {
          const pct = Math.max(0.08, Math.min(1.0, cA.stats[axes[i].key] / axes[i].max));
          const x = CX + R * pct * Math.cos(a);
          const y = CY + R * pct * Math.sin(a);
          return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>`;
        }).join('')}
        <!-- Polygon B (Red) -->
        <polygon points="${ptsB}" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" stroke-width="2.5" stroke-linejoin="round"/>
        ${angles.map((a, i) => {
          const pct = Math.max(0.08, Math.min(1.0, cB.stats[axes[i].key] / axes[i].max));
          const x = CX + R * pct * Math.cos(a);
          const y = CY + R * pct * Math.sin(a);
          return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#ef4444" stroke="#fff" stroke-width="1.5"/>`;
        }).join('')}
      </svg>
    `;
  }

  let compareAId = 0;
  let compareBId = 1;
  window.setCompareA = function(id) { compareAId = id; };

  function renderCompare() {
    const container = document.getElementById('wikiContent');
    const cA = WIKI.chickens.find(x => x.id === compareAId) || WIKI.chickens[0];
    const cB = WIKI.chickens.find(x => x.id === compareBId) || WIKI.chickens[1];

    const pA = WIKI.passives[cA.passive_id];
    const pB = WIKI.passives[cB.passive_id];
    const pwA = WIKI.powers[cA.power_id];
    const pwB = WIKI.powers[cB.power_id];
    const hpA = (cA.hidden_power_id >= 0) ? WIKI.powers[cA.hidden_power_id] : null;
    const hpB = (cB.hidden_power_id >= 0) ? WIKI.powers[cB.hidden_power_id] : null;

    const turnsA = Math.max(1, Math.ceil(cA.power_max / (cA.stats.power_amount || 1)));
    const turnsB = Math.max(1, Math.ceil(cB.power_max / (cB.stats.power_amount || 1)));

    const tacticalA = getChickenTacticalAnalysis(cA, currentLang);
    const tacticalB = getChickenTacticalAnalysis(cB, currentLang);

    const statsList = [
      { key: 'life', label: str('statLife'), color: 'var(--stat-life, #e03131)' },
      { key: 'damage', label: str('statDamage'), color: 'var(--stat-dmg, #f76707)' },
      { key: 'armor', label: str('statArmor'), color: 'var(--stat-arm, #1c7ed6)' },
      { key: 'speed', label: str('statSpeed'), color: 'var(--stat-spd, #0ca678)' },
      { key: 'power_amount', label: str('statPowerAmount'), color: 'var(--stat-pwr, #7048e8)' },
      { key: 'total', label: str('statTotal'), color: 'var(--wiki-gold, #c89500)' }
    ];

    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">⚖️ ${str('compareTitle')}</h1>
        <p class="page-subtitle">${str('compareDesc')}</p>
      </div>

      <div class="compare-container">
        <!-- Selectors Toolbar -->
        <div class="compare-selectors">
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--wiki-text-muted);margin-bottom:4px;">${str('chickenA')}:</label>
            <select id="compareSelectA" class="filter-select" style="width:100%;">
              ${WIKI.chickens.map(c => `<option value="${c.id}" ${c.id === cA.id ? 'selected' : ''}>#${String(c.id + 1).padStart(3, '0')} - ${getLocalized(c.name)}</option>`).join('')}
            </select>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div class="compare-vs-badge">VS</div>
            <div style="display:flex;gap:4px;">
              <button id="btnSwapCompare" class="btn-control" style="font-size:11px;" title="${str('swapChickens')}">${str('swapChickens')}</button>
              <button id="btnRandomCompare" class="btn-control" style="font-size:11px;" title="${str('randomChickens')}">${str('randomChickens')}</button>
            </div>
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--wiki-text-muted);margin-bottom:4px;">${str('chickenB')}:</label>
            <select id="compareSelectB" class="filter-select" style="width:100%;">
              ${WIKI.chickens.map(c => `<option value="${c.id}" ${c.id === cB.id ? 'selected' : ''}>#${String(c.id + 1).padStart(3, '0')} - ${getLocalized(c.name)}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Top Avatars Summary -->
        <div class="compare-grid">
          <div class="compare-card" style="text-align:center;">
            <img class="pixelated" src="${cA.sprite}" style="width:84px;height:84px;margin:0 auto;" alt="${getLocalized(cA.name)}">
            <h2 style="margin:4px 0 0;"><a href="#chicken-${cA.id}">#${String(cA.id + 1).padStart(3, '0')} ${getLocalized(cA.name)}</a></h2>
            <div style="font-size:12px;font-weight:700;color:#f59e0b;">${tacticalA.role}</div>
          </div>
          <div class="compare-card" style="text-align:center;">
            <img class="pixelated" src="${cB.sprite}" style="width:84px;height:84px;margin:0 auto;" alt="${getLocalized(cB.name)}">
            <h2 style="margin:4px 0 0;"><a href="#chicken-${cB.id}">#${String(cB.id + 1).padStart(3, '0')} ${getLocalized(cB.name)}</a></h2>
            <div style="font-size:12px;font-weight:700;color:#f59e0b;">${tacticalB.role}</div>
          </div>
        </div>

                <!-- Comparative Radar Chart -->
        <div class="article-box" style="padding:18px;text-align:center;margin-bottom:20px;">
          <h3 style="font-size:16px;margin-bottom:4px;">🕸️ ${str('compareRadarTitle')}</h3>
          <p style="font-size:12px;color:var(--wiki-text-muted);margin-bottom:12px;">${str('compareRadarDesc')}</p>
          <div style="display:flex;justify-content:center;align-items:center;gap:20px;margin-bottom:10px;font-size:12px;font-weight:800;">
            <span style="color:#3b82f6;">🟦 #${String(cA.id + 1).padStart(3, '0')} ${getLocalized(cA.name)}</span>
            <span style="color:var(--wiki-text-muted);">vs</span>
            <span style="color:#ef4444;">🟥 #${String(cB.id + 1).padStart(3, '0')} ${getLocalized(cB.name)}</span>
          </div>
          ${generateCompareRadarSvg(cA, cB)}
        </div>

        <!-- Head to Head Stat Bars -->
        <div class="article-box" style="padding:20px;">
          <h3 style="margin-bottom:16px;font-size:16px;">📊 ${str('statBaseTitle')}</h3>
          ${statsList.map(st => {
            const valA = st.key === 'total' ? cA.stat_total : cA.stats[st.key];
            const valB = st.key === 'total' ? cB.stat_total : cB.stats[st.key];
            const maxVal = st.key === 'total' ? 250 : 100;
            const pctA = Math.min(100, Math.round((valA / maxVal) * 100));
            const pctB = Math.min(100, Math.round((valB / maxVal) * 100));
            const diff = valA - valB;
            const diffA = diff > 0 ? `<span class="win-badge">+${diff}</span>` : '';
            const diffB = diff < 0 ? `<span class="win-badge">+${Math.abs(diff)}</span>` : '';

            return `
              <div style="margin-bottom:16px;">
                <div class="compare-stat-row">
                  <div style="font-weight:700;font-size:13px;color:var(--wiki-text);">
                    ${valA} ${diffA}
                  </div>
                  <div style="font-weight:700;font-size:12px;color:var(--wiki-text-muted);text-transform:uppercase;">
                    ${st.label}
                  </div>
                  <div style="font-weight:700;font-size:13px;color:var(--wiki-text);">
                    ${diffB} ${valB}
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                  <div class="compare-bar-bg" style="transform:scaleX(-1);">
                    <div class="compare-bar-fill" style="width:${pctA}%;background:${st.color};"></div>
                  </div>
                  <div class="compare-bar-bg">
                    <div class="compare-bar-fill" style="width:${pctB}%;background:${st.color};"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Combat & Skills Comparison -->
        <div class="compare-grid">
          <div class="compare-card">
            <h3 style="font-size:14px;border-bottom:1px solid var(--wiki-border-light);padding-bottom:8px;">⚡ ${str('combatSkillsTitle')}</h3>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('passiveSkill')}:</div>
              <div style="font-size:13px;font-weight:700;margin-top:2px;">${pA ? getLocalized(pA.description) : '-'}</div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('activePower')} (${cA.power_max} pts):</div>
              <div style="font-size:13px;font-weight:700;margin-top:2px;">${pwA ? getLocalized(pwA.description) : '-'}</div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('hiddenPower')}:</div>
              <div style="font-size:13px;margin-top:2px;">${hpA ? `<strong>${getLocalized(hpA.description)}</strong> (${hpA.cost} pts)` : `<em style="color:var(--wiki-text-muted);">${str('noHiddenPower')}</em>`}</div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('powerCycle')}:</div>
              <div style="font-size:13px;font-weight:700;color:#f59e0b;">~${turnsA} ${turnsA === 1 ? str('turn') : str('turns')}</div>
            </div>
          </div>

          <div class="compare-card">
            <h3 style="font-size:14px;border-bottom:1px solid var(--wiki-border-light);padding-bottom:8px;">⚡ ${str('combatSkillsTitle')}</h3>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('passiveSkill')}:</div>
              <div style="font-size:13px;font-weight:700;margin-top:2px;">${pB ? getLocalized(pB.description) : '-'}</div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('activePower')} (${cB.power_max} pts):</div>
              <div style="font-size:13px;font-weight:700;margin-top:2px;">${pwB ? getLocalized(pwB.description) : '-'}</div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('hiddenPower')}:</div>
              <div style="font-size:13px;margin-top:2px;">${hpB ? `<strong>${getLocalized(hpB.description)}</strong> (${hpB.cost} pts)` : `<em style="color:var(--wiki-text-muted);">${str('noHiddenPower')}</em>`}</div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('powerCycle')}:</div>
              <div style="font-size:13px;font-weight:700;color:#f59e0b;">~${turnsB} ${turnsB === 1 ? str('turn') : str('turns')}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('compareSelectA').addEventListener('change', (e) => {
      compareAId = parseInt(e.target.value, 10);
      renderCompare();
    });

    document.getElementById('compareSelectB').addEventListener('change', (e) => {
      compareBId = parseInt(e.target.value, 10);
      renderCompare();
    });

    document.getElementById('btnSwapCompare').addEventListener('click', () => {
      const tmp = compareAId;
      compareAId = compareBId;
      compareBId = tmp;
      renderCompare();
    });

    document.getElementById('btnRandomCompare').addEventListener('click', () => {
      const len = WIKI.chickens.length;
      compareAId = Math.floor(Math.random() * len);
      compareBId = Math.floor(Math.random() * len);
      if (compareBId === compareAId) compareBId = (compareBId + 1) % len;
      renderCompare();
    });
  }

  // 11. TEAM BUILDER VIEW
  function computeTeamBuilderStats(chicken, level, born, training) {
    const lvl = Math.max(1, Math.min(100, level || 50));
    const b = Math.max(1, Math.min(100, born || 50));
    const t = Math.max(1.0, Math.min(2.0, training || 1.0));

    const calcFactor = (baseVal) => ((baseVal * 0.55) + (b * 0.25) + ((t - 1.0) * 20.0)) / 100;

    // 1. Vida
    const lifeFactor = calcFactor(chicken.stats.life);
    const lifeLvlFactor = Math.pow(lvl / 100, 1.15);
    const life = Math.max(50, 50 + (2500 - 50) * lifeLvlFactor * lifeFactor);

    // 2. Daño
    const dmgFactor = calcFactor(chicken.stats.damage);
    const dmgLvlFactor = Math.pow(lvl / 100, 0.85);
    const damage = Math.max(5, 5 + (300 - 5) * dmgLvlFactor * dmgFactor);

    // 3. Velocidad
    const spdFactor = calcFactor(chicken.stats.speed);
    const spdLvlFactor = Math.pow(lvl / 100, 0.65);
    const speed = Math.max(10, 10 + (500 - 10) * spdLvlFactor * spdFactor);

    // 4. Armadura
    const armFactor = calcFactor(chicken.stats.armor);
    const armLvlFactor = Math.pow(lvl / 100, 1.30);
    const armor = Math.max(0, Math.min(80, 80 * armLvlFactor * armFactor));

    // 5. Carga Poder
    const maxPwr = Math.max(20, Math.min(70, chicken.power_max || 100));
    const pwrFactor = calcFactor(chicken.stats.power_amount);
    const pwrLvlFactor = Math.pow(lvl / 100, 1.10);
    const pwrT = Math.max(0, Math.min(1, pwrLvlFactor * pwrFactor));
    const powerAmount = 20 + (maxPwr - 20) * pwrT;

    return {
      life: Math.round(life),
      damage: Math.round(damage),
      speed: Math.round(speed),
      armor: Math.round(armor),
      powerAmount: Math.round(powerAmount)
    };
  }

  function showWikiToast(msg, isSuccess = true) {
    let container = document.getElementById('wikiToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'wikiToastContainer';
      container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99999;display:flex;flex-direction:column;gap:8px;pointer-events:none;';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.style.cssText = `padding:10px 16px;border-radius:8px;font-size:13px;font-weight:700;box-shadow:0 4px 14px rgba(0,0,0,0.35);display:flex;align-items:center;gap:8px;transition:all 0.3s ease;transform:translateY(10px);opacity:0;pointer-events:auto;background:${isSuccess ? '#064e3b' : '#7f1d1d'};color:${isSuccess ? '#6ee7b7' : '#fca5a5'};border:1px solid ${isSuccess ? '#059669' : '#dc2626'};`;
    toast.innerHTML = `<span>${isSuccess ? '✅' : '⚠️'}</span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.transform = 'translateY(0)'; toast.style.opacity = '1'; }, 10);
    setTimeout(() => {
      toast.style.transform = 'translateY(10px)';
      toast.style.opacity = '0';
      setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
    }, 3200);
  }

  const TB_DEFAULT_PRESETS = [
    {
      id: "meta_tech",
      name: "🤖 Dúo Tecnológico (Eggalex & Astro)",
      team: [
        { chickenId: 134, level: 100, born: 100, training: 2.0, itemId: 5, targetAI: 6, useHiddenPower: false },
        { chickenId: 133, level: 100, born: 100, training: 2.0, itemId: 60, targetAI: 1, useHiddenPower: false }
      ]
    },
    {
      id: "meta_toxic",
      name: "🧪 Dúo Veneno & Parálisis (Pasti & Polliwatt)",
      team: [
        { chickenId: 7, level: 100, born: 100, training: 2.0, itemId: 25, targetAI: 1, useHiddenPower: false },
        { chickenId: 18, level: 100, born: 100, training: 2.0, itemId: 55, targetAI: 2, useHiddenPower: false }
      ]
    },
    {
      id: "meta_immortal",
      name: "🛡️ Dúo Tanque & Inmortal (Iguanarto & Easy East)",
      team: [
        { chickenId: 29, level: 100, born: 100, training: 2.0, itemId: 6, targetAI: 2, useHiddenPower: false },
        { chickenId: 13, level: 100, born: 100, training: 2.0, itemId: 23, targetAI: 1, useHiddenPower: false }
      ]
    },
    {
      id: "meta_zombie",
      name: "🧟 Dúo Infección Zombie (Mali & Zombie)",
      team: [
        { chickenId: 4, level: 100, born: 100, training: 2.0, itemId: 31, targetAI: 1, useHiddenPower: false },
        { chickenId: 6, level: 100, born: 100, training: 2.0, itemId: 52, targetAI: 1, useHiddenPower: false }
      ]
    },
    {
      id: "meta_evasion",
      name: "💨 Dúo Evasión & Velocidad (Gatarlos & Shiken)",
      team: [
        { chickenId: 55, level: 100, born: 100, training: 2.0, itemId: 4, targetAI: 1, useHiddenPower: false },
        { chickenId: 61, level: 100, born: 100, training: 2.0, itemId: 18, targetAI: 1, useHiddenPower: false }
      ]
    }
  ];

  const TB_TARGET_OPTIONS = [
    { id: 0, text: { es: "Automático (Equilibrado)", en: "Automatic (Balanced)", pt: "Automático (Equilibrado)", ru: "Автоматический" } },
    { id: 1, text: { es: "Priorizar Vanguardia (Posición 1)", en: "Focus Frontline (Pos 1)", pt: "Priorizar Vanguarda (Posição 1)", ru: "Фокус авангарда (Позиция 1)" } },
    { id: 2, text: { es: "Priorizar Retaguardia (Posición 2)", en: "Focus Backline (Pos 2)", pt: "Priorizar Retaguarda (Posição 2)", ru: "Фокус тыла (Позиция 2)" } },
    { id: 3, text: { es: "Rematar Menor Vida", en: "Finish Lowest HP", pt: "Finalizar Menor Vida", ru: "Добивать наименьшее HP" } },
    { id: 4, text: { es: "Enfocar Mayor Vida", en: "Target Highest HP", pt: "Focar Maior Vida", ru: "Фокус наибольшего HP" } },
    { id: 5, text: { es: "Neutralizar Mayor Daño", en: "Counter Highest ATK", pt: "Neutralizar Maior Dano", ru: "Нейтрализовать высокий урон" } },
    { id: 6, text: { es: "Frenar Mayor Velocidad", en: "Target Fastest Speed", pt: "Frear Maior Velocidade", ru: "Замедлить быстрейшего" } }
  ];

  function getTbSavedTeams() {
    try {
      const raw = localStorage.getItem('cc_saved_teams');
      return raw ? JSON.parse(raw) : [];
    } catch(e) {
      return [];
    }
  }

  function saveTbTeams(teams) {
    try {
      localStorage.setItem('cc_saved_teams', JSON.stringify(teams));
    } catch(e) {}
  }

  function serializeTbSlot(cfg) {
    return `${cfg.chickenId}.${cfg.level}.${cfg.born}.${Number(cfg.training).toFixed(1)}.${cfg.itemId}.${cfg.targetAI}.${cfg.useHiddenPower ? 1 : 0}`;
  }

  function deserializeTbSlot(strVal) {
    if (!strVal) return null;
    const p = strVal.split('.');
    if (p.length < 5) return null;
    if (p.length >= 8) {
      return {
        chickenId: parseInt(p[0], 10) || 0,
        level: Math.max(1, Math.min(100, parseInt(p[1], 10) || 50)),
        born: Math.max(1, Math.min(100, parseInt(p[2], 10) || 50)),
        training: Math.max(1.0, Math.min(2.0, parseFloat(p[3] + '.' + p[4]) || 1.0)),
        itemId: parseInt(p[5], 10) !== undefined ? parseInt(p[5], 10) : -1,
        targetAI: parseInt(p[6], 10) || 0,
        useHiddenPower: p[7] === '1'
      };
    }
    return {
      chickenId: parseInt(p[0], 10) || 0,
      level: Math.max(1, Math.min(100, parseInt(p[1], 10) || 50)),
      born: Math.max(1, Math.min(100, parseInt(p[2], 10) || 50)),
      training: Math.max(1.0, Math.min(2.0, parseFloat(p[3]) || 1.0)),
      itemId: parseInt(p[4], 10) !== undefined ? parseInt(p[4], 10) : -1,
      targetAI: parseInt(p[5], 10) || 0,
      useHiddenPower: p[6] === '1'
    };
  }

  let tbTeam = {
    name: "Mi Dúo 2vs2",
    slots: [
      { chickenId: 0, level: 50, born: 80, training: 1.5, itemId: 1, targetAI: 1, useHiddenPower: false },
      { chickenId: 1, level: 50, born: 80, training: 1.5, itemId: 3, targetAI: 1, useHiddenPower: false }
    ]
  };

  function updateSlotLive(sIdx) {
    const slot = tbTeam.slots[sIdx];
    const c = WIKI.chickens.find(x => x.id === slot.chickenId) || WIKI.chickens[sIdx];
    const hp = (c.hidden_power_id !== undefined && c.hidden_power_id >= 0 && WIKI.powers[c.hidden_power_id]) ? WIKI.powers[c.hidden_power_id] : null;
    const st = computeTeamBuilderStats(c, slot.level, slot.born, slot.training);
    const activeCost = slot.useHiddenPower && hp ? hp.cost : (c.power_max || 100);
    const turns = Math.max(1, Math.ceil(activeCost / Math.max(1, st.powerAmount)));

    // 1. Text displays
    const lvlEl = document.getElementById(`tbLevelVal_${sIdx}`);
    if (lvlEl) lvlEl.textContent = slot.level;
    const bornEl = document.getElementById(`tbBornVal_${sIdx}`);
    if (bornEl) bornEl.textContent = slot.born;
    const trEl = document.getElementById(`tbTrainVal_${sIdx}`);
    if (trEl) trEl.textContent = `${Number(slot.training).toFixed(2)}x`;

    // 2. Stat badges
    const lifeEl = document.getElementById(`tbStatLife_${sIdx}`);
    if (lifeEl) lifeEl.textContent = st.life;
    const dmgEl = document.getElementById(`tbStatDmg_${sIdx}`);
    if (dmgEl) dmgEl.textContent = st.damage;
    const spdEl = document.getElementById(`tbStatSpd_${sIdx}`);
    if (spdEl) spdEl.textContent = st.speed;
    const armEl = document.getElementById(`tbStatArm_${sIdx}`);
    if (armEl) armEl.textContent = `${st.armor}%`;
    const pwrEl = document.getElementById(`tbStatPwr_${sIdx}`);
    if (pwrEl) pwrEl.innerHTML = `${st.powerAmount} <span style="font-size:10px;font-weight:normal;">(~${turns}t)</span>`;

    // 3. Combined metrics
    const otherIdx = sIdx === 0 ? 1 : 0;
    const otherSlot = tbTeam.slots[otherIdx];
    const otherC = WIKI.chickens.find(x => x.id === otherSlot.chickenId) || WIKI.chickens[otherIdx];
    const otherSt = computeTeamBuilderStats(otherC, otherSlot.level, otherSlot.born, otherSlot.training);

    const combLifeEl = document.getElementById('tbCombinedLife');
    if (combLifeEl) combLifeEl.textContent = `${st.life + otherSt.life} pts`;
    const combDmgEl = document.getElementById('tbCombinedDmg');
    if (combDmgEl) combDmgEl.textContent = `${st.damage + otherSt.damage} pts`;
    const combSpdEl = document.getElementById('tbCombinedSpd');
    if (combSpdEl) combSpdEl.textContent = `${Math.round((st.speed + otherSt.speed) / 2)} pts`;
  }

  function renderTeamBuilder() {
    const container = document.getElementById('wikiContent');
    if (!container) return;

    const slot1 = tbTeam.slots[0];
    const slot2 = tbTeam.slots[1];

    const c1 = WIKI.chickens.find(x => x.id === slot1.chickenId) || WIKI.chickens[0];
    const c2 = WIKI.chickens.find(x => x.id === slot2.chickenId) || WIKI.chickens[1];

    const it1 = (slot1.itemId >= 0 && slot1.itemId < WIKI.items.length) ? WIKI.items[slot1.itemId] : null;
    const it2 = (slot2.itemId >= 0 && slot2.itemId < WIKI.items.length) ? WIKI.items[slot2.itemId] : null;

    const p1 = WIKI.passives[c1.passive_id];
    const p2 = WIKI.passives[c2.passive_id];
    const pw1 = WIKI.powers[c1.power_id];
    const pw2 = WIKI.powers[c2.power_id];
    const hp1 = (c1.hidden_power_id !== undefined && c1.hidden_power_id >= 0 && WIKI.powers[c1.hidden_power_id]) ? WIKI.powers[c1.hidden_power_id] : null;
    const hp2 = (c2.hidden_power_id !== undefined && c2.hidden_power_id >= 0 && WIKI.powers[c2.hidden_power_id]) ? WIKI.powers[c2.hidden_power_id] : null;

    const tg1 = getChickenTacticalAnalysis(c1, currentLang);
    const tg2 = getChickenTacticalAnalysis(c2, currentLang);

    const st1 = computeTeamBuilderStats(c1, slot1.level, slot1.born, slot1.training);
    const st2 = computeTeamBuilderStats(c2, slot2.level, slot2.born, slot2.training);

    const cost1 = slot1.useHiddenPower && hp1 ? hp1.cost : (c1.power_max || 100);
    const turns1 = Math.max(1, Math.ceil(cost1 / Math.max(1, st1.powerAmount)));

    const cost2 = slot2.useHiddenPower && hp2 ? hp2.cost : (c2.power_max || 100);
    const turns2 = Math.max(1, Math.ceil(cost2 / Math.max(1, st2.powerAmount)));

    // Combined metrics
    const totalHp = st1.life + st2.life;
    const totalDmg = st1.damage + st2.damage;
    const avgSpd = Math.round((st1.speed + st2.speed) / 2);

    // Synergy analysis
    const p1Desc = (p1 && p1.description && p1.description.es ? p1.description.es : '').toLowerCase();
    const p2Desc = (p2 && p2.description && p2.description.es ? p2.description.es : '').toLowerCase();
    const pw1Desc = (pw1 && pw1.description && pw1.description.es ? pw1.description.es : '').toLowerCase();
    const pw2Desc = (pw2 && pw2.description && pw2.description.es ? pw2.description.es : '').toLowerCase();

    const isFreezeSynergy = (pw1Desc.includes('congel') || pw2Desc.includes('congel')) && (p1Desc.includes('congel') || p2Desc.includes('congel'));
    const isPoisonSynergy = (pw1Desc.includes('envenen') || pw2Desc.includes('envenen')) || (p1Desc.includes('envenen') || p2Desc.includes('envenen'));
    const hasRevive = p1Desc.includes('reviv') || p2Desc.includes('reviv') || (it1 && it1.id === 23) || (it2 && it2.id === 23);
    const hasTank = (st1.life >= 900 || st1.armor >= 35) || (st2.life >= 900 || st2.armor >= 35);
    const hasStriker = (st1.damage >= 140 || st2.damage >= 140);

    const synDict = {
      balanced: {
        title: { es: 'Dúo Equilibrado', en: 'Balanced Duo', pt: 'Dupla Equilibrada', ru: 'Сбалансированный дуэт' },
        desc: {
          es: 'Equipo sólido y versátil con buena distribución de atributos.',
          en: 'Solid versatile team with well-rounded distribution.',
          pt: 'Equipe sólida e versátil com boa distribuição de atributos.',
          ru: 'Надежная универсальная команда с гармоничным распределением параметров.'
        },
        cls: 'synergy-good'
      },
      optimal: {
        title: { es: '⭐ Sinergia Óptima 2vs2 (Tanque + Rematador)', en: '⭐ Optimal 2vs2 Synergy (Tank + Striker)', pt: '⭐ Sinergia Ideal 2vs2 (Tanque + Finalizador)', ru: '⭐ Оптимальная синергия 2на2 (Танк + Ударник)' },
        desc: {
          es: 'La vanguardia absorbe y mitiga impactos mientras la retaguardia asegura daño masivo para derribar rivales.',
          en: 'Frontline absorbs damage while the backline dishes out heavy burst damage.',
          pt: 'A vanguarda absorve impactos enquanto a retaguarda aplica dano massivo para derrubar os adversários.',
          ru: 'Авангард поглощает урон, а тыл наносит сокрушительный взрывной урон для быстрого устранения целей.'
        },
        cls: 'synergy-good'
      },
      cannon: {
        title: { es: '⚡ Dúo Hiperofensivo (Cañón de Cristal)', en: '⚡ High-Burst Glass Cannon Duo', pt: '⚡ Dupla Hiperofensiva (Canhão de Cristal)', ru: '⚡ Сверхатакующий дуэт (Стеклянная пушка)' },
        desc: {
          es: 'Poder de daño demoledor en primeros turnos, pero muy vulnerable si el rival sobrevive a la ráfaga inicial.',
          en: 'Devastating early offensive power, but highly vulnerable if opponent survives turn 1.',
          pt: 'Poder de dano devastador nos primeiros turnos, mas muito vulnerável se o oponente resistir à rajada inicial.',
          ru: 'Сокрушительный урон на первых ходах, но высокая уязвимость, если противник выдержит стартовый натиск.'
        },
        cls: 'synergy-warn'
      },
      fortress: {
        title: { es: '🛡️ Fortaleza Doble (Desgaste)', en: '🛡️ Double Fortress (Endurance)', pt: '🛡️ Fortaleza Dupla (Resistência)', ru: '🛡️ Двойная крепость (Выносливость)' },
        desc: {
          es: 'Extraordinaria resistencia y aguante defensivo, aunque las batallas requerirán desgaste prolongado.',
          en: 'Incredible durability and armor mitigation, but slower match resolution.',
          pt: 'Extraordinária resistência e absorção defensiva, embora as batalhas exijam desgaste prolongado.',
          ru: 'Невероятная выживаемость и снижение урона, хотя бои потребуют длительного измора.'
        },
        cls: 'synergy-good'
      }
    };

    let synKey = 'balanced';
    if (hasTank && hasStriker) synKey = 'optimal';
    else if (hasStriker && !hasTank) synKey = 'cannon';
    else if (hasTank && !hasStriker) synKey = 'fortress';

    const synergyObj = synDict[synKey];
    const synergyTitle = synergyObj.title[currentLang] || synergyObj.title.es;
    const synergyDesc = synergyObj.desc[currentLang] || synergyObj.desc.es;
    const synergyClass = synergyObj.cls;

    const comboLabels = {
      freeze: { es: '❄️ Combo Congelamiento Activo', en: '❄️ Active Freeze Synergy', pt: '❄️ Combo de Congelamento Ativo', ru: '❄️ Активная связка заморозки' },
      poison: { es: '🧪 Estrategia de Veneno / Desgaste', en: '🧪 Poison / Attrition Strategy', pt: '🧪 Estratégia de Veneno / Desgaste', ru: '🧪 Стратегия яда / истощения' },
      revive: { es: '🔄 Capacidad de Revivir (Doble Vida)', en: '🔄 Revival Capacity (Double Life)', pt: '🔄 Capacidade de Reviver (Vida Dupla)', ru: '🔄 Способность к возрождению (Двойная жизнь)' },
      taunt: { es: '🛡️ Provocación Activa (Picoteador Dorado)', en: '🛡️ Active Taunt (Golden Peckinator)', pt: '🛡️ Provocação Ativa (Bicador Dourado)', ru: '🛡️ Активная провокация (Золотой клеватель)' }
    };
    const hasTaunt = (it1 && it1.id === 6) || (it2 && it2.id === 6);

    const customTeams = getTbSavedTeams();

    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">👥 ${str('teamBuilderTitle')}</h1>
        <p class="page-subtitle">${str('teamBuilderDesc')}</p>
      </div>

      <!-- Toolbar: Load/Save Teams & Presets -->
      <div class="teambuilder-toolbar">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--wiki-text-muted);">📁 ${str('savedTeams')}:</span>
          <select id="tbSavedTeamsSelect" class="filter-select" style="min-width:230px;">
            <optgroup label="${str('presetMetaHeader')}">
              ${TB_DEFAULT_PRESETS.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </optgroup>
            ${customTeams.length > 0 ? `
              <optgroup label="${str('customTeamsHeader')}">
                ${customTeams.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
              </optgroup>
            ` : ''}
          </select>
          <button id="btnTbLoadTeam" class="btn-control" style="font-weight:700;">📂 ${str('loadTeam')}</button>
          <button id="btnTbDeleteTeam" class="btn-control" style="color:#ef4444;border-color:rgba(239,68,68,0.4);" title="${str('deleteTeam')}">🗑️</button>
        </div>

        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <input type="text" id="tbTeamNameInput" class="search-input" placeholder="${str('teamName')}..." value="${tbTeam.name ? String(tbTeam.name).replace(/"/g, '&quot;') : ''}" style="width:160px;padding:5px 8px;font-size:12px;">
          <button id="btnTbSaveTeam" class="btn-control" style="background:var(--wiki-accent);color:#000;font-weight:700;">💾 ${str('saveTeam')}</button>
          <button id="btnTbExportCode" class="btn-control" title="${str('exportCode')}">📋 ${str('exportCode')}</button>
          <button id="btnTbImportCode" class="btn-control" title="${str('importCode')}">📥 ${str('importCode')}</button>
          <button id="btnTbRandomTeam" class="btn-control" title="${str('randomTeamBtn')}">🎲</button>
        </div>
      </div>

      <!-- Slots Grid -->
      <div class="teambuilder-slots">
        ${[0, 1].map(sIdx => {
          const slot = tbTeam.slots[sIdx];
          const c = sIdx === 0 ? c1 : c2;
          const it = sIdx === 0 ? it1 : it2;
          const p = sIdx === 0 ? p1 : p2;
          const pw = sIdx === 0 ? pw1 : pw2;
          const hp = sIdx === 0 ? hp1 : hp2;
          const tg = sIdx === 0 ? tg1 : tg2;
          const st = sIdx === 0 ? st1 : st2;
          const turns = sIdx === 0 ? turns1 : turns2;

          return `
            <div class="teambuilder-slot-card">
              <div class="teambuilder-slot-header">
                <span>${sIdx === 0 ? '🛡️ ' + str('slot1Title') : '🗡️ ' + str('slot2Title')}</span>
                <span style="font-weight:800;color:var(--wiki-accent);">#${sIdx + 1}</span>
              </div>

              <!-- Chicken Selector -->
              <div>
                <label style="display:block;font-size:11px;font-weight:700;color:var(--wiki-text-muted);margin-bottom:4px;">${str('searchBadgeChicken')}:</label>
                <select id="tbChickenSelect_${sIdx}" class="filter-select" style="width:100%;">
                  ${WIKI.chickens.map(chk => `<option value="${chk.id}" ${chk.id === c.id ? 'selected' : ''}>#${String(chk.id + 1).padStart(3, '0')} - ${getLocalized(chk.name)}</option>`).join('')}
                </select>
              </div>

              <!-- Chicken Info Banner -->
              <div style="display:flex;align-items:center;gap:12px;padding:8px;background:var(--wiki-table-stripe);border-radius:6px;border:1px solid var(--wiki-border-light);">
                <img class="pixelated" src="${c.sprite}" style="width:52px;height:52px;object-fit:contain;" alt="${getLocalized(c.name)}">
                <div style="flex:1;min-width:0;">
                  <div style="font-weight:800;font-size:15px;"><a href="#chicken-${c.id}">#${String(c.id + 1).padStart(3, '0')} ${getLocalized(c.name)}</a></div>
                  <div style="font-size:11px;font-weight:700;color:#f59e0b;margin-top:2px;">${tg.role}</div>
                  <div style="font-size:11px;color:var(--wiki-text-muted);margin-top:2px;line-height:1.3;">${p ? getLocalized(p.description) : ''}</div>
                </div>
              </div>

              <!-- Item Selector (ALL 75 items) -->
              <div>
                <label style="display:block;font-size:11px;font-weight:700;color:var(--wiki-text-muted);margin-bottom:4px;">${str('thItem')}:</label>
                <select id="tbItemSelect_${sIdx}" class="filter-select" style="width:100%;">
                  <option value="-1" ${slot.itemId === -1 ? 'selected' : ''}>${str('noItem')}</option>
                  ${WIKI.items.map(item => `
                    <option value="${item.id}" ${item.id === slot.itemId ? 'selected' : ''}>
                      #${String(item.id + 1).padStart(2, '0')} ${item.consumable ? '🧪' : '🎒'} ${getLocalized(item.name)}
                    </option>
                  `).join('')}
                </select>
              </div>

              <!-- Item Preview Card -->
              ${it ? `
                <div style="font-size:12px;background:var(--wiki-table-stripe);border:1px solid var(--wiki-border-light);padding:8px 10px;border-radius:6px;display:flex;align-items:center;gap:10px;">
                  <img class="pixelated" src="${it.sprite}" style="width:30px;height:30px;object-fit:contain;" alt="${getLocalized(it.name)}">
                  <div style="flex:1;min-width:0;">
                    <div style="font-weight:700;display:flex;justify-content:space-between;align-items:center;">
                      <span>${getLocalized(it.name)}</span>
                      <span style="font-size:11px;color:var(--wiki-gold);font-weight:700;">🪙 ${it.shop_price}</span>
                    </div>
                    <div style="font-size:11px;color:var(--wiki-text-muted);margin-top:2px;">${getLocalized(it.description)}</div>
                  </div>
                </div>
              ` : ''}

              <!-- Level, Genetics, Training Controls -->
              <div class="tb-control-group">
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
                  <!-- Level -->
                  <div style="background:var(--wiki-card-bg);padding:8px;border-radius:6px;border:1px solid var(--wiki-border-light);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                      <label style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('levelLabel')}:</label>
                      <span id="tbLevelVal_${sIdx}" style="font-size:13px;font-weight:800;color:#f59e0b;">${slot.level}</span>
                    </div>
                    <input type="range" min="1" max="100" value="${slot.level}" id="tbLevelRange_${sIdx}" style="width:100%;accent-color:#f59e0b;">
                    <div style="display:flex;gap:4px;margin-top:6px;">
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="lvl" data-val="1">1</button>
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="lvl" data-val="50">50</button>
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="lvl" data-val="100">100</button>
                    </div>
                  </div>

                  <!-- Genetics -->
                  <div style="background:var(--wiki-card-bg);padding:8px;border-radius:6px;border:1px solid var(--wiki-border-light);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                      <label style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('geneticsLabel')}:</label>
                      <span id="tbBornVal_${sIdx}" style="font-size:13px;font-weight:800;color:#10b981;">${slot.born}</span>
                    </div>
                    <input type="range" min="1" max="100" value="${slot.born}" id="tbBornRange_${sIdx}" style="width:100%;accent-color:#10b981;">
                    <div style="display:flex;gap:4px;margin-top:6px;">
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="born" data-val="1">1</button>
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="born" data-val="50">50</button>
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="born" data-val="80">80</button>
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="born" data-val="100">100</button>
                    </div>
                  </div>

                  <!-- Training -->
                  <div style="background:var(--wiki-card-bg);padding:8px;border-radius:6px;border:1px solid var(--wiki-border-light);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                      <label style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);">${str('trainingLabel')}:</label>
                      <span id="tbTrainVal_${sIdx}" style="font-size:13px;font-weight:800;color:#a855f7;">${Number(slot.training).toFixed(2)}x</span>
                    </div>
                    <input type="range" min="1.0" max="2.0" step="0.05" value="${slot.training}" id="tbTrainRange_${sIdx}" style="width:100%;accent-color:#a855f7;">
                    <div style="display:flex;gap:4px;margin-top:6px;">
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="train" data-val="1.0">1.0x</button>
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="train" data-val="1.5">1.5x</button>
                      <button type="button" class="tb-quick-btn" data-slot="${sIdx}" data-type="train" data-val="2.0">2.0x</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Computed Real Combat Stats -->
              <div>
                <div style="font-size:11px;font-weight:700;color:var(--wiki-text-muted);margin-bottom:6px;">${str('combatStatsLabel')}:</div>
                <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:6px;text-align:center;">
                  <div class="tb-stat-pill">
                    <div style="font-size:10px;font-weight:700;color:var(--stat-life);">❤️ ${str('thHp')}</div>
                    <div id="tbStatLife_${sIdx}" style="font-size:14px;font-weight:800;color:var(--stat-life);">${st.life}</div>
                  </div>
                  <div class="tb-stat-pill">
                    <div style="font-size:10px;font-weight:700;color:var(--stat-dmg);">🗡️ ${str('thAtk')}</div>
                    <div id="tbStatDmg_${sIdx}" style="font-size:14px;font-weight:800;color:var(--stat-dmg);">${st.damage}</div>
                  </div>
                  <div class="tb-stat-pill">
                    <div style="font-size:10px;font-weight:700;color:var(--stat-spd);">⚡ ${str('thSpd')}</div>
                    <div id="tbStatSpd_${sIdx}" style="font-size:14px;font-weight:800;color:var(--stat-spd);">${st.speed}</div>
                  </div>
                  <div class="tb-stat-pill">
                    <div style="font-size:10px;font-weight:700;color:var(--stat-arm);">🛡️ ${str('thDef')}</div>
                    <div id="tbStatArm_${sIdx}" style="font-size:14px;font-weight:800;color:var(--stat-arm);">${st.armor}%</div>
                  </div>
                  <div class="tb-stat-pill">
                    <div style="font-size:10px;font-weight:700;color:var(--stat-pwr);">✨ ${str('thPwr')}</div>
                    <div id="tbStatPwr_${sIdx}" style="font-size:14px;font-weight:800;color:var(--stat-pwr);">${st.powerAmount} <span style="font-size:10px;font-weight:normal;">(~${turns}t)</span></div>
                  </div>
                </div>
              </div>

              <!-- Power & Target Priority Selector -->
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <div>
                  <label style="display:block;font-size:11px;font-weight:700;color:var(--wiki-text-muted);margin-bottom:4px;">⚡ ${str('powerInBattle')}:</label>
                  <select id="tbPowerSelect_${sIdx}" class="filter-select" style="width:100%;">
                    <option value="base" ${!slot.useHiddenPower ? 'selected' : ''}>${str('useBasePower')}: ${pw ? getLocalized(pw.name || pw.description) : '-'} (${c.power_max} pts)</option>
                    ${hp ? `<option value="hidden" ${slot.useHiddenPower ? 'selected' : ''}>${str('useHiddenPower')}: ${getLocalized(hp.name || hp.description)} (${hp.cost} pts)</option>` : ''}
                  </select>
                </div>
                <div>
                  <label style="display:block;font-size:11px;font-weight:700;color:var(--wiki-text-muted);margin-bottom:4px;">🎯 ${str('targetAiLabel')}:</label>
                  <select id="tbTargetSelect_${sIdx}" class="filter-select" style="width:100%;">
                    ${TB_TARGET_OPTIONS.map(opt => `<option value="${opt.id}" ${opt.id === slot.targetAI ? 'selected' : ''}>${opt.text[currentLang] || opt.text.es}</option>`).join('')}
                  </select>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Synergy Card -->
      <div class="synergy-card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
          <div>
            <h3 style="font-size:17px;margin-bottom:4px;">${str('synergyAnalysis')}</h3>
            <span class="synergy-badge ${synergyClass}">${synergyTitle}</span>
          </div>
          <button id="btnTbTestInSim" class="btn-control" style="background:#ef4444;color:#fff;border-color:#dc2626;font-weight:800;padding:8px 16px;cursor:pointer;">
            ${str('testInSimulator')}
          </button>
        </div>

        <p style="font-size:13px;line-height:1.5;">${synergyDesc}</p>

        <!-- Combos detected -->
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${isFreezeSynergy ? `<span class="synergy-badge synergy-combo">${comboLabels.freeze[currentLang] || comboLabels.freeze.es}</span>` : ''}
          ${isPoisonSynergy ? `<span class="synergy-badge synergy-combo">${comboLabels.poison[currentLang] || comboLabels.poison.es}</span>` : ''}
          ${hasRevive ? `<span class="synergy-badge synergy-good">${comboLabels.revive[currentLang] || comboLabels.revive.es}</span>` : ''}
          ${hasTaunt ? `<span class="synergy-badge synergy-good">${comboLabels.taunt[currentLang] || comboLabels.taunt.es}</span>` : ''}
        </div>

        <!-- Combined Stats Overview -->
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:12px;margin-top:8px;padding-top:12px;border-top:1px solid var(--wiki-border-light);text-align:center;">
          <div>
            <div style="font-size:11px;color:var(--wiki-text-muted);">${str('combinedLife')}</div>
            <div id="tbCombinedLife" style="font-size:20px;font-weight:800;color:var(--stat-life);">${totalHp} pts</div>
          </div>
          <div>
            <div style="font-size:11px;color:var(--wiki-text-muted);">${str('estDamage')}</div>
            <div id="tbCombinedDmg" style="font-size:20px;font-weight:800;color:var(--stat-dmg);">${totalDmg} pts</div>
          </div>
          <div>
            <div style="font-size:11px;color:var(--wiki-text-muted);">${str('avgSpeed')}</div>
            <div id="tbCombinedSpd" style="font-size:20px;font-weight:800;color:var(--stat-spd);">${avgSpd} pts</div>
          </div>
        </div>
      </div>
    `;

    // ATTACH LISTENERS
    [0, 1].forEach(sIdx => {
      const chkSel = document.getElementById(`tbChickenSelect_${sIdx}`);
      if (chkSel) {
        chkSel.addEventListener('change', (e) => {
          tbTeam.slots[sIdx].chickenId = parseInt(e.target.value, 10);
          renderTeamBuilder();
        });
      }

      const itSel = document.getElementById(`tbItemSelect_${sIdx}`);
      if (itSel) {
        itSel.addEventListener('change', (e) => {
          tbTeam.slots[sIdx].itemId = parseInt(e.target.value, 10);
          renderTeamBuilder();
        });
      }

      // Smooth live input (no full render!)
      const lvlRng = document.getElementById(`tbLevelRange_${sIdx}`);
      if (lvlRng) {
        lvlRng.addEventListener('input', (e) => {
          tbTeam.slots[sIdx].level = parseInt(e.target.value, 10);
          updateSlotLive(sIdx);
        });
      }

      const bornRng = document.getElementById(`tbBornRange_${sIdx}`);
      if (bornRng) {
        bornRng.addEventListener('input', (e) => {
          tbTeam.slots[sIdx].born = parseInt(e.target.value, 10);
          updateSlotLive(sIdx);
        });
      }

      const trRng = document.getElementById(`tbTrainRange_${sIdx}`);
      if (trRng) {
        trRng.addEventListener('input', (e) => {
          tbTeam.slots[sIdx].training = parseFloat(e.target.value);
          updateSlotLive(sIdx);
        });
      }

      const pwrSel = document.getElementById(`tbPowerSelect_${sIdx}`);
      if (pwrSel) {
        pwrSel.addEventListener('change', (e) => {
          tbTeam.slots[sIdx].useHiddenPower = (e.target.value === 'hidden');
          updateSlotLive(sIdx);
        });
      }

      const tgtSel = document.getElementById(`tbTargetSelect_${sIdx}`);
      if (tgtSel) {
        tgtSel.addEventListener('change', (e) => {
          tbTeam.slots[sIdx].targetAI = parseInt(e.target.value, 10);
        });
      }
    });

    // Quick buttons - smooth live update
    container.querySelectorAll('.tb-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sIdx = parseInt(btn.getAttribute('data-slot'), 10);
        const type = btn.getAttribute('data-type');
        const val = btn.getAttribute('data-val');
        if (type === 'lvl') {
          tbTeam.slots[sIdx].level = parseInt(val, 10);
          const r = document.getElementById(`tbLevelRange_${sIdx}`);
          if (r) r.value = val;
        } else if (type === 'born') {
          tbTeam.slots[sIdx].born = parseInt(val, 10);
          const r = document.getElementById(`tbBornRange_${sIdx}`);
          if (r) r.value = val;
        } else if (type === 'train') {
          tbTeam.slots[sIdx].training = parseFloat(val);
          const r = document.getElementById(`tbTrainRange_${sIdx}`);
          if (r) r.value = val;
        }
        updateSlotLive(sIdx);
      });
    });

    // Toolbar listeners
    const teamNameInput = document.getElementById('tbTeamNameInput');
    if (teamNameInput) {
      teamNameInput.addEventListener('input', (e) => {
        tbTeam.name = e.target.value;
      });
    }

    const btnLoad = document.getElementById('btnTbLoadTeam');
    if (btnLoad) {
      btnLoad.addEventListener('click', () => {
        const sel = document.getElementById('tbSavedTeamsSelect');
        if (!sel) return;
        const selId = sel.value;
        const all = [...TB_DEFAULT_PRESETS, ...getTbSavedTeams()];
        const target = all.find(x => x.id === selId);
        if (target && target.team && target.team.length >= 2) {
          tbTeam.name = target.name;
          tbTeam.slots[0] = { ...tbTeam.slots[0], ...target.team[0] };
          tbTeam.slots[1] = { ...tbTeam.slots[1], ...target.team[1] };
          showWikiToast(str('teamLoadedSuccess'));
          renderTeamBuilder();
        }
      });
    }

    const btnSave = document.getElementById('btnTbSaveTeam');
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const nameVal = (teamNameInput && teamNameInput.value.trim()) || tbTeam.name || "Equipo Dúo";
        const newTeam = {
          id: "team_" + Date.now(),
          name: nameVal,
          team: [
            { ...tbTeam.slots[0] },
            { ...tbTeam.slots[1] }
          ]
        };
        const list = getTbSavedTeams();
        list.push(newTeam);
        saveTbTeams(list);
        showWikiToast(str('teamSavedSuccess'));
        renderTeamBuilder();
      });
    }

    const btnDel = document.getElementById('btnTbDeleteTeam');
    if (btnDel) {
      btnDel.addEventListener('click', () => {
        const sel = document.getElementById('tbSavedTeamsSelect');
        if (!sel) return;
        const selId = sel.value;
        let list = getTbSavedTeams();
        if (!list.some(t => t.id === selId)) {
          showWikiToast("No puedes eliminar un preset oficial.", false);
          return;
        }
        list = list.filter(t => t.id !== selId);
        saveTbTeams(list);
        showWikiToast(str('teamDeletedSuccess'));
        renderTeamBuilder();
      });
    }

    const btnExp = document.getElementById('btnTbExportCode');
    if (btnExp) {
      btnExp.addEventListener('click', () => {
        const s0 = serializeTbSlot(tbTeam.slots[0]);
        const s1 = serializeTbSlot(tbTeam.slots[1]);
        const code = `CC-T1_${s0}_${s1}`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(() => {
            showWikiToast(str('codeCopied'));
          }).catch(() => {
            prompt("Código de equipo:", code);
          });
        } else {
          prompt("Código de equipo:", code);
        }
      });
    }

    const btnImp = document.getElementById('btnTbImportCode');
    if (btnImp) {
      btnImp.addEventListener('click', () => {
        const code = prompt(str('promptImportCode'));
        if (code && code.trim().startsWith('CC-T1_')) {
          const parts = code.trim().replace('CC-T1_', '').split('_');
          if (parts.length >= 2) {
            const sl0 = deserializeTbSlot(parts[0]);
            const sl1 = deserializeTbSlot(parts[1]);
            if (sl0 && sl1) {
              tbTeam.slots[0] = sl0;
              tbTeam.slots[1] = sl1;
              tbTeam.name = "Equipo Importado";
              showWikiToast(str('teamLoadedSuccess'));
              renderTeamBuilder();
              return;
            }
          }
        }
        if (code) showWikiToast(str('invalidCode'), false);
      });
    }

    const btnRand = document.getElementById('btnTbRandomTeam');
    if (btnRand) {
      btnRand.addEventListener('click', () => {
        const chkCount = WIKI.chickens.length;
        const itCount = WIKI.items.length;
        tbTeam.name = "Dúo Aleatorio 🎲";
        tbTeam.slots[0] = {
          chickenId: Math.floor(Math.random() * chkCount),
          itemId: Math.floor(Math.random() * itCount),
          level: Math.floor(Math.random() * 51) + 50,
          born: Math.floor(Math.random() * 41) + 60,
          training: +(1.0 + Math.random()).toFixed(1),
          targetAI: Math.floor(Math.random() * 7),
          useHiddenPower: Math.random() > 0.5
        };
        tbTeam.slots[1] = {
          chickenId: Math.floor(Math.random() * chkCount),
          itemId: Math.floor(Math.random() * itCount),
          level: Math.floor(Math.random() * 51) + 50,
          born: Math.floor(Math.random() * 41) + 60,
          training: +(1.0 + Math.random()).toFixed(1),
          targetAI: Math.floor(Math.random() * 7),
          useHiddenPower: Math.random() > 0.5
        };
        renderTeamBuilder();
      });
    }

    const btnSim = document.getElementById('btnTbTestInSim');
    if (btnSim) {
      btnSim.addEventListener('click', () => {
        try {
          sessionStorage.setItem('cc_load_team_blue', JSON.stringify([tbTeam.slots[0], tbTeam.slots[1]]));
        } catch(e) {}
        window.location.href = 'simulador.html';
      });
    }
  }


  // 12. RANKING VIEW
  let currentRankingTab = 'max'; // 'max' | 'base' | 'archetypes'

  const ARCHETYPES_DATA = [
    {
      key: 'tanks',
      titleKey: 'archTanksTitle',
      subKey: 'archTanksSub',
      color: 'var(--stat-arm)',
      chickens: [
        { id: 10, note: { es: "100 ARM / 100 HP • Reinicia poder al vencer rivales", en: "100 DEF / 100 HP • Resets power on kills", pt: "100 ARM / 100 HP • Reinicia poder ao vencer", ru: "100 БРО / 100 HP • Сброс кулдауна" } },
        { id: 19, note: { es: "100 ARM / 65 HP • Inmune a veneno + Contraataque", en: "100 DEF / 65 HP • Poison immune + Counter", pt: "100 ARM / 65 HP • Imune a veneno + Contra-ataque", ru: "100 БРО / 65 HP • Иммунитет к яду" } },
        { id: 31, note: { es: "70 ARM / 100 HP • Reduce velocidad rival y cura", en: "70 DEF / 100 HP • Slows rival & heals", pt: "70 ARM / 100 HP • Reduz vel rival e cura", ru: "70 БРО / 100 HP • Замедляет и лечит" } },
        { id: 37, note: { es: "100 ARM / 50 HP • Bastión de mitigación física pura", en: "100 DEF / 50 HP • Pure physical mitigation bastion", pt: "100 ARM / 50 HP • Bastião de mitigação pura", ru: "100 БРО / 50 HP • Чистый физический щит" } },
        { id: 123, note: { es: "90 ARM / 70 HP • Cura a un aliado al recibir daño", en: "90 DEF / 70 HP • Heals ally when damaged", pt: "90 ARM / 70 HP • Cura aliado ao ser atingido", ru: "90 БРО / 70 HP • Лечит союзника при уроне" } }
      ]
    },
    {
      key: 'strikers',
      titleKey: 'archStrikersTitle',
      subKey: 'archStrikersSub',
      color: 'var(--stat-dmg)',
      chickens: [
        { id: 39, note: { es: "130 ATK Base • El mayor ataque bruto de toda la wiki", en: "130 Base ATK • Highest raw damage in the wiki", pt: "130 ATK Base • O maior dano bruto de toda a wiki", ru: "130 Баз. АТК • Сильнейший урон в игре" } },
        { id: 61, note: { es: "120 ATK / Evasión • Ignora enfoque y gana esquiva", en: "120 ATK / Evasion • Ignores focus & dodges", pt: "120 ATK / Evasão • Ignora foco e ganha esquiva", ru: "120 АТК / Уклонение • Игнорирует фокус" } },
        { id: 110, note: { es: "120 ATK / Ataque Doble • Ráfagas letales al usar poder", en: "120 ATK / Double Attack • Lethal bursts on power", pt: "120 ATK / Ataque Duplo • Rajadas letais com poder", ru: "120 АТК / Двойная атака • Смертельные залпы" } },
        { id: 42, note: { es: "110 ATK / Quemadura • Quema a todos los rivales", en: "110 ATK / Burn • Burns all enemies on defeat", pt: "110 ATK / Queimadura • Queima todos ao cair", ru: "110 АТК / Горение • Поджигает всех врагов" } },
        { id: 56, note: { es: "105 ATK / Evolución • Otorga evasión y aumenta daño", en: "105 ATK / Evolution • Gives team evasion & buffs ATK", pt: "105 ATK / Evolução • Dá evasão e aumenta dano", ru: "105 АТК / Эволюция • Дает уклонение команде" } }
      ]
    },
    {
      key: 'speedsters',
      titleKey: 'archSpeedstersTitle',
      subKey: 'archSpeedstersSub',
      color: 'var(--stat-spd)',
      chickens: [
        { id: 58, note: { es: "120 SPD Base • El pollo más rápido del juego", en: "120 Base SPD • Fastest chicken in the game", pt: "120 SPD Base • O frango mais rápido do jogo", ru: "120 Баз. СКР • Быстрейший цыпленок в игре" } },
        { id: 12, note: { es: "100 SPD • Evita el próximo ataque tras lanzar shuriken", en: "100 SPD • Dodges next hit after shuriken", pt: "100 SPD • Evita o próximo ataque após shuriken", ru: "100 СКР • Уклоняется от атаки после сюрикена" } },
        { id: 18, note: { es: "100 SPD • Paraliza a todos los enemigos al caer", en: "100 SPD • Paralyzes all enemies upon defeat", pt: "100 SPD • Paralisa todos ao ser derrotado", ru: "100 СКР • Парализует всех врагов при гибели" } },
        { id: 53, note: { es: "100 SPD • Envenena a todo el equipo rival con su poder", en: "100 SPD • Poisons entire enemy team on power", pt: "100 SPD • Envenena todo o time rival com poder", ru: "100 СКР • Отравляет всю команду врага" } },
        { id: 134, note: { es: "100 SPD • Reduce la armadura enemiga con cada impacto", en: "100 SPD • Shreds enemy armor with every hit", pt: "100 SPD • Reduz a armadura rival a cada golpe", ru: "100 СКР • Снижает броню врага с каждым ударом" } }
      ]
    },
    {
      key: 'batteries',
      titleKey: 'archBatteriesTitle',
      subKey: 'archBatteriesSub',
      color: 'var(--stat-pwr)',
      chickens: [
        { id: 60, note: { es: "100 PWR Base • Carga de poder instantánea en 1 turno", en: "100 Base PWR • Instant 1-turn power charge", pt: "100 PWR Base • Carga de poder instantânea em 1 turno", ru: "100 Баз. ЭНР • Заряжает способность за 1 ход" } },
        { id: 131, note: { es: "100 PWR Base • Curación aliada masiva cada turno", en: "100 Base PWR • Massive ally healing every turn", pt: "100 PWR Base • Cura aliada massiva a cada turno", ru: "100 Баз. ЭНР • Мощное лечение напарника каждый ход" } },
        { id: 136, note: { es: "100 PWR Base • Prolonga estados alterados con bumerán", en: "100 Base PWR • Extends status effects with boomerang", pt: "100 PWR Base • Estende efeitos com bumerangue", ru: "100 Баз. ЭНР • Продлевает негативные эффекты" } },
        { id: 10, note: { es: "80 PWR / Coste 90 • Rápida transformación a Pollisaur", en: "80 PWR / Cost 90 • Fast transformation into Pollisaur", pt: "80 PWR / Custo 90 • Rápida transformação em Pollisaur", ru: "80 ЭНР / Стоимость 90 • Быстрая эволюция" } },
        { id: 78, note: { es: "80 PWR • Soporte curativo de alta frecuencia", en: "80 PWR • High-frequency healing support", pt: "80 PWR • Suporte curativo de alta frequência", ru: "80 ЭНР • Частое исцеление напарника" } }
      ]
    },
    {
      key: 'freeze',
      titleKey: 'archFreezeTitle',
      subKey: 'archFreezeSub',
      color: '#38bdf8',
      chickens: [
        { id: 149, note: { es: "Congela al objetivo + Daño aumentado a congelados", en: "Freezes target + Bonus damage to frozen enemies", pt: "Congela o alvo + Dano bônus a congelados", ru: "Замораживает цель + Доп. урон по замороженным" } },
        { id: 104, note: { es: "Huevo helado congelante + 25% armadura al revivir", en: "Freezing egg + 25% armor on revive", pt: "Ovo congelante + 25% armadura ao reviver", ru: "Ледяное яйцо + 25% брони при возрождении" } },
        { id: 142, note: { es: "Congela al objetivo + Se cura al golpear congelados", en: "Freezes target + Heals when hitting frozen", pt: "Congela o alvo + Cura-se ao golpear congelados", ru: "Замораживает цель + Лечится об замороженных" } },
        { id: 145, note: { es: "Congela a todos los enemigos con helado en área", en: "Freezes all enemies with AoE ice cream", pt: "Congela todos os inimigos com sorvete em área", ru: "Замораживает всех врагов мороженым" } },
        { id: 144, note: { es: "Congela al objetivo + Escudo de barrera para el equipo", en: "Freezes target + Team barrier shield on power", pt: "Congela o alvo + Escudo de barreira para a equipe", ru: "Замораживает цель + Щит для всей команды" } }
      ]
    },
    {
      key: 'poison',
      titleKey: 'archPoisonTitle',
      subKey: 'archPoisonSub',
      color: '#84cc16',
      chickens: [
        { id: 36, note: { es: "Empieza con poder al 100% y envenena en turno 1", en: "Starts with 100% power and poisons on turn 1", pt: "Começa com poder 100% e envenena no turno 1", ru: "Начинает с 100% энергии и травит в 1 ход" } },
        { id: 23, note: { es: "Envenena al atacar y envenena a todos al caer", en: "Poisons on attack and poisons all on defeat", pt: "Envenena ao atacar e a todos ao cair", ru: "Травит при атаке и всех при гибели" } },
        { id: 7, note: { es: "Gran maestro del veneno y el desgaste continuo", en: "Grandmaster of poison and continuous DoT", pt: "Mestre do veneno e desgaste contínuo", ru: "Мастер отравления и постепенного урона" } },
        { id: 117, note: { es: "Envenena y roba vida máxima al derrotar enemigos", en: "Poisons and steals max HP on enemy kills", pt: "Envenena e rouba vida máxima ao derrotar", ru: "Травит и крадет макс. HP при убийстве" } },
        { id: 6, note: { es: "Infección zombie imparable que desgasta la salud", en: "Unstoppable zombie infection eating HP", pt: "Infecção zumbi implacável consumindo vida", ru: "Зомби-инфекция, пожирающая здоровье" } }
      ]
    },
    {
      key: 'healers',
      titleKey: 'archHealersTitle',
      subKey: 'archHealersSub',
      color: '#10b981',
      chickens: [
        { id: 31, note: { es: "Autocuración del 25% de vida y reduce velocidad rival", en: "25% self-heal & lowers attacker speed", pt: "Autocura de 25% de vida e reduz vel rival", ru: "Самолечение 25% HP и замедление врага" } },
        { id: 3, note: { es: "Al curarse, cura a todos los aliados (50% efectividad)", en: "When healing, heals all allies (50% effectiveness)", pt: "Ao curar-se, cura todos os aliados (50%)", ru: "При лечении лечит всех союзников (50%)" } },
        { id: 115, note: { es: "Otorga armadura al equipo y regenera 25% vida", en: "Grants armor to team and regens 25% HP", pt: "Dá armadura ao time e regenera 25% de vida", ru: "Дает броню команде и регенерирует 25% HP" } },
        { id: 47, note: { es: "Gana armadura (+3%) al ser golpeado y se cura 25%", en: "Gains +3% armor when hit and heals 25%", pt: "Ganha armadura (+3%) ao ser golpeado e cura 25%", ru: "Получает +3% брони при ударе и лечит 25%" } },
        { id: 7, note: { es: "Soporte multifunción de curación y limpieza de estados", en: "Multifunction sustain and status cleanser", pt: "Suporte multifuncional de cura e limpeza", ru: "Универсальная поддержка и очищение" } }
      ]
    },
    {
      key: 'revive',
      titleKey: 'archReviveTitle',
      subKey: 'archReviveSub',
      color: '#f59e0b',
      chickens: [
        { id: 13, note: { es: "Revive automáticamente con +25% de daño extra", en: "Auto-revives with +25% bonus attack damage", pt: "Ressuscita automaticamente com +25% de dano", ru: "Авто-воскрешение с +25% к урону" } },
        { id: 6, note: { es: "Revive con inmunidad temporal a la muerte", en: "Revives with temporary death immunity", pt: "Ressuscita com imunidade temporária à morte", ru: "Возрождается с временным бессмертием" } },
        { id: 109, note: { es: "Revive como Mali manteniendo presencia en combate", en: "Revives as Mali keeping battlefield presence", pt: "Ressuscita como Mali mantendo presença", ru: "Возрождается как Мали, оставаясь в бою" } },
        { id: 86, note: { es: "Obtiene revivir con su poder y se cura cada 5 ataques", en: "Gains revive via power & self-heals every 5 hits", pt: "Ganha reviver com poder e cura a cada 5 ataques", ru: "Получает воскрешение и лечится каждые 5 ударов" } },
        { id: 56, note: { es: "Sobrevive a golpes letales otorgando evasión", en: "Survives lethal blows while granting team evasion", pt: "Sobrevive a golpes letais dando evasão", ru: "Переживает смертельный урон и дает уклонение" } }
      ]
    }
  ];

  function renderRanking() {
    const container = document.getElementById('wikiContent');
    if (!container) return;

    let subDesc = str('rankingMaxDesc');
    if (currentRankingTab === 'base') subDesc = str('rankingBaseDesc');
    else if (currentRankingTab === 'archetypes') subDesc = str('rankingArchDesc');

    let bodyHtml = '';

    if (currentRankingTab === 'max') {
      const maxCategories = [
        {
          key: 'life',
          title: str('topLifeMax'),
          color: 'var(--stat-life)',
          unit: 'pts',
          baseKey: 'life',
          getValue: (c, st) => st.life
        },
        {
          key: 'damage',
          title: str('topDamageMax'),
          color: 'var(--stat-dmg)',
          unit: 'pts',
          baseKey: 'damage',
          getValue: (c, st) => st.damage
        },
        {
          key: 'speed',
          title: str('topSpeedMax'),
          color: 'var(--stat-spd)',
          unit: 'pts',
          baseKey: 'speed',
          getValue: (c, st) => st.speed
        },
        {
          key: 'armor',
          title: str('topArmorMax'),
          color: 'var(--stat-arm)',
          unit: 'pts',
          baseKey: 'armor',
          getValue: (c, st) => st.armor
        },
        {
          key: 'powerAmount',
          title: str('topPowerMax'),
          color: 'var(--stat-pwr)',
          unit: 'pts',
          baseKey: 'power_amount',
          getValue: (c, st) => st.powerAmount
        },
        {
          key: 'total',
          title: str('topTotalMax'),
          color: 'var(--wiki-gold)',
          unit: 'pts',
          baseKey: null,
          getValue: (c, st) => st.life + st.damage + st.speed + st.armor + st.powerAmount
        }
      ];

      // Precalculate max stats
      const maxStatsMap = new Map();
      WIKI.chickens.forEach(c => {
        maxStatsMap.set(c.id, computeTeamBuilderStats(c, 100, 100, 2.0));
      });

      bodyHtml = `
        <div class="ranking-grid">
          ${maxCategories.map(cat => {
            const sorted = WIKI.chickens.slice().sort((a, b) => {
              const stA = maxStatsMap.get(a.id);
              const stB = maxStatsMap.get(b.id);
              const valA = cat.getValue(a, stA);
              const valB = cat.getValue(b, stB);
              const diff = valB - valA;
              if (diff !== 0) return diff;
              if (cat.baseKey) {
                const bDiff = b.stats[cat.baseKey] - a.stats[cat.baseKey];
                if (bDiff !== 0) return bDiff;
              }
              return b.stat_total - a.stat_total;
            }).slice(0, 10);

            return `
              <div class="ranking-card">
                <div class="ranking-card-header">
                  <span>${cat.title}</span>
                </div>
                <div>
                  ${sorted.map((c, idx) => {
                    let medalClass = '';
                    let medalIcon = `#${idx + 1}`;
                    if (idx === 0) { medalClass = 'gold'; medalIcon = '🥇'; }
                    else if (idx === 1) { medalClass = 'silver'; medalIcon = '🥈'; }
                    else if (idx === 2) { medalClass = 'bronze'; medalIcon = '🥉'; }
                    const st = maxStatsMap.get(c.id);
                    const val = cat.getValue(c, st);
                    const baseVal = cat.baseKey ? c.stats[cat.baseKey] : null;

                    return `
                      <div class="ranking-row">
                        <span class="rank-pos ${medalClass}">${medalIcon}</span>
                        <img class="pixelated" src="${c.sprite}" width="28" height="28" alt="">
                        <div style="flex:1;min-width:0;">
                          <a href="#chicken-${c.id}" style="font-weight:700;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;">
                            ${getLocalized(c.name)} <span style="font-weight:normal;color:var(--wiki-text-muted);font-size:11px;">#${String(c.id + 1).padStart(3, '0')}</span>
                          </a>
                        </div>
                        <div style="font-weight:800;font-size:13px;color:${cat.color};text-align:right;">
                          ${val} ${cat.unit}
                          ${baseVal !== null ? `<div style="font-size:10px;font-weight:normal;color:var(--wiki-text-muted);">Base: ${baseVal}</div>` : ''}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (currentRankingTab === 'base') {
      const baseCategories = [
        { key: 'speed', title: str('topSpeed'), color: 'var(--stat-spd)', unit: 'pts', getValue: c => c.stats.speed },
        { key: 'damage', title: str('topDamage'), color: 'var(--stat-dmg)', unit: 'pts', getValue: c => c.stats.damage },
        { key: 'armor', title: str('topArmor'), color: 'var(--stat-arm)', unit: 'pts', getValue: c => c.stats.armor },
        { key: 'life', title: str('topLife'), color: 'var(--stat-life)', unit: 'pts', getValue: c => c.stats.life },
        { key: 'power_amount', title: str('topPower'), color: 'var(--stat-pwr)', unit: 'pts', getValue: c => c.stats.power_amount },
        { key: 'total', title: str('topTotal'), color: 'var(--wiki-gold)', unit: 'pts', getValue: c => c.stat_total }
      ];

      bodyHtml = `
        <div class="ranking-grid">
          ${baseCategories.map(cat => {
            const sorted = WIKI.chickens.slice().sort((a, b) => cat.getValue(b) - cat.getValue(a)).slice(0, 10);
            return `
              <div class="ranking-card">
                <div class="ranking-card-header">
                  <span>${cat.title}</span>
                </div>
                <div>
                  ${sorted.map((c, idx) => {
                    let medalClass = '';
                    let medalIcon = `#${idx + 1}`;
                    if (idx === 0) { medalClass = 'gold'; medalIcon = '🥇'; }
                    else if (idx === 1) { medalClass = 'silver'; medalIcon = '🥈'; }
                    else if (idx === 2) { medalClass = 'bronze'; medalIcon = '🥉'; }
                    const val = cat.getValue(c);

                    return `
                      <div class="ranking-row">
                        <span class="rank-pos ${medalClass}">${medalIcon}</span>
                        <img class="pixelated" src="${c.sprite}" width="28" height="28" alt="">
                        <div style="flex:1;min-width:0;">
                          <a href="#chicken-${c.id}" style="font-weight:700;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;">
                            ${getLocalized(c.name)} <span style="font-weight:normal;color:var(--wiki-text-muted);font-size:11px;">#${String(c.id + 1).padStart(3, '0')}</span>
                          </a>
                        </div>
                        <div style="font-weight:800;font-size:13px;color:${cat.color};">
                          ${val} ${cat.unit}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (currentRankingTab === 'archetypes') {
      bodyHtml = `
        <div class="ranking-grid">
          ${ARCHETYPES_DATA.map(arch => `
            <div class="arch-card">
              <div class="arch-header">
                <div class="arch-title" style="color:${arch.color};">${str(arch.titleKey)}</div>
                <div class="arch-sub">${str(arch.subKey)}</div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                ${arch.chickens.map((item, idx) => {
                  const c = WIKI.chickens.find(x => x.id === item.id);
                  if (!c) return '';
                  let medalIcon = `#${idx + 1}`;
                  if (idx === 0) medalIcon = '🥇';
                  else if (idx === 1) medalIcon = '🥈';
                  else if (idx === 2) medalIcon = '🥉';
                  const noteText = item.note[currentLang] || item.note.es;

                  return `
                    <div class="arch-row">
                      <span style="font-size:14px;font-weight:800;width:24px;text-align:center;">${medalIcon}</span>
                      <img class="pixelated" src="${c.sprite}" width="32" height="32" alt="${getLocalized(c.name)}">
                      <div style="flex:1;min-width:0;">
                        <a href="#chicken-${c.id}" style="font-weight:800;font-size:13px;color:var(--wiki-text);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                          ${getLocalized(c.name)} <span style="font-weight:normal;color:var(--wiki-text-muted);font-size:11px;">#${String(c.id + 1).padStart(3, '0')}</span>
                        </a>
                        <div style="font-size:11px;color:var(--wiki-text-muted);margin-top:2px;line-height:1.3;">
                          ${noteText}
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">🏆 ${str('rankingTitle')}</h1>
        <p class="page-subtitle">${subDesc}</p>
      </div>

      <!-- Ranking Mode Tabs -->
      <div class="ranking-tabs-wrap">
        <button class="ranking-tab-btn ${currentRankingTab === 'max' ? 'active' : ''}" data-tab="max">
          ${str('rankingTabMax')}
        </button>
        <button class="ranking-tab-btn ${currentRankingTab === 'base' ? 'active' : ''}" data-tab="base">
          ${str('rankingTabBase')}
        </button>
        <button class="ranking-tab-btn ${currentRankingTab === 'archetypes' ? 'active' : ''}" data-tab="archetypes">
          ${str('rankingTabArchetypes')}
        </button>
      </div>

      ${bodyHtml}
    `;

    // Attach tab click handlers
    container.querySelectorAll('.ranking-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (tab && tab !== currentRankingTab) {
          currentRankingTab = tab;
          renderRanking();
        }
      });
    });
  }

  // 13. CHANGELOG VIEW
  function renderChangelog() {
    const container = document.getElementById('wikiContent');
    const logs = [
      {
        version: "v0.121",
        date: "Actual",
        badge: "Versión Actual",
        highlights: [
          "<strong>Ascensor y Checkpoints en Modo Infinito:</strong> Nuevo sistema de ascensor con puntos de control cada 25 pisos (pisos 26, 51, 76, 101...). Empezar desde el piso 1 es gratuito y los pisos avanzados tienen coste en semillas. Soporte para mantener presionado en las flechas de navegación del ascensor.",
          "<strong>Jefes Abisales y Rebalanceo del Infinito:</strong> Expansión masiva de pools de jefes temáticos cada 10 pisos y combinaciones abisales cruzadas a partir del piso 110 con escalado infinito abisal (+3.5% por piso). Garra fue removido de los jefes del infinito para preservar su estatus de recompensa suprema del Torneo Arcano.",
          "<strong>100% de Ítems Conseguibles:</strong> Auditoría completa de los 75 objetos del juego. Pico blindado, Primer boomerang y Primera hacha ahora son 100% obtenibles a través de incursiones en el Modo Infinito y contratos de intercambio.",
          "<strong>Balance de Drops Únicos:</strong> Ajuste moderado en las probabilidades de ítems exclusivos en el Modo Infinito (3.5% Fragmento Prohibido y 7.5% ítems raros), desequipándose automáticamente al inventario al reclutar.",
          "<strong>Zona Arcana Mejorada:</strong> Los pollos salvajes de la Zona Arcana ahora poseen valores de entrenamiento aleatorios tendientes a altos.",
          "<strong>Arquitectura de Pasivas de Equipo:</strong> Preparación del terreno y hooks de eventos de combate para futuras pasivas globales de equipo mediante colgantes."
        ]
      },
      {
        version: "v0.120",
        date: "Reciente",
        badge: "Reciente",
        highlights: [
          "<strong>Escalado Libre de Estadísticas:</strong> Se retiraron los techos artificiales superiores en Vida (2,500), Daño (300) y Velocidad (500) en el motor del juego. Pollos especializados con estadísticas base superiores a 100 (como Cacho con 130 ATK alcanzando 349, Valu con 130 HP alcanzando 2,904, o Duncan con 120 SPD alcanzando 554) ahora expresan plenamente su potencial genético y entrenamiento.",
          "<strong>Blindaje de Armadura:</strong> Se mantuvo el límite estricto de mitigación de daño al 80% para evitar invulnerabilidad física en combates competitivos.",
          "<strong>Top 10 Máximo & Herramientas Web:</strong> Actualización del ranking oficial de atributos máximos, calculadora de combate y simulador 2vs2 sincronizados con las nuevas cotas dinámicas.",
          "<strong>Revisión de Localización:</strong> Homogeneización multilingüe integral en descripciones, ítems, poderes y guías tácticas en español, inglés, portugués y ruso."
        ]
      },
      {
        version: "v0.119",
        date: "Reciente",
        badge: "Mejoras de Calidad de Vida",
        highlights: [
          "<strong>Optimización en 'IR A CAJA':</strong> Se eliminó el botón redundante de cerrar ('X') en el panel de navegación rápida, unificando la salida a través del botón inferior de volver atrás.",
          "<strong>Selector de Velocidad de Batalla:</strong> Se fijó la velocidad de combate de forma equilibrada a 1x y 2x para mantener la fluidez táctica y legibilidad de turnos.",
          "<strong>Navegación de Corrales:</strong> Soporte completo para mantener presionado en los botones de cambio de pestañas de cajas, facilitando recorrer grandes inventarios.",
          "<strong>Alineación y Centrado:</strong> Perfeccionado el centrado del texto del número de caja sobre el botón spr_ui_button_big.",
          "<strong>Base de Datos y Poderes Ocultos:</strong> Actualización de la tabla de poderes ocultos en la enciclopedia oficial sincronizada con el código del juego.",
          "<strong>Herramientas Web:</strong> Corrección de numeración de pollos en la Calculadora de Stats y el Simulador 2vs2 (mostrando correlativamente #001 en adelante, igual que en la Pollopedia)."
        ]
      },
      {
        version: "v0.118",
        date: "Reciente",
        badge: "Balance",
        highlights: [
          "<strong>Rebalanceo de Poderes Ocultos:</strong> Asignación estratégica renovada para varias especies de pollos.",
          "<strong>Prevención de Clics Fantasma:</strong> Cooldown de seguridad implementado tras cerrar paneles de menú para evitar selecciones accidentales en el corral."
        ]
      },
      {
        version: "v0.117",
        date: "Navegación",
        badge: "Nueva Interfaz",
        highlights: [
          "<strong>Panel 'IR A CAJA':</strong> Nueva interfaz visual emergente para saltar instantáneamente entre los corrales 1 a 10.",
          "<strong>Mejoras en Crianza y Reserva:</strong> Optimización en la asignación de nidos y gestión de pollos en granja."
        ]
      },
      {
        version: "v0.110 - v0.116",
        date: "Expansión Genética",
        badge: "Grandes Mecánicas",
        highlights: [
          "<strong>Genética y Deseo (Wish):</strong> Introducción del objeto Deseo para crianza perfecta de pollos 100/100/100/100/100.",
          "<strong>Transformaciones en Combate:</strong> Sistema de evoluciones activables en batalla (Pollisor -> Pollisaur, Mechalex -> Mechalex 2.0, Gatarlos -> Evil Gatarlos).",
          "<strong>Modo Infinito:</strong> Desafío de oleadas progresivas con recompensas míticas exclusivas (Fragmentos Prohibidos, Deseos, Plumas).",
          "<strong>Tablón de Intercambio:</strong> Contratos comerciales cada 12 horas en la tienda."
        ]
      }
    ];

    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">📜 ${str('changelogTitle')}</h1>
        <p class="page-subtitle">${str('changelogDesc')}</p>
      </div>

      <div class="timeline">
        ${logs.map(log => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:16px;font-weight:900;color:var(--wiki-accent);">${log.version}</span>
                <span class="timeline-badge">${log.badge}</span>
              </div>
              <ul>
                ${log.highlights.map(h => `<li style="margin-bottom:6px;">${h}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
