# vue-notice-popup

## Usage

Install
```
// TODO: upload to npm
```

Import in main.js:

```
import Vue from 'vue';
import './plugin/index.css'
import VueNoticePopup from './plugin/index'
Vue.use(VueNoticePopup)
```
or
```
import Vue from 'vue';
import './plugin/index.css'
import VueNoticePopup from './plugin/index'
Vue.use(VueNoticePopup, {
    type:'warning',
    timeDuration: 1000, // 1000ms
    autoClose: false
})
```

Use in Component：

```
<template>
    <div id="app">
        <button @click="showNotification1()">Default</button>
        <button @click="showNotification2()">Error</button>
    </div>
</template>
export default {
    methods:{
        showNotification1() {
            let message = 'This is a default notification';
            this.$notification(message);
        },
        showNotification2() {
            let message = 'This is an error notification';
            this.$notification(message, {type:'error', autoClose: false});
        }
    }
}
```

## LICENSE: [MIT](https://github.com/cn-wx/vue-notice-popup/blob/master/LICENSE)
