<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
<script type="module" src="resources/js/mj_mapIndex.js"></script>
<link rel="stylesheet" type="text/css" href="resources/css/mj_map.css" />
</head>
<body>

	<input id="pac-input" class="controls" type="text"
		placeholder="Search Box" />
	<div id="map"></div>

	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDb4vTBtJ5eI4DOAJXj4ov7YSdM066-PQ0&callback=initAutocomplete&libraries=places&v=weekly"
		defer></script>



</body>
</html>