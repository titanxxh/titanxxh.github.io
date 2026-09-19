import{E as e,R as t,S as n,Z as r,_ as i,gt as a,vt as o}from"./modules/shiki-DaKlMP-N.js";import{J as s,q as c}from"./index-HQzb5jR0.js";import{t as l}from"./slidev/default-DSVqvgkJ.js";import{t as u}from"./StepDiagram-BtYdpT9t.js";var d=`<?xml version="1.0" encoding="UTF-8"?>
<svg class="listener-diagram" xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="t d">
  <title id="t">引擎定顺序，卡牌挂能力（横版）</title>
  <desc id="d">上方是引擎执行一个行动的固定阶段顺序，每个阶段下方标注可挂载什么 hook；下方每一行是一个卡牌文件，其 hook 芯片对齐到它所改写的阶段列。</desc>
  <defs>
    <marker id="flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#a4b8ad"/>
    </marker>
    <style>
      .listener-diagram text { font-family: "PingFang SC", "Noto Sans CJK SC", "Noto Sans SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; fill: #f0eee5; }
      .listener-diagram .title { font-size: 40px; font-weight: 700; }
      .listener-diagram .sub { font-size: 22px; fill: #a4b8ad; }
      .listener-diagram .h { font-size: 21px; font-weight: 700; fill: #a4b8ad; }
      .listener-diagram .phase { font-size: 26px; font-weight: 700; }
      .listener-diagram .cap { font-size: 18px; fill: #a4b8ad; }
      .listener-diagram .capHot { font-size: 18px; fill: #e8bb74; font-weight: 700; }
      .listener-diagram .mono { font-size: 20px; font-weight: 700; }
      .listener-diagram .monoS { font-family: "JetBrains Mono", Menlo, Consolas, monospace; font-size: 16px; fill: #a4b8ad; }
      .listener-diagram .cardname { font-size: 17px; fill: #a4b8ad; }
      .listener-diagram .chipT { font-size: 22px; font-weight: 700; fill: #8ab6a6; }
      .listener-diagram .chipD { font-size: 17px; fill: #f0eee5; }
      .listener-diagram .other { font-size: 21px; fill: #a4b8ad; }
      .listener-diagram .foot { font-size: 23px; font-weight: 700; }
      .listener-diagram .foot2 { font-size: 20px; fill: #a4b8ad; }
      .listener-diagram .pbox { fill: #1d2824; stroke: #a4b8ad; stroke-width: 2.5; }
      .listener-diagram .pcore { fill: #30291f; stroke: #e8bb74; stroke-width: 4; }
      .listener-diagram .rail { stroke: #a4b8ad; stroke-width: 3; fill: none; marker-end: url(#flow); }
      .listener-diagram .row { fill: #1d2824; stroke: #3d5148; stroke-width: 2; }
      .listener-diagram .rowOther { fill: none; stroke: #516559; stroke-width: 2; stroke-dasharray: 10 8; }
      .listener-diagram .chip { fill: #20362d; stroke: #8ab6a6; stroke-width: 2.5; }
      .listener-diagram .guide { stroke: #3d5148; stroke-width: 2; stroke-dasharray: 6 8; }
      .listener-diagram .coreband { fill: #e8bb74; fill-opacity: 0.07; }
    </style>
  </defs>

  <rect width="1600" height="900" fill="#151c1c"/>

  <text x="40" y="64" class="title">引擎定顺序，卡牌挂能力</text>
  <text x="40" y="98" class="sub">listener 是卡牌挂在特定阶段的处理逻辑；引擎按固定顺序执行，卡牌只挂需要的阶段</text>

  <!-- column centers: 422 / 674 / 926 / 1178 / 1430 (col width 252) -->
  <rect x="1052" y="126" width="252" height="662" rx="12" class="coreband step-group" style="opacity:var(--phase-4-opacity,1)"/>
  <line x1="422" y1="312" x2="422" y2="786" class="guide"/>
  <line x1="674" y1="312" x2="674" y2="786" class="guide"/>
  <line x1="926" y1="312" x2="926" y2="786" class="guide"/>
  <line x1="1430" y1="312" x2="1430" y2="786" class="guide"/>

  <text x="60" y="192" class="h">引擎：行动的阶段</text>
  <text x="60" y="222" class="h">（固定顺序 →）</text>

  <!-- phase boxes width 224 -->
  <g>
    <rect x="310" y="150" width="224" height="90" rx="12" class="pbox" style="stroke:var(--phase-1-stroke,#a4b8ad)"/>
    <text x="422" y="206" text-anchor="middle" class="phase">before</text>
    <path d="M536 195 L560 195" class="rail"/>

    <rect x="562" y="150" width="224" height="90" rx="12" class="pbox" style="stroke:var(--phase-1-stroke,#a4b8ad)"/>
    <text x="674" y="206" text-anchor="middle" class="phase">isDoable</text>
    <path d="M788 195 L812 195" class="rail"/>

    <rect x="814" y="150" width="224" height="90" rx="12" class="pbox" style="stroke:var(--phase-2-stroke,#a4b8ad)"/>
    <text x="926" y="206" text-anchor="middle" class="phase">computeCosts</text>
    <path d="M1040 195 L1064 195" class="rail"/>

    <rect x="1066" y="142" width="224" height="106" rx="12" class="pcore" style="stroke:var(--phase-4-stroke,#a4b8ad)"/>
    <text x="1178" y="206" text-anchor="middle" class="phase" fill="#e8bb74">execute</text>
    <path d="M1292 195 L1316 195" class="rail"/>

    <rect x="1318" y="150" width="224" height="90" rx="12" class="pbox" style="stroke:var(--phase-3-stroke,#a4b8ad)"/>
    <text x="1430" y="206" text-anchor="middle" class="phase">after</text>
  </g>

  <g>
    <text x="422" y="272" text-anchor="middle" class="cap">可挂：插入前置 flow</text>
    <text x="674" y="272" text-anchor="middle" class="cap">可挂：改可执行性</text>
    <text x="926" y="272" text-anchor="middle" class="cap">可挂：改费用 / 替代支付</text>
    <text x="1178" y="272" text-anchor="middle" class="capHot">不可挂 · 唯一改状态的地方</text>
    <text x="1178" y="296" text-anchor="middle" class="cap">gain · pay · construct …</text>
    <text x="1430" y="272" text-anchor="middle" class="cap">可挂：插入后置反应</text>
  </g>

  <text x="60" y="318" class="h">卡牌文件（各自闭环，一行一张）</text>

  <!-- row 1: Hammer Crusher (y0=332) -->
  <g class="step-group" data-step-group="1" style="opacity:var(--phase-1-opacity,1)">
  <rect x="40" y="332" width="1520" height="116" rx="12" class="row"/>
  <text x="60" y="376" class="mono">Hammer Crusher 卡文件</text>
  <text x="60" y="408" class="cardname">翻修石屋前送资源、可扩建</text>
  <rect x="302" y="346" width="240" height="88" rx="10" class="chip"/>
  <text x="422" y="374" text-anchor="middle" class="chipT">before</text>
  <text x="422" y="398" text-anchor="middle" class="monoS">on renovate-house</text>
  <text x="422" y="422" text-anchor="middle" class="chipD">→ 2 泥 1 芦苇 + 可选扩建</text>
  <rect x="554" y="346" width="240" height="88" rx="10" class="chip"/>
  <text x="674" y="374" text-anchor="middle" class="chipT">isDoable</text>
  <text x="674" y="398" text-anchor="middle" class="monoS">on renovate-house</text>
  <text x="674" y="422" text-anchor="middle" class="chipD">→ doable = true</text>

  </g>

  <!-- row 2: Frame Builder (y0=464) -->
  <g class="step-group" data-step-group="2" style="opacity:var(--phase-2-opacity,1)">
  <rect x="40" y="464" width="1520" height="116" rx="12" class="row"/>
  <text x="60" y="508" class="mono">Frame Builder 卡文件</text>
  <text x="60" y="540" class="cardname">建房 / 翻修时 1 木替代 2 泥或 2 石</text>
  <rect x="806" y="478" width="240" height="88" rx="10" class="chip"/>
  <text x="926" y="506" text-anchor="middle" class="chipT">computeCosts</text>
  <text x="926" y="530" text-anchor="middle" class="monoS">on construct / renovate</text>
  <text x="926" y="554" text-anchor="middle" class="chipD">→ 1 木可代 2 泥 / 2 石</text>

  </g>

  <!-- row 3: Stagehand (y0=596) -->
  <g class="step-group" data-step-group="3" style="opacity:var(--phase-3-opacity,1)">
  <rect x="40" y="596" width="1520" height="116" rx="12" class="row"/>
  <text x="60" y="640" class="mono">Stagehand 卡文件</text>
  <text x="60" y="672" class="cardname">对手用旅行艺人后，你可建造</text>
  <rect x="1310" y="610" width="240" height="88" rx="10" class="chip"/>
  <text x="1430" y="638" text-anchor="middle" class="chipT">after（对手行动）</text>
  <text x="1430" y="662" text-anchor="middle" class="monoS">on place-farmer</text>
  <text x="1430" y="686" text-anchor="middle" class="chipD">→ 篱笆 · 畜栏 · 建房 选一</text>

  </g>

  <!-- row 4: others (y0=728) -->
  <g class="step-group" data-step-group="4" style="opacity:var(--phase-4-opacity,1)">
  <rect x="40" y="728" width="1520" height="56" rx="12" class="rowOther"/>
  <text x="60" y="764" class="other">… 其他卡牌：各自只挂自己需要的阶段，互不相识</text>

  </g>

  <!-- footer -->
  <g class="step-group" data-step-group="4" style="opacity:var(--phase-4-opacity,1)">
  <rect x="40" y="800" width="1520" height="72" rx="14" fill="#30291f" stroke="#e8bb74" stroke-width="3"/>
  <text x="800" y="831" text-anchor="middle" class="foot">卡牌不改阶段顺序，只在阶段上「挂」东西；listener 只读上下文、只返回 flow 或数值</text>
  <text x="800" y="858" text-anchor="middle" class="foot2">写状态只发生在 execute 的 action leaf；主路径不认识任何一张卡</text>
  </g>
</svg>
`,f={__name:`ListenerStages`,setup(e){let{$slidev:n,$nav:r,$clicksContext:o,$clicks:c,$page:l,$renderContext:f,$frontmatter:p}=s(),m=[`先看主线：引擎固定执行阶段，卡牌不改变顺序。`,`Hammer Crusher：在 before 和 isDoable 阶段挂能力。`,`Frame Builder：在 computeCosts 阶段影响费用。`,`Stagehand：在对手行动后的 after 阶段响应。`,`Listener 只读上下文；真正写状态的是 action leaf。`];return(e,n)=>(t(),i(u,{source:a(d),captions:m},null,8,[`source`]))}},p={__name:`slides.md__slidev_3`,setup(u){let{$slidev:d,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=s();return m.setup(),(s,u)=>{let d=f;return t(),i(l,o(e(a(c)(a(v),2))),{default:r(()=>[n(d)]),_:1},16)}}};export{p as default};