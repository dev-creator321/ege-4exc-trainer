// ==========================================
// 1. БАЗА ДАННЫХ (Тестовый массив слов)
// ==========================================
const wordsDatabase = [
  // УРОВЕНЬ 1: ИМЕНА СУЩЕСТВИТЕЛЬНЫЕ (1-35)
  { word: "аэропорты", correct: "аэропОрты", level: 1 },
  { word: "банты", correct: "бАнты", level: 1 },
  { word: "бороду", correct: "бОроду", level: 1 },
  { word: "бухгалтеров", correct: "бухгАлтеров", level: 1 },
  { word: "водопровод", correct: "водопровОд", level: 1 },
  { word: "газопровод", correct: "газопровОд", level: 1 },
  { word: "гражданство", correct: "граждАнство", level: 1 },
  { word: "дефис", correct: "дефИс", level: 1 },
  { word: "дешевизна", correct: "дешевИзна", level: 1 },
  { word: "диспансер", correct: "диспансЕр", level: 1 },
  { word: "договоренность", correct: "договорЁнность", level: 1 },
  { word: "документ", correct: "докумЕнт", level: 1 },
  { word: "еретик", correct: "еретИк", level: 1 },
  { word: "жалюзи", correct: "жалюзИ", level: 1 },
  { word: "значимость", correct: "знАчимость", level: 1 },
  { word: "иксы", correct: "Иксы", level: 1 },
  { word: "каталог", correct: "каталОг", level: 1 },
  { word: "квартал", correct: "квартАл", level: 1 },
  { word: "километр", correct: "киломЕтр", level: 1 },
  { word: "конусов", correct: "кОнусов", level: 1 },
  { word: "корысть", correct: "корЫсть", level: 1 },
  { word: "краны", correct: "крАны", level: 1 },
  { word: "кремень", correct: "кремЕнЬ", level: 1 },
  { word: "лекторов", correct: "лЕкторов", level: 1 },
  { word: "лыжня", correct: "лыжнЯ", level: 1 },
  { word: "мусоропровод", correct: "мусоропровОд", level: 1 },
  { word: "намерение", correct: "намЕрение", level: 1 },
  { word: "недруг", correct: "нЕдруг", level: 1 },
  { word: "недуг", correct: "недУг", level: 1 },
  { word: "некролог", correct: "некролОг", level: 1 },
  { word: "ненависть", correct: "нEнависть", level: 1 },
  { word: "нефтепровод", correct: "нефтепровОд", level: 1 },
  { word: "отрочество", correct: "Отрочество", level: 1 },
  { word: "отзыв (посла из страны)", correct: "отзЫв (посла из страны)", level: 1 },
  { word: "партер", correct: "партЕр", level: 1 },
  { word: "портфель", correct: "портфЕль", level: 1 },
  { word: "приданое", correct: "придАное", level: 1 },
  { word: "призыв", correct: "призЫв", level: 1 },
  { word: "свекла", correct: "свЁкла", level: 1 },
  { word: "сироты", correct: "сирОты", level: 1 },
  { word: "созыв", correct: "созЫв", level: 1 },
  { word: "сосредоточение", correct: "сосредотОчение", level: 1 },
  { word: "средства", correct: "срЕдства", level: 1 },
  { word: "статуя", correct: "стАтуя", level: 1 },
  { word: "столяр", correct: "столЯр", level: 1 },
  { word: "таможня", correct: "тамОжня", level: 1 },
  { word: "торты", correct: "тОрты", level: 1 },
  { word: "туфля", correct: "тУфля", level: 1 },
  { word: "цемент", correct: "цемЕнт", level: 1 },
  { word: "цепочка", correct: "цепОчка", level: 1 },
  { word: "центнер", correct: "цЕнтнер", level: 1 },
  { word: "шарфы", correct: "шАрфы", level: 1 },
  { word: "шофер", correct: "шофЁр", level: 1 },
  { word: "эксперт", correct: "экспЕрт", level: 1 },

  // УРОВЕНЬ 2: ГЛАГОЛЫ (36-75)
  { word: "брала", correct: "бралА", level: 2 },
  { word: "бралась", correct: "бралАсь", level: 2 },
  { word: "взяла", correct: "взялА", level: 2 },
  { word: "взялась", correct: "взялАсь", level: 2 },
  { word: "влилась", correct: "влилАсь", level: 2 },
  { word: "ворвалась", correct: "ворвалАсь", level: 2 },
  { word: "восприняла", correct: "воспринялА", level: 2 },
  { word: "воссоздала", correct: "воссоздалА", level: 2 },
  { word: "вручит", correct: "вручИт", level: 2 },
  { word: "гнала", correct: "гналА", level: 2 },
  { word: "гналась", correct: "гналАсь", level: 2 },
  { word: "добрала", correct: "добралА", level: 2 },
  { word: "добралась", correct: "добралАсь", level: 2 },
  { word: "дождалась", correct: "дождалАсь", level: 2 },
  { word: "дозировать", correct: "дозИровать", level: 2 },
  { word: "дозвонится", correct: "дозвонИтся", level: 2 },
  { word: "ждала", correct: "ждалА", level: 2 },
  { word: "закупорить", correct: "закУпорить", level: 2 },
  { word: "занял", correct: "зАнял", level: 2 },
  { word: "заняли", correct: "зАняли", level: 2 },
  { word: "заперла", correct: "заперлА", level: 2 },
  { word: "запломбировать", correct: "запломбировАть", level: 2 },
  { word: "защемит", correct: "защемИт", level: 2 },
  { word: "звонит", correct: "звонИт", level: 2 },
  { word: "звала", correct: "звалА", level: 2 },
  { word: "кашлянуть", correct: "кАшлянуть", level: 2 },
  { word: "клала", correct: "клАла", level: 2 },
  { word: "клеить", correct: "клЕить", level: 2 },
  { word: "кралась", correct: "крАлась", level: 2 },
  { word: "кровоточить", correct: "кровоточИть", level: 2 },
  { word: "лгала", correct: "лгалА", level: 2 },
  { word: "лила", correct: "лилА", level: 2 },
  { word: "лилась", correct: "лилАсь", level: 2 },
  { word: "надорвалась", correct: "надорвалАсь", level: 2 },
  { word: "наделит", correct: "наделИт", level: 2 },
  { word: "накренится", correct: "накренИтся", level: 2 },
  { word: "налила", correct: "налилА", level: 2 },
  { word: "нарвала", correct: "нарвалА", level: 2 },
  { word: "нарост", correct: "нарОст", level: 2 },
  { word: "назвалась", correct: "назвалАсь", level: 2 },
  { word: "начал", correct: "нAчал", level: 2 },
  { word: "начала", correct: "началА", level: 2 },
  { word: "начали", correct: "нAчали", level: 2 },
  { word: "обзвонит", correct: "обзвонИт", level: 2 },
  { word: "облилась", correct: "облилАсь", level: 2 },
  { word: "обнялась", correct: "обнялАсь", level: 2 },
  { word: "обогнала", correct: "обогналА", level: 2 },
  { word: "ободрала", correct: "ободралА", level: 2 },
  { word: "ободрить", correct: "ободрИть", level: 2 },
  { word: "ободриться", correct: "ободрИться", level: 2 },
  { word: "обострить", correct: "обострИть", level: 2 },
  { word: "облегчить", correct: "облегчИть", level: 2 },
  { word: "одолжит", correct: "одолжИт", level: 2 },
  { word: "озлобить", correct: "озлОбить", level: 2 },
  { word: "окружит", correct: "окружИт", level: 2 },
  { word: "опошлить", correct: "опОшлить", level: 2 },
  { word: "осведомиться", correct: "освЕдомиться", level: 2 },
  { word: "отбыла", correct: "отбылА", level: 2 },
  { word: "отдала", correct: "отдалА", level: 2 },
  { word: "отозвала", correct: "отозвалА", level: 2 },
  { word: "отозвалась", correct: "отозвалАсь", level: 2 },
  { word: "откупорить", correct: "откУпорить", level: 2 },
  { word: "перезвонит", correct: "перезвонИт", level: 2 },
  { word: "перелила", correct: "перелилА", level: 2 },
  { word: "плодоносить", correct: "плодоносИть", level: 2 },
  { word: "повторит", correct: "повторИт", level: 2 },
  { word: "позвала", correct: "позвалА", level: 2 },
  { word: "положил", correct: "положИл", level: 2 },
  { word: "полила", correct: "полилА", level: 2 },
  { word: "поняла", correct: "понялА", level: 2 },
  { word: "послала", correct: "послАла", level: 2 },
  { word: "прибыл", correct: "прИбыл", level: 2 },
  { word: "прибыла", correct: "прибылА", level: 2 },
  { word: "прибыли", correct: "прИбыли", level: 2 },
  { word: "принял", correct: "прИнял", level: 2 },
  { word: "приняли", correct: "прИняли", level: 2 },
  { word: "приняла", correct: "принялА", level: 2 },
  { word: "рвала", correct: "рвалА", level: 2 },
  { word: "сверлит", correct: "сверлИт", level: 2 },
  { word: "сняла", correct: "снялА", level: 2 },
  { word: "создала", correct: "создалА", level: 2 },
  { word: "сорвала", correct: "сорвалА", level: 2 },
  { word: "убрала", correct: "убралА", level: 2 },
  { word: "углубить", correct: "углубИть", level: 2 },
  { word: "укрепит", correct: "укрепИт", level: 2 },
  { word: "черпать", correct: "чЕрпать", level: 2 },
  { word: "щемит", correct: "щемИт", level: 2 },
  { word: "щелкать", correct: "щЁлкать", level: 2 },

  // УРОВЕНЬ 3: ПРИЧАСТИЯ И ДЕЕПРИЧАСТИЯ (76-110)
  { word: "балованный", correct: "балОванный", level: 3 },
  { word: "включенный", correct: "включЁнный", level: 3 },
  { word: "включен", correct: "включЁн", level: 3 },
  { word: "включена", correct: "включенА", level: 3 },
  { word: "довезенный", correct: "довезЁнный", level: 3 },
  { word: "загнутый", correct: "зAгнутый", level: 3 },
  { word: "закупорив", correct: "закУпорив", level: 3 },
  { word: "занятый", correct: "зAнятый", level: 3 },
  { word: "занята", correct: "занятА", level: 3 },
  { word: "запертый", correct: "зAпертый", level: 3 },
  { word: "заселенный", correct: "заселЁнный", level: 3 },
  { word: "заселена", correct: "заселенА", level: 3 },
  { word: "избалованный", correct: "избалОванный", level: 3 },
  { word: "кровоточащий", correct: "кровоточАщий", level: 3 },
  { word: "наживший", correct: "нажИвший", level: 3 },
  { word: "наливший", correct: "налИвший", level: 3 },
  { word: "нанявшийся", correct: "нанЯвшийся", level: 3 },
  { word: "начав", correct: "начАв", level: 3 },
  { word: "начавший", correct: "начАвший", level: 3 },
  { word: "начаты", correct: "нAчаты", level: 3 },
  { word: "низведенный", correct: "низведЁнный", level: 3 },
  { word: "облегченный", correct: "облегчЁнный", level: 3 },
  { word: "ободренный", correct: "ободрЁнный", level: 3 },
  { word: "обостренный", correct: "обострЁнный", level: 3 },
  { word: "отдав", correct: "отдАв", level: 3 },
  { word: "отключенный", correct: "отключЁнный", level: 3 },
  { word: "повторенный", correct: "повторЁнный", level: 3 },
  { word: "поделенный", correct: "поделЁнный", level: 3 },
  { word: "поняв", correct: "понЯв", level: 3 },
  { word: "понявший", correct: "понЯвший", level: 3 },
  { word: "прибыв", correct: "прибЫв", level: 3 },
  { word: "прирученный", correct: "приручЁнный", level: 3 },
  { word: "принятый", correct: "прИнятый", level: 3 },
  { word: "принята", correct: "принятА", level: 3 },
  { word: "проживший", correct: "прожИвший", level: 3 },
  { word: "снята", correct: "снятА", level: 3 },
  { word: "согнутый", correct: "сОгнутый", level: 3 },
  { word: "создав", correct: "создАв", level: 3 },
  { word: "углубленный", correct: "углублЁнный", level: 3 },

  // УРОВЕНЬ 4: ПРИЛАГАТЕЛЬНЫЕ И НАРЕЧИЯ (111-142)
  { word: "вовремя", correct: "вОвремя", level: 4 },
  { word: "доверху", correct: "дОверху", level: 4 },
  { word: "донизу", correct: "дОнизу", level: 4 },
  { word: "досуха", correct: "дОсуха", level: 4 },
  { word: "засветло", correct: "зАсветло", level: 4 },
  { word: "значимый", correct: "знAчимый", level: 4 },
  { word: "красивее", correct: "красИвее", level: 4 },
  { word: "красивейший", correct: "красИвейший", level: 4 },
  { word: "кухонный", correct: "кУхонный", level: 4 },
  { word: "ловка", correct: "ловкА", level: 4 },
  { word: "мозаичный", correct: "мозаИчный", level: 4 },
  { word: "надолго", correct: "надОлго", level: 4 },
  { word: "ненадолго", correct: "ненадОлго", level: 4 },
  { word: "оптовый", correct: "оптОвый", level: 4 },
  { word: "прозорлива", correct: "прозорлИва", level: 4 },
  { word: "сливовый", correct: "слИвовый", level: 4 }
]

