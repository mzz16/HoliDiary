<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<div id="content_join">
	
		<div><button onclick="location.href='join.go'">간편회원가입</button></div>
		<div>
			소셜 회원가입
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
	
	</div>

</body>
</html>