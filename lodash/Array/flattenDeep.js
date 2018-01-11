function flattenDeep(arr) {
    return arr.reduce((previousVlaue, currentValue) => {
        if (Array.isArray(currentValue)) {
            return previousVlaue.concat(flattenDeep(currentValue));
        } else {
            return previousVlaue.push(currentValue);
        }
    }, []);
}