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

$("#form").submit(function(e) {
	
});

var province = '';
var pm = new Promise(locate)
pm.then(function(addComp) {
	console.log(addComp);
	province = addComp.province;
	console.log(province);
});
