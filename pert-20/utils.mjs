
export default function unique(array){
    return [...new Set(array)];
}

export function splitString(str, delimiter = ", ") {
    return str.split(delimiter);
}
