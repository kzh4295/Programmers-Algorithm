function bestLanguages(languages, scores) {
    const languageAverages = {};

    for (let i = 0; i < languages.length; i++) {
        const language = languages[i];
        const score = scores[i];
        
        if (!languageAverages[language]) {
            languageAverages[language] = { scores: [], averages: [] };
        }
        languageAverages[language].scores.push(score);
    }

    for (const language in languageAverages) {
        const totalScores = languageAverages[language].scores;
        const numProblems = totalScores[0].length;
        const problemSums = Array.from({ length: numProblems }, () => 0);

        for (const scores of totalScores) {
            for (let i = 0; i < numProblems; i++) {
                problemSums[i] += scores[i];
            }
        }

        const averages = problemSums.map(sum => sum / totalScores.length);
        languageAverages[language].averages = averages;
    }

    const sortedLanguages = Object.keys(languageAverages).sort((a, b) => {
        const avgA = languageAverages[a].averages;
        const avgB = languageAverages[b].averages;

        for (let i = 0; i < avgA.length; i++) {
            if (avgA[i] !== avgB[i]) {
                return avgB[i] - avgA[i];
            }
        }
        return a.localeCompare(b);
    });

    const answer = [];
    for (const language of sortedLanguages) {
        answer.push({ language, averages: languageAverages[language].averages });
    }

    return answer;
}

const languages = ["C", "SWIFT", "JAVA", "SWIFT", "JAVA", "JAVA", "R"];
const scores = [
    [65, 80, 90],
    [46, 100, 70],
    [91, 96, 59],
    [89, 90, 61],
    [0, 94, 75],
    [38, 95, 47],
    [50, 60, 90]
];

const result = bestLanguages(languages, scores);
console.log("유리한 언어와 각 과목별 평균 순서:", result);




// let result = solution(["C", "SWIFT", "JAVA", "SWIFT", "JAVA", "JAVA", "R"], [[65, 80, 90], [46, 100, 70], [91, 96, 59], [89, 90, 61], [0, 94, 75], [38, 95, 47], [50, 60, 90]])
// console.log()
// 기댓값 〉 ["SWIFT", "JAVA", "R"])