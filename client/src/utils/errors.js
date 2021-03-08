import { reduce, keys } from './common';

function createErrorObject(message, errors, code, status) {
    return {
        message,
        errors,
        code,
        status
    };
}

function parseErrors(errors = {}) {
    return reduce(
        keys(errors),
        (acc, cur) => {
            return { ...acc, [cur]: head(errors[cur]) };
        },
        {}
    );
}

export function parseError({ response }) {
    const { errors, status_code, message } = response.data;
    const { status } = response;
    return createErrorObject(message, parseErrors(errors), status_code, status);
}
