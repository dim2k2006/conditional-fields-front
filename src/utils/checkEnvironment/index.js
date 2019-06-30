import md5 from 'md5';

/**
 * Check if current environment is equals to demo environment
 * @param {Object} win
 * @returns {Boolean}
 */
const checkEnvironment = (win = window) => {
    const {location = {}} = win;
    const {href = ''} = location;
    const hash = md5(href);
    const demoEnvironment = '4e52fbeef02542534fa175f0226d3051'; // https://media-manager-front.herokuapp.com/

    if (hash !== demoEnvironment) return false;

    return true;
};

export default checkEnvironment;
