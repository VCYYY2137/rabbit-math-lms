const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const linkButtons = document.querySelectorAll("[data-view-link]");
const starCount = document.getElementById("starCount");
const loginScreen = document.getElementById("loginScreen");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const logoutBtn = document.getElementById("logoutBtn");
const loginAccount = document.getElementById("loginAccount");
const loginPassword = document.getElementById("loginPassword");
const registerAccount = document.getElementById("registerAccount");
const registerPassword = document.getElementById("registerPassword");
const registerPasswordConfirm = document.getElementById("registerPasswordConfirm");
const registerNickname = document.getElementById("registerNickname");
const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");
const authTabs = document.querySelectorAll(".auth-tab");
const authForms = document.querySelectorAll(".auth-form");
const warmupButtons = document.querySelectorAll("[data-warmup]");
const warmupFeedback = document.getElementById("warmupFeedback");
const learnerLabel = document.getElementById("learnerLabel");
const welcomeText = document.getElementById("welcomeText");
const userDataList = document.getElementById("userDataList");
const learningDataList = document.getElementById("learningDataList");
const refreshDataBtn = document.getElementById("refreshDataBtn");
const coachEmpty = document.getElementById("coachEmpty");
const coachMessages = document.getElementById("coachMessages");
const coachSuggestions = document.getElementById("coachSuggestions");
const diagnosticMessages = document.getElementById("diagnosticMessages");
const diagnosticInput = document.getElementById("diagnosticInput");
const sendDiagnosticBtn = document.getElementById("sendDiagnosticBtn");
const resetDiagnosticBtn = document.getElementById("resetDiagnosticBtn");
const difficultyTag = document.getElementById("difficultyTag");
const recommendReason = document.getElementById("recommendReason");
const recommendTitle = document.getElementById("recommendTitle");
const recommendDetail = document.getElementById("recommendDetail");
const startRecommendationBtn = document.getElementById("startRecommendationBtn");
const moodButtons = document.querySelectorAll("[data-mood]");
const quickDifficultyButtons = document.querySelectorAll("[data-difficulty]");
const unitButtons = document.querySelectorAll("[data-unit]");
const moodReplies = document.querySelector(".mood-replies");
const unitReplies = document.querySelector(".unit-replies");
const difficultyReplies = document.querySelector(".difficulty-replies");
const diagnosticInputBlock = document.getElementById("diagnosticInputBlock");
const conceptStage = document.getElementById("conceptStage");
const conceptBunnyText = document.getElementById("conceptBunnyText");
const conceptProgress = document.getElementById("conceptProgress");
const learningVideoFrame = document.getElementById("learningVideoFrame");
const videoLearningTitle = document.getElementById("videoLearningTitle");
const videoLearningNote = document.getElementById("videoLearningNote");
const videoToPracticeBtn = document.getElementById("videoToPracticeBtn");
const videoBunnyQuestion = document.getElementById("videoBunnyQuestion");
const videoConceptPrompt = document.getElementById("videoConceptPrompt");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizStatus = document.getElementById("quizStatus");
const quizNumber = document.getElementById("quizNumber");
const quizText = document.getElementById("quizText");
const quizVisual = document.getElementById("quizVisual");
const quizNumInput = document.getElementById("quizNumInput");
const quizDenInput = document.getElementById("quizDenInput");
const quizFeedback = document.getElementById("quizFeedback");
const submitQuizAnswer = document.getElementById("submitQuizAnswer");
const nextQuizQuestionBtn = document.getElementById("nextQuizQuestionBtn");
const quizComplete = document.getElementById("quizComplete");
const quizCompleteText = document.getElementById("quizCompleteText");
const quizReviewList = document.getElementById("quizReviewList");
const practiceResponse = document.getElementById("practiceResponse");
const practiceResponseTitle = document.getElementById("practiceResponseTitle");
const practiceResponseText = document.getElementById("practiceResponseText");
const nextProblemBtn = document.getElementById("nextProblemBtn");
const stayProblemBtn = document.getElementById("stayProblemBtn");
const videoFileForUnit = {};

const relaxVideos = [
  {
    title: "小影片舒壓：章魚",
    url: "https://www.youtube.com/watch?v=S432yNJd9t4"
  },
  {
    title: "小影片舒壓：團結力量大",
    url: "https://www.youtube.com/watch?v=uEnAWyWMFgw"
  },
  {
    title: "小影片舒壓：胖子",
    url: "https://www.youtube.com/watch?v=3iZO2LS0l3Y"
  }
];

const conceptLessons = {
  fractionMultiply: {
    title: "分數乘法",
    warmup: "先選一種分數乘法",
    warmupChoices: ["用圖像表示乘法", "透過圖示理解分數乘以分數", "真分數乘以真分數的計算", "假分數乘以假分數的計算"],
    acceptAnyWarmup: true,
    topics: {
      "用圖像表示乘法": {
        expression: "3/8 × 2/3",
        visualTitle: "具體操作",
        visualPrompt: "粉紅色是 3/8，再取其中 2/3。",
        visualChoices: ["先找 3/8", "先把答案背起來"],
        visualAnswer: "先找 3/8",
        clickPrompt: "點出最後留下的 2 格",
        clickAnswer: 2,
        guide: "先看 3/8，再在這一段裡取 2/3。",
        miniQuestion: "3/8 × 2/3 = ?",
        answer: { num: "1", den: "4" },
        gridType: "multiply",
        idleHint: "先找出原本的 3/8。"
      },
      "透過圖示理解分數乘以分數": {
        expression: "5/4 × 2/3",
        visualTitle: "觀察圖示",
        visualPrompt: "整個圖形的每一小格都一樣大。",
        visualChoices: ["看重疊區域", "只看分母大小"],
        visualAnswer: "看重疊區域",
        clickPrompt: "點出重疊的 10 小格",
        clickAnswer: 10,
        guide: "重疊區域就是「5/4 的 2/3」。",
        miniQuestion: "5/4 × 2/3 = ?",
        answer: { num: "5", den: "6" },
        gridType: "area",
        idleHint: "先看兩種顏色重疊的地方。"
      },
      "真分數乘以真分數的計算": {
        expression: "2/5 × 1/6",
        visualTitle: "歸納規律",
        visualPrompt: "真分數乘真分數，結果通常會怎樣？",
        visualChoices: ["比原來更小", "一定變更大"],
        visualAnswer: "比原來更小",
        clickPrompt: "點出最後的 2 小格",
        clickAnswer: 2,
        guide: "圖像看懂後，再把分子和分母分別對應到格子數。",
        miniQuestion: "2/5 × 1/6 = ?",
        answer: { num: "1", den: "15" },
        gridType: "area",
        idleHint: "先想：一部分中的一部分會變大還是變小？"
      },
      "假分數乘以假分數的計算": {
        expression: "5/3 × 7/4",
        visualTitle: "應用遷移",
        visualPrompt: "假分數表示超過 1，先保留成假分數計算。",
        visualChoices: ["先乘再整理", "先把分母加起來"],
        visualAnswer: "先乘再整理",
        clickPrompt: "點一個超過 1 的圖示區",
        clickAnswer: 1,
        guide: "假分數也一樣看關係，最後再整理答案。",
        miniQuestion: "5/3 × 7/4 = ?",
        answer: { num: "35", den: "12" },
        gridType: "improper",
        idleHint: "先承認它超過 1，不要急著換成帶分數。"
      }
    },
    idleHint: "先選一種題型，我陪你一步一步看。"
  },
  integerDivision: {
    title: "整數相除與分數",
    expression: "6 ÷ 4",
    warmup: "6 ÷ 4 是什麼意思？",
    warmupChoices: ["6 個平均分成 4 份", "6 和 4 加起來"],
    warmupAnswer: "6 個平均分成 4 份",
    visualTitle: "平均分",
    visualPrompt: "分成幾份？",
    visualChoices: ["4 份", "6 份"],
    visualAnswer: "4 份",
    clickPrompt: "點一份看看",
    clickAnswer: 1,
    guide: "被分的 6 放上面，分成 4 份放下面。",
    miniQuestion: "6 ÷ 4 = ?",
    answer: { num: "3", den: "2" },
    idleHint: "先看它平均分成幾份。"
  },
  fractionDivideInteger: {
    title: "分數除以整數",
    expression: "3/4 ÷ 2",
    warmup: "這題要做什麼？",
    warmupChoices: ["把 3/4 平均分成 2 份", "把 3/4 變成 2 倍"],
    warmupAnswer: "把 3/4 平均分成 2 份",
    visualTitle: "先看 3/4",
    visualPrompt: "綠色部分要分成幾份？",
    visualChoices: ["2 份", "4 份"],
    visualAnswer: "2 份",
    clickPrompt: "點其中 1 份",
    clickAnswer: 1,
    guide: "把 3/4 分成 2 份，每份是 3/8。",
    miniQuestion: "3/4 ÷ 2 = ?",
    answer: { num: "3", den: "8" },
    idleHint: "先看綠色的 3/4，再把它平均分。"
  }
};

function frac(numerator, denominator, small = false) {
  return `<span class="frac${small ? " small-frac" : ""}"><span>${numerator}</span><span>${denominator}</span></span>`;
}

function formatMath(text, small = true) {
  return text.replace(/(\d+)\/(\d+)/g, (_, numerator, denominator) => frac(numerator, denominator, small));
}

