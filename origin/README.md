^^_^^
name:'cayman',
desc:'this is a theme for document',
buttons: [{
text:'Get Started',
link:'/docs'
},{
text:'View on Github',
link:'/'
}],
docs:['基础','进阶','更多']
^^_^^

## title

---

## title: Using Vue Component

You can use Vue components in your doc contents, like this:

| adsf | fasdf   | sdaf |
| ---- | ------- | ---- |
| adf  | adsfasd | asdf |

```markdown
---
title: Hello
---

Check out <router-link to="/world">World!</router-link>?

Or scroll to <router-link to="{hash: 'something-else'}">something else</router-link>.
```

If you're familiar with [vue-router](https://router.vuejs.org/en/), you known that [`router-link`](https://router.vuejs.org/en/api/router-link.html) is a built-in vue-router component which is used to do navigations.

You can use any Vue template markup here since it's valid HTML 🤯

## Compilation Diagram

<img src="https://i.loli.net/2018/03/30/5abdda8dc5632.png" width="300">

## Custom Components

You can register your components and use them in doc contents.

If you're loading Docute from CDN, then `window.Vue` will also be available so that you can use it to register global components:

```js
Vue.component('your-component', {
	template: '<h1>Hello {{ world }}</h1>',
	data() {
		return {
			world: 'world',
		}
	},
})
```

If you're using Docute with a bundler, just do it in the bundler way:

```js{1}
import Vue from 'vue'

Vue.component('your-component', {
  template: '<h1 v-text="hi">Hello {{ world }}</h1>',
  data()  {
    return {
      world: 'world'
    }
  }
})
```

> **WARN**: please note that we disabled Vue delimiters `{{` and `}}` in doc contents to prevent from any unexpected template interpolation, you may explictly use `v-text` instead. But delimiters do work in your own component. If you really want to use this in doc contents, you can prefix `{{` with `PLEASE_ALLOW_`.
