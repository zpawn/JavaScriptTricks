const fullName = (strings, ...values) => {
    let result = '';

    strings.forEach((str, i) => {
        result += str;
        if (values[i]) {
            result += `<span>${values[i]}</span>`
        }
    });

    return result;
};

const firstName = 'Miljenka';
const lastName = 'Duvnjak';

const quote = fullName`firstname: ${firstName}, lastname: ${lastName}`;
console.log('[quote]', quote);