function shuffleItems(items) {
  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function cleanQuestionText(text) {
  return text.replace(/^(圖像題|情境題|應用題)：/, "");
}

const problems = [
  {
    text: "2/3 × 1/4 = ?",
    num: "1",
    den: "6",
    hint: "先想成「2/3 的 1/4」，用圖把 2/3 再切成 4 份。",
    concept: "分數乘法的意義"
  },
  {
    text: "3/5 × 2/3 = ?",
    num: "2",
    den: "5",
    hint: "分子乘分子、分母乘分母，再看看能不能約分。",
    concept: "符號計算與約分"
  },
  {
    text: "4/7 × 1/2 = ?",
    num: "2",
    den: "7",
    hint: "把 4/7 平均分成 2 份，其中 1 份是多少？",
    concept: "一部分的一部分"
  },
  {
    text: "一條緞帶長 3/4 公尺，用掉其中的 2/3，用掉多少公尺？",
    num: "1",
    den: "2",
    hint: "題目是在問 3/4 的 2/3，可以先畫一條長條圖。",
    concept: "分數乘法情境題"
  },
  {
    text: "一盒果汁有 5/6 公升，喝掉 3/5 盒，喝掉多少公升？",
    num: "1",
    den: "2",
    hint: "先把 5/6 看成整盒容量，再取其中的 3/5。",
    concept: "分數乘法應用"
  },
  {
    text: "圖像題：把 2/5 的長方形再塗其中 3/4，最後塗到全部的多少？",
    num: "3",
    den: "10",
    hint: "先塗 2/5，再把那一塊平均切成 4 份取 3 份。",
    concept: "圖像與分數乘法"
  },
  {
    text: "7 ÷ 3 = ?",
    num: "7",
    den: "3",
    hint: "整數相除可以直接寫成分數：被除數放分子，除數放分母。",
    concept: "整數相除之分數表示"
  },
  {
    text: "5 ÷ 8 = ?",
    num: "5",
    den: "8",
    hint: "5 個單位平均分成 8 份，每份是 5/8。",
    concept: "整數相除之分數表示"
  },
  {
    text: "9 ÷ 4 = ?",
    num: "9",
    den: "4",
    hint: "先寫成 9/4，再想要不要化成帶分數；這裡用假分數作答。",
    concept: "整數相除之分數表示"
  },
  {
    text: "情境題：6 個披薩平均分給 5 組，每組分到幾個披薩？",
    num: "6",
    den: "5",
    hint: "平均分就是除法，6 ÷ 5 可以寫成 6/5。",
    concept: "除法情境與分數"
  },
  {
    text: "3/4 ÷ 2 = ?",
    num: "3",
    den: "8",
    hint: "把 3/4 平均分成 2 份，也就是 3/4 × 1/2。",
    concept: "分數除以整數"
  },
  {
    text: "5/6 ÷ 5 = ?",
    num: "1",
    den: "6",
    hint: "除以 5 可以想成乘以 1/5，再約分。",
    concept: "分數除以整數"
  },
  {
    text: "2/3 ÷ 4 = ?",
    num: "1",
    den: "6",
    hint: "把 2/3 平均分成 4 份，每份是全部的多少？",
    concept: "分數除以整數"
  },
  {
    text: "情境題：3/5 公升牛奶平均倒成 3 杯，每杯多少公升？",
    num: "1",
    den: "5",
    hint: "把 3/5 平均分成 3 份，分子 3 也會一起被平均分。",
    concept: "分數除以整數情境"
  },
  {
    text: "1/2 × 3/7 = ?",
    num: "3",
    den: "14",
    hint: "先乘分子，再乘分母，看看答案能不能約分。",
    concept: "分數乘法基本題"
  },
  {
    text: "4/9 × 3/8 = ?",
    num: "1",
    den: "6",
    hint: "可以先約分：4 和 8、3 和 9 都有共同因數。",
    concept: "分數乘法與約分"
  },
  {
    text: "圖像題：把 3/8 的色紙再剪下其中 2/3，剪下全部的多少？",
    num: "1",
    den: "4",
    hint: "這題是 3/8 的 2/3，先畫 8 格，再看其中 3 格的 2/3。",
    concept: "圖像與乘法"
  },
  {
    text: "12 ÷ 7 = ?",
    num: "12",
    den: "7",
    hint: "用假分數表示：12 ÷ 7 = 12/7。",
    concept: "整數相除之分數表示"
  },
  {
    text: "8 ÷ 9 = ?",
    num: "8",
    den: "9",
    hint: "8 個東西平均分給 9 人，每人是 8/9 個。",
    concept: "整數相除之分數表示"
  },
  {
    text: "7/10 ÷ 7 = ?",
    num: "1",
    den: "10",
    hint: "7/10 平均分成 7 份，剛好每份是 1/10。",
    concept: "分數除以整數"
  },
  {
    text: "5/8 ÷ 3 = ?",
    num: "5",
    den: "24",
    hint: "除以 3 等於乘以 1/3。",
    concept: "分數除以整數"
  },
  {
    text: "應用題：一段路長 4/5 公里，走了其中 3/4，走了多少公里？",
    num: "3",
    den: "5",
    hint: "題目問 4/5 的 3/4，先把 4/5 再分成 4 份。",
    concept: "分數乘法應用"
  },
  {
    text: "應用題：2/3 公斤麵粉平均做 6 個麵包，每個用多少公斤？",
    num: "1",
    den: "9",
    hint: "把 2/3 平均分成 6 份，可以想成 2/3 × 1/6。",
    concept: "分數除以整數應用"
  },
  {
    text: "5/12 × 3/5 = ?",
    num: "1",
    den: "4",
    hint: "可以先約分 5 和 5，再計算會更輕鬆。",
    concept: "分數乘法與約分"
  },
  {
    text: "7/8 × 4/7 = ?",
    num: "1",
    den: "2",
    hint: "先看 7 和 7、4 和 8 能不能約分。",
    concept: "分數乘法與約分"
  },
  {
    text: "2/9 × 3/4 = ?",
    num: "1",
    den: "6",
    hint: "分子 2 × 3，分母 9 × 4，最後約分。",
    concept: "分數乘法基本題"
  },
  {
    text: "圖像題：把 4/5 的花圃再種其中 1/2，種到全部的多少？",
    num: "2",
    den: "5",
    hint: "先畫 5 等份取 4 份，再把這 4 份平均分成 2 份。",
    concept: "圖像與分數乘法"
  },
  {
    text: "情境題：一瓶水有 9/10 公升，喝掉其中 2/3，喝掉多少公升？",
    num: "3",
    den: "5",
    hint: "題目是在問 9/10 的 2/3。",
    concept: "分數乘法情境題"
  },
  {
    text: "應用題：一本書讀了 3/7，又把讀過的部分重點整理了 2/3，整理了全書的多少？",
    num: "2",
    den: "7",
    hint: "讀過的 3/7 裡面再取 2/3。",
    concept: "分數乘法應用"
  },
  {
    text: "10 ÷ 6 = ?",
    num: "5",
    den: "3",
    hint: "先寫成 10/6，再約分成 5/3。",
    concept: "整數相除之分數表示"
  },
  {
    text: "11 ÷ 8 = ?",
    num: "11",
    den: "8",
    hint: "被除數 11 當分子，除數 8 當分母。",
    concept: "整數相除之分數表示"
  },
  {
    text: "15 ÷ 9 = ?",
    num: "5",
    den: "3",
    hint: "15/9 可以約分，分子分母同除以 3。",
    concept: "整數相除與約分"
  },
  {
    text: "情境題：4 公斤米平均裝成 9 袋，每袋多少公斤？",
    num: "4",
    den: "9",
    hint: "4 ÷ 9 可以直接寫成 4/9。",
    concept: "除法情境與分數"
  },
  {
    text: "情境題：13 公尺繩子平均剪成 5 段，每段多少公尺？",
    num: "13",
    den: "5",
    hint: "13 ÷ 5 用假分數表示就是 13/5。",
    concept: "除法情境與分數"
  },
  {
    text: "4/5 ÷ 2 = ?",
    num: "2",
    den: "5",
    hint: "把 4/5 平均分成 2 份。",
    concept: "分數除以整數"
  },
  {
    text: "9/10 ÷ 3 = ?",
    num: "3",
    den: "10",
    hint: "9/10 平均分成 3 份，9 可以先除以 3。",
    concept: "分數除以整數"
  },
  {
    text: "7/12 ÷ 7 = ?",
    num: "1",
    den: "12",
    hint: "7/12 平均分成 7 份，每份是 1/12。",
    concept: "分數除以整數"
  },
  {
    text: "圖像題：把 5/6 的長條平均分給 5 人，每人拿到全部的多少？",
    num: "1",
    den: "6",
    hint: "5/6 分給 5 人，剛好每人拿 1/6。",
    concept: "圖像與分數除法"
  },
  {
    text: "應用題：7/8 公升果醬平均裝成 4 罐，每罐多少公升？",
    num: "7",
    den: "32",
    hint: "把 7/8 平均分成 4 份，也就是乘以 1/4。",
    concept: "分數除以整數應用"
  },
  {
    text: "應用題：3/4 公斤糖平均分成 6 包，每包多少公斤？",
    num: "1",
    den: "8",
    hint: "3/4 ÷ 6 = 3/4 × 1/6，最後約分。",
    concept: "分數除以整數應用"
  }
];

function gcd(a, b) {
  let x = Math.abs(Number(a));
  let y = Math.abs(Number(b));
  while (y) {
    const rest = x % y;
    x = y;
    y = rest;
  }
  return x || 1;
}

function simplifyFraction(num, den) {
  const n = Number(num);
  const d = Number(den);
  if (!Number.isInteger(n) || !Number.isInteger(d) || d === 0) return { num: String(num), den: String(den) };
  const sign = d < 0 ? -1 : 1;
  const divisor = gcd(n, d);
  return {
    num: String((n / divisor) * sign),
    den: String(Math.abs(d / divisor))
  };
}

function normalizeProblemAnswer(problem) {
  const simplified = simplifyFraction(problem.num, problem.den);
  problem.num = simplified.num;
  problem.den = simplified.den;
  return problem;
}

function makeDivisionProblem(total, groups, label = "", concept = "用分數表示整數相除的結果") {
  const answer = simplifyFraction(total, groups);
  const unit = label ? ` ${label}` : "";
  return normalizeProblemAnswer({
    text: `${total} ÷ ${groups} = ?${unit}`,
    num: answer.num,
    den: answer.den,
    hint: `先寫成 ${total}/${groups}，再約到最簡分數。`,
    concept
  });
}

function makeDivisionStory(total, groups, item, unit, concept = "用分數表示除法的應用題") {
  const answer = simplifyFraction(total, groups);
  return normalizeProblemAnswer({
    text: `把 ${total} ${unit}${item}平均分給 ${groups} 人，每人分到多少${unit}${item}？`,
    num: answer.num,
    den: answer.den,
    hint: `平均分就是 ${total} ÷ ${groups}，寫成 ${total}/${groups} 後要約到最簡分數。`,
    concept
  });
}

function makeFractionDivisionLink(top, bottom, subtract = 0) {
  const divisor = bottom - subtract;
  const answer = simplifyFraction(top, divisor);
  const denominatorText = subtract ? `${bottom} - ${subtract}` : `${bottom}`;
  return normalizeProblemAnswer({
    text: `${top}/(${denominatorText}) 相當於哪一個除法？請算出結果。`,
    num: answer.num,
    den: answer.den,
    hint: `分數線也可以看成除號，所以這題是 ${top} ÷ (${denominatorText})。答案也要約到最簡分數。`,
    concept: "連結分數和除法"
  });
}

function makeEqualShareStory(people, amount, item, unit, name = "大家") {
  const answer = simplifyFraction(amount, people);
  return normalizeProblemAnswer({
    text: `${name} ${people} 人平均分 ${amount} ${unit}${item}，每人分到多少${unit}${item}？`,
    num: answer.num,
    den: answer.den,
    hint: `把 ${amount} 平均分成 ${people} 份，就是 ${amount} ÷ ${people}。記得約成最簡分數。`,
    concept: "整數相除的應用"
  });
}

function makeUnitFractionModel(den, divisor, modelNumber = 1) {
  const answer = simplifyFraction(1, den * divisor);
  return normalizeProblemAnswer({
    text: `利用模型做單位分數除以整數：哪一個模型可以表示 1/${den} ÷ ${divisor}？請算出每一小段是多少。`,
    num: answer.num,
    den: answer.den,
    hint: `先把 1/${den} 那一段再平均分成 ${divisor} 份，每份是 1/${den * divisor}。`,
    concept: `利用模型做單位分數除以整數｜模型${modelNumber}`
  });
}

function makeUnitFractionDivide(den, divisor) {
  const answer = simplifyFraction(1, den * divisor);
  return normalizeProblemAnswer({
    text: `1/${den} ÷ ${divisor} = ?`,
    num: answer.num,
    den: answer.den,
    hint: `單位分數再平均分成 ${divisor} 份，分母會變成 ${den} × ${divisor}。`,
    concept: "單位分數除以整數"
  });
}

function makeFractionDivideInteger(num, den, divisor, concept = "分數除以整數") {
  const answer = simplifyFraction(num, den * divisor);
  return normalizeProblemAnswer({
    text: `${num}/${den} ÷ ${divisor} = ?`,
    num: answer.num,
    den: answer.den,
    hint: `把 ${num}/${den} 平均分成 ${divisor} 份，也就是 ${num}/${den} × 1/${divisor}，最後約成最簡分數。`,
    concept
  });
}

function makeTrueFractionDivideStory(num, den, divisor, item, unit, name = "小朋友") {
  const answer = simplifyFraction(num, den * divisor);
  return normalizeProblemAnswer({
    text: `${name}有 ${num}/${den} ${unit}${item}，想平均分給 ${divisor} 個人，每人會分到多少${unit}${item}？`,
    num: answer.num,
    den: answer.den,
    hint: `題目是 ${num}/${den} ÷ ${divisor}。先想平均分，再把答案約到最簡分數。`,
    concept: "真分數除以整數應用題"
  });
}

function makeImproperFractionDivideStory(num, den, divisor, item, unit, name = "大家") {
  const answer = simplifyFraction(num, den * divisor);
  return normalizeProblemAnswer({
    text: `${name}有 ${num}/${den} ${unit}${item}，平均分給 ${divisor} 個人，每人可以拿到多少${unit}${item}？`,
    num: answer.num,
    den: answer.den,
    hint: `假分數或帶分數先保留成分數：${num}/${den} ÷ ${divisor}，再約分。`,
    concept: "假分數/帶分數除以整數應用題"
  });
}

function makeGeneralFractionDivideStory(num, den, divisor, item, unit, name = "他們") {
  const answer = simplifyFraction(num, den * divisor);
  return normalizeProblemAnswer({
    text: `${name}把 ${num}/${den} ${unit}${item}平均分成 ${divisor} 份，每份是多少${unit}${item}？`,
    num: answer.num,
    den: answer.den,
    hint: `把分數平均分成整數份，可以用 ${num}/${den} ÷ ${divisor} 來想。答案要約分。`,
    concept: "分數除以整數應用題"
  });
}

function makeIntegerOrFractionDivideInteger(num, den, divisor) {
  const answer = simplifyFraction(num, den * divisor);
  return normalizeProblemAnswer({
    text: `${num}/${den} ÷ ${divisor} = ?`,
    num: answer.num,
    den: answer.den,
    hint: `先算成 ${num}/${den * divisor}，再檢查能不能約分。`,
    concept: "整數/分數除以整數"
  });
}

function makeFractionMultiplyProblem(aNum, aDen, bNum, bDen, concept = "分數乘法基本題") {
  const answer = simplifyFraction(aNum * bNum, aDen * bDen);
  return normalizeProblemAnswer({
    text: `${aNum}/${aDen} × ${bNum}/${bDen} = ?`,
    num: answer.num,
    den: answer.den,
    hint: `先看成 ${aNum}/${aDen} 的 ${bNum}/${bDen}，分子乘分子、分母乘分母後約分。`,
    concept
  });
}

function makeFractionTimesIntegerStory(num, den, times, item, unit, name = "媽媽") {
  const answer = simplifyFraction(num * times, den);
  return normalizeProblemAnswer({
    text: `${name}做 1 ${unit}${item}需要 ${num}/${den} 份材料，做 ${times} ${unit}${item}需要多少份材料？`,
    num: answer.num,
    den: answer.den,
    hint: `這題是 ${num}/${den} × ${times}，可以想成 ${times} 個 ${num}/${den} 相加。`,
    concept: "分數X整數的應用"
  });
}

function makeImproperMultiplyStory(aNum, aDen, bNum, bDen, item, unit, name = "小組") {
  const answer = simplifyFraction(aNum * bNum, aDen * bDen);
  return normalizeProblemAnswer({
    text: `${name}有 ${aNum}/${aDen} ${unit}${item}，又準備了它的 ${bNum}/${bDen} 倍，一共相當於多少${unit}${item}？`,
    num: answer.num,
    den: answer.den,
    hint: `假分數先不用改成帶分數，直接算 ${aNum}/${aDen} × ${bNum}/${bDen}，最後約分。`,
    concept: "假分數x假分數的應用"
  });
}

function makeFactorProductOrderProblem(baseName, bNum, bDen, cNum, cDen, ask = "最多") {
  const values = [
    { label: "甲", num: 1, den: 1 },
    { label: "乙", num: bNum, den: bDen },
    { label: "丙", num: cNum, den: cDen }
  ].map((item) => ({ ...item, value: item.num / item.den }));
  const picked = values.sort((a, b) => ask === "最多" ? b.value - a.value : a.value - b.value)[0];
  const answer = simplifyFraction(picked.num, picked.den);
  return normalizeProblemAnswer({
    text: `甲${baseName}是 1，乙${baseName}是甲的 ${bNum}/${bDen} 倍，丙${baseName}是甲的 ${cNum}/${cDen} 倍。${ask}的量是甲的幾倍？`,
    num: answer.num,
    den: answer.den,
    hint: `先比較被乘數 1、乘數 ${bNum}/${bDen}、積 ${cNum}/${cDen} 的大小，再選出${ask}的量。`,
    concept: "被乘數、乘數和積排序"
  });
}

problems.push(
  makeDivisionProblem(10, 4),
  makeDivisionProblem(14, 6),
  makeDivisionProblem(16, 10),
  makeDivisionProblem(18, 12),
  makeDivisionProblem(21, 14),
  makeDivisionProblem(25, 15),
  makeDivisionProblem(28, 20),
  makeDivisionProblem(35, 21),
  makeDivisionProblem(40, 24),
  makeDivisionProblem(45, 30),
  makeDivisionStory(3, 5, "健行距離", "公里"),
  makeDivisionStory(8, 12, "蛋糕", "塊"),
  makeDivisionStory(10, 15, "蛋糕", "塊"),
  makeDivisionStory(6, 8, "果汁", "公升"),
  makeDivisionStory(9, 12, "色紙", "張"),
  makeDivisionStory(12, 18, "緞帶", "公尺"),
  makeDivisionStory(15, 20, "餅乾", "片"),
  makeDivisionStory(18, 24, "米", "公斤"),
  makeFractionDivisionLink(4, 7, 1),
  makeFractionDivisionLink(6, 9, 3),
  makeFractionDivisionLink(8, 11, 3),
  makeFractionDivisionLink(10, 14, 4),
  makeFractionDivisionLink(12, 17, 5),
  makeFractionDivisionLink(15, 21, 6),
  makeFractionDivisionLink(18, 25, 7),
  makeEqualShareStory(3, 1, "蜂蜜蛋糕", "條", "廷廷"),
  makeEqualShareStory(9, 6, "蛋糕", "塊", "維維和朋友"),
  makeEqualShareStory(4, 3, "披薩", "個", "小組"),
  makeEqualShareStory(6, 4, "地瓜", "條", "家人"),
  makeEqualShareStory(8, 10, "果凍", "個", "班上"),
  makeEqualShareStory(12, 15, "麵包", "個", "社團"),
  makeEqualShareStory(14, 21, "貼紙", "張", "同學"),
  makeEqualShareStory(16, 20, "餅乾", "片", "小隊")
);

problems.push(
  makeUnitFractionModel(5, 2, 1),
  makeUnitFractionModel(6, 3, 2),
  makeUnitFractionModel(8, 4, 3),
  makeUnitFractionModel(10, 5, 4),
  makeUnitFractionDivide(6, 4),
  makeUnitFractionDivide(7, 3),
  makeUnitFractionDivide(8, 2),
  makeUnitFractionDivide(9, 6),
  makeUnitFractionDivide(12, 5),
  makeFractionDivideInteger(3, 4, 12),
  makeFractionDivideInteger(5, 6, 10),
  makeFractionDivideInteger(7, 9, 14),
  makeFractionDivideInteger(8, 15, 4),
  makeFractionDivideInteger(11, 12, 6),
  makeFractionDivideInteger(9, 16, 3),
  makeTrueFractionDivideStory(2, 5, 4, "餅乾", "盒", "小白"),
  makeTrueFractionDivideStory(3, 7, 6, "果汁", "公升", "哥哥"),
  makeTrueFractionDivideStory(5, 8, 5, "緞帶", "公尺", "美美"),
  makeTrueFractionDivideStory(7, 10, 14, "糖果", "包", "老師"),
  makeImproperFractionDivideStory(17, 6, 10, "糖果", "包", "每包糖果有 60 顆，大家"),
  makeImproperFractionDivideStory(11, 4, 5, "披薩", "個", "小組"),
  makeImproperFractionDivideStory(13, 5, 8, "蜂蜜蛋糕", "條", "班上"),
  makeImproperFractionDivideStory(19, 6, 12, "麵粉", "公斤", "烘焙社"),
  makeGeneralFractionDivideStory(1, 3, 30, "月薪", "份", "姊姊"),
  makeGeneralFractionDivideStory(5, 12, 4, "色紙", "張", "小隊"),
  makeGeneralFractionDivideStory(7, 8, 7, "果醬", "瓶", "家人"),
  makeGeneralFractionDivideStory(9, 10, 6, "牛奶", "公升", "餐廳"),
  makeIntegerOrFractionDivideInteger(15, 18, 4),
  makeIntegerOrFractionDivideInteger(12, 16, 3),
  makeIntegerOrFractionDivideInteger(21, 28, 7),
  makeIntegerOrFractionDivideInteger(10, 15, 8),
  makeIntegerOrFractionDivideInteger(18, 24, 9)
);

problems.push(
  makeFactorProductOrderProblem("瓶果汁", 3, 4, 7, 5, "最多"),
  makeFactorProductOrderProblem("盒餅乾", 2, 3, 5, 4, "最多"),
  makeFactorProductOrderProblem("條緞帶", 5, 6, 4, 3, "最少"),
  makeFactorProductOrderProblem("盒彩筆", 7, 8, 9, 7, "最多"),
  makeFactorProductOrderProblem("包糖果", 4, 5, 6, 5, "最少"),
  makeFactorProductOrderProblem("杯果汁", 5, 4, 3, 2, "最多"),
  makeFractionTimesIntegerStory(4, 3, 2, "面牆", "面", "媽媽粉刷"),
  makeFractionTimesIntegerStory(5, 6, 3, "蛋糕", "個", "阿姨烤"),
  makeFractionTimesIntegerStory(3, 5, 4, "緞帶", "條", "小美剪"),
  makeFractionTimesIntegerStory(7, 8, 6, "果汁", "瓶", "班上準備"),
  makeFractionTimesIntegerStory(5, 4, 5, "披薩", "個", "社團買"),
  makeFractionTimesIntegerStory(2, 3, 7, "布料", "段", "老師裁"),
  makeFractionTimesIntegerStory(9, 10, 8, "牛奶", "瓶", "餐廳用"),
  makeFractionTimesIntegerStory(7, 6, 9, "糖水", "杯", "小隊調"),
  makeImproperMultiplyStory(5, 3, 7, 4, "果醬", "瓶", "烘焙社"),
  makeImproperMultiplyStory(7, 5, 8, 3, "麵粉", "公斤", "餐廳"),
  makeImproperMultiplyStory(9, 4, 5, 2, "色紙", "張", "美術課"),
  makeImproperMultiplyStory(11, 6, 13, 5, "蜂蜜", "罐", "小組"),
  makeImproperMultiplyStory(8, 3, 7, 2, "緞帶", "公尺", "布置組"),
  makeImproperMultiplyStory(13, 8, 9, 4, "果汁", "公升", "園遊會"),
  makeFractionMultiplyProblem(2, 7, 5, 6, "真分數乘以真分數的計算"),
  makeFractionMultiplyProblem(3, 8, 4, 9, "真分數乘以真分數的計算"),
  makeFractionMultiplyProblem(5, 12, 6, 7, "分數乘法與約分"),
  makeFractionMultiplyProblem(7, 10, 5, 14, "分數乘法與約分"),
  makeFractionMultiplyProblem(9, 11, 4, 6, "分數乘法與約分"),
  makeFractionMultiplyProblem(11, 12, 3, 5, "分數乘法基本題"),
  makeFractionMultiplyProblem(13, 15, 6, 7, "分數乘法基本題"),
  makeFractionMultiplyProblem(5, 9, 8, 15, "分數乘法與約分"),
  makeFractionMultiplyProblem(4, 13, 7, 8, "真分數乘以真分數的計算"),
  makeFractionMultiplyProblem(6, 11, 5, 9, "真分數乘以真分數的計算"),
  makeFractionMultiplyProblem(7, 4, 9, 5, "假分數x假分數的計算"),
  makeFractionMultiplyProblem(8, 3, 5, 2, "假分數x假分數的計算"),
  makeFractionMultiplyProblem(10, 7, 14, 5, "假分數x假分數的計算"),
  makeFractionMultiplyProblem(11, 6, 12, 5, "假分數x假分數的計算"),
  makeFactorProductOrderProblem("盒彩色筆", 9, 10, 11, 8, "最多"),
  makeFactorProductOrderProblem("桶油漆", 6, 7, 5, 6, "最少"),
  makeFractionTimesIntegerStory(11, 12, 6, "海報", "張", "美術課做"),
  makeImproperMultiplyStory(14, 9, 15, 7, "布料", "公尺", "服裝組"),
  makeDivisionProblem(22, 16),
  makeDivisionProblem(27, 18),
  makeDivisionStory(20, 30, "飲料", "瓶"),
  makeDivisionStory(24, 36, "繩子", "公尺"),
  makeFractionDivisionLink(20, 31, 11),
  makeEqualShareStory(18, 27, "糖果", "包", "童軍隊"),
  makeUnitFractionDivide(15, 6),
  makeFractionDivideInteger(13, 18, 5),
  makeTrueFractionDivideStory(11, 16, 8, "果汁", "公升", "小芳"),
  makeImproperFractionDivideStory(23, 7, 6, "蛋糕", "條", "烘焙社"),
  makeGeneralFractionDivideStory(13, 15, 10, "緞帶", "公尺", "布置組"),
  makeIntegerOrFractionDivideInteger(25, 30, 5)
);

problems.forEach(normalizeProblemAnswer);

let currentProblem = 0;
let completed = 0;
let stars = 16;
let records = [];
let learner = JSON.parse(localStorage.getItem("mathStewardLearner") || "null");
let currentAccount = learner?.account || "";
let currentRecommendationView = "";
let currentRecommendationAction = null;
let selectedUnit = "";
let selectedMood = "";
let currentConceptKey = "fractionMultiply";
let currentConceptStep = 0;
let conceptSelectionCount = 0;
let conceptHintTimer = null;
let selectedConceptTopic = "";
let currentVideoConceptKey = "fractionMultiply";
let videoNudgeTimer = null;
let currentVideoUrl = "";
let practiceHintTimer = null;
let moodChatTimer = null;
let practiceAnswered = false;
let quizQuestions = [];
let quizIndex = 0;
let quizResults = [];

const moodProfiles = {
  happy: {
    label: "開心",
    mode: "影片學習",
    reply: "狀態不錯，適合直接看影片學習。",
    detail: "先看影片，再做練習。"
  },
  normal: {
    label: "普通",
    mode: "穩定學習",
    reply: "普通也可以。先慢慢選單元，不用急。",
    detail: "先看一小段影片，再看要不要練習。"
  },
  unhappy: {
    label: "不開心",
    mode: "先舒壓",
    reply: "今天先不要硬撐。你可以先跟我說說，也可以先看一小段舒壓影片。",
    detail: "先把心情放穩，不急著開始。"
  }
};

const unitProfiles = {
  fractionMultiply: {
    label: "分數的乘法",
    firstStep: "先釐清「一部分的一部分」",
    view: "course"
  },
  integerDivision: {
    label: "整數相除之分數表示",
    firstStep: "先把除法結果寫成分數",
    view: "course"
  },
  fractionDivideInteger: {
    label: "分數除以整數",
    firstStep: "先用平均分配理解題意",
    view: "course"
  }
};

const difficultyProfiles = {
  concept: {
    tag: "概念理解",
    reply: "聽起來你不是不會算，而是還沒抓到題目在問什麼。我建議先回到這個單元的意思。",
    detail: "先用生活語句理解題意，再進入算式。",
    view: "course"
  },
  visual: {
    tag: "圖像連結",
    reply: "你卡在圖和算式怎麼對起來。這種情況先看影片或概念示範會比較順。",
    detail: "用圖像看見每一步，再把圖上的結果轉成分數。",
    view: "course"
  },
  calculation: {
    tag: "計算穩定度",
    reply: "你的問題比較像是步驟會，但計算容易漏掉或寫錯。先做少量練習並標記把握度。",
    detail: "每題作答後留下信心與錯因，方便下一次複習。",
    view: "practice"
  },
  confidence: {
    tag: "學習信心",
    reply: "你可能一看到分數就覺得壓力大。今天先不要追求速度，從最小的一題開始。",
    title: "低壓暖身練習",
    detail: "先做一題有提示的題目，答完再決定要不要繼續。",
    view: "practice"
  }
};

function getUsers() {
  return JSON.parse(localStorage.getItem("mathStewardUsers") || "{}");
}

function saveUsers(users) {
  localStorage.setItem("mathStewardUsers", JSON.stringify(users));
}

function progressKey(account, type) {
  return `mathStewardProgress:${account}:${type}`;
}

function loadProgress(account) {
  stars = Number(localStorage.getItem(progressKey(account, "stars")) || "16");
  records = JSON.parse(localStorage.getItem(progressKey(account, "records")) || "[]");
  if (starCount) starCount.textContent = stars;
  renderRecords();
  renderData();
}

function setMessage(element, text, success = false) {
  element.textContent = text;
  element.classList.toggle("success", success);
}

function showAuthTab(name) {
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authTab === name));
  authForms.forEach((form) => form.classList.toggle("active", form.id === `${name}Form`));
  setMessage(loginMessage, "");
  setMessage(registerMessage, "");
}

