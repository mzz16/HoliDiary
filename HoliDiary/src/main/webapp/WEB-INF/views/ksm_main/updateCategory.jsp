<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h3>카테고리 편집</h3>

${Diary } <br>
${Diary.diaryUserId } <br>

<form action="category.add">
추가: <input type="textarea" name="addCategoryName"><input type="submit" value="Submit">
<input type="hidden" value="${Diary.diaryUserId }" name="diaryUserId">
</form>
<c:forEach var="category" items="${Diary.categoriesArray }" varStatus="status">
					<div style="height: 50px">
					<a href="#" class="il-${status.count }"> <svg
							class="link-icon" xmlns="http://www.w3.org/2000/svg" width="16"
							height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="feather feather-list">
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg><span class="il-${status.count }"> ${category } </span><button class="li-update">수정</button> <button>삭제</button>
					</a>
					</div>
					
					</c:forEach>
					
<script>
	$(".li-update").click(function() {
	let span = 	$(this).prevAll("span");
	let spanText = $(span).text();
	let className = $(this).prevAll("span").attr("class");
	$(span).text("");
	// 기존데이터 있는 부분을 인풋으로 변경
	$(span).append("<input value='"+ spanText +"'>");
	
	// 그리고 입력 받은 그 값을 아래에 넣어주기
	
	
	//$("." +className).text("입력한 그거");
	})
</script>			
					
					
					
</body>
</html>