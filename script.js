// --- DATA KUIS ---
const questions = [
  // Dimensi 1: Fokus Energi (Ekstrovert vs Introvert)
  {
    question:
      "Setelah seharian berinteraksi dengan banyak entitas, Anda merasa...",
    options: {
      a: "Kapasitas energi terisi penuh",
      b: "Terkuras dan memerlukan isolasi",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },
  {
    question: "Saat diinfiltrasi ke dalam keramaian, Anda cenderung...",
    options: {
      a: "Membuka komunikasi dengan subjek asing",
      b: "Membatasi perimeter dengan sekutu terdekat",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },
  {
    question: "Parameter operasi ideal Anda...",
    options: {
      a: "Sistem manuver beregu (Tim)",
      b: "Operasi senyap individu (Solo)",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },
  {
    question: "Dalam memproses data mentah, Anda...",
    options: {
      a: "Melakukan verifikasi verbal secara langsung",
      b: "Menganalisis di ruang internal sebelum bersuara",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },
  {
    question: "Jaringan relasi Anda berbentuk...",
    options: {
      a: "Satelit luas dengan banyak titik kontak",
      b: "Sirkuit tertutup dengan koneksi berintensitas tinggi",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },
  {
    question: "Selama jeda operasional (akhir pekan), Anda...",
    options: {
      a: "Mencari stimulasi sosial eksternal",
      b: "Mempertahankan posisi di markas untuk kalibrasi ulang",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },
  {
    question: "Saat menemui kebuntuan taktis, Anda...",
    options: {
      a: "Menyebarkan isu untuk mengumpulkan perspektif luar",
      b: "Menarik diri untuk komputasi solusi mandiri",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },
  {
    question: "Gagasan paling inovatif muncul ketika...",
    options: {
      a: "Tengah terjadi friksi diskusi yang aktif",
      b: "Tingkat kebisingan mencapai titik nol (hening)",
    },
    scores: { a: { axis: "E", value: 1 }, b: { axis: "I", value: 1 } },
  },

  // Dimensi 2: Memperoleh Informasi (Realis vs Intuitif)
  {
    question: "Saat membedah instruksi baru, fokus utama Anda adalah...",
    options: {
      a: "Bukti fisik dan spesifikasi teknis",
      b: "Pola tersembunyi dan potensi eksperimental",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },
  {
    question: "Instrumen mana yang lebih Anda percayai?",
    options: {
      a: "Observasi empiris dan fakta historis",
      b: "Insting, firasat, dan visi teoritis",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },
  {
    question: "Dalam interogasi atau percakapan, Anda mencari...",
    options: {
      a: "Pernyataan harfiah dan log transkrip",
      b: "Subteks dan makna yang tidak diucapkan",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },
  {
    question: "Klasifikasi yang paling cocok untuk Anda...",
    options: {
      a: "Pragmatis dan berpijak pada bumi",
      b: "Visioner dan berorientasi pada konsep",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },
  {
    question: "Menghadapi proyek baru, prosedur Anda adalah...",
    options: {
      a: "Menjalankan protokol standar yang teruji",
      b: "Merakit metodologi baru dari awal",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },
  {
    question: "Radar Anda lebih sering diarahkan ke...",
    options: {
      a: "Kondisi taktis masa kini",
      b: "Probabilitas kejadian di masa depan",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },
  {
    question: "Saat merakit instrumen kompleks...",
    options: {
      a: "Buku manual dibaca baris per baris",
      b: "Memvisualisasikan hasil akhir dan merakit menggunakan intuisi",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },
  {
    question: "Literatur yang menarik perhatian Anda adalah...",
    options: {
      a: "Dokumentasi non-fiksi dengan akurasi data",
      b: "Fiksi spekulatif dengan pembangunan dunia yang abstrak",
    },
    scores: { a: { axis: "R", value: 1 }, b: { axis: "N", value: 1 } },
  },

  // Dimensi 3: Mengambil Keputusan (Logis vs Perasa)
  {
    question: "Variabel terpenting dalam pengambilan keputusan...",
    options: {
      a: "Kalkulasi objektif dan efisiensi logis",
      b: "Dampak humanis dan nilai moral",
    },
    scores: { a: { axis: "L", value: 1 }, b: { axis: "F", value: 1 } },
  },
  {
    question: "Memberikan koreksi/kritik bagi Anda adalah...",
    options: {
      a: "Kewajiban fungsional untuk optimalisasi",
      b: "Tugas berat karena berisiko merusak moral personel",
    },
    scores: { a: { axis: "L", value: 1 }, b: { axis: "F", value: 1 } },
  },
  {
    question: "Anda lebih menghargai reputasi sebagai individu yang...",
    options: {
      a: "Objektif, adil, dan konsisten",
      b: "Simpatik, hangat, dan suportif",
    },
    scores: { a: { axis: "L", value: 1 }, b: { axis: "F", value: 1 } },
  },
  {
    question: "Dalam konflik verbal, objektif utama Anda...",
    options: {
      a: "Mempertahankan kebenaran fakta",
      b: "Menjaga stabilitas aliansi",
    },
    scores: { a: { axis: "L", value: 1 }, b: { axis: "F", value: 1 } },
  },
  {
    question: "Kriteria kesuksesan sebuah keputusan...",
    options: {
      a: "Secara statistik masuk akal dan menyelesaikan masalah",
      b: "Mengakomodasi konsensus dan perasaan kelompok",
    },
    scores: { a: { axis: "L", value: 1 }, b: { axis: "F", value: 1 } },
  },
  {
    question: "Saat rekan melaporkan krisis, reaksi pertama Anda...",
    options: {
      a: "Menyusun cetak biru untuk perbaikan",
      b: "Memberikan validasi emosional terlebih dahulu",
    },
    scores: { a: { axis: "L", value: 1 }, b: { axis: "F", value: 1 } },
  },
  {
    question: "Bila harus memutus rantai komando, Anda memikirkan...",
    options: {
      a: "Rasio untung-rugi bagi organisasi secara keseluruhan",
      b: "Nasib individu-individu yang terkena dampaknya",
    },
    scores: { a: { axis: "L", value: 1 }, b: { axis: "F", value: 1 } },
  },

  // Dimensi 4: Gaya Hidup (Terstruktur vs Fleksibel)
  {
    question: "Format kehidupan operasional Anda...",
    options: {
      a: "Terjadwal ketat dengan milestone yang jelas",
      b: "Cair, beradaptasi dengan variabel yang muncul",
    },
    scores: { a: { axis: "T", value: 1 }, b: { axis: "S", value: 1 } },
  },
  {
    question: "Manajemen tenggat waktu (Deadline)...",
    options: {
      a: "Diselesaikan jauh sebelum hitung mundur berakhir",
      b: "Sistem memacu kecepatan maksimal di detik-detik terakhir",
    },
    scores: { a: { axis: "T", value: 1 }, b: { axis: "S", value: 1 } },
  },
  {
    question: "Ekosistem kerja yang Anda cari...",
    options: {
      a: "Sistematis, terprediksi, tertib",
      b: "Dinamis, spontan, mentolerir kekacauan",
    },
    scores: { a: { axis: "T", value: 1 }, b: { axis: "S", value: 1 } },
  },
  {
    question: "Sebelum melakukan perpindahan lokasi (liburan)...",
    options: {
      a: "Menyusun rute, jadwal logistik, dan titik temu",
      b: "Menuju titik drop dan mengandalkan improvisasi",
    },
    scores: { a: { axis: "T", value: 1 }, b: { axis: "S", value: 1 } },
  },
  {
    question: "Daftar instruksi tugas (To-Do List)...",
    options: {
      a: "Mekanisme vital untuk stabilitas pikiran",
      b: "Dokumen yang membatasi kebebasan bertindak",
    },
    scores: { a: { axis: "T", value: 1 }, b: { axis: "S", value: 1 } },
  },
  {
    question: "Pandangan Anda terhadap aturan...",
    options: {
      a: "Hukum absolut untuk mencegah anomali",
      b: "Parameter yang bisa dibengkokkan sesuai kebutuhan",
    },
    scores: { a: { axis: "T", value: 1 }, b: { axis: "S", value: 1 } },
  },
  {
    question: "Pesan yang menumpuk di kotak masuk menyebabkan...",
    options: {
      a: "Desakan untuk segera melakukan pembersihan/eksekusi",
      b: "Toleransi yang tinggi, akan diurai bila sempat",
    },
    scores: { a: { axis: "T", value: 1 }, b: { axis: "S", value: 1 } },
  },
];

const traitExplanations = {
  Ekstrovert:
    "Pengisian daya internal terjadi melalui paparan eksternal. Subjek beroperasi optimal dalam formasi regu dan komunikasi terbuka.",
  Introvert:
    "Pengisian daya internal terjadi melalui isolasi. Subjek unggul dalam operasi senyap, analisis mendalam, dan observasi pasif.",
  Realis:
    "Akuisisi data bertumpu pada panca indera dan validasi empiris. Sangat responsif terhadap realitas taktis dan eksekusi praktis.",
  Intuitif:
    "Akuisisi data bertumpu pada pengenalan pola. Subjek memiliki kapasitas untuk memproyeksikan skenario masa depan dan teori abstrak.",
  Logis:
    "Resolusi konflik didorong oleh algoritma kebenaran dan efisiensi objektif. Mengutamakan hasil akhir dibanding sentimen personal.",
  Perasa:
    "Resolusi konflik didorong oleh matriks nilai kemanusiaan dan pelestarian aliansi. Mengutamakan stabilitas emosional kolektif.",
  Terstruktur:
    "Mengendalikan lingkungan melalui penjadwalan dan kategorisasi ketat. Menolak variabel kejutan.",
  Spontan:
    "Beradaptasi dengan lingkungan melalui improvisasi tingkat tinggi. Berkembang dalam situasi yang terus berubah.",
};

// --- LOGIKA APLIKASI ---

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-quiz-btn");
const retakeBtn = document.getElementById("retake-quiz-btn");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionABtn = document.getElementById("option-a");
const optionBBtn = document.getElementById("option-b");
const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const resultTypeEl = document.getElementById("result-type");
const resultTitleEl = document.getElementById("result-title");
const chartCanvas = document.getElementById("result-chart");
const copyBtn = document.getElementById("copy-link-btn");
const notification = document.getElementById("notification");
const traitModal = document.getElementById("trait-modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, R: 0, N: 0, L: 0, F: 0, T: 0, S: 0 };
let resultChart = null;
let finalResultType = "";

document.addEventListener("DOMContentLoaded", init);

function init() {
  startBtn.addEventListener("click", startQuiz);
  retakeBtn.addEventListener("click", startQuiz);
  optionABtn.addEventListener("click", () => selectAnswer("a"));
  optionBBtn.addEventListener("click", () => selectAnswer("b"));
  copyBtn.addEventListener("click", copyResultLink);
  modalCloseBtn.addEventListener("click", hideTraitModal);
  traitModal.addEventListener("click", (e) => {
    if (e.target === traitModal) hideTraitModal();
  });

  window.addEventListener("resize", () => {
    if (resultScreen.classList.contains("hidden") === false) {
      createRadarChart();
    }
  });
}

function startQuiz() {
  currentQuestionIndex = 0;
  scores = { E: 0, I: 0, R: 0, N: 0, L: 0, F: 0, T: 0, S: 0 };

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];

  questionNumberEl.textContent = String(currentQuestionIndex + 1).padStart(
    2,
    "0",
  );
  questionTextEl.textContent = question.question;
  optionABtn.querySelector("span").textContent =
    `>> A. ${question.options.a} <<`;
  optionBBtn.querySelector("span").textContent =
    `>> B. ${question.options.b} <<`;

  const progress = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressPercent.textContent = `>> ${Math.round(progress)}% <<`;
}

function selectAnswer(choice) {
  const question = questions[currentQuestionIndex];
  const scoreInfo = question.scores[choice];
  scores[scoreInfo.axis] += scoreInfo.value;

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    progressBar.style.width = "100%";
    progressPercent.textContent = ">> 100% <<";
    showResults();
  }
}

function calculateResult() {
  let result = "";
  result += scores.E > scores.I ? "E" : "I";
  result += scores.R > scores.N ? "R" : "N";
  result += scores.L > scores.F ? "L" : "F";
  result += scores.T > scores.S ? "T" : "S";
  return result;
}

function generatePersonalityContent(type) {
  const map = {
    E: { name: "EKSTROVERT", desc: "Beroperasi pada jaringan sosial." },
    I: {
      name: "INTROVERT",
      desc: "Beroperasi pada sistem internal terisolasi.",
    },
    R: {
      name: "REALIS",
      desc: "Memproses data konkret dan fakta lapangan.",
    },
    N: {
      name: "INTUITIF",
      desc: "Memproses ide dan kalkulasi hipotetis.",
    },
    L: {
      name: "LOGIS",
      desc: "Eksekusi berdasarkan efisiensi rasional.",
    },
    F: {
      name: "PERASA",
      desc: "Eksekusi berdasarkan integrasi emosional.",
    },
    T: {
      name: "TERSTRUKTUR",
      desc: "Membutuhkan cetak biru dan komando jelas.",
    },
    S: { name: "SPONTAN", desc: "Taktik improvisasi dan reaksi cepat." },
  };

  const typeChars = type.split("");
  const titleMap = {
    IRLT: "ANALIS SISTEM",
    ENFS: "INSPIRATOR LAPANGAN",
    IRLF: "PENJAGA STABILITAS",
    ENFT: "KAMPION VISIONER",
    IRNT: "ARSITEK BAYANGAN",
    ENLS: "PENGGERAK MASSA",
    IRNF: "NEGOSIATOR IDEAL",
    ENLT: "KOMANDAN TAKTIS",
    ISLT: "TEKNISI SPESIALIS",
    ERLS: "PENGHUBUNG JARINGAN",
    ISLF: "DIPLOMAT ADAPTIF",
    ERLT: "PENGENDALI TERITORIAL",
    ISNT: "OPERATOR EKSPERIMEN",
    ERNS: "EKSPLORATOR ENERGIK",
    ISNF: "INFILTRATOR BUDAYA",
    ERNT: "EKSEKUTIF UTAMA",
  };

  const careerMap = {
    I: ["Analis Intelijen", "Kriptografer", "Ahli Sandi"],
    R: ["Ahli Forensik", "Insinyur Persenjataan", "Auditor"],
    L: ["Pakar Strategi", "Ahli Hukum", "Data Scientist"],
    T: ["Komandan Lapangan", "Administrator Pangkalan"],
    E: ["Negosiator", "Agen Rekrutmen", "Humas"],
    N: ["Penasihat Visi", "Desainer Sistem", "Profiler"],
    F: ["Konselor Psikis", "Interogator Empatis"],
    S: ["Agen Lapangan Lepas", "Jurnalis Investigasi"],
  };

  let description = `SUBJEK DIIDENTIFIKASI DENGAN PARAMETER ${map[typeChars[0]].name}, ${map[typeChars[1]].name}, ${map[typeChars[2]].name}, DAN ${map[typeChars[3]].name}. SUMMARY: ${map[typeChars[0]].desc} ${map[typeChars[1]].desc} ${map[typeChars[2]].desc} ${map[typeChars[3]].desc}`;

  let careers = [
    ...new Set([
      ...careerMap[typeChars[0]],
      ...careerMap[typeChars[1]],
      ...careerMap[typeChars[2]],
      ...careerMap[typeChars[3]],
    ]),
  ];

  let communication = `Protokol komunikasi: ${
    typeChars[2] === "L"
      ? "Transmisi langsung, nol redundansi."
      : "Terkodefikasi dengan filter diplomasi."
  } ${
    typeChars[1] === "R"
      ? "Orientasi pada laporan lapangan aktual."
      : "Orientasi pada rancangan makro."
  } ${
    typeChars[0] === "I"
      ? "Kanal komunikasi tertutup/enkripsi end-to-end direkomendasikan."
      : "Broadcasting pada frekuensi publik optimal."
  }`;

  const partnerType =
    typeChars[0] +
    (typeChars[1] === "R" ? "N" : "R") +
    (typeChars[2] === "L" ? "F" : "L") +
    (Math.random() > 0.5 ? "T" : "S");
  const partnerType2 =
    (typeChars[0] === "E" ? "I" : "E") +
    typeChars[1] +
    typeChars[2] +
    (typeChars[3] === "T" ? "S" : "T");

  return {
    title: titleMap[type] || "ANOMALI TAK TERKLASIFIKASI",
    description: description,
    careers: careers.slice(0, 4).join(" // ").toUpperCase(),
    communication: communication.toUpperCase(),
    partners: `TARGET 1: [ ${partnerType} ] | TARGET 2: [ ${partnerType2} ]`,
  };
}

function showResults() {
  finalResultType = calculateResult();
  const content = generatePersonalityContent(finalResultType);

  resultTypeEl.textContent = `[ ${finalResultType} ]`;
  resultTitleEl.textContent = content.title;

  const accordionContainer = document.getElementById("accordion-container");
  accordionContainer.innerHTML = "";

  let traitExplanationHtml = '<ul class="space-y-3 list-none p-0">';
  for (const trait in traitExplanations) {
    traitExplanationHtml += `<li><span class="stamped-badge mr-2">${trait.toUpperCase()}</span> ${traitExplanations[trait]}</li>`;
  }
  traitExplanationHtml += "</ul>";

  const accordionData = [
    {
      title: ">> ARSIP 01: DEFINISI PARAMETER",
      content: traitExplanationHtml,
    },
    {
      title: ">> ARSIP 02: KESIMPULAN PROFIL",
      content: content.description,
    },
    {
      title: ">> ARSIP 03: REKOMENDASI PENUGASAN",
      content: content.careers,
    },
    {
      title: ">> ARSIP 04: PROTOKOL KOMUNIKASI",
      content: content.communication,
    },
    { title: ">> ARSIP 05: SINERGI KELOMPOK", content: content.partners },
  ];

  accordionData.forEach((item, index) => {
    accordionContainer.innerHTML += `
      <div class="border-b-4 border-ink last:border-b-0">
          <button type="button" class="neo-btn w-full justify-between ui-text border-none shadow-none active:transform-none !bg-paper" data-accordion-target="#accordion-body-${index}">
              <span>${item.title}</span>
              <span data-accordion-icon class="font-bold text-xl">+</span>
          </button>
          <div id="accordion-body-${index}" class="accordion-content bg-white">
              <div class="p-5 font-serif font-bold text-ink leading-relaxed">
                  ${item.content}
              </div>
          </div>
      </div>
    `;
  });

  const accordionButtons = accordionContainer.querySelectorAll(
    "[data-accordion-target]",
  );
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-accordion-target");
      const targetEl = document.querySelector(targetId);
      const icon = button.querySelector("[data-accordion-icon]");

      if (targetEl.classList.contains("open")) {
        targetEl.classList.remove("open");
        icon.textContent = "+";
      } else {
        targetEl.classList.add("open");
        icon.textContent = "-";
      }
    });
  });

  if (accordionButtons.length > 0) {
    const firstButton = accordionButtons[0];
    const firstTarget = document.querySelector(
      firstButton.getAttribute("data-accordion-target"),
    );
    const firstIcon = firstButton.querySelector("[data-accordion-icon]");
    firstIcon.textContent = "-";
    firstTarget.classList.add("open");
  }

  createRadarChart();

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showTraitModal(trait) {
  modalTitle.textContent = `>> DATA: ${trait.toUpperCase()}`;
  modalContent.textContent =
    traitExplanations[trait] || "Data diklasifikasikan.";
  traitModal.classList.remove("hidden");
  traitModal.classList.add("flex");
}

function hideTraitModal() {
  traitModal.classList.add("hidden");
  traitModal.classList.remove("flex");
}

function createRadarChart() {
  if (resultChart) resultChart.destroy();
  const isMobile = window.innerWidth < 768;

  const data = {
    labels: [
      "EKSTROVERT",
      "INTROVERT",
      "REALIS",
      "INTUITIF",
      "LOGIS",
      "PERASA",
      "TERSTRUKTUR",
      "SPONTAN",
    ],
    datasets: [
      {
        label: "SKOR SUBJEK",
        data: [
          scores.E,
          scores.I,
          scores.R,
          scores.N,
          scores.L,
          scores.F,
          scores.T,
          scores.S,
        ],
        fill: true,
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        borderColor: "#0f172a",
        pointBackgroundColor: "#ea580c",
        pointBorderColor: "#0f172a",
        pointHoverBackgroundColor: "#0f172a",
        pointHoverBorderColor: "#ea580c",
      },
    ],
  };

  const config = {
    type: "radar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      elements: { line: { borderWidth: 3 } },
      onClick: (event, elements, chart) => {
        const scale = chart.scales.r;
        const clickX = event.x,
          clickY = event.y;
        scale._pointLabelItems.forEach((label, index) => {
          const { x, y, width, height } = label;
          if (
            clickX >= x - width / 2 &&
            clickX <= x + width / 2 &&
            clickY >= y - height / 2 &&
            clickY <= y + height
          ) {
            showTraitModal(
              chart.data.labels[index].charAt(0) +
                chart.data.labels[index].slice(1).toLowerCase(),
            );
          }
        });
      },
      onHover: (event, chartElement, chart) => {
        const canvas = chart.canvas;
        canvas.style.cursor = "default";
        const scale = chart.scales.r;
        let onLabel = false;
        scale._pointLabelItems.forEach((label) => {
          if (
            event.x >= label.x - label.width / 2 &&
            event.x <= label.x + label.width / 2 &&
            event.y >= label.y - label.height / 2 &&
            event.y <= label.y + label.height
          ) {
            onLabel = true;
          }
        });
        if (onLabel) canvas.style.cursor = "pointer";
      },
      scales: {
        r: {
          angleLines: { color: "#0f172a", lineWidth: 2 },
          grid: { color: "#0f172a", lineWidth: 2 },
          pointLabels: {
            color: "#0f172a",
            font: {
              family: "'Courier Prime', monospace",
              size: isMobile ? 10 : 12,
              weight: "bold",
            },
          },
          ticks: { display: false, stepSize: 2 },
          suggestedMin: 0,
          suggestedMax: 8,
        },
      },
      plugins: { legend: { display: false } },
    },
  };
  resultChart = new Chart(chartCanvas, config);
}

function shareTo(platform) {
  const text = `KLASIFIKASI SAYA: KODE [ ${finalResultType} ] - ${resultTitleEl.textContent}. VERIFIKASI STATUS ANDA:`;
  const url = window.location.href;
  let shareUrl = "";

  if (platform === "twitter") {
    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  } else if (platform === "facebook") {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
  }

  if (shareUrl) window.open(shareUrl, "_blank", "width=600,height=400");
}

function copyResultLink() {
  const textToCopy = `KLASIFIKASI SAYA: KODE [ ${finalResultType} ] - ${resultTitleEl.textContent}. VERIFIKASI STATUS ANDA: ${window.location.href}`;
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showNotification(">> DATA TERSALIN KE CLIPBOARD <<");
  } catch (err) {
    showNotification(">> PERINGATAN: GAGAL MENYALIN DATA <<", true);
  }
  document.body.removeChild(textArea);
}

function showNotification(message, isError = false) {
  notification.textContent = message;
  if (isError) {
    notification.classList.remove("bg-ink");
    notification.classList.add("bg-rust");
  } else {
    notification.classList.add("bg-ink");
    notification.classList.remove("bg-rust");
  }
  notification.classList.remove("hidden");
  setTimeout(() => notification.classList.add("hidden"), 3000);
}