function hasLetterAndNumber(value) {
  return /[A-Za-z]/.test(value) && /\d/.test(value);
}

function nicknameExists(users, nickname) {
  return Object.values(users).some((user) => user.nickname === nickname);
}

function enterApp(profile) {
  learner = profile;
  currentAccount = profile.account;
  localStorage.setItem("mathStewardLearner", JSON.stringify(profile));
  learnerLabel.textContent = `${profile.grade}｜${profile.unit}`;
  welcomeText.textContent = `${profile.name}，歡迎回來`;
  loadProgress(profile.account);
  loginScreen.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
  showView("home");
}

function leaveApp() {
  saveState();
  localStorage.removeItem("mathStewardLearner");
  learner = null;
  currentAccount = "";
  appShell.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
  showAuthTab("login");
}

function showView(id) {
  views.forEach((view) => view.classList.toggle("active", view.id === id));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showChoiceView(id) {
  const view = document.getElementById(id);
  if (view) view.classList.add("choice-mode");
  showView(id);
}

function showActiveLearningView(id) {
  const view = document.getElementById(id);
  if (view) view.classList.remove("choice-mode");
  showView(id);
}

function saveState() {
  if (!currentAccount) return;
  localStorage.setItem(progressKey(currentAccount, "stars"), String(stars));
  localStorage.setItem(progressKey(currentAccount, "records"), JSON.stringify(records));
}

function renderRecords() {
  const list = document.getElementById("recordList");
  const summary = document.getElementById("recordSummary");
  const suggestion = document.getElementById("nextSuggestion");
  if (!list) return;

  const answerRecords = records.filter((item) => item.result === "答對" || item.result === "需要複習");
  const correctCount = answerRecords.filter((item) => item.result === "答對").length;
  const reviewCount = answerRecords.filter((item) => item.result === "需要複習").length;
  const correctRate = answerRecords.length ? Math.round((correctCount / answerRecords.length) * 100) : 0;
  const latest = records[records.length - 1];
  const latestQuiz = records.slice().reverse().find((item) => item.result === "測驗完成");
  const latestReview = answerRecords.slice().reverse().find((item) => item.result === "需要複習");
  const reviewConcepts = answerRecords
    .filter((item) => item.result === "需要複習")
    .reduce((acc, item) => {
      acc[item.concept] = (acc[item.concept] || 0) + 1;
      return acc;
    }, {});
  const weakestConcept = Object.entries(reviewConcepts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
  const today = new Date().toLocaleDateString("zh-TW");
  const todayRecords = records.filter((item) => item.time?.startsWith(today) || item.time?.includes(today));
  const studyRecords = todayRecords.filter((item) => item.result === "答對" || item.result === "需要複習");
  const talkRecords = todayRecords.filter((item) => /對話/.test(item.result));
  const quizRecords = todayRecords.filter((item) => item.result === "測驗完成");

  if (summary) {
    summary.innerHTML = answerRecords.length
      ? `
        <div class="record-metric">
          <strong>${correctRate}%</strong>
          <span>目前答對率</span>
        </div>
        <div class="bar-row"><i style="width:${correctRate}%"></i></div>
        <div class="record-item">已作答 ${answerRecords.length} 題，其中 ${correctCount} 題穩定、${reviewCount} 題需要再看。</div>
        <div class="record-item">${weakestConcept ? `最近最需要照顧的是「${weakestConcept}」。` : "目前沒有明顯弱點，可以繼續累積題目。"}</div>
        <div class="record-item">${latest ? `最近一次紀錄：${latest.result}｜${formatMath(latest.problem)}` : "還沒有最近紀錄。"}</div>
      `
      : '<div class="record-item">還沒有作答紀錄。開始練習後，這裡會整理你的狀況。</div>';
  }

  if (suggestion) {
    const targetConcept = latestReview?.concept || latestQuiz?.concept || weakestConcept || "分數乘法";
    const targetKey = conceptKeyFromRecord(targetConcept);
    if (latestQuiz) {
      suggestion.innerHTML = `
        <div class="record-item">${latestQuiz.diagnosis}</div>
        <div class="record-actions">
          <button class="secondary-action small" data-record-action="video" data-record-concept="${targetKey}">看推薦影片</button>
          <button class="primary-action small" data-record-action="practice" data-record-concept="${targetKey}">做加強練習</button>
        </div>
      `;
    } else if (latestReview) {
      suggestion.innerHTML = `
        <div class="record-item">建議先回到「${latestReview.concept}」，看一個例子，再做 1 題相似題。</div>
        <div class="record-actions">
          <button class="secondary-action small" data-record-action="video" data-record-concept="${targetKey}">回影片學習</button>
          <button class="primary-action small" data-record-action="practice" data-record-concept="${targetKey}">練相似題</button>
        </div>
      `;
    } else if (answerRecords.length) {
      suggestion.innerHTML = `
        <div class="record-item">目前很順，可以挑戰測驗，看看能不能穩定完成 10 題。</div>
        <div class="record-actions">
          <button class="primary-action small" data-record-action="quiz" data-record-concept="${targetKey}">開始 10 題測驗</button>
        </div>
      `;
    } else {
      suggestion.innerHTML = `
        <div class="record-item">先完成 1 題練習，我會再依照結果給下一步。</div>
        <div class="record-actions">
          <button class="primary-action small" data-record-action="practice" data-record-concept="fractionMultiply">先做暖身題</button>
        </div>
      `;
    }
  }

  if (records.length === 0) {
    list.innerHTML = '<div class="record-item">尚未作答。完成一題後，這裡會出現學習紀錄。</div>';
    return;
  }

  list.innerHTML = `
    <div class="record-item">今天完成 ${studyRecords.length} 題練習，${quizRecords.length} 次測驗，${talkRecords.length} 次學習對話。</div>
    <div class="record-item">${reviewCount ? `目前有 ${reviewCount} 題需要再看，系統會優先推薦相近內容。` : "目前沒有需要複習的題目，可以維持現在節奏。"}</div>
    <div class="record-item">
      <strong>最近整理</strong><br />
      ${records.slice(-3).reverse().map((item) => `${item.result}｜${formatMath(item.problem)}`).join("<br />")}
    </div>
  `;
}

function conceptKeyFromRecord(concept = "") {
  if (/整數相除|除法情境|用分數表示|連結分數和除法/.test(concept)) return "integerDivision";
  if (/分數除以整數|單位分數|平均分/.test(concept)) return "fractionDivideInteger";
  return "fractionMultiply";
}

function problemMatchesConcept(problem, conceptKey) {
  if (conceptKey === "integerDivision") {
    return /整數相除|除法情境|用分數表示|連結分數和除法/.test(problem.concept);
  }
  if (conceptKey === "fractionDivideInteger") {
    return /分數除以整數/.test(problem.concept);
  }
  return !/[÷除]/.test(problem.text)
    && !/除法|除以/.test(problem.concept)
    && /分數乘法|乘法|乘數|X|x|約分|一部分|圖像/.test(problem.concept);
}

function getProblemPool(conceptKey = currentVideoConceptKey) {
  const pool = problems.filter((problem) => problemMatchesConcept(problem, conceptKey));
  return pool.length ? pool : problems;
}

function setRandomProblemFromPool(conceptKey = currentVideoConceptKey) {
  const pool = getProblemPool(conceptKey);
  const problem = shuffleItems(pool)[0];
  currentProblem = Math.max(0, problems.indexOf(problem));
}

function startPractice(conceptKey = currentVideoConceptKey) {
  currentVideoConceptKey = conceptKey;
  setRandomProblemFromPool(conceptKey);
  showActiveLearningView("practice");
  renderProblem();
}

function renderProblem() {
  if (!problemMatchesConcept(problems[currentProblem], currentVideoConceptKey)) {
    setRandomProblemFromPool(currentVideoConceptKey);
  }
  const problem = problems[currentProblem];
  practiceAnswered = false;
  if (practiceHintTimer) clearTimeout(practiceHintTimer);
  document.getElementById("problemNumber").textContent = currentProblem + 1;
  document.getElementById("problemText").innerHTML = formatMath(cleanQuestionText(problem.text), false);
  renderPracticeVisual(problem);
  document.getElementById("hintText").innerHTML = formatMath(problem.hint);
  document.getElementById("numInput").value = "";
  document.getElementById("denInput").value = "";
  document.getElementById("submitAnswer").disabled = false;
  document.getElementById("feedbackText").textContent = "先動手算，送出後會看答案。";
  renderProblemChecklist(problem);
  practiceResponse.classList.add("is-hidden");
  practiceResponse.classList.remove("correct", "wrong");
  practiceHintTimer = setTimeout(() => {
    if (!practiceAnswered) {
      document.getElementById("hintText").innerHTML = formatMath(getPracticeHint(problem));
      document.getElementById("feedbackText").textContent = "小兔提示出現了，先看右邊再試一次。";
    }
  }, 10000);
}

function pickNextProblem() {
  const pool = getProblemPool();
  let nextProblem = shuffleItems(pool)[0];
  if (pool.length > 1) {
    while (problems.indexOf(nextProblem) === currentProblem) nextProblem = shuffleItems(pool)[0];
  }
  currentProblem = Math.max(0, problems.indexOf(nextProblem));
}

function renderProblemChecklist(problem) {
  const conceptText = document.getElementById("checkConceptText");
  const simplifyText = document.getElementById("checkSimplifyText");
  const conceptCheck = document.getElementById("checkConcept");
  const simplifyCheck = document.getElementById("checkSimplify");
  if (conceptCheck) conceptCheck.checked = false;
  if (simplifyCheck) simplifyCheck.checked = false;

  if (/圖像|圖|面積/.test(problem.concept) || /圖像題/.test(problem.text)) {
    conceptText.textContent = "我有先看圖上的全部和選到的部分";
  } else if (/情境|應用/.test(problem.concept)) {
    conceptText.textContent = "我有先把題目翻成算式";
  } else if (/整數相除/.test(problem.concept)) {
    conceptText.textContent = "我知道誰是分子、誰是分母";
  } else {
    conceptText.textContent = "我能說出題目在問什麼";
  }

  simplifyText.textContent = /約分/.test(problem.hint) || Number(problem.num) !== 1
    ? "我有檢查答案能不能約分"
    : "我有檢查分母代表幾等份";
}

function renderPracticeVisual(problem) {
  const visual = document.getElementById("problemVisual");
  if (!visual) return;
  renderQuestionVisual(problem, visual);
}

function getPracticeHint(problem) {
  if (/約分/.test(problem.hint) || Number(problem.num) !== 0 && Number(problem.den) !== 0 && Math.abs(Number(problem.num)) !== 1) {
    return `${problem.hint} 這題可能要檢查能不能約分。`;
  }
  if (/圖像|圖|格|面積/.test(problem.concept) || /圖像題/.test(problem.text)) {
    return `${problem.hint} 先找全部有幾格，再找最後選到幾格。`;
  }
  if (/情境|應用/.test(problem.concept)) {
    return `${problem.hint} 先把題目翻成一句算式，再動手算。`;
  }
  if (/整數相除/.test(problem.concept)) {
    return `${problem.hint} 被分的數當分子，分成幾份當分母。`;
  }
  if (/除以整數/.test(problem.concept)) {
    return `${problem.hint} 除以整數，可以想成把原本的分數平均分。`;
  }
  return problem.hint;
}

function renderData() {
  if (!userDataList || !learningDataList) return;
  const users = getUsers();
  const accounts = Object.keys(users);

  userDataList.innerHTML = accounts.length
    ? accounts
        .map(
          (account) => `
            <div class="data-item">
              <strong>${users[account].nickname}</strong>
              帳號：${account}<br />
              年級：${users[account].grade}｜單元：${users[account].unit}<br />
              建立時間：${new Date(users[account].createdAt).toLocaleString("zh-TW")}
            </div>
          `
        )
        .join("")
    : '<div class="data-item">目前還沒有註冊使用者。</div>';

  learningDataList.innerHTML = records.length
    ? records
        .slice()
        .reverse()
        .map(
          (item) => `
            <div class="data-item">
              <strong>${item.result}｜${formatMath(item.problem)}</strong>
              信心：${item.confidence}<br />
              觀察：${item.diagnosis}<br />
              時間：${item.time}
            </div>
          `
        )
        .join("")
    : '<div class="data-item">目前帳號還沒有學習紀錄。</div>';
}

function isEquivalentFraction(answerNum, answerDen, problem) {
  const numerator = Number(answerNum);
  const denominator = Number(answerDen);
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator) || denominator === 0) return false;
  const answer = simplifyFraction(numerator, denominator);
  const expected = simplifyFraction(problem.num, problem.den);
  return answer.num === String(numerator)
    && answer.den === String(denominator)
    && answer.num === expected.num
    && answer.den === expected.den;
}

