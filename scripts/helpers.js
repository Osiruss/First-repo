var nav = document.getElementsByClassName('nav')[0];
var li = nav.getElementsByTagName('li');

for (var i = 0; i < li.length; i++) {
	var a = li[i].getElementsByTagName('a')[0];
	var href = a.getAttribute('href');
	if (href === window.location.href) {
		li[i].className = li[i].className + ' active';
	};
};