// ==========================================
// 2. ЛОГИКА НАВИГАЦИИ (Переключение экранов)
// ==========================================
const btnMain = document.getElementById('nav-main');
const btnAbout = document.getElementById('nav-about');
const screenLobby = document.getElementById('screen-lobby');
const screenAbout = document.getElementById('screen-about');
const siteHeader = document.querySelector('.site-header');
siteHeader.classList.remove('hidden');

// Клик по кнопке "О тренажёре"
// Клик по кнопке "О тренажёре"
btnAbout.addEventListener('click', () => {
    btnMain.classList.remove('active');
    btnAbout.classList.add('active');
    
    // Прячем абсолютно все другие экраны
    screenLobby.classList.add('hidden');
    screenGame.classList.add('hidden'); 
    
    // Показываем нужный
    screenAbout.classList.remove('hidden');
});

// Клик по кнопке "Главная"
btnMain.addEventListener('click', () => {
    btnAbout.classList.remove('active');
    btnMain.classList.add('active');
    
    // Прячем абсолютно все другие экраны
    screenAbout.classList.add('hidden');
    screenGame.classList.add('hidden');
    
    // Показываем лобби
    screenLobby.classList.remove('hidden');
});
// ==========================================
// 3. ИГРОВАЯ ЛОГИКА (Запуск уровня и карточки)
// ==========================================

