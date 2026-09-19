import{E as e,R as t,S as n,Z as r,_ as i,gt as a,vt as o}from"./modules/shiki-DaKlMP-N.js";import{J as s,q as c}from"./index-HQzb5jR0.js";import{t as l}from"./slidev/default-DSVqvgkJ.js";import{t as u}from"./StepDiagram-BtYdpT9t.js";var d=`<?xml version="1.0" encoding="UTF-8"?>
<svg class="hammer-diagram" xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="t d">
  <title id="t">Hammer Crusher：先放行，再校验（横版）</title>
  <desc id="d">四段流程：可执行性、触发与锁定、嵌套行动、回归与校验。紫色描边的步骤改动了卡文件之外的共享主路径。</desc>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#a4b8ad"/>
    </marker>
    <marker id="arrowLane" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="12" markerHeight="12" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#e8bb74"/>
    </marker>
    <style>
      .hammer-diagram text { font-family: "PingFang SC", "Noto Sans CJK SC", "Noto Sans SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; fill: #f0eee5; }
      .hammer-diagram .title { font-size: 40px; font-weight: 700; }
      .hammer-diagram .sub { font-size: 22px; fill: #a4b8ad; }
      .hammer-diagram .lane { font-size: 27px; font-weight: 700; fill: #e8bb74; }
      .hammer-diagram .box { font-size: 24px; }
      .hammer-diagram .box2 { font-size: 22px; }
      .hammer-diagram .small { font-size: 20px; fill: #a4b8ad; }
      .hammer-diagram .lbl { font-size: 20px; fill: #a4b8ad; }
      .hammer-diagram .foot { font-size: 23px; font-weight: 700; fill: #f0eee5; }
      .hammer-diagram .step { fill: #1d2824; stroke: #3d5148; stroke-width: 2; }
      .hammer-diagram .decide { fill: #20362d; stroke: #8ab6a6; stroke-width: 2.5; }
      .hammer-diagram .main { fill: #30291f; stroke: #bb9feb; stroke-width: 4; }
      .hammer-diagram .ok { fill: #29493b; stroke: #8ab6a6; stroke-width: 2; }
      .hammer-diagram .stop { fill: #452d2b; stroke: #e5a19b; stroke-width: 2.5; }
      .hammer-diagram .pill { fill: #1d2824; stroke: none; }
      .hammer-diagram .flow { stroke: #a4b8ad; stroke-width: 2.5; fill: none; marker-end: url(#arrow); }
      .hammer-diagram .laneflow { stroke: #e8bb74; stroke-width: 3; fill: none; marker-end: url(#arrowLane); }
    </style>
  </defs>

  <rect width="1600" height="900" fill="#151c1c"/>

  <text x="40" y="66" class="title">Hammer Crusher：先放行，再校验</text>
  <text x="40" y="100" class="sub">允许暂时缺资源的石屋翻修进入流程，赠资源、处理嵌套行动，真正支付前再校验一次</text>
  <rect x="1180" y="46" width="380" height="60" rx="10" fill="#30291f" stroke="#bb9feb" stroke-width="4"/>
  <text x="1370" y="84" text-anchor="middle" class="box2">紫色描边 = 改动了卡文件之外的主路径</text>

  <g>
    <text x="212" y="160" text-anchor="middle" class="lane">① 可执行性</text>
    <text x="597" y="160" text-anchor="middle" class="lane">② 触发与锁定</text>
    <text x="982" y="160" text-anchor="middle" class="lane">③ 嵌套行动</text>
    <text x="1367" y="160" text-anchor="middle" class="lane">④ 回归与校验</text>
    <line x1="60" y1="176" x2="364" y2="176" stroke="#e8bb74" stroke-width="3"/>
    <line x1="445" y1="176" x2="749" y2="176" stroke="#e8bb74" stroke-width="3"/>
    <line x1="830" y1="176" x2="1134" y2="176" stroke="#e8bb74" stroke-width="3"/>
    <line x1="1215" y1="176" x2="1519" y2="176" stroke="#e8bb74" stroke-width="3"/>
    <path d="M372 160 L436 160" class="laneflow"/>
    <path d="M757 160 L821 160" class="laneflow"/>
    <path d="M1142 160 L1206 160" class="laneflow"/>
  </g>

  <g class="step-group" data-step-group="0" style="opacity:var(--phase-0-opacity,1)">
    <rect x="62" y="205" width="300" height="64" rx="12" class="step"/>
    <text x="212" y="245" text-anchor="middle" class="box">玩家选择「翻修」</text>
    <path d="M212 269 L212 303" class="flow"/>

    <rect x="62" y="305" width="300" height="64" rx="32" class="decide"/>
    <text x="212" y="345" text-anchor="middle" class="box">资源已满足普通翻修？</text>
    <text x="222" y="392" class="lbl">否</text>
    <text x="242" y="392" class="small">（是 → 直接进入 ②）</text>
    <path d="M212 369 L212 403" class="flow"/>

    <rect x="62" y="405" width="300" height="64" rx="32" class="decide"/>
    <text x="212" y="445" text-anchor="middle" class="box">石屋仍是合法目标？</text>
    <text x="222" y="492" class="lbl">是</text>
    <path d="M212 469 L212 503" class="flow"/>

    <rect x="62" y="505" width="300" height="84" rx="12" class="main"/>
    <text x="212" y="540" text-anchor="middle" class="box">Hammer Crusher 临时放行</text>
    <text x="212" y="570" text-anchor="middle" class="box2">即使资源暂时不足</text>

    <rect x="62" y="625" width="300" height="52" rx="26" class="stop"/>
    <text x="212" y="659" text-anchor="middle" class="box2">否 → 行动不可用</text>
  </g>

  <g class="step-group" data-step-group="1" style="opacity:var(--phase-1-opacity,1)">
    <rect x="447" y="205" width="300" height="64" rx="32" class="decide"/>
    <text x="597" y="245" text-anchor="middle" class="box">本次目标包含石屋？</text>
    <text x="607" y="292" class="lbl">是</text>
    <path d="M597 269 L597 303" class="flow"/>

    <rect x="447" y="305" width="300" height="64" rx="32" class="decide"/>
    <text x="597" y="345" text-anchor="middle" class="box">使用 Hammer Crusher？</text>
    <text x="607" y="392" class="lbl">是</text>
    <path d="M597 369 L597 403" class="flow"/>

    <rect x="447" y="405" width="300" height="84" rx="12" class="step"/>
    <text x="597" y="440" text-anchor="middle" class="box">锁定石屋目标</text>
    <text x="597" y="470" text-anchor="middle" class="box2">保存费用上下文</text>
    <path d="M597 489 L597 523" class="flow"/>

    <rect x="447" y="525" width="300" height="84" rx="12" class="step"/>
    <text x="597" y="560" text-anchor="middle" class="box">获得 2 泥土 + 1 芦苇</text>
    <text x="597" y="590" text-anchor="middle" class="box2">结算资源引发的卡牌效果</text>

    <rect x="447" y="645" width="300" height="52" rx="26" class="pill"/>
    <text x="597" y="679" text-anchor="middle" class="box2">否 → 常规翻修，不触发</text>
  </g>

  <g class="step-group" data-step-group="2" style="opacity:var(--phase-2-opacity,1)">
    <rect x="832" y="205" width="300" height="64" rx="32" class="decide"/>
    <text x="982" y="245" text-anchor="middle" class="box">执行额外扩建？</text>
    <text x="992" y="292" class="lbl">是</text>
    <path d="M982 269 L982 303" class="flow"/>

    <rect x="832" y="305" width="300" height="84" rx="12" class="main"/>
    <text x="982" y="340" text-anchor="middle" class="box">执行扩建</text>
    <text x="982" y="370" text-anchor="middle" class="box2">仍是一项真实行动</text>
    <path d="M982 389 L982 423" class="flow"/>

    <rect x="832" y="425" width="300" height="64" rx="32" class="decide"/>
    <text x="982" y="465" text-anchor="middle" class="box">触发其他玩家的卡牌？</text>
    <text x="992" y="512" class="lbl">是</text>
    <path d="M982 489 L982 523" class="flow"/>

    <rect x="832" y="525" width="300" height="84" rx="12" class="main"/>
    <text x="982" y="560" text-anchor="middle" class="box">切换行动者 → 结算 → 切回</text>
    <text x="982" y="590" text-anchor="middle" class="box2">始终保留原玩家的翻修上下文</text>

    <rect x="832" y="645" width="300" height="52" rx="26" class="pill"/>
    <text x="982" y="679" text-anchor="middle" class="box2">否 → 直接进入 ④</text>
  </g>

  <g class="step-group" data-step-group="3" style="opacity:var(--phase-3-opacity,1)">
    <rect x="1217" y="205" width="300" height="84" rx="32" class="decide"/>
    <text x="1367" y="240" text-anchor="middle" class="box">此刻仍满足</text>
    <text x="1367" y="270" text-anchor="middle" class="box">石屋翻修前置？</text>
    <text x="1377" y="312" class="lbl">是</text>
    <path d="M1367 289 L1367 323" class="flow"/>

    <rect x="1217" y="325" width="300" height="84" rx="12" class="ok"/>
    <text x="1367" y="360" text-anchor="middle" class="box" fill="#1d2824">支付费用</text>
    <text x="1367" y="390" text-anchor="middle" class="box2" fill="#1d2824">完成石屋翻修</text>

    <text x="1377" y="452" class="lbl">否</text>
    <path d="M1367 409 L1367 463" class="flow"/>

    <rect x="1217" y="465" width="300" height="84" rx="12" class="stop"/>
    <text x="1367" y="500" text-anchor="middle" class="box">中止</text>
    <text x="1367" y="530" text-anchor="middle" class="box2">重新规划 / 重开行动</text>
  </g>

  <rect x="40" y="760" width="1520" height="84" rx="14" fill="#1d2824"/>
  <text x="800" y="797" text-anchor="middle" class="foot">核心策略：允许进入复杂流程，但在真正支付前再次验证</text>
  <text x="800" y="828" text-anchor="middle" class="small">七个坑 ↔ 四段：坑 1–2 ↔ ①　坑 3–4 ↔ ②　坑 5–6 ↔ ③　坑 7 ↔ ④</text>
</svg>
`,f={__name:`HammerFlow`,setup(e){let{$slidev:n,$nav:r,$clicksContext:o,$clicks:c,$page:l,$renderContext:f,$frontmatter:p}=s(),m=[`① 可执行性：暂时缺资源，也可能允许进入石屋翻修。`,`② 触发与锁定：锁定石屋目标，获得资源，保存费用上下文。`,`③ 嵌套行动：扩建和其他玩家的反应，都要结算后再切回来。`,`④ 回归与校验：真正支付前重查；不满足条件就中止。`];return(e,n)=>(t(),i(u,{source:a(d),captions:m},null,8,[`source`]))}},p={__name:`slides.md__slidev_5`,setup(u){let{$slidev:d,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=s();return m.setup(),(s,u)=>{let d=f;return t(),i(l,o(e(a(c)(a(v),4))),{default:r(()=>[n(d)]),_:1},16)}}};export{p as default};