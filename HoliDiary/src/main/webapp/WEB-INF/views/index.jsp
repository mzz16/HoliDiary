<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="resources/js/sm_popupJs"></script>
<link rel="stylesheet" href="resources/sej_css/index.css">
</head>
<body>
	<header id="top_header">
		<h1>헤더 영역</h1>
	</header>
	
	<div id="main_place">
	
	<jsp:include page="${contentPage }"></jsp:include>
	
	</div>
	
	<footer id="bottom_footer">
		<h1>푸터 영역</h1>
	</footer>
	
</body>
</html>