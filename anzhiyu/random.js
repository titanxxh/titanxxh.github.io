var posts=["2011/09/18/time-to-say-goodbye/","2011/09/18/一入侯门深似海/","2011/09/18/仙雾玩仙五一-坑爹的预售一小时初体验/","2011/09/18/仙雾玩仙五三-一些值得回忆的瞬间趣闻道听途说/","2011/09/18/仙雾玩仙五二-那些搞怪的地方/","2011/09/18/仙雾玩仙五四-战斗总结/","2011/09/18/文明5-第一次世界地图真实起始位置-地图回放/","2011/09/22/小小世界-以战养战还是偏安发展？/","2011/10/16/卡卡颂-法国小镇的独特魅力/","2011/11/03/逍遥游试玩会总结/","2011/11/06/桌游人生第四期-现代艺术-拍卖的智慧/","2011/10/27/a-happy-birthday/","2011/11/11/dsdv学习笔记/","2011/11/27/titan中生物强弱的研究/","2011/12/03/titan开箱照/","2011/12/09/20111208桌游活动小记两河流域农场主/","2011/12/08/两河流域开箱照/","2012/01/02/20111231桌游活动小记卡坦岛只言片语/","2012/01/02/星杯传说开箱照/","2012/01/08/20120108新年首次活动小记/","2012/01/16/bullet物理引擎学习笔记1/","2012/01/17/bullet物理引擎学习笔记3碰撞检测/","2012/01/17/bullet物理引擎学习笔记2motionstate/","2012/01/18/bullet物理引擎学习笔记4碰撞过滤/","2012/02/04/小小世界简单量化分析-技能篇/","2012/02/25/电厂：最初的火花开箱照/","2012/03/04/车票之旅欧洲-1912扩-开箱照/","2012/03/10/车票之旅-逍遥游二度试玩会/","2012/03/24/逍遥游四海逍遥版开箱照/","2012/03/22/20120319寝室车票之旅/","2012/02/10/20120208高中聚会活动小记/","2012/02/18/2012第一开-祈祷与工作开箱照/","2012/02/19/祈祷与工作第一次solo/","2012/04/06/月末大战-车票之旅-卡坦岛/","2012/04/06/第一次多人局祈祷与工作/","2012/05/01/战报之庆祝wzh考g结束/","2012/05/02/一些想法20120501/","2012/05/08/否极泰来？/","2012/05/19/权力的游戏详尽开箱/","2012/05/15/权力的游戏版图版开箱照（期待开一局啊）/","2012/06/05/席德梅尔的文明桌游开箱/","2012/07/06/20120704权力的游戏战报/","2012/07/07/微软实习两周初体验/","2012/07/07/小小世界三个小扩展开箱照/","2012/07/15/小小世界地下开箱照/","2012/08/08/近期一些事/","2012/09/30/保研/","2012/10/12/一周总结2012-10-8-2012-10-12/","2012/10/26/文明五第一次过神-巴比伦王朝的重生/","2012/08/12/说一下我最爱的巴西队/","2012/11/18/troyes开箱照/","2012/11/10/新手几次文明5过神后的经验/","2013/03/31/吐槽一下wow的一个任务，揭示人性丑陋啊/","2013/01/06/2013第一开-stronghold/","2013/04/30/玛雅日历tzolkin-the-maya-calendar开箱照/","2013/08/18/journey-to-tibet-with-photos/","2015/06/08/resurrection-of-my-blog/","2015/06/14/essen2014-1-historia-rule-intro/","2015/06/16/essen2014-2-progress-evolution-of-technology-rule-intro/","2015/06/16/essen2014-3-praetor-rule-intro/","2015/06/15/essen2014-la-granja-opening-box/","2015/06/18/the-first-loss-of-dungaII-brazil/","2015/06/21/essen2014-4-versailles-rule-intro/","2015/06/22/essen2014-praetor-opening-box-review/","2015/06/24/essen2014-versailles-opening-box-review/","2015/06/22/essen2014-progress-opening-box-review/","2015/06/30/essen2014-5-zhanguo-rule-intro/","2015/06/30/essen2014-6-fields-of-arle-rule-intro-opening-box/","2015/06/30/boardgame-life-5-the-strategy-of-a-boardgame/","2015/07/01/answer-to-zhihu-question-is-boardgame-doomed-to-failure-in-china/","2015/08/09/answer-to-zhihu-question-do-you-love-a-team-by-starting-from-a-player/","2015/09/13/it-is-an-end/","2015/09/17/essen2015-preview-0-51-games-i-laid-my-eyes-on/","2015/09/18/essen2015-preview-1-you-and-me/","2015/10/08/essen2015-preview-3-old-and-new-games/","2015/09/25/essen2015-preview-2-many-hands-make-light-work/","2015/11/01/boardgame-life-6-the-design-concept-of-uwe-rosenberg/","2015/11/01/ora-et-labora-quantitative-analysis/","2015/11/09/essen2015-1-among-nobles-rule-intro-review/","2015/12/01/essen2015-2-7wonders-duel-rule-intro-review/","2016/01/19/essen2015-3-codenames-rule-intro-review/","2016/01/22/essen2015-4-pi-mal-pflaumen-rule-intro-opening-box-review/","2016/02/17/journey-to-tanzania-with-photos/","2016/01/19/ora-et-labora-rule-intro/","2016/03/03/essen2015-6-mombasa-intro-review/","2016/03/01/essen2015-5-nippon-intro-review/","2016/02/18/ora-et-labora-chinese-edition-opening-box/","2016/03/31/essen2015-7-signore-intro-review/","2016/04/18/travelling-beijing-alone/","2016/04/20/essen2015-8-and-then-we-held-hands-rule-intro-opening-box-review/","2017/01/01/仙雾的2016桌游总结/","2017/05/01/桌游人生-第七期-农场主的术与道/","2018/09/11/russia-2018/","2019/08/20/iberia-honeymoon-madrid-toledo-porto/","2020/01/24/my-year-2019/","2019/12/15/iberia-honeymoon-sintra-lisboa/","2020/01/29/iberia-honeymoon-seville-ronda/","2020/06/06/iberia-honeymoon-granada/","2020/06/07/iberia-honeymoon-barcelona/","2020/12/26/simple-data-compression/","2020/12/01/2020-gopherchina-review/","2021/03/31/golang-dynamic-injection/","2021/04/26/golang-time-shift-fault-injection/","2021/10/30/small-world-big-world/","2022/11/21/from-boy-to-father-only-a-few-world-cups/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };