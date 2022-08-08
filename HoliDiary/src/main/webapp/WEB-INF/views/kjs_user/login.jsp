<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- 로그인 관련 기능 전체 감싸는 div : 가운데 정렬 위한 div-->
	<div id="content_login">
		<div id="login_page_box">
			<!-- 회원가입 -->
			<div class="join_btn">
				<button type="button" onclick="location.href='join.option'">회원가입</button>
			</div>
				<div id="login_box">
			<!-- 로그인 기능 -->
			<form action="login.do" method="post" onsubmit="return loginIsNotEmpty()" name="loginForm">
					<div class="login_id">
						<input placeholder="ID" name="userID" autocomplete="off">
					</div>
					
					<div class="login_pw">
						<input placeholder="PW" name="userPW" autocomplete="off">
					</div>
					<div class="login_btn">
						<button>로그인</button>
					</div>
					<c:if test="${r eq '로그인실패'}">
						<div><span style="color: red;">아이디 또는 비밀번호 입력이 잘못 되었습니다.</span></div>
					</c:if>
					</form>
					<!-- 소셜 로그인 기능 -->
				<div class="social_login_box">
					<div>소셜 아이디로 로그인하기</div>
					<button onclick="loginWithKakao()"><img src="./resources/kjs_img/kakao_login_medium_narrow.png"></button>
					<!-- 네이버 로그인 버튼 노출 영역 -->
					  <div id="naver_id_login"></div>
					  <!-- //네이버 로그인 버튼 노출 영역 -->
					  <script type="text/javascript">
					  	var naver_id_login = new naver_id_login("rX3BsIpQkj6CJiShI2rn", "http://localhost/main/social.go");
					  	var state = naver_id_login.getUniqState();
					  	naver_id_login.setButton("green", 1,40);
					  	naver_id_login.setDomain("http://localhost/main");
					  	naver_id_login.setState(state);
					  	naver_id_login.init_naver_id_login();
					  </script>
				</div>
				</div>
			<div class="missing_user_box">
				<div class="missing_user_a">
				<a href="">아이디 찾기</a>
				</div>
				<div class="missing_user_a">
				<a href="">비밀번호 찾기</a>
				</div>
			</div>
			
		</div>
	

	</div>
</body>
</html>