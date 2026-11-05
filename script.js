(() => {
  const info = window.INFO || {};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  const profile = info.profile || {};

  document.querySelectorAll('[data-value]').forEach(el => {
    const key = el.dataset.value;
    let value = profile[key] || '';
    if (key === 'initial') value = (profile.name || '').trim().charAt(0) || 'م';
    if (!value) value = ({ name:'اسمك هنا', age:'—', country:'أضف بلدك', bio:'اكتب نبذة قصيرة عنك في ملف info.js.' })[key] || '';
    el.textContent = value;
  });

  const types = { discord:['ديسكورد','◉',''], minecraft:['ماينكرافت','▦','minecraft'], bot:['بوت','⌘','bot'], other:['سيرفر آخر','⌁',''] };
  const servers = Array.isArray(info.servers) ? info.servers : [];
  document.querySelector('#servers').innerHTML = servers.map(server => {
    const type = types[server.type] || types.other;
    return `<article class="server-card"><div class="card-top"><span class="server-icon ${type[2]}">${type[1]}</span><div><div class="server-title">${esc(server.title || type[0])}</div><div class="server-type">${type[0]}</div></div></div>${server.description ? `<p class="server-desc">${esc(server.description)}</p>` : ''}${server.ip || server.port ? `<div class="server-meta">${server.ip ? `<span>IP <b>${esc(server.ip)}</b></span>` : ''}${server.port ? `<span>PORT <b>${esc(server.port)}</b></span>` : ''}</div>` : ''}</article>`;
  }).join('');
  document.querySelector('#serversEmpty').hidden = servers.length > 0;

  const platforms = { youtube:['YouTube','▶'], tiktok:['TikTok','♪'], instagram:['Instagram','◎'], other:['حساب آخر','↗'] };
  const socials = Array.isArray(info.socials) ? info.socials : [];
  document.querySelector('#socials').innerHTML = socials.map(account => {
    const platform = platforms[account.platform] || platforms.other;
    let link = '';
    try { const url = new URL(account.url); if (['http:', 'https:'].includes(url.protocol)) link = url.href; } catch {}
    const content = `<span class="social-icon">${platform[1]}</span><span><span class="social-name">${esc(account.title || platform[0])}</span><span class="social-handle">${esc(account.handle || '')}</span></span>`;
    return `<div class="social-card">${link ? `<a class="social-link" href="${esc(link)}" target="_blank" rel="noopener noreferrer">${content}</a>` : `<div class="social-link">${content}</div>`}</div>`;
  }).join('');
  document.querySelector('#socialsEmpty').hidden = socials.length > 0;
})();