function isSameFractionValue(answerNum, answerDen, problem) {
  const numerator = Number(answerNum);
  const denominator = Number(answerDen);
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator) || denominator === 0) return false;
  return numerator * Number(problem.den) === Number(problem.num) * denominator;
}

function diagnosePractice(isCorrect, problem) {
  if (isCorrect) return `這題通過。下一題會繼續練「${problem.concept}」。`;
  return `先留下這題，等一下可以回紀錄看錯因。這題重點是「${problem.concept}」。`;
}

function appendCoachMessage(type, text) {
  coachEmpty.classList.add("is-hidden");
  const row = document.createElement("div");
  row.className = `diagnostic-message ${type}`;
  row.innerHTML = formatMath(text);
  coachMessages.appendChild(row);
  coachMessages.scrollTop = coachMessages.scrollHeight;
}

function buildCoachReply(text) {
  if (/圖|格|面積|看不出/.test(text)) {
    return "你願意說出「看圖看不出來」其實很棒，這代表你不是亂猜答案。先做一小步就好：看圖時先找「全部被分成幾份」，再找「被選到幾份」。你可以先告訴我，你看到的圖是被切成幾格嗎？";
  }
  if (/分母/.test(text)) {
    return "你注意到分母，這是很好的問題。分母其實是在說「一個整體被切成幾份」。先不用背公式，我們只想一件事：如果原本切成 3 份，又每一份再切成 4 小份，全部會變成幾小份？";
  }
  if (/分子/.test(text)) {
    return "你有抓到分子，這很好。分子可以先想成「我們拿到幾份」。下一步不要急著算，先用手指或筆圈出最後拿到的小格，數一數有幾格就好。";
  }
  if (/公式|為什麼|不懂/.test(text)) {
    return "你問「為什麼」很重要，這比只背公式更接近真的會。先把分數乘法想成一句話：拿一部分裡面的一部分。今天先不用一次懂全部，我們先用一題圖來看這句話。";
  }
  if (/算錯|計算|約分|錯/.test(text)) {
    return "算錯不代表你不會，很多時候只是跳太快。你可以先把答案分成三行寫：第一行寫算式，第二行寫分子乘分子、分母乘分母，第三行再看能不能約分。這樣比較不會亂掉。";
  }
  if (/怕|緊張|難|不會/.test(text)) {
    return "先跟你說，你不是笨，也不是不能學。分數一開始本來就容易讓人緊張。我們先只做一件很小的事：不用算答案，先猜它會變大還是變小。猜完再慢慢看原因。";
  }
  return "謝謝你先說出來。你不用一次講得很清楚，我們可以慢慢拆。你可以接著選一個比較像的情況：是題目意思不懂、圖看不懂、還是算式做到一半會亂掉？";
}

