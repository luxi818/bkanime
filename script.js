(() => {
  'use strict';
  const categories = {
    anime: { title: '成人动漫', kicker: '从动画风格，到平台资料', description: '从动漫品牌到动画平台，沿着分类和词条，了解不同内容形态与平台信息。先读懂资料，再继续探索。', chips: ['动漫品牌', '平台类型', '相关专题'], link: 'https://chengrenbaike.com/dongman/', cta: '查看动漫词条', symbol: '漫', english: 'ANIME' },
    manga: { title: '成人漫画', kicker: '从一页画面，延伸更多线索', description: '想了解漫画品牌与平台？从分类索引出发，查看词条介绍和相关资料，找到下一步探索的方向。', chips: ['漫画品牌', '平台资料', '分类浏览'], link: 'https://chengrenbaike.com/manhua/', cta: '查看漫画词条', symbol: '画', english: 'MANGA' },
    drama: { title: '成人短剧', kicker: '从故事灵感，到品牌认知', description: '把短剧品牌与作品线索放在同一条探索路线上。查看平台介绍与关联资料，让好奇有一个清楚的起点。', chips: ['短剧品牌', '作品线索', '入口信息'], link: 'https://chengrenbaike.com/duanju/', cta: '查看短剧词条', symbol: '剧', english: 'DRAMA' },
    fiction: { title: '成人小说', kicker: '文字之外，也有值得了解的世界', description: '从小说相关品牌与平台词条开始，认识内容形态和资料线索。带着喜欢的方向，继续查阅与比较。', chips: ['小说平台', '品牌介绍', '资料线索'], link: 'https://chengrenbaike.com/xiaoshuo/', cta: '查看小说词条', symbol: '文', english: 'STORY' },
    ai: { title: 'AI 成人平台', kicker: '想象力，与新的创作方式相遇', description: '认识 AI 相关品牌和平台，查阅内容形态、用途与平台资料。也可以从官网专题了解不同类型的创作方向。', chips: ['AI 平台', '内容形态', '专题对比'], link: 'https://chengrenbaike.com/ai/', cta: '查看 AI 平台词条', symbol: 'AI', english: 'CREATE' }
  };
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panel = document.getElementById('category-panel');
  function activate(tab, focus = false) {
    const data = categories[tab.dataset.category];
    if (!data) return;
    tabs.forEach(item => { const selected = item === tab; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; });
    panel.setAttribute('aria-labelledby', tab.id);
    panel.dataset.theme = tab.dataset.category;
    document.getElementById('category-kicker').textContent = data.kicker;
    document.getElementById('category-title').textContent = data.title;
    document.getElementById('category-description').textContent = data.description;
    const chips = document.getElementById('category-chips');
    chips.replaceChildren(...data.chips.map(label => { const element = document.createElement('span'); element.textContent = label; return element; }));
    const link = document.getElementById('category-link');
    link.href = data.link;
    link.replaceChildren(document.createTextNode(data.cta + ' '));
    const star = document.createElement('span'); star.setAttribute('aria-hidden', 'true'); star.textContent = '✦'; link.append(star);
    panel.querySelector('.magic-book').textContent = data.symbol;
    panel.querySelector('.panel-decoration > span').textContent = data.english;
    if (focus) { tab.focus(); tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'auto' }); }
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next = null;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== null) { event.preventDefault(); activate(tabs[next], true); }
    });
  });
  const toast = document.querySelector('.toast');
  let toastTimer;
  function notify(message) { clearTimeout(toastTimer); toast.textContent = message; toast.classList.add('visible'); toastTimer = setTimeout(() => toast.classList.remove('visible'), 3600); }
  async function copyOfficial() {
    const url = 'https://chengrenbaike.com/';
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(url);
      else {
        const input = document.createElement('textarea'); input.value = url; input.style.cssText = 'position:fixed;left:-9999px;'; document.body.append(input); input.select();
        const copied = document.execCommand('copy'); input.remove(); if (!copied) throw new Error('Clipboard unavailable');
      }
      notify('官网地址已复制，记得收藏成人百科。');
    } catch (_) { notify('请手动复制官网地址：' + url); }
  }
  document.querySelectorAll('.copy-address').forEach(button => button.addEventListener('click', copyOfficial));
  const tablist = document.querySelector('[role="tablist"]');
  function updateTabDirection() { tablist.setAttribute('aria-orientation', window.innerWidth <= 800 ? 'horizontal' : 'vertical'); }
  updateTabDirection(); window.addEventListener('resize', updateTabDirection, { passive: true });
})();
