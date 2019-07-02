import md5 from 'md5';

const demoEnvironment = '273800403527252793bcb32cdfafe6b8'; // https://dim2k2006.github.io/conditional-fields-demo/

/**
 * Check if current environment is equals to demo environment
 * @param {Object} win
 * @returns {Boolean}
 */
const checkEnvironment = (win = window) => {
    const {location = {}} = win;
    const {href = ''} = location;
    const slicedHref = href.substring(0, href.lastIndexOf('/') + 1);
    const hash = md5(slicedHref);

    if (hash !== demoEnvironment) return false;

    return true;
};

export default checkEnvironment;
