/**
 * BMI Health Calculator - Main Application Logic
 */

// --- Translations ---
const translations = {
  th: {
    appTitle: "BMI Health Tracker",
    appSubtitle: "คำนวณดัชนีมวลกายและวิเคราะห์สุขภาพอัจฉริยะ",
    inputTitle: "กรอกข้อมูลร่างกาย",
    badgePersonal: "ข้อมูลส่วนบุคคล",
    standardLabel: "เกณฑ์การประเมิน",
    stdAsian: "เกณฑ์เอเชีย (แนะนำสำหรับคนไทย)",
    stdWho: "เกณฑ์สากล (WHO)",
    genderLabel: "เพศกำเนิด",
    male: "ชาย",
    female: "หญิง",
    ageLabel: "อายุ (ปี)",
    yearsUnit: "ปี",
    activityLabel: "กิจกรรมประจำวัน",
    actSedentary: "นั่งทำงานอยู่กับที่ / ไม่ออกกำลังกาย",
    actLight: "ออกกำลังกายเบาๆ 1-3 วัน/สัปดาห์",
    actModerate: "ออกกำลังกายปานกลาง 3-5 วัน/สัปดาห์",
    actActive: "ออกกำลังกายหนัก 6-7 วัน/สัปดาห์",
    actVeryActive: "ออกกำลังกายหนักมาก / นักกีฬา",
    heightLabel: "ส่วนสูง (เซนติเมตร)",
    weightLabel: "น้ำหนักตัว (กิโลกรัม)",
    btnCalculate: "คำนวณผลลัพธ์",
    btnReset: "รีเซ็ต",
    resultsTitle: "ผลการวิเคราะห์สุขภาพ",
    stdBadgeAsian: "เกณฑ์เอเชีย (กระทรวงสาธารณสุข)",
    stdBadgeWho: "เกณฑ์สากล (WHO)",
    yourBmiCaption: "ค่า BMI ของคุณ",
    idealWeightLabel: "ช่วงน้ำหนักที่เหมาะสม",
    bmrLabel: "BMR พลังงานพื้นฐาน",
    bmrSub: "พลังงานขั้นต่ำที่ร่างกายต้องการ",
    tdeeLabel: "TDEE พลังงานเผาผลาญ/วัน",
    tdeeSub: "ตามระดับกิจกรรมประจำวัน",
    adviceTitle: "คำแนะนำเฉพาะบุคคล",
    refTableTitle: "ตารางเกณฑ์เปรียบเทียบค่าดัชนีมวลกาย (BMI Reference)",
    refSource: "อ้างอิง: กรมอนามัย & องค์การอนามัยโลก",
    thCategory: "ระดับสถานะร่างกาย",
    thAsianRange: "เกณฑ์เอเชีย / ไทย (kg/m²)",
    thWhoRange: "เกณฑ์สากล WHO (kg/m²)",
    thRisk: "ความเสี่ยงต่อโรคเรื้อรัง",
    rowUnder: "น้ำหนักน้อย / ผอม",
    rowNormal: "น้ำหนักปกติ / สมส่วน",
    rowOver: "น้ำหนักเกิน / ท้วม",
    rowObese1: "อ้วนระดับ 1",
    rowObese2: "อ้วนระดับ 2 / อ้วนอันตราย",
    riskUnder: "เสี่ยงต่อภาวะขาดสารอาหาร ภูมิคุ้มกันต่ำ",
    riskNormal: "เท่าคนปกติ ความเสี่ยงโรคต่ำที่สุด",
    riskOver: "เริ่มเสี่ยงต่อโรคเบาหวานและความดัน",
    riskObese1: "เสี่ยงสูงต่อไขมันในเลือดสูง เบาหวาน ความดัน",
    riskObese2: "เสี่ยงอันตรายสูงสุดต่อโรคหัวใจและหลอดเลือด",
    historyTitle: "ประวัติการคำนวณล่าสุด",
    btnClearHistory: "ล้างประวัติ",
    emptyHistory: "ยังไม่มีประวัติการคำนวณ",
    idealRangeUnit: "กก.",
    weightGood: "น้ำหนักของคุณอยู่ในเกณฑ์สมส่วนยอดเยี่ยม!",
    weightNeedLose: "ควรลดน้ำหนักลงประมาณ {diff} กก. เพื่อกลับเข้าสู่เกณฑ์สมส่วน",
    weightNeedGain: "ควรเพิ่มน้ำหนักขึ้นประมาณ {diff} กก. เพื่อให้ถึงเกณฑ์สมส่วน",
    catUnder: "น้ำหนักน้อย / ผอม",
    catNormal: "น้ำหนักปกติ / สมส่วน",
    catOver: "น้ำหนักเกิน / ท้วม",
    catObese1: "อ้วนระดับ 1",
    catObese2: "อ้วนระดับ 2 / อ้วนอันตราย",
    meter: "เมตร",
    feet: "ฟุต",
    inch: "นิ้ว",
    lbs: "ปอนด์ (lbs)"
  },
  en: {
    appTitle: "BMI Health Tracker",
    appSubtitle: "Smart Body Mass Index & Health Analyzer",
    inputTitle: "Body Measurements",
    badgePersonal: "Personal Details",
    standardLabel: "Standard Criterion",
    stdAsian: "Asian-Pacific (Recommended for Asians)",
    stdWho: "WHO International Standard",
    genderLabel: "Biological Sex",
    male: "Male",
    female: "Female",
    ageLabel: "Age (Years)",
    yearsUnit: "yrs",
    activityLabel: "Physical Activity",
    actSedentary: "Sedentary (Little or no exercise)",
    actLight: "Light exercise (1-3 days/week)",
    actModerate: "Moderate exercise (3-5 days/week)",
    actActive: "Heavy exercise (6-7 days/week)",
    actVeryActive: "Very heavy exercise / Athlete",
    heightLabel: "Height (Centimeters)",
    weightLabel: "Weight (Kilograms)",
    btnCalculate: "Calculate BMI",
    btnReset: "Reset",
    resultsTitle: "Health Analysis Results",
    stdBadgeAsian: "Asian-Pacific Standard",
    stdBadgeWho: "WHO Standard",
    yourBmiCaption: "Your BMI Value",
    idealWeightLabel: "Healthy Weight Range",
    bmrLabel: "Basal Metabolic Rate (BMR)",
    bmrSub: "Minimum daily calories needed",
    tdeeLabel: "Total Daily Energy (TDEE)",
    tdeeSub: "Calorie maintenance at activity level",
    adviceTitle: "Personalized Advice",
    refTableTitle: "BMI Reference Classification Table",
    refSource: "Source: Department of Health & WHO",
    thCategory: "Body Category",
    thAsianRange: "Asian Standard (kg/m²)",
    thWhoRange: "WHO Standard (kg/m²)",
    thRisk: "Chronic Disease Risk",
    rowUnder: "Underweight",
    rowNormal: "Normal / Healthy Weight",
    rowOver: "Overweight / Pre-obese",
    rowObese1: "Obese Class 1",
    rowObese2: "Obese Class 2 (High Risk)",
    riskUnder: "Risk of malnutrition and lower immunity",
    riskNormal: "Average risk, lowest chronic disease rate",
    riskOver: "Increased risk of diabetes and hypertension",
    riskObese1: "High risk of cardiovascular diseases",
    riskObese2: "Severe risk of cardiovascular diseases & stroke",
    historyTitle: "Recent Calculations History",
    btnClearHistory: "Clear History",
    emptyHistory: "No calculation history yet",
    idealRangeUnit: "kg",
    weightGood: "Your weight is within the healthy optimal range!",
    weightNeedLose: "Consider losing approx. {diff} kg to reach healthy weight",
    weightNeedGain: "Consider gaining approx. {diff} kg to reach healthy weight",
    catUnder: "Underweight",
    catNormal: "Normal Weight",
    catOver: "Overweight",
    catObese1: "Obesity Class 1",
    catObese2: "Obesity Class 2",
    meter: "m",
    feet: "ft",
    inch: "in",
    lbs: "lbs"
  }
};

