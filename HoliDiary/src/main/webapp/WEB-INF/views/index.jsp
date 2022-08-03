<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="resources/js/sm_popupJs.js"></script>
<script type="text/javascript" src="resources/jquery.js"></script>
<script>
function popup() {
	//let options = "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=1000, height=600, top=100, left=270";

	window.open("popup.open", "_blank","width=1000, height=600");
}
</script>
</head>
<body>

	<div>diary 윈도우 열기</div>
	<button onclick=popup()>popup diary</button>

	<div>map으로 가기</div>
	<button onclick='location.href="map.go"'>GO</button>


</body>
</html>