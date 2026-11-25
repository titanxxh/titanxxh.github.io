// Calls from the Wide Pasture Gate run at f037ce5cb, in recorded order.
const calls = [
  ["read_reference", "docs/CARD_AUTHORING.md", 1, 240],
  ["read_reference", "docs/CARD_AUTHORING.md", 1, 160],
  ["read_reference", "docs/CARD_AUTHORING.md", 119, 160],
  ["search_references", "A012_DrinkingTrough"],
  ["search_references", "computePastureCapacityModifiers"],
  ["search_references", "onBuy fence"],
  ["search_references", "B002_MiniPasture"],
  ["search_references", "card-test-runtime"],
  ["read_reference", "shared/cards/A/A012_DrinkingTrough.ts", 1, 160],
  ["read_reference", "shared/cards/B/B002_MiniPasture.ts", 1, 160],
  ["read_reference", "server/__tests__/A012_DrinkingTrough-session.test.ts", 1, 160],
  ["read_reference", "client/local-sandbox/card-test-runtime.ts", 1, 160],
  ["read_reference", "shared/cards/card-effects.ts", 1, 160],
  ["read_reference", "shared/cards/listener-contract.ts", 1, 160],
  ["search_references", "optional: true fence"],
  ["search_references", "PastureCapacityModifier"],
  ["search_references", "CARD_TEST_TEMPLATE"],
  ["search_references", "devPlayCard"],
  ["read_reference", "docs/CARD_TEST_TEMPLATE.md", 1, 160],
  ["read_reference", "shared/domain/pasture.ts", 1, 160],
  ["read_reference", "server/__tests__/B002_MiniPasture-session.test.ts", 1, 160],
  ["read_reference", "shared/cards/C/C056_FeedFence.ts", 1, 160],
  ["read_reference", "shared/cards/card-source.ts", 1, 160],
  ["read_reference", "docs/CARD_AUTHORING.md", 256, 79],
  ["read_reference", "shared/cards/C/C149_ResourceRecycler.ts", 1, 160],
  ["read_reference", "server/__tests__/B002_MiniPasture-parity-session.test.ts", 1, 150],
  ["read_reference", "shared/cards/E/E149_MidnightFencer.ts", 1, 100],
  ["read_reference", "shared/contract/cards.ts", 1, 140],
  ["read_reference", "client/local-sandbox/__tests__/card-test-runtime.test.ts", 1, 150],
  ["report_feasibility", "feasible"],
  ["write_artifacts", "source, tests"],
  ["run_tests", "{}"],
  ["write_artifacts", "source, tests"],
  ["run_tests", "{}"],
];

const frame = window.frameElement;
const english = (frame?.lang || new URLSearchParams(location.search).get('lang') || 'zh').startsWith('en');
const t = (zh, en) => english ? en : zh;
const $ = (selector) => document.querySelector(selector);
document.documentElement.lang = english ? 'en' : 'zh-CN';