function getMemoryNote() {
  const recent = records.slice(-3).reverse();
  if (!recent.length) {
    return "我會從今天開始記住你容易卡住的地方，之後再回來看你是不是比上次更順。";
  }
  const latest = recent[0];
  if (latest.result === "答對") {
    return "我記得你前面有答對過題目，所以你不是沒有能力，只是有些步驟需要被照顧一下。";
  }
  if (latest.result === "需要複習") {
    return `我記得你前面有一題留下來複習，觀察是：${latest.diagnosis}`;
  }
  if (latest.result === "學習對話" || latest.result === "伴讀對話" || latest.result === "管家對話") {
    return `我記得你前面提到過「${latest.concept}」，我們可以沿著這個線索慢慢整理。`;
  }
  return "我會把你今天說的話和做題狀況留下來，下次就不用從零開始。";
}

function buildStewardReply(text) {
  const memory = getMemoryNote();
  if (/圖|格|面積|看不出/.test(text)) {
    return `${memory} 你願意說出「看圖看不出來」很重要，這不是笨，是圖還沒有跟你的腦袋接上。現在只做一小步：先找全部被分成幾份，再找被選到幾份。你不用急著算答案。`;
  }
  if (/分母/.test(text)) {
    return `${memory} 你會問分母，代表你有在想「為什麼」，這很好。分母是在照顧「被切成幾份」。現在先想一件事：原本切成 3 份，如果每一份又切成 4 小份，全部會變成幾小份？`;
  }
  if (/分子/.test(text)) {
    return `${memory} 你抓到分子，已經有一個入口了。分子可以先想成「拿到幾份」。現在不要急著寫公式，先圈出最後拿到的小格，數一數有幾格就好。`;
  }
  if (/公式|為什麼|不懂/.test(text)) {
    return `${memory} 你問「為什麼」很值得被好好回答，不需要硬背。先把分數乘法放成一句人話：拿一部分裡面的一部分。今天不用一次懂完，我陪你先看一題圖就好。`;
  }
  if (/算錯|計算|約分|錯/.test(text)) {
    return `${memory} 算錯不代表你不會，很多時候只是腦袋跑太快。下一題我們用三行保護你：第一行寫算式，第二行寫分子乘分子、分母乘分母，第三行再看能不能約分。`;
  }
  if (/怕|緊張|難|不會|沒信心/.test(text)) {
    return `${memory} 先跟你說，你不是笨，也不是不能學。分數一開始本來就容易讓人緊張。我會陪你把題目切小：現在不用算答案，只先猜它會變大還是變小。`;
  }
  return `${memory} 謝謝你先說出來。你不用一次講得很清楚，我會陪你慢慢拆。你可以再補一句：比較像是題目意思不懂、圖看不懂，還是做到一半會亂掉？`;
}

function buildComfortReply(text) {
  if (/哭|難過|傷心|委屈|想哭/.test(text)) {
    return "聽起來你今天真的很難受。你不用急著把自己整理好，我會先陪你。是有人讓你不舒服，還是今天發生了什麼事？";
  }
  if (/生氣|氣|火大|討厭/.test(text)) {
    return "感覺你心裡有一股氣卡住了。先不用壓下去，也不用假裝沒事。你想罵一罵也可以，我會聽。是什麼讓你這麼不舒服？";
  }
  if (/累|好累|沒力|壓力|煩|不想/.test(text)) {
    return "我聽到了，你現在可能真的很累。累的時候什麼事都會變得更重。你要不要先跟我說，是身體累、心裡累，還是今天事情太多？";
  }
  if (/怕|緊張|擔心|害怕/.test(text)) {
    return "害怕和緊張都不是小事。謝謝你願意講出來。你比較擔心的是被罵、做不好，還是有一件事一直壓在心裡？";
  }
  if (/孤單|沒人|朋友|吵架|同學|家人|爸|媽|老師/.test(text)) {
    return "聽起來這件事可能跟身邊的人有關。跟人相處卡住的時候真的會很悶。你想先說發生了什麼嗎？我不會急著評斷你。";
  }
  if (/不知道|沒事|還好|嗯|喔/.test(text)) {
    return "可以，不知道也沒關係。有時候就是說不出哪裡怪，只覺得心裡悶悶的。我先陪你待一下。你可以打一個字形容現在的感覺就好。";
  }
  return "謝謝你願意跟我說。這裡不用說得很完整，也不用說得很漂亮。我先聽你講。你想從「今天發生什麼事」開始說，還是只想先說你現在的感覺？";
}

function inferDifficulty(text) {
  if (/圖|格|看不出|面積|模型|連不起/.test(text)) return "visual";
  if (/影片|看影片|動畫|示範/.test(text)) return "visual";
  if (/概念|意思|為什麼|原理|不懂/.test(text)) return "concept";
  if (/算錯|計算|約分|分子|分母|乘|除|答案|步驟/.test(text)) return "calculation";
  if (/怕|緊張|不敢|沒有把握|很難|討厭/.test(text)) return "confidence";
  return "concept";
}

function resetDiagnosticFlow() {
  if (moodChatTimer) clearTimeout(moodChatTimer);
  moodChatTimer = null;
  selectedUnit = "";
  selectedMood = "";
  currentRecommendationView = "";
  currentRecommendationAction = null;
  diagnosticMessages.innerHTML = "";
  diagnosticInput.value = "";
  moodButtons.forEach((button) => button.classList.remove("selected"));
  unitButtons.forEach((button) => button.classList.remove("selected"));
  moodReplies.classList.remove("is-hidden");
  unitReplies.classList.add("is-hidden");
  difficultyReplies.classList.add("is-hidden");
  diagnosticInputBlock.classList.add("is-hidden");
  difficultyTag.textContent = "等待你的回答";
  recommendReason.textContent = "先選今天的心情，再選單元和目前遇到的狀況。";
  recommendTitle.textContent = "尚未產生";
  recommendDetail.textContent = "完成選擇後會出現建議活動。";
  startRecommendationBtn.disabled = true;
}

