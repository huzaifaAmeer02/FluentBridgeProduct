import axios from 'axios';

export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element ? point : 0).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints; // Earn 50% marks
}

export async function getServerData(url, callback) {
    try {
        const data = await axios.get(url)?.data;
        return callback ? callback(data) : data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

/** Post server data */
export async function postServerData(url, result, callback) {
    try {
        const data = await axios.post(url, result)?.data;
        return callback ? callback(data) : data;
    } catch (error) {
        console.error("Error posting data:", error);
        return null;
    }
}
