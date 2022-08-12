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
	<div id="pw_search_page_box">
		<div>
			<a href="javascript:window.history.back();">로그인 페이지로</a>
		</div>
		<div><span id="pw_search_error"></span></div>
		<form action="pw.search.do" method="post" onsubmit="return pwSearchValidCheck()">
		<div id="pw_search_box">
			<div class="pw_search_id">
				<input placeholder="아이디" name="userID" autocomplete="off" id="pw_search_id">
			</div>
			<div class="pw_search_id">
				<input placeholder="이메일" name="userID" autocomplete="off" id="pw_search_email">
			</div>
			<div class="pw_search_btn">
				<button>비밀번호 찾기</button>
			</div>
			<div>
				<span id="login_error" style="font-family:'GangwonEdu_OTFBoldA';"></span>
			</div>
		</div>
		</form>
	</div>
</div>
</body>
</html>