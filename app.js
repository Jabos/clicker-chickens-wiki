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
      langBtn: "English",
      themeDark: "Modo Oscuro",
      themeLight: "Modo Claro",
      navChickens: "Pollopedia",
      navItems: "Objetos",
      navPowers: "Poderes",
      navPassives: "Pasivas",
      navStates: "Efectos de Estado",
      navZones: "Zonas y Torneos",
      navAchievements: "Logros",
      navMechanics: "Guías y Mecánicas",
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
      passiveSkill: "Habilidad Pasiva",
      activePower: "Poder Activo",
      hiddenPower: "Poder Oculto",
      noHiddenPower: "No puede poseer poder oculto (Transformación en combate)",
      powerCost: "Coste de Carga de Poder",
      defaultItem: "Objeto Inicial",
      evolutionHeader: "Línea de Evolución",
      evolutionOnlyWarn: "Pollo de Evolución: No puede aparecer en combates salvajes, tienda diaria ni huevos.",
      habitatsHeader: "Hábitats y Obtención",
      wildCombats: "Combates Salvajes",
      eggPools: "Eclosión de Huevos",
      noWild: "No aparece en estado salvaje",
      noEgg: "No disponible en huevos de tienda",
      tournamentCup: "Copa del Torneo",
      entryFee: "Inscripción",
      prizeMoney: "Premio",
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
      searchBadgeAchievement: "Logro"
    },
    en: {
      siteTitle: "Clicker Chickens Wiki",
      siteSubtitle: "Official Encyclopedia",
      searchPlaceholder: "Search chickens, items, powers, passives...",
      langBtn: "Español",
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
      navChickens: "Chickens",
      navItems: "Items",
      navPowers: "Powers",
      navPassives: "Passives",
      navStates: "Status Effects",
      navZones: "Zones & Tournaments",
      navAchievements: "Achievements",
      navMechanics: "Guides & Mechanics",
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
      passiveSkill: "Passive Skill",
      activePower: "Active Power",
      hiddenPower: "Hidden Power",
      noHiddenPower: "Cannot possess hidden power (Combat transformation)",
      powerCost: "Power Energy Required",
      defaultItem: "Held Item",
      evolutionHeader: "Evolution Line",
      evolutionOnlyWarn: "Evolution Chicken: Cannot appear in wild combats, daily shop, or eggs.",
      habitatsHeader: "Habitats & Locations",
      wildCombats: "Wild Combats",
      eggPools: "Egg Pools",
      noWild: "Does not appear wild",
      noEgg: "Not available in shop eggs",
      tournamentCup: "Tournament Cup",
      entryFee: "Entry Fee",
      prizeMoney: "Prize",
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
      searchBadgeAchievement: "Achievement"
    }
  };

  function str(key) {
    return (t[currentLang] && t[currentLang][key]) || key;
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
    currentLang = lang;
    localStorage.setItem('cc_wiki_lang', lang);
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.textContent = str('langBtn');
    }
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

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        applyLang(currentLang === 'es' ? 'en' : 'es');
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
            title: `Pasiva #${p.id + 1}`,
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
            title: `Poder #${pw.id + 1}`,
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
            subtitle: `Nivel ${z.level_range[0]}-${z.level_range[1]} | Viaje: ${z.travel_price}`,
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
            ${WIKI.zones.map(z => `<option value="${z.id}" ${currentChickenFilterZone == z.id ? 'selected' : ''}>Zona ${z.id + 1}: ${getLocalized(z.name)}</option>`).join('')}
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
    lang = lang || 'es';
    const isEn = lang === 'en';
    const s = chicken.stats;
    const pMax = chicken.power_max || 100;
    const pAmt = s.power_amount;
    const turns = pAmt > 0 ? Math.ceil(pMax / pAmt) : 99;
    const act = chicken.action_type || 0; // 0=melee, 1=heal, 2=projectile

    const l = s.life, d = s.damage, sp = s.speed, a = s.armor, p = s.power_amount;

    let role, roleTitle, duo, allies, items, counter;

    // 1. Soporte Sanador (Healer)
    if (act === 1) {
      roleTitle = isEn ? 'Healing Support' : 'Soporte Sanador';
      role = isEn ? 'Tactical Healing Support' : 'Soporte Sanador Táctico';
      duo = isEn
        ? 'Position 2 (Backline). Restores health to keep their partner alive, allowing high-damage allies to outlast the opponent team.'
        : 'Posición 2 (Retaguardia). Restaura salud al equipo para mantener con vida a su compañero y ganar el combate por desgaste.';
      allies = isEn
        ? 'Heavy tanks or bruisers (Pastank, Armor, Boomy, Garry) who become nearly unkillable with sustained healing.'
        : 'Tanques de absorción o peleadores pesados (Pastank, Armor, Boomy, Garry) que se vuelven casi imposibles de derribar con curación continua.';
      items = isEn
        ? 'Ala de Garra (passive team healing every turn), Palo de raíz (starts with full power for an instant Turn 1 heal), Ojos locos (+10% team damage), or Poción mágica (cleanses all status conditions).'
        : 'Ala de Garra (cura 5% de vida al equipo cada turno), Palo de raíz (empieza con poder lleno para curar en turno 1), Ojos locos (+10% de daño al equipo) o Poción mágica (limpia cualquier estado).';
      counter = isEn
        ? 'Apply silence using Pergamino del silencio at the start of battle to shut down their healing powers, or focus them down first.'
        : 'Aplicar silencio al inicio del combate con Pergamino del silencio para bloquear sus poderes curativos, o atacarlo primero para no dejarlo sanar.';
    }
    // 2. Cañón de Cristal (Glass Cannon)
    else if (d >= 60 && sp >= 50 && (l <= 30 || a <= 20)) {
      roleTitle = isEn ? 'Glass Cannon' : 'Cañón de Cristal';
      role = isEn ? 'Glass Cannon (Fast Striker)' : 'Cañón de Cristal (Asesino Rápido)';
      duo = isEn
        ? 'Position 2 (Backline). A high-speed, high-damage sweeper designed to eliminate a key enemy chicken early to force a 2vs1 advantage.'
        : 'Posición 2 (Retaguardia). Atacante veloz de alto daño diseñado para noquear rápido a un rival y transformar la batalla en un ventajoso 2vs1.';
      allies = isEn
        ? 'Frontline tanks holding Picoteador dorado (Pastank, Armor, Porky, Garry) to draw enemy attacks away from them.'
        : 'Tanques de vanguardia equipados con Picoteador dorado (Pastank, Armor, Porky, Garry) para desviar los ataques rivales y protegerlo.';
      items = isEn
        ? 'Páginas del fénix (revives if targeted early), Pico vampiro (heals 15% of damage dealt on hit), Ira (2 extra attacks at combat start), or Cristal de daño (+25% damage at start).'
        : 'Páginas del fénix (revive si es eliminado por sorpresa), Pico vampiro (recupera vida con el 15% del daño al atacar), Ira (2 ataques extra al inicio) o Cristal de daño (+25% de daño).';
      counter = isEn
        ? 'Target them immediately with AI focused on the lowest health chicken, or slow them down with paralysis using Pico Electrostático.'
        : 'Atacarlo de inmediato con la IA dirigida al pollo con menor vida, o frenarlo con parálisis equipando Pico Electrostático (reduce su velocidad al 50%).';
    }
    // 3. Muralla Blindada (Pure Tank)
    else if (l >= 50 && a >= 45) {
      roleTitle = isEn ? 'Armored Wall' : 'Muralla Blindada';
      role = isEn ? 'Armored Wall (Pure Tank)' : 'Muralla Blindada (Tanque Puro)';
      duo = isEn
        ? 'Position 1 (Frontline). Absorbs physical punishment and protects their partner while the backline builds power or sweeps.'
        : 'Posición 1 (Vanguardia). Absorbe los impactos del dúo rival y protege a su compañero mientras la retaguardia carga poder o remata.';
      allies = isEn
        ? 'High-damage attackers needing protection (Chica, Mosca, Shiken, Zombie, Cacho) or power casters like Boomy.'
        : 'Atacantes de alto impacto que necesitan protección (Chica, Mosca, Shiken, Zombie, Cacho) o generadores de poder como Boomy.';
      items = isEn
        ? 'Picoteador dorado (forces both enemies to focus on them), Pico helado (20% chance to freeze the attacker on hit), Diente de cuervo (+15% armor), or Circuito Vital (massive 700 HP heal when low).'
        : 'Picoteador dorado (obtiene el enfoque y obliga a los rivales a atacarlo a él), Pico helado (20% de congelar al atacante cuando recibe un golpe), Diente de cuervo (+15% de armadura) o Circuito Vital (cura 700 de vida en apuros).';
      counter = isEn
        ? 'Do not hit them with raw attacks. Use status damage that bypasses armor like poison (Gota peligrosa), infection (Moco problemático), or burn.'
        : 'No desgastarse con ataques físicos directos. Usar estados alterados que ignoran la armadura como envenenamiento (Gota peligrosa), infección (Moco problemático) o quemadura.';
    }
    // 4. Bastión de Armadura (Heavy Armor)
    else if (a >= 60) {
      roleTitle = isEn ? 'Iron Bastion' : 'Bastión de Armadura';
      role = isEn ? 'Iron Bastion (Armor Specialist)' : 'Bastión de Armadura (Especialista Defensivo)';
      duo = isEn
        ? 'Position 1 (Frontline). Extremely resistant to standard physical blows, effectively walling opposing physical sweepers.'
        : 'Posición 1 (Vanguardia). Gran reducción contra ataques directos, desgastando y frenando en seco a los atacantes físicos rivales.';
      allies = isEn
        ? 'Ranged projectile shooters or sustaining supports holding Ala de Garra.'
        : 'Atacantes a distancia con proyectiles o pollos con soporte curativo como Ala de Garra.';
      items = isEn
        ? 'Picoteador dorado (draws physical attacks onto their massive armor), Ojos en sincronía (shares inflicted status conditions with attackers), or Pico helado (freezes attackers).'
        : 'Picoteador dorado (atrae los ataques físicos a su armadura), Ojos en sincronía (comparte los estados negativos con su atacante) o Pico helado (congela al atacante).';
      counter = isEn
        ? 'Use indirect damage or afflictions like curse (Ojo maldito), paralysis (Pico Electrostático), or poison (Gota peligrosa) which ignore armor rating.'
        : 'Usar daño indirecto o estados como maldición (Ojo maldito), parálisis (Pico Electrostático) o envenenamiento (Gota peligrosa) que no se reducen por armadura.';
    }
    // 5. Tanque de Salud (HP Sponge)
    else if (l >= 70) {
      roleTitle = isEn ? 'Health Tank' : 'Tanque de Salud';
      role = isEn ? 'Health Tank (HP Sponge)' : 'Tanque de Salud (Esponja de Vida)';
      duo = isEn
        ? 'Position 1 (Frontline). Deep health pool that endures opening burst rounds and sustained trades without falling.'
        : 'Posición 1 (Vanguardia). Enorme reserva de vida que resiste ráfagas iniciales y múltiples turnos de intercambio sin riesgo de caer.';
      allies = isEn
        ? 'Consistent damage dealers or allies with Pico vampiro that benefit from the rounds bought by this tank.'
        : 'Atacantes constantes o compañeros con Pico vampiro que aprovechan todo el tiempo que este tanque resiste en combate.';
      items = isEn
        ? 'Picoteador dorado (absorbs enemy hits), Semilla rompepicos (+15% max health), Circuito Vital (heals 700 HP), or Páginas del fénix (revive).'
        : 'Picoteador dorado (atrae los ataques del enemigo), Semilla rompepicos (+15% de vida máxima), Circuito Vital (cura 700 de salud) o Páginas del fénix (revivir).';
      counter = isEn
        ? 'Percentage-based damage melts high HP. Infect them with Moco problemático or poison them with Gota peligrosa to shred their health pool.'
        : 'El daño porcentual derrite su barra. Infectarlo con Moco problemático o envenenarlo con Gota peligrosa para drenar su salud rápidamente.';
    }
    // 6. Coloso Ofensivo (Bruiser)
    else if (d >= 55 && l >= 45) {
      roleTitle = isEn ? 'Bruiser Colossus' : 'Coloso Ofensivo';
      role = isEn ? 'Bruiser Colossus (Heavy Fighter)' : 'Coloso Ofensivo (Peleador Pesado)';
      duo = isEn
        ? 'Position 1 or 2. Balances durable defenses with punishing offense, capable of absorbing hits and retaliating with high damage.'
        : 'Posición 1 o 2. Excelente equilibrio entre resistencia y pegada; aguanta castigo directo y devuelve golpes de gran potencia.';
      allies = isEn
        ? 'Speedy controllers (Polliwatt, Rufus) or teammates holding Ojos locos (+10% team damage) to amplify trades.'
        : 'Compañeros rápidos con control (Polliwatt, Rufus) o aliados con Ojos locos (+10% de daño al equipo) para cerrar intercambios.';
      items = isEn
        ? 'Pico vampiro (heals with each heavy strike), Ojo del vacío (+15% to all stats if their partner is defeated), Ira (opening extra attacks), or Triflor (+5% damage, armor, speed).'
        : 'Pico vampiro (se cura en cada golpe con su alto daño), Ojo del vacío (+15% a todos sus stats si su compañero cae), Ira (ataques extra al inicio) o Triflor (+5% a todo).';
      counter = isEn
        ? 'Control their actions with freeze (Pico helado / Ojo helado) or cut their turn frequency in half with paralysis (Pico Electrostático).'
        : 'Neutralizarlo con congelamiento (Pico helado u Ojo helado) o cortar su velocidad al 50% con parálisis (Pico Electrostático).';
    }
    // 7. Velocista / Iniciador (Speedster)
    else if (sp >= 70) {
      roleTitle = isEn ? 'Agile Speedster' : 'Velocista Ágil';
      role = isEn ? 'Agile Speedster (Turn Initiator)' : 'Velocista Ágil (Iniciador de Turno)';
      duo = isEn
        ? 'Position 1 or 2. Acts first almost every round, inflicting early status conditions or softening targets before enemy responses.'
        : 'Posición 1 o 2. Su alta velocidad le garantiza mover primero en casi cada ronda, debilitando o aplicando estados antes del turno rival.';
      allies = isEn
        ? 'Finisher sweepers (Zombie, Cacho, Mechalex) that immediately clean up damaged targets.'
        : 'Atacantes de remate (Zombie, Cacho, Mechalex) que liquidan de inmediato a los rivales debilitados por el velocista.';
      items = isEn
        ? 'Pico Electrostático (paralyzes target on battle start), Gota peligrosa (poisons on start), Moco problemático (infects on start), or Zapapollos (evasion chance per turn).'
        : 'Pico Electrostático (paraliza al objetivo al empezar), Gota peligrosa (envenena de inicio), Moco problemático (infecta de entrada) o Zapapollos (probabilidad de esquivar por turno).';
      counter = isEn
        ? 'Bring a tank equipped with Picoteador dorado to redirect their opening hit, or use Descarga Masiva to paralyze and halve their speed.'
        : 'Llevar un tanque con Picoteador dorado para absorber su golpe inicial, o usar Descarga Masiva para paralizar y recortar su velocidad a la mitad.';
    }
    // 8. Artillero de Proyectiles (Ranged Artillery)
    else if (act === 2) {
      roleTitle = isEn ? 'Ranged Artillery' : 'Artillero de Proyectiles';
      role = isEn ? 'Ranged Artillery (Distance Striker)' : 'Artillero de Proyectiles (Ataque a Distancia)';
      duo = isEn
        ? 'Position 2 (Backline). Launches ranged projectiles that pressure rivals from a safe distance without exposing itself directly.'
        : 'Posición 2 (Retaguardia). Lanza proyectiles a distancia que desgastan a los rivales sin exponerse de frente al combate directo.';
      allies = isEn
        ? 'Defensive frontline tanks with Picoteador dorado or state inflicters that keep rivals locked down.'
        : 'Tanques de primera línea con Picoteador dorado o compañeros que apliquen estados para dejar al rival a tiro.';
      items = isEn
        ? 'Impulso Balístico (boosts damage when firing missiles), Primer huevo / Primer bomba (early projectile burst), or Mirador dorado (boosts and heals on the first hit).'
        : 'Impulso Balístico (aumenta el daño al disparar proyectiles), Primer huevo o Primer bomba (proyectil inicial extra) o Mirador dorado (+25% de daño y curación al primer golpe).';
      counter = isEn
        ? 'Equip Pico blindado to take 66% less damage from projectiles/bombs, or flank them quickly with a fast speedster.'
        : 'Equipar Pico blindado (reduce el daño recibido por bombas y proyectiles un 66%) o atacarlo velozmente antes de que dispare.';
    }
    // 9. Batería de Habilidades (Power Caster)
    else if (p >= 50 || turns <= 2) {
      roleTitle = isEn ? 'Skill Battery' : 'Batería de Habilidades';
      role = isEn ? 'Skill Battery (Power Caster)' : 'Batería de Habilidades (Caster de Poder)';
      duo = isEn
        ? `Position 2 (Backline). Generates power rapidly (every ~${turns} ${turns === 1 ? 'turn' : 'turns'}), triggering special active abilities repeatedly.`
        : `Posición 2 (Retaguardia). Genera energía a gran velocidad (cada ~${turns} ${turns === 1 ? 'turno' : 'turnos'}), desatando su habilidad especial continuamente.`;
      allies = isEn
        ? 'Shielding tanks with Picoteador dorado (Pastank, Boomy, Garry) that buy the few turns needed to charge.'
        : 'Tanques con Picoteador dorado (Pastank, Boomy, Garry) que le garantizan los turnos necesarios para activar su poder.';
      items = isEn
        ? 'Palo de raíz (starts combat with full 100% power and +50 max power for immediate Turn 1 activation), Arena milagrosa (+5 power on hit), or Páginas del fénix.'
        : 'Palo de raíz (empieza con poder al 100% y +50 de poder máx para usar su habilidad en turno 1), Arena milagrosa (+5 de poder por golpe) o Páginas del fénix.';
      counter = isEn
        ? 'Equip Pergamino del silencio to silence them at combat start and lock their power, or eliminate them before their cycle completes.'
        : 'Equipar Pergamino del silencio para silenciarlo de inicio y bloquear su poder, o noquearlo rápido antes de su primer ciclo de energía.';
    }
    // 10. Atacante Pesado (Heavy Hitter)
    else if (d >= 70) {
      roleTitle = isEn ? 'Heavy Hitter' : 'Atacante Pesado';
      role = isEn ? 'Heavy Hitter (Raw Power)' : 'Atacante Pesado (Fuerza Pura)';
      duo = isEn
        ? 'Position 2 (Backline). Raw destructive impact that chips down enemy health bars with each physical hit.'
        : 'Posición 2 (Retaguardia). Pega con fuerza descomunal, quebrando las barras de salud de los rivales con cada impacto directo.';
      allies = isEn
        ? 'Paralyzers (Polliwatt, Pico Electrostático) or defensive tanks holding Picoteador dorado.'
        : 'Compañeros con parálisis (Polliwatt o Pico Electrostático) o protectores con Picoteador dorado que le compren turnos de ataque.';
      items = isEn
        ? 'Fragmento prohibido (+35% damage, +10% speed if not relying on power), Pico vampiro (lifesteal), Ira (2 bonus attacks at start), or Mirador dorado.'
        : 'Fragmento prohibido (+35% de daño y +10% de velocidad si no depende de su poder), Pico vampiro (robo de vida con su gran daño), Ira (2 ataques extra iniciales) o Mirador dorado.';
      counter = isEn
        ? 'Neutralize them with freeze (Pico helado / Ojo helado) or paralysis to forfeit their attack turns, or outspeed them with faster strikers.'
        : 'Neutralizarlo con congelamiento (Pico helado u Ojo helado) o parálisis para que pierda turnos de ataque, o atacarlo antes con pollos veloces.';
    }
    // 11. Todoterreno Equilibrado (All-Rounder)
    else {
      roleTitle = isEn ? 'All-Rounder' : 'Todoterreno';
      role = isEn ? 'Balanced All-Rounder' : 'Todoterreno Equilibrado';
      duo = isEn
        ? 'Flexible position (1 or 2). Well-rounded baseline stats that allow them to adapt as a secondary anchor, finisher, or utility fighter.'
        : 'Posición flexible (1 o 2). Distribución equilibrada que le permite adaptarse como apoyo secundario, rematador o receptor de golpes según los ítems que le equipes.';
      allies = isEn
        ? 'Pairs well with either fragile specialists (Chica, Mosca) to balance the team, or frontline tanks to provide consistent chip damage.'
        : 'Combina tanto con atacantes frágiles (Chica, Mosca) para equilibrar la composición como con tanques puros para sumar daño constante.';
      items = isEn
        ? 'Triflor (+5% damage, armor, and speed), Roca atómica (+20% damage or armor on combat start), or Circuito Vital (emergency 700 HP heal).'
        : 'Triflor (+5% a daño, armadura y velocidad), Roca atómica (+20% de daño o armadura al inicio) o Circuito Vital (curación de 700 de vida en apuros).';
      counter = isEn
        ? 'Inspect how the rival trained their stats with seeds, and use status ailments or focused targeting to break their balance.'
        : 'Observar hacia qué estadística lo entrenó el rival con las semillas y castigarlo con estados alterados o juego focalizado con la IA.';
    }

    return { role, roleTitle, duo, allies, items, counter, turns };
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
              <div style="font-size:12px;margin-top:4px;">${getLocalized(c.evolution.desc_es)}</div>
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
          <h2 class="article-h2">⚡ Habilidades de Combate</h2>
          <div class="article-box">
            <h4>${str('passiveSkill')} (#${c.passive_id + 1})</h4>
            <p style="font-size:13px;line-height:1.5;">${passiveObj ? getLocalized(passiveObj.description) : '-'}</p>
            <div style="margin-top:8px;">
              <a href="#passives" style="font-size:12px;">→ Ver todos los pollos con esta pasiva</a>
            </div>
          </div>

          <div class="article-box">
            <h4>✨ ${str('activePower')} (#${c.power_id + 1})</h4>
            <p style="font-size:13px;line-height:1.5;">${powerObj ? getLocalized(powerObj.description) : '-'}</p>
            <div style="font-size:12px;color:var(--wiki-text-muted);margin-top:6px;">
              <strong>${str('powerCost')}:</strong> ${c.power_max} puntos de energía.
            </div>
            <div style="margin-top:8px;">
              <a href="#powers" style="font-size:12px;">→ Ver todos los pollos con este poder</a>
            </div>
          </div>

          <div class="article-box">
            <h4>🔮 ${str('hiddenPower')} ${c.hidden_power_id !== null && c.hidden_power_id !== undefined && c.hidden_power_id >= 0 ? `(#${c.hidden_power_id + 1})` : ''}</h4>
            ${hiddenPowerObj ? `
              <p style="font-size:13px;line-height:1.5;">${getLocalized(hiddenPowerObj.description)}</p>
              <div style="font-size:12px;color:var(--wiki-text-muted);margin-top:6px;">
                <strong>${str('powerCost')}:</strong> ${hiddenPowerObj.cost} puntos de energía.
              </div>
              <div style="margin-top:8px;">
                <a href="#powers" style="font-size:12px;">→ Ver poderes de combate</a>
              </div>
            ` : `
              <p style="font-size:13px;line-height:1.5;color:var(--wiki-text-muted);">${str('noHiddenPower')}</p>
            `}
          </div>

          
          <!-- Guía Táctica 2vs2 -->
          ${(() => {
            const tactical = getChickenTacticalAnalysis(c, currentLang);
            return `
              <h2 class="article-h2">🎯 ${currentLang === 'es' ? 'Guía Táctica de Combate 2vs2' : '2vs2 Combat Tactical Guide'}</h2>
              <div class="article-box" style="border-left: 4px solid #f59e0b; background: var(--wiki-bg-card, var(--wiki-bg));">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
                  <div>
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--wiki-text-muted);display:block;">
                      ${currentLang === 'es' ? 'Arquetipo Táctico' : 'Tactical Archetype'}
                    </span>
                    <span style="font-size:15px;font-weight:700;color:#f59e0b;">${tactical.role}</span>
                  </div>
                  <div style="text-align:right;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--wiki-text-muted);display:block;">
                      ${currentLang === 'es' ? 'Ciclo de Poder' : 'Power Cycle'}
                    </span>
                    <span style="font-size:13px;font-weight:600;font-family:monospace;color:var(--wiki-accent);">
                      ~${tactical.turns} ${tactical.turns === 1 ? (currentLang === 'es' ? 'turno' : 'turn') : (currentLang === 'es' ? 'turnos' : 'turns')}
                    </span>
                  </div>
                </div>

                <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;line-height:1.5;">
                  <div>
                    <strong style="color:#d97706;display:block;margin-bottom:2px;">
                      ⚔️ ${currentLang === 'es' ? 'Función en el Dúo 2vs2:' : '2vs2 Duo Role:'}
                    </strong>
                    <p style="margin:0;">${tactical.duo}</p>
                  </div>

                  <div style="border-top:1px solid var(--wiki-border-light);padding-top:8px;">
                    <strong style="color:#059669;display:block;margin-bottom:2px;">
                      🤝 ${currentLang === 'es' ? 'Compañeros Recomendados:' : 'Recommended Partners:'}
                    </strong>
                    <p style="margin:0;color:var(--wiki-text-muted);">${tactical.allies}</p>
                  </div>

                  <div style="border-top:1px solid var(--wiki-border-light);padding-top:8px;">
                    <strong style="color:#2563eb;display:block;margin-bottom:2px;">
                      🎒 ${currentLang === 'es' ? 'Ítems Clave en 2vs2:' : 'Key 2vs2 Items:'}
                    </strong>
                    <p style="margin:0;color:var(--wiki-text-muted);">${tactical.items}</p>
                  </div>

                  <div style="border-top:1px solid var(--wiki-border-light);padding-top:8px;">
                    <strong style="color:#e11d48;display:block;margin-bottom:2px;">
                      🔴 ${currentLang === 'es' ? 'Cómo Contrarrestarlo (Si es tu Rival):' : 'How to Counter (If Enemy):'}
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
                    <a href="#chicken-${c.evolution.target_id}"><strong>${c.evolution.target_name} (#${String(c.evolution.target_id + 1).padStart(3, '0')})</strong></a>
                  </div>
                ` : `
                  <div style="display:flex;align-items:center;gap:8px;cursor:pointer;" onclick="location.hash='chicken-${c.evolution.source_id}'">
                    <img class="pixelated" src="images/chickens/${c.evolution.source_id}.png" width="40" height="40" alt="">
                    <a href="#chicken-${c.evolution.source_id}"><strong>${c.evolution.source_name} (#${String(c.evolution.source_id + 1).padStart(3, '0')})</strong></a>
                  </div>
                  <span style="font-size:18px;">➔</span>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <img class="pixelated" src="${c.sprite}" width="40" height="40" alt="">
                    <strong>${getLocalized(c.name)}</strong>
                  </div>
                `}
              </div>
              <p style="font-size:12px;margin-top:8px;color:var(--wiki-text-muted);">${currentLang === 'es' ? c.evolution.desc_es : c.evolution.desc_en}</p>
            </div>
          ` : ''}

          <!-- Habitats -->
          <h2 class="article-h2">🗺️ ${str('habitatsHeader')}</h2>
          <div class="article-box">
            <div style="margin-bottom:12px;">
              <strong>${str('wildCombats')}:</strong>
              ${c.habitats.wild.length > 0 ? c.habitats.wild.map(z => `<span class="badge badge-zone" style="margin-left:6px;">${z}</span>`).join('') : `<span style="color:var(--wiki-text-muted);margin-left:6px;">${str('noWild')}</span>`}
            </div>
            <div>
              <strong>${str('eggPools')}:</strong>
              ${c.habitats.eggs.length > 0 ? c.habitats.eggs.map(z => `<span class="badge badge-zone" style="margin-left:6px;">${z}</span>`).join('') : `<span style="color:var(--wiki-text-muted);margin-left:6px;">${str('noEgg')}</span>`}
            </div>
          </div>
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
            <div class="infobox-label">Hábitat Salvaje</div>
            <div class="infobox-value" style="font-size:11px;">
              ${c.habitats.wild.length > 0 ? c.habitats.wild.join(', ') : str('noWild')}
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
            ${list.map(it => `
              <tr>
                <td style="font-weight:700;color:var(--wiki-text-muted);">#${String(it.id + 1).padStart(2, '0')}</td>
                <td><img class="pixelated" src="${it.sprite}" width="32" height="32" alt=""></td>
                <td style="font-weight:700;white-space:nowrap;">${getLocalized(it.name)}</td>
                <td><span class="badge ${it.consumable ? 'badge-evo' : 'badge-zone'}">${it.consumable ? str('consumable') : str('equipable')}</span></td>
                <td style="font-weight:600;color:var(--wiki-gold);">${it.shop_price} 💰</td>
                <td style="color:var(--wiki-text-muted);">${it.price} 💰</td>
                <td style="font-size:11px;">${it.found_in_zones.length > 0 ? it.found_in_zones.join(', ') : '-'}</td>
                <td style="font-size:12px;line-height:1.4;">${getLocalized(it.description)}</td>
              </tr>
            `).join('')}
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
          const sName = currentLang === 'es' ? s.name_es : s.name_en;
          const sDesc = currentLang === 'es' ? s.desc_es : s.desc_en;
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
    const tips = {
      0: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Curado por <em>Miracle Drop (#48)</em> o <em>Magic Potion (#35)</em>. Pollier y armaduras altas sufren menos por turno. La pasiva de Rufux y otros pollos ganan vida al golpear enemigos envenenados.",
        en: "💡 <strong>Counters & Synergies:</strong> Cleansed by <em>Miracle Drop (#48)</em> or <em>Magic Potion (#35)</em>. High defense and regen help sustain through it. Several chickens heal when attacking poisoned foes."
      },
      1: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Se activa tanto al atacar como al recibir daño. Curado por <em>Flame Fizz (#16)</em>. El objeto <em>Sizzle Heal (#11)</em> convierte el daño de quemadura en curación!",
        en: "💡 <strong>Counters & Synergies:</strong> Triggers both when attacking and when struck. Cleansed by <em>Flame Fizz (#16)</em>. Equipping <em>Sizzle Heal (#11)</em> reverses burn damage into healing!"
      },
      2: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Impide que el pollo actúe mientras está congelado. Curado por <em>Hot Tea (#41)</em>. Ciertos pollos helados causan daño extra a objetivos congelados (Critical Link #58).",
        en: "💡 <strong>Counters & Synergies:</strong> Prevents the frozen chicken from taking actions. Cleansed by <em>Hot Tea (#41)</em>. Attacking frozen targets can trigger critical bonus damage."
      },
      3: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Reduce el daño, velocidad y armadura a la mitad (50%). Curado por <em>Neural Reboot (#55)</em>. Ideal para incapacitar enemigos rápidos o con alta defensa.",
        en: "💡 <strong>Counters & Synergies:</strong> Halves (50%) damage, speed, and armor. Cleansed by <em>Neural Reboot (#55)</em>. Excellent for crippling high-speed or heavily armored foes."
      },
      4: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Bloquea cualquier curación y causa 10% de daño si la criatura intenta curarse. Curado por <em>Magic Potion (#35)</em>. Letal contra equipos basados en pociones y regeneración.",
        en: "💡 <strong>Counters & Synergies:</strong> Blocks all healing and inflicts 10% damage if the afflicted unit attempts to heal. Cleansed by <em>Magic Potion (#35)</em>."
      },
      5: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Impide acumular energía para desatar poderes especiales. Curado por <em>Big Beak (#18)</em>. Muy eficaz contra jefes con poderes devastadores.",
        en: "💡 <strong>Counters & Synergies:</strong> Blocks charging power energy. Cleansed by <em>Big Beak (#18)</em>. Strong against boss encounters with devastating powers."
      },
      6: {
        es: "💡 <strong>Contramedidas e Interacciones:</strong> Causa daño al portador y al mismo tiempo cura a sus enemigos un 5% de su vida máxima al empezar una acción. Curado por <em>Cure All (#27)</em>.",
        en: "💡 <strong>Counters & Synergies:</strong> Drains the victim's life and simultaneously heals the opposing team on each action. Cleansed by <em>Cure All (#27)</em>."
      }
    };
    return tips[stateId] ? tips[stateId][lang] : "";
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
                <div class="zone-banner-title">Zona ${z.id + 1}: ${zName}</div>
              </div>
              <div class="zone-body">
                <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:13px;margin-bottom:16px;color:var(--wiki-text-muted);">
                  <div><strong>Nivel recomendado:</strong> ${z.level_range[0]} - ${z.level_range[1]}</div>
                  <div><strong>Costo de viaje:</strong> ${z.travel_price} 💰</div>
                </div>

                <!-- Wild Combats -->
                <h4 style="font-size:13px;margin-bottom:6px;">⚔️ ${str('wildCombats')} (${z.combat_pool.length} especies)</h4>
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
                <h4 style="font-size:13px;margin-bottom:6px;">🥚 ${str('eggPools')} (${z.egg_pool.length} especies)</h4>
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
                <h4 style="font-size:13px;margin-bottom:6px;">🛒 Tienda de la Zona</h4>
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
                      <div><strong>Rondas:</strong> ${t.rounds_count}</div>
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
              <th style="width:60px;">Icono</th>
              <th>Título</th>
              <th>Requisito de Desbloqueo</th>
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
