'use strict';

function convertLatLntToProvince(resolve, reject, lng, lat) {
	var geoc = new BMap.Geocoder();
	var pt = new BMap.Point(lng, lat)
	geoc.getLocation(pt, function(rs) {
		if(rs) {
			var addComp = rs.addressComponents;
			console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			resolve(addComp)
		} else {
			reject(Error('网络错误'))
		}
		
	});
}


function locate(resolve, reject) {
	var geolocation = new BMap.Geolocation();
	var rst = {};
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			// var mk = new BMap.Marker(r.point);
			// map.addOverlay(mk);
			// map.panTo(r.point);
			console.log('您的位置：'+r.point.lng+','+r.point.lat);
			rst["lng"] = r.point.lng;
			rst["lat"] = r.point.lat;
			convertLatLntToProvince(resolve, reject, rst.lng, rst.lat);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	});
}

var provinceCode = {
	"北京市": 11,
	"天津市": 12,
	"上海市": 31,
	"重庆市": 50,
	"河北省": 13,
	"河南省": 41,
	"云南省": 53,
	"辽宁省": 21,
	"黑龙江省": 23,
	"湖南省": 43,
	"安徽省": 34,
	"山东省": 37,
	"新疆": 65,
	"江苏省": 32,
	"江西省": 36,
	"湖北省": 42,
	"广西": 45,
	"甘肃省": 62,
	"山西省": 14,
	"内蒙古": 15,
	"陕西省": 61,
	"吉林省": 22,
	"福建省": 35,
	"贵州省": 52,
	"广东省": 44,
	"青海省": 63,
	"西藏": 54,
	"四川省": 51,
	"宁夏": 64,
	"海南省"： 46,
	"安徽省"： 34,
	"香港"： 101,
	"澳门"： 102,
	"台湾": 103 
};

console.log(provinceCode["北京市"]);



var province = '';
var pm = new Promise(locate)
pm.then(function(addComp) {
	console.log(addComp);
	province = addComp.province;
	console.log(province);
});

$("#form").submit(function(e) {
	
	alert(province);
	console.log(province);
	$('#submit').attr('disabled', true);
});