// --- Advice Recommendations by Category & Language ---
const adviceData = {
  th: {
    under: [
      "เพิ่มการรับประทานอาหารที่มีคุณค่าทางโภชนาการสูง เช่น ถั่ว ธัญพืช ไข่ และโปรตีนคุณภาพดี",
      "แบ่งมื้ออาหารเป็น 5-6 มื้อย่อยต่อวัน เพื่อช่วยให้รับประทานได้มากขึ้น",
      "เน้นการออกกำลังกายแบบเวทเทรนนิ่ง (Weight Training) เพื่อเสริมสร้างมวลกล้ามเนื้อแทนการสะสมไขมัน"
    ],
    normal: [
      "ยอดเยี่ยมมาก! รักษาสมดุลของอาหารโดยทานผัก ผลไม้ และคาร์โบไฮเดรตเชิงซ้อน",
      "ออกกำลังกายแบบคาร์ดิโออย่างน้อย 150 นาทีต่อสัปดาห์เพื่อเสริมความแข็งแรงของหัวใจ",
      "ดื่มน้ำเปล่าให้เพียงพอ 2 - 2.5 ลิตรต่อวัน และนอนหลับพักผ่อน 7-8 ชั่วโมง"
    ],
    over: [
      "ลดอาหารที่มีน้ำตาลสูง แป้งขัดขาว ของทอด และเครื่องดื่มรสหวาน",
      "เพิ่มการขยับร่างกายในชีวิตประจำวัน เช่น เดินขึ้นบันได เดินให้ได้ 8,000 - 10,000 ก้าวต่อวัน",
      "ออกกำลังกายแบบผสมผสานทั้งคาร์ดิโอและเวทเทรนนิ่ง 3-5 วันต่อสัปดาห์"
    ],
    obese1: [
      "ควรปรึกษาแพทย์หรือนักกำหนดอาหารเพื่อวางแผนการปรับเปลี่ยนพฤติกรรมอย่างถูกต้อง",
      "ควบคุมพลังงานที่รับเข้าต่อวัน (Calorie Deficit) โดยลดลงวันละ 300-500 kcal",
      "เริ่มออกกำลังกายแบบ Low-Impact เพื่อถนอมข้อต่อ เช่น เดินเร็ว ว่ายน้ำ ปั่นจักรยาน"
    ],
    obese2: [
      "แนะนำให้พบแพทย์เพื่อตรวจคัดกรองสุขภาพ หลอดเลือด หัวใจ และเบาหวานอย่างละเอียด",
      "หลีกเลี่ยงการออกกำลังกายที่กระแทกข้อเข่าหรือข้อเท้าอย่างรุนแรง",
      "ปรับพฤติกรรมการกินอย่างเคร่งครัด โดยเน้นผักใบเขียว โปรตีนไม่ติดมัน และงดอาหารแปรรูป"
    ]
  },
  en: {
    under: [
      "Increase intake of nutrient-dense foods such as nuts, seeds, avocados, eggs, and lean proteins.",
      "Eat smaller, more frequent meals (5-6 meals a day) to comfortably increase calorie intake.",
      "Focus on resistance and strength training to build muscle mass rather than fat."
    ],
    normal: [
      "Excellent! Maintain a balanced diet rich in whole foods, vegetables, and lean proteins.",
      "Engage in at least 150 minutes of moderate aerobic exercise per week.",
      "Stay well-hydrated with 2-2.5 liters of water daily and prioritize 7-8 hours of sleep."
    ],
    over: [
      "Reduce processed foods, refined carbohydrates, and sugary beverages.",
      "Increase daily physical activity, aiming for 8,000 - 10,000 steps per day.",
      "Combine moderate cardio workouts with resistance training 3-5 days per week."
    ],
    obese1: [
      "Consider consulting a nutritionist or healthcare professional for a tailored lifestyle plan.",
      "Aim for a gentle calorie deficit of 300-500 kcal per day to foster sustainable weight loss.",
      "Choose low-impact exercises to protect joints, such as brisk walking, swimming, or cycling."
    ],
    obese2: [
      "Medical check-up is recommended to assess cardiovascular health and metabolic risks.",
      "Avoid high-impact exercises that place heavy strain on knees and ankles.",
      "Adopt a structured, doctor-guided nutrition regimen focused on whole foods and portion control."
    ]
  }
};

