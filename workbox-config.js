module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,mp3,gif,jpeg,ico,html,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};