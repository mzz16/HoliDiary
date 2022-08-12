<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<div id="content_login">
	<div id="id_search_page_box">
		<div>
			<a href="javascript:window.history.back();">로그인 페이지로</a>
		</div>
		<div id="id_search_box">
			<div><span id="userID_show"></span></div>
			<div class="id_search_name_box">
				<input placeholder="이름" autocomplete="off" id="id_search_name">
			</div>
			<div class="id_search_phone_box">
				<input placeholder="휴대폰번호" autocomplete="off" id="id_search_phone">
			</div>
			<div class="id_search_btn_box">
				<button id="id_search_btn" onclick="searchID()">아이디 찾기</button>
			</div>
			<div>
				<span id="login_error" style="font-family:'GangwonEdu_OTFBoldA';"></span>
			</div>
		</div>
	</div>
</div>

</body>
</html>