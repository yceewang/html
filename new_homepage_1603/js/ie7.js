/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/
if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

(function() {
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');
    function updateTest() {
        testDrive.innerHTML = testText.value || String.fromCharCode(160);
        if (window.icomoonLiga) {
            window.icomoonLiga(testDrive);
        }
    }
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    updateSize();
}());

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'indexIcon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'indexIcon-iconfont-iconfontapp': '&#xe900;',
		'indexIcon-iconfont-iconfontcolor40': '&#xe901;',
		'indexIcon-iconfont-kefu': '&#xe902;',
		'indexIcon-iconfont-qikan': '&#xe903;',
		'indexIcon-iconfont-shipin1': '&#xe904;',
		'indexIcon-iconfont-sousuo': '&#xe905;',
		'indexIcon-iconfont-weixin1': '&#xe906;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/indexIcon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
