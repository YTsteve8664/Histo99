(() => {
  const info = window.INFO || {};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  const words = {
    ar: {
      brand:'ملفي الشخصي', editNote:'تُعدّل المعلومات من ملف info.js', eyebrow:'مساحة تعريفية شخصية', greeting:'أهلًا، أنا ', tagline:'مساحتي على الإنترنت، ومكان أجمع فيه معلوماتي وسيرفراتي وحساباتي.', age:'العمر', years:' سنة', countryLabel:'البلد', countryPlaceholder:'أضف بلدك', artCaption:'أهلًا بك في عالمي', aboutEyebrow:'نبذة قصيرة', aboutTitle:'من أنا؟', bioPlaceholder:'اكتب نبذة قصيرة عنك في ملف info.js.', serversEyebrow:'أماكن أشارك فيها', serversTitle:'السيرفرات', serversEmpty:'لا توجد سيرفرات مضافة حتى الآن.', socialEyebrow:'تابعني', socialTitle:'حساباتي', socialsEmpty:'لا توجد حسابات مضافة حتى الآن.', footer:'صُنع ليعبّر عنك كما تريد.', footerEnd:'صفحتك، بطريقتك', namePlaceholder:'اسمك هنا', serverTypes:{discord:'ديسكورد',minecraft:'ماينكرافت',bot:'بوت',other:'سيرفر آخر'}, otherAccount:'حساب آخر', discordLink:'ديسكورد'
    },
    en: {
      brand:'My Profile', editNote:'Edit your details in info.js', eyebrow:'PERSONAL PROFILE', greeting:"Hello, I'm ", tagline:'My corner of the internet, with my details, servers, and social accounts.', age:'AGE', years:' years old', countryLabel:'COUNTRY', countryPlaceholder:'Add your country', artCaption:'Welcome to my world', aboutEyebrow:'A LITTLE ABOUT ME', aboutTitle:'Who am I?', bioPlaceholder:'Write a short introduction in info.js.', serversEyebrow:'WHERE I TAKE PART', serversTitle:'My Servers', serversEmpty:'No servers added yet.', socialEyebrow:'FIND ME ONLINE', socialTitle:'Social Accounts', socialsEmpty:'No social accounts added yet.', footer:'Made to feel like you.', footerEnd:'Your page, your way', namePlaceholder:'Your name', serverTypes:{discord:'Discord',minecraft:'Minecraft',bot:'Bot',other:'Other server'}, otherAccount:'Other account', discordLink:'Discord'
    }
  };
  let language = localStorage.getItem('profile-language') === 'en' ? 'en' : 'ar';
  const profile = info.profile || {};
  const localized = (item, key, lang) => (lang === 'en' && (item?.en?.[key] || item?.[`${key}En`])) || item?.[key] || '';

  function render(lang) {
    const t = words[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' ? 'ملفي التعريفي' : 'My Profile';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });

    document.querySelectorAll('[data-value]').forEach(el => {
      const key = el.dataset.value;
      let value = key === 'initial' ? (localized(profile, 'name', lang).trim().charAt(0) || (lang === 'ar' ? 'م' : 'M')) : localized(profile, key, lang);
      if (!value) value = ({ name:t.namePlaceholder, age:'—', country:t.countryPlaceholder, bio:t.bioPlaceholder })[key] || '';
      el.textContent = value;
    });

    const types = { discord:['ديسكورد','◉','Discord'], minecraft:['ماينكرافت','▦','Minecraft'], bot:['بوت','⌘','Bot'], other:['سيرفر آخر','⌁',t.serverTypes.other] };
    const servers = Array.isArray(info.servers) ? info.servers : [];
    document.querySelector('#servers').innerHTML = servers.map(server => {
      const type = types[server.type] || types.other;
      let discordLink = '';
      try { const url = new URL(server.discord); if (['http:', 'https:'].includes(url.protocol)) discordLink = url.href; } catch {}
      return `<article class="server-card"><div class="card-top"><span class="server-icon ${server.type === 'minecraft' ? 'minecraft' : server.type === 'bot' ? 'bot' : ''}">${type[1]}</span><div><div class="server-title">${esc(localized(server, 'title', lang) || type[lang === 'ar' ? 0 : 2])}</div><div class="server-type">${type[lang === 'ar' ? 0 : 2]}</div></div></div>${localized(server, 'description', lang) ? `<p class="server-desc">${esc(localized(server, 'description', lang))}</p>` : ''}${server.ip || server.port || discordLink ? `<div class="server-meta">${server.ip ? `<span>IP <b>${esc(server.ip)}</b></span>` : ''}${server.port ? `<span>PORT <b>${esc(server.port)}</b></span>` : ''}${discordLink ? `<a href="${esc(discordLink)}" target="_blank" rel="noopener noreferrer">${t.discordLink}</a>` : ''}</div>` : ''}</article>`;
    }).join('');
    document.querySelector('#serversEmpty').hidden = servers.length > 0;

    const platforms = { youtube:['YouTube','▶'], tiktok:['TikTok','♪'], instagram:['Instagram','◎'], other:[t.otherAccount,'↗'] };
    const socials = Array.isArray(info.socials) ? info.socials : [];
    document.querySelector('#socials').innerHTML = socials.map(account => {
      const platform = platforms[account.platform] || platforms.other;
      let link = '';
      try { const url = new URL(account.url); if (['http:', 'https:'].includes(url.protocol)) link = url.href; } catch {}
      const title = lang === 'en' ? (account.titleEn || account.title || platform[0]) : (account.title || platform[0]);
      const handle = lang === 'en' ? (account.handleEn || account.handle || '') : (account.handle || '');
      const content = `<span class="social-icon">${platform[1]}</span><span><span class="social-name">${esc(title)}</span><span class="social-handle">${esc(handle)}</span></span>`;
      return `<div class="social-card">${link ? `<a class="social-link" href="${esc(link)}" target="_blank" rel="noopener noreferrer">${content}</a>` : `<div class="social-link">${content}</div>`}</div>`;
    }).join('');
    document.querySelector('#socialsEmpty').hidden = socials.length > 0;
    const button = document.querySelector('#languageToggle');
    button.textContent = lang === 'ar' ? 'English' : 'العربية';
    button.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التغيير إلى العربية');
  }

  document.querySelector('#languageToggle').addEventListener('click', () => {
    language = language === 'ar' ? 'en' : 'ar';
    localStorage.setItem('profile-language', language);
    render(language);
  });
  render(language);
})();
