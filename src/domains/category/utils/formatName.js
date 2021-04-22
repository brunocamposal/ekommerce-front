export const formatName = (str) => {
    return str.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, (l) => l.toUpperCase());
};