// --- App State ---
let currentLang = localStorage.getItem('bmi_lang') || 'th';
let currentTheme = localStorage.getItem('bmi_theme') || 'light';

// --- DOM Elements ---
const form = document.getElementById('bmiForm');
const heightInput = document.getElementById('heightInput');
const heightSlider = document.getElementById('heightSlider');
const heightHint = document.getElementById('heightConversion');

const weightInput = document.getElementById('weightInput');
const weightSlider = document.getElementById('weightSlider');
const weightHint = document.getElementById('weightConversion');

const ageInput = document.getElementById('ageInput');
const activityInput = document.getElementById('activityInput');

const langThBtn = document.getElementById('langThBtn');
const langEnBtn = document.getElementById('langEnBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');

const bmiValueEl = document.getElementById('bmiValue');
const bmiCategoryBadge = document.getElementById('bmiCategoryBadge');
const resultStandardBadge = document.getElementById('resultStandardBadge');
const gaugeNeedle = document.getElementById('gaugeNeedle');
const gaugeFill = document.getElementById('gaugeFill');

const idealWeightVal = document.getElementById('idealWeightVal');
const weightDiffVal = document.getElementById('weightDiffVal');
const bmrVal = document.getElementById('bmrVal');
const tdeeVal = document.getElementById('tdeeVal');
const adviceList = document.getElementById('adviceList');

