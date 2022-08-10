<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="mj_css/postDetail.css">
</head>
<body>

	<div>
		<h1>${posts.postTitle }</h1>
	</div>
	
	<table id="postDetail" border="1" style="width: 100%; height: 90%;">
		<tr style="height: 50px">
			<td class="postDetailWriter">작성자 : ${posts.postWriter }</td>
			<td class="postDetailDate">${posts.postDate }</td>
		</tr>
		<tr>
			<td class="postDetailTxt" colspan="2">${posts.postTxt }</td>
		</tr>
	</table>
	
	<div>
		<button onclick="history.go(-1)">목록으로</button>
	</div>



</body>
</html>