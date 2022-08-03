<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDb4vTBtJ5eI4DOAJXj4ov7YSdM066-PQ0&callback=initMap"></script>
<script src="/thirdproject/jquery-3.1.1.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$('button').on('click', function() {
			window.navigator.geolocation.getCurrentPosition(success, error);
		})
	})

	function success(position) {
		$('div').text(
				"내 위치 위도 = " + position.coords.latitude + " 내 위치 경도 = "
						+ position.coords.longitude);
	}
	function error(err) {
		$('div').text("조회 실패 ==>" + err.code);
	}
</script>
</head>
<body>
	<button>현재위치 조회</button>
	<div></div>

	<div id="googleMap" style="width: 100%; height: 700px;"></div>

	<script>
		function myMap() {
			var mapOptions = {
				center : new google.maps.LatLng(51.508742, -0.120850),
				zoom : 5
			};

			var map = new google.maps.Map(document.getElementById("googleMap"),
					mapOptions);
		}
	</script>

</body>
</html>