const historyContainer = document.getElementById('historyContainer');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const emptyHistoryNotice = document.getElementById('emptyHistoryNotice');

// --- Sync Inputs and Sliders ---
function setupInputSync() {
  heightInput.addEventListener('input', () => {
    heightSlider.value = heightInput.value;
    updateHeightHint();
    calculateBMI();
  });

  heightSlider.addEventListener('input', () => {
    heightInput.value = heightSlider.value;
    updateHeightHint();
    calculateBMI();
  });

  weightInput.addEventListener('input', () => {
    weightSlider.value = weightInput.value;
    updateWeightHint();
    calculateBMI();
  });

  weightSlider.addEventListener('input', () => {
    weightInput.value = weightSlider.value;
    updateWeightHint();
    calculateBMI();
  });

  ageInput.addEventListener('input', calculateBMI);
  activityInput.addEventListener('change', calculateBMI);

  document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener('change', calculateBMI);
  });

  document.querySelectorAll('input[name="standard"]').forEach(radio => {
    radio.addEventListener('change', () => {
      updateScaleTicks();
      calculateBMI();
    });
  });
}

// --- Live Conversion Hints ---
function updateHeightHint() {
  const cm = parseFloat(heightInput.value) || 0;
  const m = (cm / 100).toFixed(2);
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  const t = translations[currentLang];
  heightHint.textContent = `${m} ${t.meter} (${feet} ${t.feet} ${inches} ${t.inch})`;
}

function updateWeightHint() {
  const kg = parseFloat(weightInput.value) || 0;
  const lbs = (kg * 2.20462).toFixed(1);
  const t = translations[currentLang];
  weightHint.textContent = `${lbs} ${t.lbs}`;
}

