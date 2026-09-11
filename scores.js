/* ============================================================
   电车炫客 · 得分挑战赛 排行榜数据
   ------------------------------------------------------------
   【你只需要改这个文件！改完保存，刷新网页即可。】

   1. 改本届活动信息：改 EVENT 里的字段
        stage    本届挑战关卡
        deadline 用 "2026-09-11T23:59:59+08:00" 这种格式，倒计时会自动算
        formUrl  是「提交成绩」按钮跳转的问卷链接，换表单改这里即可
        rewards  本届奖励，按名次填
   2. 加/改本届榜单：在 PLAYERS 数组里增删条目
        - 不用手动写 rank（排名），页面会按 score 从高到低自动排
        - platform 只能填：Steam / PS / Xbox / Switch （大小写要一致）
        - video 填玩家提交的视频链接
        - date 填你审核通过的日期
   3. 同分处理：分数一样时，date 早的排前面（先提交先得）
   4. 积分榜（points.html）：每届结束后，把该届 PLAYERS 的最终结果
      整理进 SEASONS 数组，积分榜会自动按「前十名 10→1 分」累计。
        - 玩家名要跨届保持一致，积分才能正确累加到同一个人身上
   ============================================================ */

const EVENT = {
  title:     "《电车炫客》第二届得分挑战赛",
  season:    2,
  stage:     "中部 6-3-2 「一切向“钱”看」",
  deadline:  "2026-09-11T23:59:59+08:00",
  formUrl:   "https://leiting.feishu.cn/share/base/form/shrcn08EqZjOCiMAHgiY2E37j2c",
  updatedAt: "2026-09-11",
  // 本届奖励（展示用）
  rewards: [
    { place: 1, medal: "🥇", label: "Steam 礼品卡 300 元" },
    { place: 2, medal: "🥈", label: "Steam 礼品卡 200 元" },
    { place: 3, medal: "🥉", label: "Steam 礼品卡 100 元" },
  ],
};

// 第二届实时榜单（刚开赛，暂无成绩）。审核通过一位就往下面加一条：
// { name: "玩家名", score: 1234567, platform: "Steam", video: "https://...", date: "2026-09-01" },
const PLAYERS = [
  { name: "Bastion0589", score: 7063539, platform: "Steam", video: "https://www.bilibili.com/video/BV1qrY86aEp1/", date: "2026-09-11" },
  { name: "Rxy", score: 2495948, platform: "Steam", video: "", date: "2026-09-07" },
  { name: "阿尔托莉雅", score: 1583928, platform: "Steam", video: "", date: "2026-09-11" },
  { name: "我变强了！", score: 357829, platform: "Steam", video: "", date: "2026-09-11" },
  { name: "安念研", score: 4718984, platform: "Steam", video: "", date: "2026-09-11" },
];

// 积分规则：每届最终排名前十名依次得 10、9、…、1 分；第 11 名及以后 0 分。
const POINTS_TABLE = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// 五届得分挑战赛结束后，累计积分前三名获得定制实体奖章（金/银/铜）。
const MEDAL_GOAL_SEASONS = 5;

// 历届最终成绩（用于 points.html 累计积分榜）。
// 每届结束后把该届 PLAYERS 的最终结果整理进来，新的一届放数组末尾。
const SEASONS = [
  {
    season: 1,
    title:  "第一届得分挑战赛",
    stage:  "四国区域 3-2-2 「信的试炼场」",
    players: [
      { name: "瞬闪影",          score: 4665253, platform: "Steam", video: "https://www.bilibili.com/video/BV1xc3462Eep", date: "2026-07-30" },
      { name: "子扬",            score: 4561448, platform: "Steam", video: "https://b23.tv/vYYauVA",                       date: "2026-07-30" },
      { name: "Rxy",             score: 3180847, platform: "Steam", video: "",                                             date: "2026-07-30" },
      { name: "安念研",          score: 2816125, platform: "Steam", video: "",                                             date: "2026-07-29" },
      { name: "次元乡的暗黑邪神", score: 2782503, platform: "Steam", video: "https://www.bilibili.com/video/BV142ge6KEKp/", date: "2026-07-29" },
      { name: "火山兰兰",        score: 1244256, platform: "Steam", video: "https://www.bilibili.com/video/BV1YPKK6xEXd/", date: "2026-07-17" },
      { name: "凑数来的",        score: 59592,   platform: "Steam", video: "",                                             date: "2026-07-16" },
    ],
  },
];
