function sumPairs(ints, s) {

    let output = [];
    let index1 = 0;

    for (let i = 0; i < ints.length; i++) {
        for (let j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] === s) {
                output[index1++] = [ints[i], ints[j]];
                break;
            }
        }
    }


    if (output.length > 1) {
        let matchLengths = [];

        for (let n = 0; n < output.length; n++) {

            matchLengths[n] = ints.indexOf(output[n][1]) - ints.indexOf(output[n][0]);
        }
        console.log(matchLengths);

        let smallestLength = Math.min(matchLengths);

        console.log(smallestLength);
        let outputIndex = matchLengths.indexOf(smallestLength);

        console.log(outputIndex)
        return output.slice(outputIndex, outputIndex + 1);
    }

    return output || undefined;
}

console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));