// --- Calculate BMI & Metrics ---
function calculateBMI(saveToHistory = false) {
  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);
  const age = parseInt(ageInput.value) || 25;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || 'male';
  const standard = document.querySelector('input[name="standard"]:checked')?.value || 'asian';
  const activityMultiplier = parseFloat(activityInput.value) || 1.375;

  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return;

  // 1. BMI Calculation: kg / (m^2)
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  // 2. Classify Category
  let categoryKey = '';
  let color = '';
  let idealMinBmi = 18.5;
  let idealMaxBmi = (standard === 'asian') ? 22.9 : 24.9;

  if (standard === 'asian') {
    if (bmi < 18.5) {
      categoryKey = 'under';
      color = '#38bdf8';
    } else if (bmi <= 22.9) {
      categoryKey = 'normal';
      color = '#10b981';
    } else if (bmi <= 24.9) {
      categoryKey = 'over';
      color = '#f59e0b';
    } else if (bmi <= 29.9) {
      categoryKey = 'obese1';
      color = '#f97316';
    } else {
      categoryKey = 'obese2';
      color = '#ef4444';
    }
  } else {
    // WHO Standard
    if (bmi < 18.5) {
      categoryKey = 'under';
      color = '#38bdf8';
    } else if (bmi <= 24.9) {
      categoryKey = 'normal';
      color = '#10b981';
    } else if (bmi <= 29.9) {
      categoryKey = 'over';
      color = '#f59e0b';
    } else if (bmi <= 34.9) {
      categoryKey = 'obese1';
      color = '#f97316';
    } else {
      categoryKey = 'obese2';
      color = '#ef4444';
    }
  }

  // 3. Ideal Weight Range
  const idealWeightMin = (idealMinBmi * heightM * heightM).toFixed(1);
  const idealWeightMax = (idealMaxBmi * heightM * heightM).toFixed(1);

  // 4. BMR (Mifflin-St Jeor Formula)
  let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
  bmr = (gender === 'male') ? bmr + 5 : bmr - 161;
  const tdee = Math.round(bmr * activityMultiplier);
  bmr = Math.round(bmr);

  // --- Render to UI ---
  const t = translations[currentLang];

  // Animate BMI number
  animateValue(bmiValueEl, parseFloat(bmiValueEl.textContent) || 0, bmi, 500);

  // Category badge
  const categoryNames = {
    under: t.catUnder,
    normal: t.catNormal,
    over: t.catOver,
    obese1: t.catObese1,
    obese2: t.catObese2
  };
  bmiCategoryBadge.textContent = categoryNames[categoryKey];
  bmiCategoryBadge.style.backgroundColor = `${color}20`;
  bmiCategoryBadge.style.color = color;

  // Standard badge
  resultStandardBadge.textContent = (standard === 'asian') ? t.stdBadgeAsian : t.stdBadgeWho;

  // Ideal weight
  idealWeightVal.textContent = `${idealWeightMin} - ${idealWeightMax} ${t.idealRangeUnit}`;

  if (weightKg < idealWeightMin) {
    const diff = (idealWeightMin - weightKg).toFixed(1);
    weightDiffVal.textContent = t.weightNeedGain.replace('{diff}', diff);
    weightDiffVal.style.color = '#38bdf8';
  } else if (weightKg > idealWeightMax) {
    const diff = (weightKg - idealWeightMax).toFixed(1);
    weightDiffVal.textContent = t.weightNeedLose.replace('{diff}', diff);
    weightDiffVal.style.color = '#f97316';
  } else {
    weightDiffVal.textContent = t.weightGood;
    weightDiffVal.style.color = '#10b981';
  }

  // BMR & TDEE
  bmrVal.textContent = `${bmr.toLocaleString()} kcal`;
  tdeeVal.textContent = `${tdee.toLocaleString()} kcal`;

  // Advice
  const adviceItems = adviceData[currentLang][categoryKey] || [];
  adviceList.innerHTML = adviceItems.map(item => `<li>${item}</li>`).join('');

  // Gauge Meter Animation
  updateGauge(bmi, color);

  // Save to history if explicitly requested (e.g. on submit button)
  if (saveToHistory) {
    addHistoryRecord({
      date: new Date().toLocaleString(currentLang === 'th' ? 'th-TH' : 'en-US', {
        dateStyle: 'short',
        timeStyle: 'short'
      }),
      bmi: bmi.toFixed(1),
      category: categoryNames[categoryKey],
      color: color,
      weight: weightKg,
      height: heightCm,
      standard: standard
    });
  }
}

// --- Gauge Needle & Arc Update ---
function updateGauge(bmi, color) {
  // Map BMI (range 15 to 35) to angle (-90deg to +90deg)
  const minBmi = 15;
  const maxBmi = 35;
  const clampedBmi = Math.min(Math.max(bmi, minBmi), maxBmi);
  const percentage = (clampedBmi - minBmi) / (maxBmi - minBmi);
  const angle = -90 + (percentage * 180);

  // Needle rotate
  gaugeNeedle.style.transform = `translateX(-50%) rotate(${angle}deg)`;

  // Arc path stroke-dashoffset (total length ~251.2 for r=80)
  const totalLength = 251.2;
  const offset = totalLength * (1 - percentage);
  gaugeFill.style.strokeDashoffset = offset;
  gaugeFill.style.stroke = color;
}