// Находим новые игровые элементы в HTML
const screenGame = document.getElementById('screen-game');
const btnBack = document.getElementById('btn-back');
const cardWord = document.getElementById('card-word');
const levelButtons = document.querySelectorAll('.level-btn');
// Находим кнопки управления игрой
const btnCheck = document.getElementById('btn-check');
const btnDoubt = document.getElementById('btn-doubt');
const btnKnow = document.getElementById('btn-know');
const actionButtons = document.getElementById('action-buttons');
const cardStatus = document.getElementById('card-status');

let currentLevelWords = []; // Сюда мы будем копировать отфильтрованные слова уровня


// Логика для кнопки "← К уровням" (Возврат в Лобби)
btnBack.addEventListener('click', () => {
    siteHeader.classList.remove('hidden');
    screenGame.classList.add('hidden');
    screenLobby.classList.remove('hidden');
});

// Логика кнопки "Проверить" (Переворот карточки)
btnCheck.addEventListener('click', () => {
    // Берем текущее слово из нашего массива уровня
    const currentWord = currentLevelWords[0];
    
    // БЭКЕНД: Меняем текст на слово с правильным ударением (например, бАнты)
    cardWord.textContent = currentWord.correct;
    
    // Убираем знак вопроса, так как ответ открыт
    cardStatus.textContent = ""; 
    
    // UX: Скрываем синюю кнопку "Проверить" и показываем блок кнопок "Сомневаюсь/Правильно"
    btnCheck.classList.add('hidden');
    actionButtons.classList.remove('hidden');
});
// Функция для переключения на следующее слово
// Функция для переключения на следующее слово
function nextWord() {
    document.getElementById('words-left').textContent = currentLevelWords.length;
    if (currentLevelWords.length > 0) {
        btnCheck.classList.remove('hidden');
        actionButtons.classList.add('hidden');
        cardStatus.textContent = "?";
        cardWord.textContent = currentLevelWords[0].word.toUpperCase();
    } else {
        // БЭКЕНД: Прячем карточку, кнопки И верхнюю стрелку навигации!
        document.getElementById('flashcard').classList.add('hidden');
        btnCheck.classList.add('hidden');
        actionButtons.classList.add('hidden');
        btnBack.classList.add('hidden'); // ИСПРАВЛЕНО: прячем верхнюю кнопку
        
        document.getElementById('game-result').classList.remove('hidden');
    }
}

