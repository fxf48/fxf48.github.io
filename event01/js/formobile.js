var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
var isAndroid = ua.match(/(Android)\s+([\d.]+)/);
var isMobile = isIphone || isAndroid;
if (isMobile) {
    location.href = '/event01/mobile.html';
}