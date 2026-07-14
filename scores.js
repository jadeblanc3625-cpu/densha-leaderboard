/* ============================================================
   电车炫客 · 得分挑战赛 排行榜数据
   ------------------------------------------------------------
   【你只需要改这个文件！改完保存，刷新网页即可。】

   1. 改活动信息：改 EVENT 里的字段
        deadline 用 "2026-07-30T23:59:59+08:00" 这种格式，倒计时会自动算
   2. 加/改榜单：在 PLAYERS 数组里增删条目
        - 不用手动写 rank（排名），页面会按 score 从高到低自动排
        - platform 只能填：Steam / PS / Xbox / Switch （大小写要一致）
        - video 填玩家提交的视频链接
        - date 填你审核通过的日期
   3. 同分处理：分数一样时，date 早的排前面（先提交先得）
   ============================================================ */

const EVENT = {
  title:    "《电车炫客》得分挑战赛",
  stage:    "四国区域 3-2-2 「信的试炼场」",
  deadline: "2026-07-30T23:59:59+08:00",
  updatedAt: "2026-07-14"
};

const PLAYERS = [
  { name: "轨道之王TETSU", score: 1284500, platform: "Steam",  video: "https://www.bilibili.com/", date: "2026-07-13" },
  { name: "磨轨少女Mika",   score: 1198000, platform: "Switch", video: "https://www.youtube.com/", date: "2026-07-12" },
  { name: "0号线幽灵",      score: 1150750, platform: "PS",     video: "https://www.bilibili.com/", date: "2026-07-14" },
  { name: "废轨拾荒者",      score: 987600,  platform: "Xbox",   video: "https://www.youtube.com/", date: "2026-07-11" },
  { name: "末班车DRIFT",    score: 902300,  platform: "Steam",  video: "https://www.bilibili.com/", date: "2026-07-13" },
  { name: "霓虹脱轨",        score: 845100,  platform: "PS",     video: "https://www.bilibili.com/", date: "2026-07-10" },
  { name: "站台涂鸦手",      score: 799900,  platform: "Switch", video: "https://www.youtube.com/", date: "2026-07-12" },
  { name: "反乌托邦快线",    score: 731200,  platform: "Steam",  video: "https://www.bilibili.com/", date: "2026-07-09" }
];
