import Star from './components/Star.vue';
import Fork from './components/Fork.vue';
import Watch from './components/Watch.vue';
import Follow from './components/Follow.vue';

// Main stylesheet
import './scss/main.scss';

/**
 * Install Vue GitHub buttons as Vue plugin.
 *
 * @param {Vue} Vue A Vue instance.
 * @param {Object} [options={ useCache: true }] Options.
 */
function install(Vue, options = { useCache: true }) {
	if (options.useCache) {
		Vue.mixin({
			beforeCreate() {
				// Use `_vue-github-buttons_useCache` as parameter for injecting into components.
				this['_vue-github-buttons_useCache'] = true;
			}
		});
	}
	Vue.component('gh-btns-star', Star);
	Vue.component('gh-btns-fork', Fork);
	Vue.component('gh-btns-watch', Watch);
	Vue.component('gh-btns-follow', Follow);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};
