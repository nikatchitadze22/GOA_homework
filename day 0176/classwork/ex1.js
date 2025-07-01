function getMostFrequent(json) {
    const result = [];

    for (let day of json.temperature) {
        const counts = {};

        for (let num of day) {
            if (counts[num] === undefined) {
                counts[num] = 1;
            } else {
                counts[num]++;
            }
        }

        let maxCount = 0;
        let mostFrequent = null;

        for (let i = 0; i < day.length; i++) {
            let num = day[i];
            if (
                counts[num] > maxCount ||
                (counts[num] === maxCount && num !== mostFrequent)
            ) {
                maxCount = counts[num];
                mostFrequent = num;
            }
        }

        result.push(mostFrequent);
    }

    return result;
}