function selectMood(moodKey) {
  selectedMood = moodKey;
  selectedUnit = "";
  currentRecommendationView = "";
  currentRecommendationAction = null;
  const mood = moodProfiles[moodKey];
  moodButtons.forEach((button) => button.classList.toggle("selected", button.dataset.mood === moodKey));
  unitButtons.forEach((button) => button.classList.remove("selected"));
  appendDiagnosticMessage("student", mood.label);

  if (moodKey === "unhappy") {
    appendDiagnosticMessage("coach", `${mood.reply} 我會先聽你說，不急著安排學習。`);
    difficultyTag.textContent = mood.mode;
    recommendReason.textContent = "先照顧心情。想安靜一下，可以先看小影片。";
    recommendTitle.textContent = "小影片舒壓";
    recommendDetail.textContent = "看完如果舒服一點，再決定要不要繼續。";
    const relaxVideo = pickRelaxVideo();
    currentRecommendationAction = { type: "video", url: relaxVideo.url, file: relaxVideo.file, title: relaxVideo.title, note: "先放鬆一下。超過 10 分鐘，我會再輕輕提醒你下一步。" };
    moodReplies.classList.add("is-hidden");
    unitReplies.classList.add("is-hidden");
    difficultyReplies.classList.add("is-hidden");
    diagnosticInputBlock.classList.remove("is-hidden");
    diagnosticInput.placeholder = "你可以先說：今天發生什麼事，或只打一個字形容心情也可以。";
    startRecommendationBtn.disabled = false;
    if (moodChatTimer) clearTimeout(moodChatTimer);
    moodChatTimer = setTimeout(() => {
      appendDiagnosticMessage("coach", "我陪你聊了一陣子了。如果你現在有一點點準備好了，可以選一個單元，我陪你只做很小一步。還不想也沒關係。");
      unitReplies.classList.remove("is-hidden");
    }, 10 * 60 * 1000);
    return;
  }

  appendDiagnosticMessage("coach", `${mood.reply} 你最近比較想處理哪一個單元？`);
  difficultyTag.textContent = mood.mode;
  recommendReason.textContent = "接著選一個單元，我會把心情和困難點一起算進建議。";
  recommendTitle.textContent = moodKey === "happy" ? "先看影片學習" : "先了解卡在哪裡";
  recommendDetail.textContent = mood.detail;
  moodReplies.classList.add("is-hidden");
  unitReplies.classList.remove("is-hidden");
  difficultyReplies.classList.add("is-hidden");
  diagnosticInputBlock.classList.add("is-hidden");
  startRecommendationBtn.disabled = true;
}

function conceptKeyForUnit(unitKey) {
  if (unitKey === "integerDivision") return "integerDivision";
  if (unitKey === "fractionDivideInteger") return "fractionDivideInteger";
  return "fractionMultiply";
}

function videoUrlForUnit(unitKey) {
  if (unitKey === "integerDivision") return "https://www.youtube.com/watch?v=IlKS5dD2sYE&t=3s";
  if (unitKey === "fractionDivideInteger") return "https://www.youtube.com/watch?v=fF3CA2drUek";
  return "https://www.youtube.com/watch?v=LUgDLJKaKuk";
}

function pickRelaxVideo() {
  return relaxVideos[Math.floor(Math.random() * relaxVideos.length)];
}

function youtubeEmbedUrl(url) {
  const idMatch = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/);
  const id = idMatch ? idMatch[1] : "";
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

function openVideoLearning({ url, title = "影片學習", conceptKey = "fractionMultiply", note = "看完影片後，先做幾題練習，再進 10 題測驗。" }) {
  if (videoNudgeTimer) clearTimeout(videoNudgeTimer);
  currentVideoConceptKey = conceptKey;
  currentVideoUrl = url;
  videoLearningTitle.textContent = title;
  videoLearningNote.textContent = note;
  videoToPracticeBtn.textContent = title.includes("舒壓") ? "休息好了，選學習單元" : "看完了，開始練習";
  learningVideoFrame.src = youtubeEmbedUrl(url);
  videoBunnyQuestion.textContent = title.includes("舒壓")
    ? "小兔提問：現在心情有比較鬆一點嗎？"
    : "小兔提問：你剛剛看到的重點是什麼？";
  videoConceptPrompt.textContent = title.includes("舒壓")
    ? "可以再休息一下，也可以回來選單元。"
    : "先用一句話想想，再進練習。看不懂也沒關係，練習會有提示。";
  showActiveLearningView("videoLearning");

  if (title.includes("舒壓")) {
    videoNudgeTimer = setTimeout(() => {
      videoLearningNote.textContent = "休息 10 分鐘了。要不要回來學一小段數學？你可以先從影片學習開始。";
    }, 10 * 60 * 1000);
  }
}

function questionCategory(problem) {
  if (/圖像|圖示|面積/.test(problem.concept)) return "圖像理解";
  if (/連結分數和除法/.test(problem.concept)) return "連結分數和除法";
  if (/情境|應用|除法情境/.test(problem.concept)) return "情境應用";
  if (/假分數|整數相除|用分數表示/.test(problem.concept) || Number(problem.num) > Number(problem.den)) return "假分數/整數相除";
  return "真分數計算";
}

function buildQuizQuestions() {
  const targetLength = currentVideoConceptKey === "mixed" ? 20 : 10;
  const source = currentVideoConceptKey === "mixed" ? problems : getProblemPool(currentVideoConceptKey);
  const fallback = source.length ? source : problems;
  const groups = {
    "圖像理解": [],
    "真分數計算": [],
    "假分數/整數相除": [],
    "情境應用": [],
    "連結分數和除法": []
  };
  source.forEach((problem) => groups[questionCategory(problem)].push(problem));
  const picked = [
    ...shuffleItems(groups["圖像理解"]).slice(0, 2),
    ...shuffleItems(groups["真分數計算"]).slice(0, 3),
    ...shuffleItems(groups["假分數/整數相除"]).slice(0, 2),
    ...shuffleItems(groups["連結分數和除法"]).slice(0, 2),
    ...shuffleItems(groups["情境應用"]).slice(0, 3)
  ];

  const used = new Set(picked.map((problem) => problem.text));
  while (picked.length < targetLength) {
    const candidates = shuffleItems(fallback).filter((problem) => !used.has(problem.text));
    if (!candidates.length) break;
    candidates.forEach((problem) => {
      if (picked.length < targetLength) {
        picked.push(problem);
        used.add(problem.text);
      }
    });
  }

  while (picked.length < targetLength && fallback.length) {
    picked.push(shuffleItems(fallback)[0]);
  }

  return shuffleItems(picked).slice(0, targetLength);
}

function renderQuizQuestion() {
  const question = quizQuestions[quizIndex];
  quizNumber.textContent = quizIndex + 1;
  quizStatus.textContent = `${quizIndex + 1}/${quizQuestions.length}`;
  quizText.innerHTML = formatMath(cleanQuestionText(question.text), false);
  renderQuizVisual(question);
  quizNumInput.value = "";
  quizDenInput.value = "";
  quizFeedback.textContent = `先作答，完成 ${quizQuestions.length} 題後會整理需要加強的地方。`;
  quizFeedback.classList.remove("correct", "wrong");
  quizComplete.classList.add("is-hidden");
  if (quizReviewList) quizReviewList.innerHTML = "";
  submitQuizAnswer.disabled = false;
  submitQuizAnswer.classList.remove("is-hidden");
  nextQuizQuestionBtn.classList.add("is-hidden");
  quizNumInput.disabled = false;
  quizDenInput.disabled = false;
}

function renderQuizVisual(question) {
  renderQuestionVisual(question, quizVisual);
}

function renderQuestionVisual(question, target) {
  const needsVisual = /圖像|圖|模型/.test(question.concept) || /^圖像題/.test(question.text);
  if (!needsVisual) {
    target.classList.add("is-hidden");
    target.innerHTML = "";
    return;
  }
  target.innerHTML = Array.from({ length: 12 }, (_, index) => {
    const filled = index < 4 ? "filled" : "";
    const selected = index < 2 ? "target" : "";
    return `<span class="${filled} ${selected}"></span>`;
  }).join("");
  target.classList.remove("is-hidden");
}

function startQuiz(conceptKey = currentVideoConceptKey) {
  currentVideoConceptKey = conceptKey;
  quizQuestions = buildQuizQuestions();
  quizIndex = 0;
  quizResults = [];
  showActiveLearningView("quiz");
  renderQuizQuestion();
}

function explainQuizMistake(result) {
  const q = result.question;
  if (result.sameValue) {
    return `你的答案和正確值相等，但測驗要求最簡分數，所以要約成 ${q.num}/${q.den}。`;
  }
  if (/整數相除|用分數表示|除法情境|連結分數和除法/.test(q.concept)) {
    return `整數相除可以先寫成分數，被除數放分子、除數放分母，最後約成 ${q.num}/${q.den}。`;
  }
  if (/分數除以整數|單位分數|平均分/.test(q.concept)) {
    return `分數除以整數可以想成把原本的分數平均分成幾份，算完要約成 ${q.num}/${q.den}。`;
  }
  if (/乘法|乘數|一部分|約分/.test(q.concept)) {
    return `分數乘法先想成「一部分的一部分」，分子乘分子、分母乘分母，最後約成 ${q.num}/${q.den}。`;
  }
  return `這題正確答案是 ${q.num}/${q.den}，下次先把題意翻成算式，再檢查約分。`;
}

function finishQuiz() {
  const wrong = quizResults.filter((item) => !item.correct);
  const counts = wrong.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  const weakest = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "目前表現穩定";
  const correct = quizResults.length - wrong.length;
  const total = quizResults.length;
  const advice = wrong.length
    ? `${total} 題完成，答對 ${correct} 題。建議加強「${weakest}」，我會優先安排這類題目。`
    : `${total} 題完成，全對。下一步可以挑戰應用題。`;

  quizFeedback.textContent = "測驗完成。";
  quizFeedback.classList.remove("correct", "wrong");
  quizCompleteText.textContent = advice;
  quizReviewList.innerHTML = wrong.length
    ? wrong.map((item, index) => `
        <div class="quiz-review-item">
          <strong>錯題 ${index + 1}</strong>
          <span>${formatMath(cleanQuestionText(item.question.text))}</span>
          <p>你的答案：${item.answerNum}/${item.answerDen}｜正確答案：${item.question.num}/${item.question.den}</p>
          <p>${explainQuizMistake(item)}</p>
        </div>
      `).join("")
    : '<div class="quiz-review-item">這次沒有錯題，狀態很穩。</div>';
  quizComplete.classList.remove("is-hidden");
  submitQuizAnswer.disabled = true;
  submitQuizAnswer.classList.add("is-hidden");
  nextQuizQuestionBtn.classList.add("is-hidden");
  records.push({
    result: "測驗完成",
    problem: `${total} 題小測驗`,
    confidence: `答對 ${correct} / ${total}`,
    diagnosis: advice,
    concept: weakest,
    time: new Date().toLocaleString("zh-TW")
  });
  saveState();
  renderRecords();
  renderData();
}

function setRecommendationAction(kind, unitKey, lowPressure = false) {
  if (kind === "calculation" && !lowPressure) {
    currentRecommendationView = "practice";
    currentRecommendationAction = { type: "view", view: "practice" };
    return;
  }

  currentRecommendationView = "";
  currentRecommendationAction = {
    type: "video",
    url: videoUrlForUnit(unitKey),
    title: unitProfiles[unitKey].label,
    conceptKey: conceptKeyForUnit(unitKey)
  };
}

function selectDiagnosticUnit(unitKey) {
  selectedUnit = unitKey;
  const unit = unitProfiles[unitKey];
  const mood = moodProfiles[selectedMood] || moodProfiles.normal;
  unitButtons.forEach((button) => button.classList.toggle("selected", button.dataset.unit === unitKey));
  appendDiagnosticMessage("student", unit.label);
  appendDiagnosticMessage("coach", `好，我們先看「${unit.label}」。以你今天「${mood.label}」的狀態，我會幫你把步驟排小一點。你覺得主要卡在哪一種情況？`);
  difficultyTag.textContent = unit.label;
  recommendReason.textContent = "再選一個困難類型，或用自己的話描述。";
  recommendTitle.textContent = unit.firstStep;
  recommendDetail.textContent = `${mood.mode}：選完困難後，這裡會排出下一個學習步驟。`;
  unitReplies.classList.add("is-hidden");
  difficultyReplies.classList.remove("is-hidden");
  diagnosticInputBlock.classList.remove("is-hidden");
}

function appendDiagnosticMessage(type, text) {
  const row = document.createElement("div");
  row.className = `diagnostic-message ${type}`;
  row.innerHTML = formatMath(text);
  diagnosticMessages.appendChild(row);
  diagnosticMessages.scrollTop = diagnosticMessages.scrollHeight;
}