// Логика кнопки "Правильно" (Слово выучено)
btnKnow.addEventListener('click', () => {
    currentLevelWords.shift(); // Удаляем угаданное слово из колоды
    nextWord(); // Переходим дальше
});

// Логика кнопки "Сомневаюсь" (Интервальное повторение)
btnDoubt.addEventListener('click', () => {
    const doubtedWord = currentLevelWords.shift(); // Забираем из начала
    currentLevelWords.push(doubtedWord); // Переносим в самый конец колоды
    nextWord(); // Переходим дальше
});

// Логика для финальной кнопки "В начало" на экране результатов
document.getElementById('btn-restart').addEventListener('click', () => {
    // Возвращаем элементы карточки в исходный режим для будущих игр
    document.getElementById('flashcard').classList.remove('hidden');
    document.getElementById('game-result').classList.add('hidden');
    
    // Переключаем экраны (уходим в Лобби в этом же окне браузера)
    screenGame.classList.add('hidden');
    screenLobby.classList.remove('hidden');
    siteHeader.classList.remove('hidden');

});

// Обновленный запуск уровня из Лобби со сбросом всех состояний
levelButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedLevel = parseInt(event.currentTarget.getAttribute('data-level'));
        currentLevelWords = wordsDatabase.filter(item => item.level === selectedLevel);
        
        if (currentLevelWords.length > 0) {
            document.getElementById('words-left').textContent = currentLevelWords.length;

            // Гарантируем, что карточка и кнопки сброшены к лицевой стороне
            document.getElementById('flashcard').classList.remove('hidden');
            document.getElementById('game-result').classList.add('hidden');
            btnCheck.classList.remove('hidden');
            actionButtons.classList.add('hidden');
            cardStatus.textContent = "?";
            
            // Загружаем первое слово
            cardWord.textContent = currentLevelWords[0].word.toUpperCase();
            
            screenLobby.classList.add('hidden');
            siteHeader.classList.add('hidden');
            screenGame.classList.remove('hidden');
        } else {
            alert("Этот уровень пока пуст! Мы заполним его словами чуть позже.");
        }
    });
});
