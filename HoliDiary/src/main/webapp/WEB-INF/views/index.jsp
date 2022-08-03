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
	<div id="background_box">
	
	<!-- HEADER 영역 -->
	<header id="top_header">
		<div class="header_contents_box">
		
		<img class="header_logo_img" src="resources/sej_img/logofit-removebg-preview.png">
		<div class="search_box">
		<div class="search_img">
		<img src="resources/sej_img/search_berry.png">
		</div>
		<input class="search_input" type="text" placeholder="검색">
		</div>

		</div>
		
		<div class="top_menu_img_box">
			<a href=""><img class="top_menu_img" src="resources/sej_img/menuIcon.png"></a>
		</div>
		
		<div id="menu_bar">
		<label><img src="resources/sej_img/logo1-removebg-preview.png"></label>
		<ul>
			<li>마이페이지</li>
			<li>홀리 NOW</li>
			<li>Best 홀리</li>
			<li>아이템샵</li>
		</ul>
	</div>
	</header>
	
	<!-- Main Contents  -->
	<div id="main_place">
	
	<jsp:include page="${contentPage }"></jsp:include>
	
	</div>
	
	<!-- FOOTER 영역 -->
	<footer id="bottom_footer">
		<h1>푸터 영역</h1>
	</footer>
	</div>
</body>
</html>