function buildDiagnosticReply(kind, studentText, unit) {
  const profile = difficultyProfiles[kind];
  const mood = moodProfiles[selectedMood] || moodProfiles.normal;
  const openers = {
    concept: [
      "我聽起來像是題意還沒有對上。",
      "這比較像是先卡在「它到底要我做什麼」。",
      "你不是完全不會，可能是題目語意還不夠清楚。"
    ],
    visual: [
      "你提到的狀況很像圖像和算式還沒有接起來。",
      "這種卡住通常不是計算問題，而是看圖轉算式那一步。",
      "我會先把它當成圖像理解的問題來處理。"
    ],
    calculation: [
      "這聽起來比較像計算步驟需要穩下來。",
      "你可能知道方向，但中間容易漏乘、寫反或約分卡住。",
      "我會先安排少量題目，讓你把步驟練穩。"
    ],
    confidence: [
      "我先把這個當成信心問題，不急著加題量。",
      "如果看到分數就緊張，第一步要先降低壓力。",
      "我們先讓題目變小一點，讓你抓回可以開始的感覺。"
    ]
  };
  const details = [];

  if (/分母/.test(studentText)) details.push("你提到分母，等一下會特別看分母代表的份數有沒有變。");
  if (/分子/.test(studentText)) details.push("你提到分子，我會提醒你分子是在看取到幾份。");
  if (/約分/.test(studentText)) details.push("你提到約分，所以練習會放一題需要檢查答案能不能變簡單。");
  if (/圖|格|面積/.test(studentText)) details.push("你提到圖，建議先看概念示範，再用圖像理解，不直接跳到公式。");
  if (/影片|動畫|示範/.test(studentText)) details.push("你想用看影片或示範的方式，這很適合先建立畫面感。");
  if (/不懂|看不懂|意思/.test(studentText)) details.push("你提到看不懂，我們會先把題目換成白話再算。");
  if (/直接|做題|練習/.test(studentText)) details.push("你也可以直接做題，錯了再回來補概念。");

  const choices = openers[kind];
  const opener = choices[(studentText.length + records.length) % choices.length];
  const extra = details.length ? ` ${details[0]}` : "";
  const lowPressure = selectedMood === "unhappy";
  const route = lowPressure
    ? "短影片或概念示範"
    : kind === "calculation"
      ? "練習"
      : kind === "visual"
        ? "影片或概念示範"
        : "影片學習";
  const moodNote = lowPressure
    ? "今天先不追求做很多題，先讓你比較不排斥開始。"
    : `你今天是「${mood.label}」，可以用「${mood.mode}」的節奏前進。`;
  return `你選的是「${unit.label}」。${opener}${extra} ${moodNote} 我建議先走「${route}」，想直接做題也可以。`;
}

function applyRecommendation(kind, studentText) {
  if (!selectedUnit) return;
  const unit = unitProfiles[selectedUnit];
  const profile = difficultyProfiles[kind];
  const mood = moodProfiles[selectedMood] || moodProfiles.normal;
  const lowPressure = selectedMood === "unhappy";
  appendDiagnosticMessage("student", studentText);
  const reply = buildDiagnosticReply(kind, studentText, unit);
  const title = `${unit.label}｜${profile.tag}`;
  appendDiagnosticMessage("coach", reply);
  difficultyTag.textContent = `${mood.mode}｜${profile.tag}`;
  recommendReason.textContent = reply;
  recommendTitle.textContent = title;
  recommendDetail.textContent = `${mood.detail} ${unit.firstStep}。${profile.detail}`;
  setRecommendationAction(kind, selectedUnit, lowPressure);
  startRecommendationBtn.disabled = false;
  difficultyReplies.classList.add("is-hidden");

  records.push({
    result: "學習對話",
    problem: title,
    confidence: mood.label,
    diagnosis: reply,
    concept: unit.label,
    time: new Date().toLocaleString("zh-TW")
  });
  saveState();
  renderRecords();
  renderData();
}

function clearConceptHintTimer() {
  if (conceptHintTimer) clearTimeout(conceptHintTimer);
  conceptHintTimer = null;
}

function startConceptHintTimer() {
  clearConceptHintTimer();
  const lesson = getActiveConceptData();
  conceptHintTimer = setTimeout(() => {
    conceptBunnyText.textContent = lesson.idleHint;
  }, 10000);
}

function getActiveConceptData() {
  const lesson = conceptLessons[currentConceptKey];
  if (!lesson.topics) return lesson;
  const topicKey = selectedConceptTopic || lesson.warmupChoices[0];
  return {
    ...lesson,
    topic: topicKey,
    ...lesson.topics[topicKey]
  };
}

function renderConceptProgress() {
  conceptProgress.innerHTML = Array.from({ length: 6 }, (_, index) => {
    const active = index === currentConceptStep ? "active" : "";
    const done = index < currentConceptStep ? "done" : "";
    return `<span class="${active} ${done}"></span>`;
  }).join("");
}

function conceptGrid(type = "multiply") {
  if (type === "improper") {
    return Array.from({ length: 24 }, (_, index) => {
      const filled = index < 20 ? "filled" : "";
      const target = index < 6 ? "target" : "";
      return `<button type="button" class="${filled} ${target}" data-concept-cell></button>`;
    }).join("");
  }

  if (type === "area") {
    return Array.from({ length: 24 }, (_, index) => {
      const row = Math.floor(index / 6);
      const col = index % 6;
      const filled = row < 4 || col < 2 ? "filled" : "";
      const target = row < 4 && col < 2 ? "target" : "";
      return `<button type="button" class="${filled} ${target}" data-concept-cell></button>`;
    }).join("");
  }

  if (type === "divide") {
    return Array.from({ length: 8 }, (_, index) => {
      const filled = index < 6 ? "filled" : "";
      const target = index < 3 ? "target" : "";
      return `<button type="button" class="${filled} ${target}" data-concept-cell></button>`;
    }).join("");
  }

  if (type === "integer") {
    return Array.from({ length: 8 }, (_, index) => {
      const filled = index < 6 ? "filled" : "";
      const target = index < 2 ? "target" : "";
      return `<button type="button" class="${filled} ${target}" data-concept-cell></button>`;
    }).join("");
  }

  return Array.from({ length: 12 }, (_, index) => {
    const inTwoThirds = index % 3 < 2 ? "filled" : "";
    const target = index < 2 ? "target" : "";
    return `<button type="button" class="${inTwoThirds} ${target}" data-concept-cell></button>`;
  }).join("");
}

function renderConceptStage(message = "") {
  const lessonBase = conceptLessons[currentConceptKey];
  const lesson = getActiveConceptData();
  const visualType = lesson.gridType || (currentConceptKey === "integerDivision" ? "integer" : currentConceptKey === "fractionDivideInteger" ? "divide" : "multiply");
  const visualClass = `concept-grid ${visualType}`;
  renderConceptProgress();

  const screens = [
    () => `
      <div class="concept-card">
        <p class="eyebrow">小兔暖身</p>
        <h1>${lesson.warmup}</h1>
        ${lessonBase.acceptAnyWarmup ? '<p class="concept-lead">每一種題型都先用圖像理解，再整理成算式。</p>' : `<div class="concept-expression">${formatMath(lesson.expression, false)}</div>`}
        <div class="concept-choices">
          ${lesson.warmupChoices.map((choice) => `<button type="button" data-concept-choice="${choice}">${choice}</button>`).join("")}
        </div>
      </div>
    `,
    () => `
      <div class="concept-card">
        <p class="eyebrow">${lesson.visualTitle}</p>
        <h1>${lesson.visualPrompt}</h1>
        ${lesson.topic ? `<p class="concept-topic">${lesson.topic}</p>` : ""}
        <div class="concept-expression compact">${formatMath(lesson.expression, false)}</div>
        <div class="${visualClass}" aria-label="概念圖">${conceptGrid(visualType)}</div>
        <div class="concept-choices">
          ${lesson.visualChoices.map((choice) => `<button type="button" data-concept-choice="${choice}">${choice}</button>`).join("")}
        </div>
      </div>
    `,
    () => `
      <div class="concept-card">
        <p class="eyebrow">動手點點看</p>
        <h1>${lesson.clickPrompt}</h1>
        ${lesson.topic ? `<p class="concept-topic">${lesson.topic}</p>` : ""}
        <div class="${visualClass} clickable" aria-label="可點選方格">${conceptGrid(visualType)}</div>
        <p class="concept-feedback">${message || "點圖上的格子試試看。"}</p>
      </div>
    `,
    () => `
      <div class="concept-card calm">
        <p class="eyebrow">小兔整理</p>
        <h1>${lesson.guide}</h1>
        <div class="concept-expression">${formatMath(lesson.expression, false)}</div>
        <button class="primary-action" type="button" data-concept-next>我懂了，做一題</button>
      </div>
    `,
    () => `
      <div class="concept-card">
        <p class="eyebrow">馬上做 1 題</p>
        <h1>${formatMath(lesson.miniQuestion, false)}</h1>
        <div class="concept-answer">
          <input id="conceptNumInput" inputmode="numeric" aria-label="概念題分子" />
          <span></span>
          <input id="conceptDenInput" inputmode="numeric" aria-label="概念題分母" />
        </div>
        <button class="primary-action" type="button" data-concept-check>送出</button>
        <p class="concept-feedback">${message}</p>
      </div>
    `,
    () => `
      <div class="concept-card calm">
        <p class="eyebrow">即時回饋</p>
        <h1>${message || "這一小步完成了。"}</h1>
        <div class="concept-actions">
          <button class="secondary-action" type="button" data-concept-retry>再看一次</button>
          <button class="primary-action" type="button" data-view-link="practice">開始練習</button>
        </div>
      </div>
    `
  ];

  conceptBunnyText.textContent = [
    "先選題型，我會配合你的選擇帶你看。",
    "先觀察圖，不急著用公式。",
    "換你動手操作一次。",
    "把剛剛看到的規律整理起來。",
    "用一題確認能不能遷移。",
    "很好，現在可以進練習。"
  ][currentConceptStep];

  conceptStage.innerHTML = screens[currentConceptStep]();
  startConceptHintTimer();
}

function startConceptLesson(key) {
  currentConceptKey = key;
  currentConceptStep = 0;
  conceptSelectionCount = 0;
  selectedConceptTopic = "";
  showView("concept");
  renderConceptStage();
}

function advanceConceptStep(message = "") {
  currentConceptStep = Math.min(currentConceptStep + 1, 5);
  conceptSelectionCount = 0;
  renderConceptStage(message);
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (["videoLearning", "practice", "quiz"].includes(item.dataset.view)) {
      showChoiceView(item.dataset.view);
      return;
    }
    showView(item.dataset.view);
  });
});

linkButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewLink));
});

document.querySelectorAll("[data-video-url]").forEach((button) => {
  button.addEventListener("click", () => {
    openVideoLearning({
      url: button.dataset.videoUrl,
      file: button.dataset.videoFile || videoFileForUnit(button.dataset.videoConcept || "fractionMultiply"),
      title: button.dataset.videoTitle || "影片學習",
      conceptKey: button.dataset.videoConcept || "fractionMultiply"
    });
  });
});

document.querySelectorAll("[data-practice-concept]").forEach((button) => {
  button.addEventListener("click", () => {
    startPractice(button.dataset.practiceConcept || "fractionMultiply");
  });
});

document.querySelectorAll("[data-quiz-concept]").forEach((button) => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.quizConcept || "fractionMultiply");
  });
});

document.querySelectorAll("[data-concept]").forEach((button) => {
  button.addEventListener("click", () => {
    startConceptLesson(button.dataset.concept);
  });
});

conceptStage.addEventListener("click", (event) => {
  clearConceptHintTimer();
  const lessonBase = conceptLessons[currentConceptKey];
  const lesson = getActiveConceptData();
  const choice = event.target.closest("[data-concept-choice]");
  const cell = event.target.closest("[data-concept-cell]");

  if (choice) {
    if (currentConceptStep === 0 && lessonBase.acceptAnyWarmup) {
      selectedConceptTopic = choice.dataset.conceptChoice;
      choice.classList.add("correct");
      setTimeout(() => advanceConceptStep("先用圖看，再整理規律。"), 900);
      return;
    }

    const answer = currentConceptStep === 0 ? lesson.warmupAnswer : lesson.visualAnswer;
    if (choice.dataset.conceptChoice === answer) {
      choice.classList.add("correct");
      setTimeout(() => advanceConceptStep("很好，繼續下一步。"), 900);
    } else {
      choice.classList.add("wrong");
      conceptBunnyText.textContent = "差一點。再看圖想想。";
      startConceptHintTimer();
    }
    return;
  }

  if (cell && currentConceptStep === 2) {
    if (!cell.classList.contains("target")) {
      cell.classList.add("wrong");
      conceptBunnyText.textContent = "先找被留下的那一小塊。";
      startConceptHintTimer();
      return;
    }

    if (!cell.classList.contains("picked")) {
      cell.classList.add("picked");
      conceptSelectionCount += 1;
    }

    if (conceptSelectionCount >= lesson.clickAnswer) {
      setTimeout(() => advanceConceptStep("對，就是這一部分。"), 900);
    } else {
      conceptStage.querySelector(".concept-feedback").textContent = `還差 ${lesson.clickAnswer - conceptSelectionCount} 格。`;
      startConceptHintTimer();
    }
    return;
  }

  if (event.target.closest("[data-concept-next]")) {
    advanceConceptStep();
    return;
  }

  if (event.target.closest("[data-concept-check]")) {
    const answerNum = document.getElementById("conceptNumInput").value.trim();
    const answerDen = document.getElementById("conceptDenInput").value.trim();
    const isCorrect = isEquivalentFraction(answerNum, answerDen, lesson.answer);
    currentConceptStep = 5;
    renderConceptStage(isCorrect ? "答對了，這個概念可以進練習。" : `差一點，答案是 ${frac(lesson.answer.num, lesson.answer.den, true)}。我們可以再看一次。`);
    return;
  }

  if (event.target.closest("[data-concept-retry]")) {
    currentConceptStep = 0;
    conceptSelectionCount = 0;
    renderConceptStage();
    return;
  }

  const viewLink = event.target.closest("[data-view-link]");
  if (viewLink) {
    showView(viewLink.dataset.viewLink);
  }
});

