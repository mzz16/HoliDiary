<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	language="java"%>

<html>
<head>
<title>Place Autocomplete and Directions</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>

<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
<link rel="stylesheet" type="text/css"
	href="resources/mj_css/mj_map.css" />
<script type="module" src="resources/mj_js/mj_mapIndex.js"></script>
</head>
<body>


	<div class="dropdown">
		<button onclick="dp_menu()" class="worldGoButton">국가 바로가기</button>
		<div style="display: none;" id="drop-content">
			<button id="worldButton" class="europeGo">유럽</button>
			<button id="worldButton" class="asiaGo">아시아</button>
			<button id="worldButton" class="americaGo">아메리카</button>
			<button id="worldButton" class="oceaniaGo">오세아니아</button>
			<button id="worldButton" class="africaGo">아프리카</button>
		</div>
	</div>

	<script>
		function dp_menu() {
			let click = document.getElementById("drop-content");
			if (click.style.display === "none") {
				click.style.display = "block";

			} else {
				click.style.display = "none";
			}
		}
	</script>

	<input id="pac-input" class="controls" type="text"
		placeholder="Search Box" />


	<!-- <button id="europeGo">유럽</button>
	<button id="asiaGo">아시아</button>
	<button id="americaGo">아메리카</button>
	<button id="oceaniaGo">오세아니아</button>
	<button id="africaGo">아프리카</button> -->

	<div id="imageDownload">
		<button class="imageDownloadButton">이미지로 저장하기</button>
	</div>


	<!-- <div id="floating-panel">
		<input id="hide-markers" type="button" value="Hide Markers" /> 
		<input id="show-markers" type="button" value="Show Markers" /> 
		<input id="delete-markers" type="button" value="Delete Markers" />
	</div> -->

	<div id="map"></div>

	<p>

		<script
			src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDb4vTBtJ5eI4DOAJXj4ov7YSdM066-PQ0&callback=initMap&libraries=places&libraries=drawing&v=weekly"
			defer></script>

		<!-- <script
			src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDb4vTBtJ5eI4DOAJXj4ov7YSdM066-PQ0&callback=initAutocomplete&libraries=places&v=weekly"
			defer></script> -->
</body>
</html>
