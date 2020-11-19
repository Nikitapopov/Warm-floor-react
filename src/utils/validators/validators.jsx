export const required = value => {
    if (value)
        return undefined;
    return 'Обязательное поле';
};
export const phoneLength = value => {
    if (value && value.length === 17 && !value.includes('_'))
        return undefined;
    return 'Некорректный номер';
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength)
        return `Максимальная длина ${maxLength} символов`;
    return undefined;
};

export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length < minLength)
        return `Минимальная длина ${minLength} символов`;
    return undefined;
};