document.addEventListener("click", (event) => {
  const recordAction = event.target.closest("[data-record-action]");
  if (!recordAction) return;

  const conceptKey = recordAction.dataset.recordConcept || "fractionMultiply";
  const action = recordAction.dataset.recordAction;
  if (action === "video") {
    openVideoLearning({
      url: videoUrlForUnit(conceptKey),
      file: videoFileForUnit(conceptKey),
      title: unitProfiles[conceptKey]?.label || "影片學習",
      conceptKey
    });
  }
  if (action === "practice") startPractice(conceptKey);
  if (action === "quiz") startQuiz(conceptKey);
});

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectMood(button.dataset.mood);
  });
});

unitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectDiagnosticUnit(button.dataset.unit);
  });
});

quickDifficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyRecommendation(button.dataset.difficulty, button.textContent.trim());
  });
});

sendDiagnosticBtn.addEventListener("click", () => {
  const text = diagnosticInput.value.trim();
  if (!text) return;
  if (!selectedMood) {
    appendDiagnosticMessage("coach", "先選一下今天的心情，我才知道要用輕一點還是正常節奏陪你。");
    return;
  }
  if (selectedMood === "unhappy" && !selectedUnit) {
    appendDiagnosticMessage("student", text);
    appendDiagnosticMessage("coach", buildComfortReply(text));
    diagnosticInput.value = "";
    return;
  }
  if (!selectedUnit) {
    appendDiagnosticMessage("coach", "先選一個單元，我才知道要從哪裡幫你判斷。");
    return;
  }
  applyRecommendation(inferDifficulty(text), text);
  diagnosticInput.value = "";
});

resetDiagnosticBtn.addEventListener("click", resetDiagnosticFlow);

startRecommendationBtn.addEventListener("click", () => {
  if (!currentRecommendationAction && currentRecommendationView) {
    showView(currentRecommendationView);
    return;
  }

  if (currentRecommendationAction?.type === "video") {
    openVideoLearning({
      url: currentRecommendationAction.url,
      file: currentRecommendationAction.file || videoFileForUnit(selectedUnit || "fractionMultiply"),
      title: currentRecommendationAction.title || "影片學習",
      conceptKey: currentRecommendationAction.conceptKey || conceptKeyForUnit(selectedUnit || "fractionMultiply"),
      note: currentRecommendationAction.note || "看完影片後，先做幾題練習，再進 10 題測驗。"
    });
    return;
  }

  if (currentRecommendationAction?.type === "concept") {
    startConceptLesson(currentRecommendationAction.key);
    return;
  }

  if (currentRecommendationAction?.type === "view") {
    if (currentRecommendationAction.view === "practice") {
      startPractice(conceptKeyForUnit(selectedUnit || "fractionMultiply"));
      return;
    }
    showView(currentRecommendationAction.view);
  }
});

videoToPracticeBtn.addEventListener("click", () => {
  if (videoLearningTitle.textContent.includes("舒壓")) {
    showView("home");
    unitReplies.classList.remove("is-hidden");
    moodReplies.classList.add("is-hidden");
    appendDiagnosticMessage("coach", "休息回來了。你可以先選單元，也可以繼續跟我說說現在感覺怎麼樣。");
    return;
  }
  startPractice(currentVideoConceptKey);
});

const openVideoExternalBtn = document.getElementById("openVideoExternalBtn");

if (openVideoExternalBtn) {
  openVideoExternalBtn.addEventListener("click", () => {
    window.open(currentLesson.videoUrl);
  });
}

startQuizBtn.addEventListener("click", startQuiz);

submitQuizAnswer.addEventListener("click", () => {
  const question = quizQuestions[quizIndex];
  if (!quizNumInput.value.trim() || !quizDenInput.value.trim()) return;
  submitQuizAnswer.disabled = true;
  const answerNum = quizNumInput.value.trim();
  const answerDen = quizDenInput.value.trim();
  const isCorrect = isEquivalentFraction(answerNum, answerDen, question);
  const sameValue = isSameFractionValue(answerNum, answerDen, question);
  quizResults.push({
    correct: isCorrect,
    sameValue,
    question,
    answerNum,
    answerDen,
    category: questionCategory(question),
    concept: question.concept
  });

  quizFeedback.textContent = isCorrect
    ? "答對了。準備好再按下一題。"
    : sameValue
      ? `數值對了，但測驗要最簡分數。答案是 ${question.num}/${question.den}。`
      : `答錯了，正確答案是 ${question.num}/${question.den}。`;
  quizFeedback.classList.toggle("correct", isCorrect);
  quizFeedback.classList.toggle("wrong", !isCorrect);
  quizNumInput.disabled = true;
  quizDenInput.disabled = true;

  if (quizIndex >= quizQuestions.length) {
    finishQuiz();
    return;
  }

  nextQuizQuestionBtn.textContent = quizIndex + 1 >= quizQuestions.length ? "看測驗回顧" : "下一題";
  nextQuizQuestionBtn.classList.remove("is-hidden");
});

nextQuizQuestionBtn.addEventListener("click", () => {
  quizIndex += 1;
  if (quizIndex >= quizQuestions.length) {
    finishQuiz();
    return;
  }
  renderQuizQuestion();
});

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => showAuthTab(tab.dataset.authTab));
});

warmupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    warmupButtons.forEach((item) => item.classList.remove("selected", "wrong"));
    button.classList.add("selected");

    if (button.dataset.warmup === "half") {
      warmupFeedback.innerHTML = `答對了。分成 2 份的每一份，比分成 3 份的每一份大。`;
      warmupFeedback.classList.add("correct");
      return;
    }

    warmupFeedback.innerHTML = `再想一下：同樣一個東西，分成越多份，每一份會越小。`;
    warmupFeedback.classList.remove("correct");
    button.classList.add("wrong");
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const account = loginAccount.value.trim();
  const password = loginPassword.value;
  const users = getUsers();

  if (!account || !password) {
    setMessage(loginMessage, "請輸入帳號和密碼。");
    return;
  }

  if (!users[account]) {
    showAuthTab("register");
    registerAccount.value = account;
    setMessage(registerMessage, "找不到這個帳號，請先完成註冊。");
    return;
  }

  if (users[account].password !== password) {
    setMessage(loginMessage, "密碼不正確，請再試一次。");
    return;
  }

  setMessage(loginMessage, "");
  enterApp({
    account,
    name: users[account].nickname,
    grade: users[account].grade,
    unit: users[account].unit
  });
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const account = registerAccount.value.trim();
  const password = registerPassword.value;
  const passwordConfirm = registerPasswordConfirm.value;
  const nickname = registerNickname.value.trim();
  const users = getUsers();

  if (!account || !password || !passwordConfirm || !nickname) {
    setMessage(registerMessage, "帳號、密碼、確認密碼、使用者暱稱都要填寫。");
    return;
  }

  if (account.length < 5 || !hasLetterAndNumber(account)) {
    setMessage(registerMessage, "帳號至少 5 碼，且要包含至少一個英文字母和一個數字。");
    return;
  }

  if (password.length < 8 || !hasLetterAndNumber(password)) {
    setMessage(registerMessage, "密碼至少 8 碼，且要包含至少一個英文字母和一個數字。");
    return;
  }

  if (password !== passwordConfirm) {
    setMessage(registerMessage, "兩次輸入的密碼不一樣，請再確認一次。");
    return;
  }

  if (users[account]) {
    setMessage(registerMessage, "這個帳號已經註冊過，請改用登入。");
    return;
  }

  if (nicknameExists(users, nickname)) {
    setMessage(registerMessage, "這個使用者暱稱已經有人使用，請換一個。");
    return;
  }

  users[account] = {
    password,
    nickname,
    grade: "五年級",
    unit: "分數乘法",
    createdAt: new Date().toISOString()
  };
  saveUsers(users);
  localStorage.setItem(progressKey(account, "stars"), "16");
  localStorage.setItem(progressKey(account, "records"), "[]");

  setMessage(registerMessage, "註冊成功，請用剛剛的帳號登入。", true);
  loginAccount.value = account;
  loginPassword.value = "";
  registerPassword.value = "";
  registerPasswordConfirm.value = "";
  showAuthTab("login");
  setMessage(loginMessage, "註冊成功，請輸入密碼登入。", true);
});

logoutBtn.addEventListener("click", leaveApp);
refreshDataBtn.addEventListener("click", renderData);

document.getElementById("submitAnswer").addEventListener("click", () => {
  const problem = problems[currentProblem];
  const answerNum = document.getElementById("numInput").value.trim();
  const answerDen = document.getElementById("denInput").value.trim();
  if (!answerNum || !answerDen) return;
  practiceAnswered = true;
  if (practiceHintTimer) clearTimeout(practiceHintTimer);
  document.getElementById("submitAnswer").disabled = true;
  const isCorrect = isEquivalentFraction(answerNum, answerDen, problem);
  const sameValue = isSameFractionValue(answerNum, answerDen, problem);
  const diagnosis = diagnosePractice(isCorrect, problem);
  const result = isCorrect ? "答對" : "需要複習";

  document.getElementById("feedbackText").innerHTML = isCorrect
    ? `答對了。你可以自己決定要不要進下一題。`
    : sameValue
      ? `數值對了，但答案要約到最簡分數：${frac(problem.num, problem.den, true)}。`
    : `正確答案是 ${frac(problem.num, problem.den, true)}。可以先留在這題看提示。`;
  practiceResponseTitle.textContent = isCorrect ? "答對了" : "先別急";
  practiceResponseText.innerHTML = isCorrect
    ? "這題通過。想練手感就按下一題。"
    : sameValue
      ? `你算到同一個值了，最後一步要約分成 ${frac(problem.num, problem.den, true)} 才算完成。`
    : `答案是 ${frac(problem.num, problem.den, true)}。先看右邊提示，懂了再下一題。`;
  practiceResponse.classList.toggle("correct", isCorrect);
  practiceResponse.classList.toggle("wrong", !isCorrect);
  practiceResponse.classList.remove("is-hidden");

  if (isCorrect) stars += 1;
  completed = Math.min(completed + 1, problems.length);

  records.push({
    result,
    problem: problem.text,
    confidence: "已作答",
    diagnosis,
    concept: problem.concept,
    time: new Date().toLocaleString("zh-TW")
  });

  if (starCount) starCount.textContent = stars;
  saveState();
  renderRecords();
  renderData();
});

nextProblemBtn.addEventListener("click", () => {
  pickNextProblem();
  renderProblem();
});

stayProblemBtn.addEventListener("click", () => {
  practiceResponse.classList.add("is-hidden");
});

coachSuggestions.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("thoughtInput").value = button.textContent.trim();
    document.getElementById("thoughtInput").focus();
  });
});

document.getElementById("analyzeBtn").addEventListener("click", () => {
  const input = document.getElementById("thoughtInput");
  const text = input.value.trim();
  if (!text) return;
  const reply = buildStewardReply(text);
  appendCoachMessage("student", text);
  appendCoachMessage("coach", reply);
  records.push({
    result: "管家對話",
    problem: "學生想法",
    confidence: "未標記",
    diagnosis: reply,
    concept: "學習管家",
    time: new Date().toLocaleString("zh-TW")
  });
  input.value = "";
  saveState();
  renderRecords();
  renderData();
});

document.getElementById("resetRecords").addEventListener("click", () => {
  records = [];
  completed = 0;
  saveState();
  renderRecords();
  renderData();
  renderProblem();
});

if (starCount) starCount.textContent = stars;
renderProblem();
renderRecords();

if (learner) {
  enterApp(learner);
}
