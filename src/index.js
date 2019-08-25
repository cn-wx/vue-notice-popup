/*************************************************************
 * @author James (Xu) Wang <xuwang2@student.unimelb.edu.au>  *
 * @version 0.0.1                                            *
 * @license MIT                                              *
 *************************************************************/
const VueNoticePopup = {};
let [notificationVM, timer] = [null, false];

// default options for the plugin
const defaultOptions = {
    type: 'default',
    autoClose: true,
    timeDuration: 3000, // default duration is 3 seconds
    width: 'auto'
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
        
        if (timer) {
            clearTimeout(timer);
            notificationVM.show = false;
        }

        if (!notificationVM) {
            const notificationTemplate = Vue.extend({
                data() {
                    return {
                        show: false,
                        message,
                        autoClose: option.autoClose,
                        timeDuration: option.timeDuration,
                        extStyle: {
                            width: option.width
                        }
                    }
                },
                methods: {
                    closePopup() {
                        this.show = false;
                    }
                },
                render(h) {
                    if (!this.show) {
                        return false;
                    }
                    if (!this.autoClose) {
                        return ( h('div', {class: ['ui__notification_popup__wrapper']},
                            [
                                h('div',{
                                    class: ['ui__notification_popup', `ui__notification_popup__${this.type}`],
                                    style: this.style,
                                    show: this.show,
                                    domProps: {
                                        innerHTML: this.message
                                    }
                                }),
                                h('span', {
                                    class: ['ui__notification_popup', 'ui__notification_close_button'],
                                    on: {
                                        click: this.closePopup
                                    }
                                })
                            ]
                        ))
                    } else {
                        return ( h('div', {class: ['ui__notification_popup__wrapper']},
                            [
                                h('div',{
                                    class: ['ui__notification_popup', `ui__notification_popup__${this.type}`],
                                    style: this.style,
                                    show: this.show,
                                    domProps: {
                                        innerHTML: this.message
                                    }
                                })
                            ]
                        ))
                    }
                }
            });
            notificationVM = new notificationTemplate();
            const template = notificationVM.$mount().$el;
            document.body.appendChild(template);
        }

        notificationVM.message = message;
        notificationVM.type = option.type;
        notificationVM.autoClose = option.autoClose;
        notificationVM.timeDuration = option.timeDuration;
        notificationVM.extStyle.width = option.width;
        notificationVM.show = true;

        if (notificationVM.autoClose) {
            timer = setTimeout(() => {
                notificationVM.show = timer = false;
            }, option.timeDuration);
        }
    };

    ['default', 'success', 'warning', 'error'].forEach(type => {
        Vue.prototype.$notification[type] = (message, config = {type}) => {
            return Vue.prototype.$notification(message, config)
        }
    });

}

export default VueNoticePopup;