let style = document.createElement("style")
style.innerHTML = `
@font-face {
	font-family: 'SUIT';
	font-weight: 100;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-Thin.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 200;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-ExtraLight.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 300;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-Light.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 400;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-Regular.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 500;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-Medium.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 600;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-SemiBold.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 700;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-Bold.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 800;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-ExtraBold.woff2') format('woff2');
}
@font-face {
	font-family: 'SUIT';
	font-weight: 900;
	src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT-Heavy.woff2') format('woff2');
}
* {
  font-family: "SUIT"
}
`
document.head.appendChild(style)
