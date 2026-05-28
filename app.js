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
const difficultyTag = document.getElementById("difficultyTag");
const recommendReason = document.getElementById("recommendReason");
const recommendTitle = document.getElementById("recommendTitle");
const recommendDetail = document.getElementById("recommendDetail");
const startRecommendationBtn = document.getElementById("startRecommendationBtn");
const quickDifficultyButtons = document.querySelectorAll("[data-difficulty]");
const unitButtons = document.querySelectorAll("[data-unit]");
const difficultyReplies = document.querySelector(".difficulty-replies");
const diagnosticInputBlock = document.getElementById("diagnosticInputBlock");

function frac(numerator, denominator, small = false) {
  return `<span class="frac${small ? " small-frac" : ""}"><span>${numerator}</span><span>${denominator}</span></span>`;
}

function formatMath(text, small = true) {
  return text.replace(/(\d+)\/(\d+)/g, (_, numerator, denominator) => frac(numerator, denominator, small));
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
  }
];

let currentProblem = 0;
let completed = 0;
let stars = 16;
let records = [];
let learner = JSON.parse(localStorage.getItem("mathStewardLearner") || "null");
let currentAccount = learner?.account || "";
let currentRecommendationView = "";
let selectedUnit = "";

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
    reply: "你卡在圖和算式怎麼對起來。這種情況先做圖像操作會比較順。",
    detail: "用圖像看見每一步，再把圖上的結果轉成分數。",
    view: "interaction"
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
  starCount.textContent = stars;
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

function saveState() {
  if (!currentAccount) return;
  localStorage.setItem(progressKey(currentAccount, "stars"), String(stars));
  localStorage.setItem(progressKey(currentAccount, "records"), JSON.stringify(records));
}

function renderRecords() {
  const list = document.getElementById("recordList");
  if (!list) return;
  if (records.length === 0) {
    list.innerHTML = '<div class="record-item">尚未作答。完成一題後，這裡會出現卡點、信心與下一步。</div>';
    return;
  }

  list.innerHTML = records
    .slice(-5)
    .reverse()
    .map(
      (item) => `
        <div class="record-item">
          <strong>${item.result}</strong>｜${formatMath(item.problem)}<br />
          信心：${item.confidence}｜觀察：${item.diagnosis}
        </div>
      `
    )
    .join("");
}

