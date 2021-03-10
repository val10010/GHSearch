export function reduce(array, cb, initialValue) {
    return array.reduce(cb, initialValue);
}

export function assign(...objects) {
    return reduce(
        objects,
        (acc, cur) => {
            return { ...acc, ...cur };
        },
        {}
    );
}

export function concat(...params) {
    return params.reduce((acc, cur) => {
        return acc + cur;
    }, '');
}

export function keys(obj) {
    return Object.keys(obj);
}


