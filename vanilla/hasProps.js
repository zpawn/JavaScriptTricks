/**
 * Check if Is Set Props
 *
 * @param obj {Object}
 * @param path {String}
 * @returns {Boolean}
 */
export const hasProp = (obj, path) => {
    const keys = path.split('.');
    let currentPath = obj;

    for (let i = 0; i < keys.length; i += 1) {
        if (currentPath[keys[i]]) {
            currentPath = currentPath[keys[i]];
        } else {
            return false;
        }
    }
    return true;
};
