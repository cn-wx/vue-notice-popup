# vue-notice-popup

## Usage

Install
```javascript
// TODO: upload to npm
```

Import in main.js:

```javascript
import Vue from 'vue';
import './plugin/index.css'
import VueNoticePopup from './plugin/index'
Vue.use(VueNoticePopup)
```

or

```javascript
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

```html
<template>
    <div id="app">
        <button @click="showNotification1()">Default</button>
        <button @click="showNotification2()">Error</button>
    </div>
</template>

<script>
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
</script>
```

## LICENSE: [MIT](https://github.com/cn-wx/vue-notice-popup/blob/master/LICENSE)