const steps = [
  {
    title: t('给 Agent 一张新牌', 'Give the agent a card'),
    flow: [t('作者', 'Author'), t('宽栏门 · 1 黏土', 'Wide Pasture Gate · 1 clay'), 'gpt-6.1-terra', t('读到两条效果', 'Two effects to implement')],
    story: t('打出时可以照价围栏。往后，两格以上的牧场算完马厩再多养一只。作者给了牌文，没有替它挑范例牌。', 'Offer fencing at the usual price when played. After accounting for stables, pastures of two or more spaces hold one extra animal. The author supplied the text and left the agent to find its own examples.'),
  },
  {
    title: t('先翻写卡指南', 'Open the shared guide'),
    flow: [t('工坊系统提示词', 'Workshop system prompt'), 'docs/CARD_AUTHORING.md', t('牌文索引', 'Card text patterns'), t('打出时 / 持续加成', 'When played / persistent modifiers')],
    story: t('前三次都是请求读取同一本指南。指南按牌面措辞列出了机制、范例牌和对局测试，Agent 可以从这里往下找。', 'The first three calls all requested parts of the guide. It indexes mechanisms, cards and game tests by the wording on the card.'),
    range: [1, 3], highlights: [2, 3],
  },
  {
    title: t('翻出两张能借鉴的牌', 'Find two cards to borrow from'),
    flow: [t('搜索源码', 'Search the repository'), t('围栏与牧场容量', 'Fencing and capacity'), t('原生牌', 'Native cards'), t('饮水槽 / 迷你圈地', 'Drinking Trough / Mini Pasture')],
    story: t('它先搜容量接口和围栏，再读 A012、B002 两张牌及饮水槽的对局测试。B002 能在打出时发起围栏行动，不过它给的是免费围栏。', 'It searched for capacity and fencing, then read A012, B002 and the Drinking Trough game test. B002 offered fencing when played, but its fences were free.'),
    range: [4, 14], highlights: [6, 9, 10, 11],
  },
  {
    title: t('马厩先翻倍，还是先加一？', 'Does the stable double the extra space?'),
    flow: [t('引擎', 'Engine'), 'shared/domain/pasture.ts', t('两格 + 一个马厩', 'Two spaces + one stable'), '(4 × 2) + 1 = 9'],
    story: t('它读牧场的容量计算，再查围栏范例的测试。引擎先算马厩，随后应用卡牌加成。宽栏门只要筛出至少两格的牧场，给算好的容量加一。', 'It read the pasture calculation and checked the fencing tests. The engine applies the stable multiplier first. The Gate can filter for pastures of at least two spaces and add one to the result.'),
    range: [15, 29], highlights: [16, 20, 21],
  },
  {
    title: t('交代为什么能写', 'Record why the card is feasible'),
    flow: [t('Agent 的依据', 'Agent’s evidence'), t('围栏行动 + 容量修正', 'Fence action + capacity modifier'), t('可行性结论', 'Verdict'), 'feasible'],
    story: t('它在报告里列了六处依据。围栏沿用原价，只需让玩家选择要不要围。牧场复用引擎已有的加法，两句都能收在宽栏门自己的文件里。', 'The report cited six references. The normal fence action already charged for wood and could be offered as a choice. The engine already supported additive capacity. Both effects fit in the Gate’s own file.'),
    range: [30, 30], highlights: [30],
  },
  {
    title: t('写下规则，跑第一轮测试', 'Write the card and run four tests'),
    flow: [t('Agent 写入', 'Agent writes'), t('原生卡牌 + 4 条测试', 'Native card + 4 tests'), t('工坊工具', 'Workshop tool'), 'run_tests'],
    story: t('第一版就试了接受或跳过围栏、两格牧场的马厩，还有一格牧场或没打出牌时容量会不会跟着变。源码和测试是一起交给工坊的。', 'The first four tests covered accepting or skipping fencing, the stable calculation, and pastures that must stay unchanged because they have one space or their owner never played the Gate. The agent submitted the source and tests together.'),
    excerpt: 'appliesTo: ({ pasture }) => pasture.size >= 2,\napply: capacity => capacity + 1,',
    range: [31, 32], highlights: [31, 32],
  },
  {
    title: t('再试两笔账', 'Check two more payments'),
    flow: [t('Agent 补写', 'Agent revises'), t('木材不足 / 打牌费用', 'Too little wood / card cost'), t('本机验收入口', 'Local generation run'), t('6 条测试通过', '6 tests passed')],
    story: t('第二次写入保留了卡牌源码，多加两条测试。手里只有 3 木材，围 4 段必须失败，木材也得留在手里。正常打出宽栏门，则要真扣掉 1 黏土。它重新跑了测试。', 'The second write kept the card source and added two tests. Trying to build four fences with three wood must leave the wood unspent. Buying the Gate normally must deduct one clay. The agent ran the suite again.'),
    range: [33, 34], highlights: [33, 34],
  },
  {
    title: t('轮到我上桌试牌', 'My turn to play the card'),
    flow: [t('网页沙盒', 'Browser sandbox'), t('6 木材围两格', 'Fence 2 spaces for 6 wood'), t('羊市场', 'Sheep Market'), t('5 只羊，全留下', 'All 5 sheep stay')],
    story: t('到第 34 次调用，Agent 的生成工作结束。随后这六条测试也在 Chromium Worker 里通过了。再往下是我在网页里围栏、安置五只羊时截的图。', 'Generation ended at call 34. The same six tests then passed in a Chromium Worker. The screenshots below show what happened when I built the fences and placed five sheep in the web sandbox.'),
  },
];