function renderProblem() {
  const problem = problems[currentProblem];
  document.getElementById("problemNumber").textContent = currentProblem + 1;
  document.getElementById("problemText").innerHTML = formatMath(problem.text, false);
  document.getElementById("hintText").innerHTML = formatMath(problem.hint);
  document.getElementById("practiceStatus").textContent = `本次完成：${completed} / ${problems.length}`;
  document.getElementById("numInput").value = "";
  document.getElementById("denInput").value = "";
  document.getElementById("feedbackText").textContent = "先動手算，系統會幫你留下概念、計算和信心的線索。";
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

function confidenceLabel(value) {
  return ["很沒把握", "有點怕", "普通", "有把握", "很穩"][Number(value) - 1];
}

function diagnose(isCorrect, confidence) {
  if (isCorrect && confidence >= 4) return "可以進入下一題，保留一道相似題當明日暖身。";
  if (isCorrect) return "答案正確但信心偏低，建議請孩子說出解題理由。";
  if (confidence >= 4) return "高信心錯誤，可能是公式套用太快，需要回到圖像檢查。";
  return "概念與信心都需要陪讀，先做面積模型再回到符號。";
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
    return "我會從今天開始記住你的卡點，之後再回來看你是不是比上次更順。";
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

function inferDifficulty(text) {
  if (/圖|格|看不出|面積|模型|連不起/.test(text)) return "visual";
  if (/算錯|計算|約分|分子|分母|乘|除|答案/.test(text)) return "calculation";
  if (/怕|緊張|不敢|沒有把握|很難|討厭/.test(text)) return "confidence";
  return "concept";
}

function selectDiagnosticUnit(unitKey) {
  selectedUnit = unitKey;
  const unit = unitProfiles[unitKey];
  unitButtons.forEach((button) => button.classList.toggle("selected", button.dataset.unit === unitKey));
  appendDiagnosticMessage("student", unit.label);
  appendDiagnosticMessage("coach", `好，我們先看「${unit.label}」。你覺得主要卡在哪一種情況？`);
  difficultyTag.textContent = unit.label;
  recommendReason.textContent = "再選一個困難類型，或用自己的話描述。";
  recommendTitle.textContent = unit.firstStep;
  recommendDetail.textContent = "選完困難後，我會幫你安排更精準的第一步。";
  document.querySelector(".unit-replies").classList.add("is-hidden");
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
  if (/圖|格|面積/.test(studentText)) details.push("你提到圖，我會先推薦圖像操作，不直接跳到公式。");
  if (/不懂|看不懂|意思/.test(studentText)) details.push("你提到看不懂，我們會先把題目換成白話再算。");

  const choices = openers[kind];
  const opener = choices[(studentText.length + records.length) % choices.length];
  const extra = details.length ? ` ${details[0]}` : "";
  return `你選的是「${unit.label}」。${opener}${extra} ${profile.reply}`;
}

function applyRecommendation(kind, studentText) {
  if (!selectedUnit) return;
  const unit = unitProfiles[selectedUnit];
  const profile = difficultyProfiles[kind];
  appendDiagnosticMessage("student", studentText);
  const reply = buildDiagnosticReply(kind, studentText, unit);
  const title = `${unit.label}｜${profile.tag}`;
  appendDiagnosticMessage("coach", reply);
  difficultyTag.textContent = profile.tag;
  recommendReason.textContent = reply;
  recommendTitle.textContent = title;
  recommendDetail.textContent = `${unit.firstStep}。${profile.detail}`;
  currentRecommendationView = profile.view || unit.view;
  startRecommendationBtn.disabled = false;
  difficultyReplies.classList.add("is-hidden");

  records.push({
    result: "學習對話",
    problem: title,
    confidence: "未標記",
    diagnosis: reply,
    concept: unit.label,
    time: new Date().toLocaleString("zh-TW")
  });
  saveState();
  renderRecords();
  renderData();
}

navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});

linkButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewLink));
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
  if (!selectedUnit) {
    appendDiagnosticMessage("coach", "先選一個單元，我才知道要從哪裡幫你判斷。");
    return;
  }
  applyRecommendation(inferDifficulty(text), text);
  diagnosticInput.value = "";
});

startRecommendationBtn.addEventListener("click", () => {
  if (currentRecommendationView) showView(currentRecommendationView);
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

document.getElementById("confidenceRange").addEventListener("input", (event) => {
  document.getElementById("confidenceText").textContent = confidenceLabel(event.target.value);
});

document.getElementById("submitAnswer").addEventListener("click", () => {
  const problem = problems[currentProblem];
  const answerNum = document.getElementById("numInput").value.trim();
  const answerDen = document.getElementById("denInput").value.trim();
  const confidence = Number(document.getElementById("confidenceRange").value);
  const isCorrect = answerNum === problem.num && answerDen === problem.den;
  const diagnosis = diagnose(isCorrect, confidence);
  const result = isCorrect ? "答對" : "需要複習";

  document.getElementById("feedbackText").innerHTML = isCorrect
    ? `答對了。觀察：${diagnosis}`
    : `這題先留下來。正確答案是 ${frac(problem.num, problem.den, true)}。觀察：${diagnosis}`;

  if (isCorrect) {
    stars += 1;
    completed = Math.min(completed + 1, problems.length);
  }

  records.push({
    result,
    problem: problem.text,
    confidence: confidenceLabel(confidence),
    diagnosis,
    concept: problem.concept,
    time: new Date().toLocaleString("zh-TW")
  });

  currentProblem = (currentProblem + 1) % problems.length;
  starCount.textContent = stars;
  saveState();
  renderRecords();
  renderData();
  setTimeout(renderProblem, 1100);
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
  renderProblem();
});

starCount.textContent = stars;
renderProblem();
renderRecords();

if (learner) {
  enterApp(learner);
}
