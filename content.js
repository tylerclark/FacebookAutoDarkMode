console.log('Facebook Auto Dark Mode init...');

const root = document.getElementsByTagName('html')[0];
const switchMode = (mode) => root.classList.toggle('__fb-dark-mode', mode);

window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
	switchMode(e.matches);
});

switchMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
