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

Use in Component：

```
<template>
    <div id="app">
        <button @click="showNotification()">Click Me</button>
    </div>
</template>
export default {
    methods:{
        showNotification() {
            let message = 'This is a default notification';
            this.$notification(message);
        }
    }
}
```

## LICENSE: [MIT](!https://github.com/cn-wx/vue-notice-popup/blob/master/LICENSE)
