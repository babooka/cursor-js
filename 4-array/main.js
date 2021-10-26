const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

const getPairs = function(students) {
    const femaleStudents = [];
    const maleStudents = [];
    const pairs = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].endsWith('а')) {
            femaleStudents.push(students[i]);
            continue;
        }
        maleStudents.push(students[i]);
      }

    for (let i = 0; i < maleStudents.length; i++) {
        pairs.push([maleStudents[i]].concat(femaleStudents[i]));
    }
    return pairs;
}

pairs = getPairs(students);
console.log(pairs);

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const getRandomTheme = themes[Math.floor(Math.random()*themes.length)];

const getTheme = function(pairs, themes) {
    const pairTheme = [];
    for (let i = 0; i < pairs.length; i++) {
        pairTheme.push([pairs[i][0] + ' і ' + pairs[i][1], themes[i]]);
    }
    return pairTheme;
}

const pairTheme = getTheme (pairs, themes);
console.log(pairTheme);

// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const getMark = function(students, marks) {
    const studentMark = [];
    for (let i = 0; i < students.length; i++) {
        studentMark.push([students[i], marks[i]]);
    }
    return studentMark;
}

const studentMark = getMark(students, marks);
console.log(studentMark);

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] 

const getRandomMark = function(pairTheme) {
    const themeMark = [];
    for (let i = 0; i < pairTheme.length; i++) {
        themeMark.push(pairTheme[i].concat(Math.ceil(Math.random() * 5)));
    }
    return themeMark;
}

const pairThemeMark = getRandomMark(pairTheme);
console.log(pairThemeMark);