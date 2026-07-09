// DATA TERAPI & LAYANAN
const therapyData = {
    pijat: {
        title: "Totok Punggung Mix",
        desc: "Terapi penekanan pada titik-titik saraf di sepanjang punggung yang dikombinasikan dengan teknik relaksasi untuk melancarkan sirkulasi darah, menguraikan sumbatan, dan meredakan ketegangan otot.",
        checklist: [
            "Melancarkan alur sumbatan pembuluh darah",
            "Meredakan pegal & ketegangan punggung dan leher",
            "Meningkatkan daya tahan tubuh dan kebugaran"
        ],
        btnIcon: "fa-solid fa-hand-sparkles",
        btnText: "Pesan Totok Punggung Sekarang",
        visualText: "Totok Punggung Mix",
        visualBg: "#4a9d6f",
        visualTextColor: "#ffffff"
    },
    bekam: {
        title: "Bekam Tradisional (Hijamah)",
        desc: "Terapi bekam yang aman dan higienis untuk membantu sirkulasi darah dan mengurangi keluhan pegal. Sangat efektif untuk orang yang sering merasa berat dan lelah berkepanjangan.",
        checklist: [
            "Melancarkan peredaran darah",
            "Mengurangi rasa berat dan pegal",
            "Membantu tubuh membuang toksin"
        ],
        btnIcon: "fa-solid fa-fire",
        btnText: "Pesan Bekam Sekarang",
        visualText: "Bekam Therapy",
        visualBg: "#2d6f52",
        visualTextColor: "#ffffff"
    },
    akupunktur: {
        title: "Akupunktur Medis Modern",
        desc: "Terapi akupunktur dengan jarum tipis yang aman dan steril. Cocok untuk meredakan sakit kepala, pusing, dan gangguan tidur tanpa efek samping.",
        checklist: [
            "Meredakan pusing dan migrain",
            "Membantu tidur jadi lebih nyenyak",
            "Mengurangi stres dan kegelisahan"
        ],
        btnIcon: "fa-solid fa-droplet",
        btnText: "Pesan Akupunktur Sekarang",
        visualText: "Acupuncture",
        visualBg: "#286849ff",
        visualTextColor: "#ffffff"
    },
    stroke: {
        title: "Terapi Pasca Stroke",
        desc: "Perawatan komprehensif untuk membantu pemulihan mobilitas dan fungsi saraf setelah stroke. Terapis kami menggunakan metode yang aman dan teruji untuk membantu Anda kembali beraktivitas.",
        checklist: [
            "Memperbaiki fungsi motorik",
            "Meningkatkan kekuatan otot",
            "Mencegah kekakuan sendi"
        ],
        btnIcon: "fa-solid fa-wheelchair",
        btnText: "Pesan Terapi Pasca Stroke",
        visualText: "Pasca Stroke",
        visualBg: "#29502dff",
        visualTextColor: "#ffffff"
    },
    syaraf: {
        title: "Terapi Syaraf Kejepit",
        desc: "Penanganan khusus untuk meredakan nyeri dan ketegangan akibat syaraf kejepit di area tulang belakang atau area lainnya, membantu memulihkan rentang gerak Anda dengan nyaman.",
        checklist: [
            "Meredakan nyeri punggung",
            "Mengurangi rasa kesemutan",
            "Memperbaiki mobilitas"
        ],
        btnIcon: "fa-solid fa-bone",
        btnText: "Pesan Terapi Syaraf Kejepit",
        visualText: "Syaraf Kejepit",
        visualBg: "#21471dff",
        visualTextColor: "#ffffff"
    }
};

// FUNGSI GANTI TAB TERAPI
function switchTab(tabKey, element) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    element.classList.add('active');

    const data = therapyData[tabKey];
    if (!data) return;

    document.getElementById('tab-title').textContent = data.title;
    document.getElementById('tab-desc').textContent = data.desc;

    const checklistContainer = document.getElementById('tab-checklist');
    checklistContainer.innerHTML = '';
    data.checklist.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
        checklistContainer.appendChild(li);
    });

    document.getElementById('tab-btn-text').textContent = data.btnText;
    document.getElementById('tab-btn-icon').className = data.btnIcon;

    const visualBox = document.getElementById('tab-visual-box');
    visualBox.style.backgroundColor = data.visualBg;

    const visualText = document.getElementById('tab-visual-text');
    visualText.textContent = data.visualText;
    visualText.style.color = data.visualTextColor;
}

// INSTASIASI KETIKA DOM SELESAI DILOAD
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        switchTab('pijat', activeTab);
    }
});

// ==========================================
// LOGIKA KALENDER UTK JADWAL BEKAM & PUASA (SOP PBI 1448 H)
// ==========================================
let currentCalendarDate = new Date();