// --- Smooth Number Animation ---
function animateValue(element, start, end, duration) {
  if (isNaN(start)) start = 0;
  const range = end - start;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (range * easeProgress);
    element.textContent = current.toFixed(1);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = end.toFixed(1);
    }
  }

  requestAnimationFrame(update);
}

// --- Scale Ticks according to standard ---
function updateScaleTicks() {
  const standard = document.querySelector('input[name="standard"]:checked')?.value || 'asian';
  const scaleTicks = document.getElementById('scaleTicks');
  if (standard === 'asian') {
    scaleTicks.innerHTML = `
      <span>&lt; 18.5</span>
      <span>23.0</span>
      <span>25.0</span>
      <span>30.0+</span>
    `;
  } else {
    scaleTicks.innerHTML = `
      <span>&lt; 18.5</span>
      <span>25.0</span>
      <span>30.0</span>
      <span>35.0+</span>
    `;
  }
}

// --- History Management (LocalStorage) ---
const HISTORY_STORAGE_KEY = 'bmi_calc_history';

function loadHistory() {
  try {
    const records = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
    renderHistory(records);
  } catch {
    renderHistory([]);
  }
}

function addHistoryRecord(record) {
  try {
    const records = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
    records.unshift(record);
    if (records.length > 10) records.pop(); // Keep top 10
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(records));
    renderHistory(records);
  } catch (e) {
    console.error("Could not save history", e);
  }
}

function renderHistory(records) {
  if (!records || records.length === 0) {
    emptyHistoryNotice.style.display = 'block';
    historyContainer.querySelectorAll('.history-item').forEach(el => el.remove());
    return;
  }

  emptyHistoryNotice.style.display = 'none';
  historyContainer.querySelectorAll('.history-item').forEach(el => el.remove());

  records.forEach(item => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <div class="history-left">
        <span class="history-bmi-tag" style="background-color: ${item.color}20; color: ${item.color};">${item.bmi}</span>
        <div class="history-meta">
          <span class="history-category" style="color: ${item.color};">${item.category}</span>
          <span class="history-specs">${item.weight} kg &bull; ${item.height} cm (${item.standard.toUpperCase()})</span>
        </div>
      </div>
      <span class="history-date">${item.date}</span>
    `;
    historyContainer.appendChild(div);
  });
}

function clearHistory() {
  localStorage.removeItem(HISTORY_STORAGE_KEY);
  renderHistory([]);
}

// --- Language Switching ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bmi_lang', lang);

  langThBtn.classList.toggle('active', lang === 'th');
  langEnBtn.classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;

  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  updateHeightHint();
  updateWeightHint();
  updateScaleTicks();
  calculateBMI();
  loadHistory();
}

// --- Theme Switching ---
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('bmi_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  setupInputSync();
  updateHeightHint();
  updateWeightHint();
  updateScaleTicks();

  // Set initial theme & language
  setTheme(currentTheme);
  setLanguage(currentLang);

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateBMI(true); // Save to history on click
  });

  // Reset button
  document.getElementById('resetBtn').addEventListener('click', () => {
    heightInput.value = 170;
    heightSlider.value = 170;
    weightInput.value = 65;
    weightSlider.value = 65;
    ageInput.value = 25;
    activityInput.value = "1.375";
    document.getElementById('stdAsian').checked = true;
    document.querySelector('input[name="gender"][value="male"]').checked = true;

    updateHeightHint();
    updateWeightHint();
    updateScaleTicks();
    calculateBMI();
  });

  // Language buttons
  langThBtn.addEventListener('click', () => setLanguage('th'));
  langEnBtn.addEventListener('click', () => setLanguage('en'));

  // Theme button
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  });

  // Clear history
  clearHistoryBtn.addEventListener('click', clearHistory);

  // Initial calculation
  calculateBMI();
});
