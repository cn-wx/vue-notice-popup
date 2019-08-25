/*************************************************************
 * @author James (Xu) Wang <xuwang2@student.unimelb.edu.au>  *
 * @version 0.0.1                                            *
 * @license MIT                                              *
 *************************************************************/
const VueNoticePopup = {};

// default options for the plugin
const defaultOptions = {
    autoClose: true,
    timeDuration: 3000 // default duration is 3 seconds
}

VueNoticePopup.install = (Vue, options) => {

    /**
     * @param {string} message notification text
     * @param {string|object} config configuration for notification
     */
    Vue.prototype.$notification = (message, config) => {
        let option = {};
        Object.assign(option, defaultOptions, options)
        if (typeof config === 'object') {
            Object.assign(option, config)
        } else if (config) {
            option['type'] = config;
        }
    }
}

export default VueNoticePopup;