const referenceRoot = 'https://github.com/titanxxh/open-agricola/blob/f037ce5cb738739ce3c631f5a1200c5de6aed4f0/';
function makeCall(number) {
  const [tool, arg, startLine, lineCount] = calls[number - 1];
  const item = document.createElement('li');
  const index = document.createElement('span');
  index.className = 'number';
  index.textContent = String(number).padStart(2, '0');
  const content = document.createElement('span');
  const name = document.createElement('code');
  name.textContent = tool;
  const argument = document.createElement(tool === 'read_reference' ? 'a' : 'span');
  argument.className = 'arg';
  argument.textContent = arg;
  if (tool === 'read_reference') {
    argument.href = referenceRoot + arg + '#L' + startLine;
    argument.target = '_blank';
    argument.rel = 'noopener';
    argument.append(' · L' + startLine + ' (+' + lineCount + ')');
  }
  content.append(name, ' ', argument);
  item.append(index, content);
  return item;
}

const allCalls = $('#all-calls');
const track = $('.track');
for (let i = 0; i < calls.length; i++) allCalls.append(makeCall(i + 1));
for (const step of steps) track.append(document.createElement('span'));
$('#card-name').textContent = t('宽栏门 · 工坊生成记录', 'Wide Pasture Gate · Workshop run');
document.title = $('#card-name').textContent;
$('summary').textContent = t('查看全部 34 次工具调用', 'View all 34 tool calls');
$('#previous').textContent = t('← 上一步', '← Previous');
$('#next').textContent = t('下一步 →', 'Next →');

let current = 0;
function show(index, animate = true) {
  if (index < 0 || index >= steps.length) return;
  current = index;
  const step = steps[index];
  $('h1').textContent = step.title;
  $('#counter').textContent = (index + 1) + ' / ' + steps.length;
  ['#from-role', '#from', '#to-role', '#to'].forEach((id, i) => $(id).textContent = step.flow[i]);
  $('#story').textContent = step.story;
  $('#excerpt').hidden = !step.excerpt;
  $('#excerpt code').textContent = step.excerpt || '';
  $('#highlights').replaceChildren(...(step.highlights || []).map(makeCall));
  for (const [i, marker] of Array.from(track.children).entries()) {
    marker.className = i === index ? 'here' : i < index ? 'visited' : '';
  }
  for (const [i, item] of Array.from(allCalls.children).entries()) {
    item.classList.toggle('active', !!step.range && i + 1 >= step.range[0] && i + 1 <= step.range[1]);
  }
  $('#previous').disabled = index === 0;
  $('#next').disabled = index === steps.length - 1;
  const slide = $('#slide');
  slide.classList.remove('playing');
  if (animate) {
    void slide.offsetWidth;
    slide.classList.add('playing');
  }
}
$('#previous').onclick = () => show(current - 1);
$('#next').onclick = () => show(current + 1);
document.addEventListener('keydown', (event) => {
  if (event.altKey || event.metaKey || event.ctrlKey) return;
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  show(current + (event.key === 'ArrowRight' ? 1 : -1));
});
show(0, false);

if (frame) {
  const fit = () => { frame.style.height = Math.ceil($('main').getBoundingClientRect().height) + 'px'; };
  fit();
  new ResizeObserver(fit).observe($('main'));
}
