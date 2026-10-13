/* Clicker Chickens Classic Wiki Application */
(function() {
  let WIKI = window.WIKI_DATA || null;
  let currentLang = localStorage.getItem('cc_wiki_lang') || 'es';
  let currentTheme = localStorage.getItem('cc_wiki_theme') || 'light';
  let currentView = 'pollopedia';
  let currentChickenFilterZone = 'all';
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
      footerGen: "Generada directamente de los datos del juego v0.117",
      footerHosting: "Diseñada para alojarse gratis en",
      footerStyle: "Estilo clásico, rápido y ligero"
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
      footerGen: "Generated directly from game data v0.117",
      footerHosting: "Designed for free hosting on",
      footerStyle: "Classic, lightweight and fast style"
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
      footerGen: "Gerada diretamente dos dados do jogo v0.117",
      footerHosting: "Criada para hospedagem gratuita no",
      footerStyle: "Estilo clássico, rápido e leve"
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
      footerGen: "Сгенерировано напрямую из данных игры v0.117",
      footerHosting: "Разработано для бесплатного хостинга на",
      footerStyle: "Классический, быстрый и легкий стиль"
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
          el.textContent = str(k);
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
      const q = input.value.trim().toLowerCase();
      if (!q || q.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
      }

      const results = [];

      // Search Chickens
      WIKI.chickens.forEach(c => {
        const name = getLocalized(c.name).toLowerCase();
        if (name.includes(q) || c.id.toString() === q || (c.id + 1).toString() === q || String(c.id + 1).padStart(3, '0') === q) {
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

      // Search Items
      WIKI.items.forEach(it => {
        const name = getLocalized(it.name).toLowerCase();
        const desc = getLocalized(it.description).toLowerCase();
        if (name.includes(q) || desc.includes(q) || it.id.toString() === q || (it.id + 1).toString() === q || String(it.id + 1).padStart(2, '0') === q) {
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
        const desc = getLocalized(p.description).toLowerCase();
        if (desc.includes(q) || p.id.toString() === q || (p.id + 1).toString() === q) {
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
        const desc = getLocalized(pw.description).toLowerCase();
        if (desc.includes(q) || pw.id.toString() === q || (pw.id + 1).toString() === q) {
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
        const name = getLocalized(z.name).toLowerCase();
        if (name.includes(q)) {
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

    // Search filter
    if (searchVal) {
      list = list.filter(c => {
        const name = getLocalized(c.name).toLowerCase();
        return name.includes(searchVal) || c.id.toString() === searchVal || (c.id + 1).toString() === searchVal || String(c.id + 1).padStart(3, '0') === searchVal;
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
    return {
      role: lang === 'en' ? 'Balanced All-Rounder' : 'Todoterreno Equilibrado',
      roleTitle: lang === 'en' ? 'All-Rounder' : 'Equilibrado',
      turns: 1,
      duo: lang === 'en' ? 'Versatile partner for either position in 2vs2.' : 'Compañero versátil para cualquier posición del dúo 2vs2.',
      allies: lang === 'en' ? 'Pairs well with any archetype.' : 'Combina con cualquier arquetipo.',
      items: lang === 'en' ? 'Triflor; Circuito Vital; Poción mágica.' : 'Triflor; Circuito Vital; Poción mágica.',
      counter: lang === 'en' ? 'Identify its role and isolate it.' : 'Observar qué rol cumple y aislarlo.'
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
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <a href="#pollopedia" class="btn-control">${str('backToList')}</a>
        <div style="display:flex;gap:8px;">
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
      list = list.filter(i => {
        const name = getLocalized(i.name).toLowerCase();
        const desc = getLocalized(i.description).toLowerCase();
        return name.includes(searchVal) || desc.includes(searchVal) || i.id.toString() === searchVal || (i.id + 1).toString() === searchVal;
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
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">📖 ${str('navMechanics')}</h1>
        <p class="page-subtitle">${str('secMechanicsDesc')}</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px;">
        ${(() => {
          const defaultIcons = {
            breeding: '🥚',
            fusion: '🧬',
            squad: '👥',
            exchange: '📜',
            infinite: '♾️',
            formulas: '📊'
          };
          return Object.keys(m).map(key => {
            const cat = m[key];
            const icon = cat.icon || defaultIcons[key] || '📌';
            return `
              <div>
                <h2 class="article-h2">${icon} ${getLocalized(cat.title)}</h2>
                ${cat.sections.map(sec => `
                  <div class="article-box">
                    <h4>${getLocalized(sec.title)}</h4>
                    <p style="font-size:13px;line-height:1.5;">${getLocalized(sec.content)}</p>
                  </div>
                `).join('')}
              </div>
            `;
          }).join('');
        })()}
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
