export function filterEmptyValues(obj: { [key: string]: any }) {
    const filteredObj: { [key: string]: any } = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== '') {
            filteredObj[key] = obj[key];
        }
    }

    return filteredObj;
}