const pbiMonths1448 = [
    { name: "Muharram", start: new Date(2026, 5, 16) },      // 1 Muharram = 16 Juni 2026
    { name: "Safar", start: new Date(2026, 6, 16) },         // 1 Safar = 16 Juli 2026
    { name: "Rabi'al-Awwal", start: new Date(2026, 7, 14) },  // 1 Rabi'al-Awwal = 14 Agustus 2026
    { name: "Rabi'al-Thani", start: new Date(2026, 8, 13) },  // 1 Rabi'al-Thani = 13 September 2026
    { name: "Jumada al-Awwal", start: new Date(2026, 9, 12) },// 1 Jumada al-Awwal = 12 Oktober 2026
    { name: "Jumada al-Thani", start: new Date(2026, 10, 11) },// 1 Jumada al-Thani = 11 November 2026
    { name: "Rajab", start: new Date(2026, 11, 10) },         // 1 Rajab = 10 Desember 2026
    { name: "Sha'ban", start: new Date(2027, 0, 9) },        // 1 Sha'ban = 9 Januari 2027
    { name: "Ramadan", start: new Date(2027, 1, 7) },        // 1 Ramadan = 7 Februari 2027
    { name: "Shawwal", start: new Date(2027, 2, 9) },        // 1 Shawwal = 9 Maret 2027
    { name: "Dhu al-Qi'dah", start: new Date(2027, 3, 7) },   // 1 Dhu al-Qi'dah = 7 April 2027
    { name: "Dhu al-Hijjah", start: new Date(2027, 4, 7) }    // 1 Dhu al-Hijjah = 7 Mei 2027
];

function getPBIHijriDate(targetDate) {
    let activeMonthIdx = -1;
    
    for (let i = pbiMonths1448.length - 1; i >= 0; i--) {
        if (targetDate >= pbiMonths1448[i].start) {
            activeMonthIdx = i;
            break;
        }
    }
    
    if (activeMonthIdx === -1) return null;
    
    const diffTime = targetDate - pbiMonths1448[activeMonthIdx].start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    return {
        day: diffDays,
        monthName: pbiMonths1448[activeMonthIdx].name
    };
}

function renderSunnahCalendar() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    document.getElementById("calendar-month-year").textContent = `${monthNames[month]} ${year}`;

    const gridContainer = document.getElementById("calendar-days-grid");
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyBox = document.createElement("div");
        emptyBox.classList.add("calendar-day-box", "empty");
        gridContainer.appendChild(emptyBox);
    }

    for (let day = 1; day <= lastDay; day++) {
        const dayBox = document.createElement("div");
        dayBox.classList.add("calendar-day-box");

        const targetDate = new Date(year, month, day);
        const hijriData = getPBIHijriDate(targetDate);

        dayBox.innerHTML = `<span class="gregorian-num">${day}</span>`;
        
        if (hijriData && hijriData.day <= 30) {
            const hijriDay = hijriData.day;
            dayBox.innerHTML += `<span class="hijri-num">${hijriDay}</span>`;
            
            if (hijriDay === 13 || hijriDay === 14 || hijriDay === 15) {
                dayBox.classList.add("status-puasa");
            } else if (hijriDay === 17 || hijriDay === 19 || hijriDay === 21) {
                dayBox.classList.add("status-bekam");
            }
        }

        gridContainer.appendChild(dayBox);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        switchTab('pijat', activeTab);
    }

    if (document.getElementById("calendar-days-grid")) {
        renderSunnahCalendar();

        document.getElementById("prev-month").addEventListener("click", () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
            renderSunnahCalendar();
        });

        document.getElementById("next-month").addEventListener("click", () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
            renderSunnahCalendar();
        });
    }
});

// ==========================================
// LOGIKA BACKSOUND LANGSUNG NYALA OTOMATIS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('spa-backsound');
    const musicToggle = document.getElementById('music-toggle');
    
    if (audio && musicToggle) {
        const icon = musicToggle.querySelector('i');
        audio.volume = 0.4;

        audio.play().then(() => {
            console.log("Autoplay berhasil aktif.");
        }).catch(err => {
            console.log("Autoplay diblokir sistem browser, mengaktifkan trik instan...", err);
            
            const forcePlay = () => {
                audio.play().then(() => {
                    icon.className = 'fa-solid fa-volume-high';
                    musicToggle.classList.add('playing');
                    cleanListeners();
                });
            };

            const cleanListeners = () => {
                document.removeEventListener('click', forcePlay);
                document.removeEventListener('scroll', forcePlay);
                document.removeEventListener('touchstart', forcePlay);
            };

            document.addEventListener('click', forcePlay);
            document.addEventListener('scroll', forcePlay);
            document.addEventListener('touchstart', forcePlay);
        });

        musicToggle.addEventListener('click', (event) => {
            event.stopPropagation(); 
            if (audio.paused) {
                audio.play();
                icon.className = 'fa-solid fa-volume-high';
                musicToggle.classList.add('playing');
            } else {
                audio.pause();
                icon.className = 'fa-solid fa-volume-xmark';
                musicToggle.classList.remove('playing');
            }
        });
    }
});