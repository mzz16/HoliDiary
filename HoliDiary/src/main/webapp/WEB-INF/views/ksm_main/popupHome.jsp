<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
.button {
	position: absolute;
	width: 200px;
	left: 80%;
	top: 15px;
	text-align: center;
	opacity: 0;
	transition: opacity .35s ease;
	font-weight: 600;
}

.button a {
	width: 200px;
	padding: 5px 20px;
	text-align: center;
	color: black;
	border: solid 2px black;
	z-index: 1;
}

.content-line:hover .button {
	opacity: 1;
}

span {
	font-weight: 600;
}


</style>
</head>
<body>
	<%-- <div>${Diary.diaryImg }</div> --%>
	<div class="content-line content-line-hero">
		<div class="slider-wrapper owl-carousel">
			<div class="hero-img-wrapper">
				<img style="border-radius: 6px;" src="resources/sm_img/${Diary.diaryImg }" 
				onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2240&q=80';">
				
				<c:if test="${Diary.diaryUserId eq sessionScope.loginUser.userID }">
				<div class="button">
					<a href="mainImg.updateGo?userId=${Diary.diaryUserId }"> 수정 </a>
					<%-- <input type="hidden" value="${User.userId }" name="userId"> --%>
				</div>
				</c:if>
			</div>
		</div>
	</div>
	<span>${Diary.diaryIntroduce }</span>

	<!-- 뮤직 플레이어 -->



</body>
</html>