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
	
	<!-- 유효성 검사는 마지막에 -->
		
		<form action="join.do" method="post" enctype="multipart/form-data">
			<div id="join_box">
			회원가입 ${r}
				<div>
					프로필 사진 <input type="file" name="userImg">
				</div>
				<div>
				<!-- http://localhost/main/popup.open -->
					<input type="hidden" name="userDiaryUrl" value="http://localhost/main/popup.open" autocomplete="off">
				</div>
				<div>
					<button>등록하기</button>
				</div>
			</div>
		</form>
	
	</div>

</body>
</html>