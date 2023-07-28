export function getColorByEventCategory(categoryID) {
    return mColors.get(categoryID)
}

const mColors = new Map([
    [1, 'red'],
    [2, 'red'],
    [3, 'black'],
    [4, 'orange'],
    [8, 'blue'],
    [9, 'blue'],
    [10, 'blue'],
    [11, 'yellow'],
    [18, 'green'],


])