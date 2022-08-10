<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="resources/jquery/jquery.js"></script>
<script type="text/javascript">
$(function(){
	
	$("input[name='themeColor']").change(function(){
		if($("input[name='themeColor']:checked").val() == 'holi'){
			$('body').css('background','linear-gradient(to top, #FFDE59, #5D5FB2)');
			$(".themeColor").val("holi");
			$(".themeColor").removeClass("selected");
		}	
		else if($("input[name='themeColor']:checked").val() == 'white'){
			$('body').css('background','#FFFEFA');
			$(".themeColor").val("white");
			$(".themeColor").removeClass("selected");
		}
		else if($("input[name='themeColor']:checked").val() == 'dark'){
			$('body').css('background','gray');
			$(".themeColor").val("dark");
			$(".themeColor").removeClass("selected");
		}
		else if($("input[name='themeColor']:checked").val() == 'love'){
			$('body').css('background','#FF9EBB');
			$(".themeColor").val("love");
			$(".themeColor").removeClass("selected");
		}
		else if($("input[name='themeColor']:checked").val() == 'sky'){
			$('body').css('background','#99CCFF');
			$(".themeColor").val("sky");
			$(".themeColor").removeClass("selected");
		}
		else if($("input[name='themeColor']:checked").val() == 'sujin'){
			$('body').css('background','linear-gradient(to top, #453742, #F7C5EE)');
			$(".themeColor").val("sujin");
			$(".themeColor").removeClass("selected");
		}
	});
	
	
	
});


</script>
</head>
<body>

<form action="diary.update">
	<table border="1">
		<tr>
			<td colspan="10"><span><h3>Theme Color</h3></span></td>
		</tr>
		<tr>
			<td><label><input type="radio" name="themeColor" class="${Diary.themeColor }" value="holi" checked/>holi</label></td>
			<td><label><input type="radio" name="themeColor" class="${Diary.themeColor }" value="white"/>white</label></td>
			<td><label><input type="radio" name="themeColor" class="${Diary.themeColor }" value="dark"/>dark</label></td>
			<td><label><input type="radio" name="themeColor" class="${Diary.themeColor }" value="love"/>love</label></td>
			<td><label><input type="radio" name="themeColor" class="${Diary.themeColor }" value="sky"/>sky</label></td>
			<td><label><input type="radio" name="themeColor" class="${Diary.themeColor }" value="sujin"/>sujin</label></td>
		</tr>	
	</table>
	
	<table border="1">
		<tr>
			<td><span><h3>Diary Title</h3></span></td>
		</tr>
		<tr>
			<td><input value="${Diary.diaryTitle }" type="text" name="diaryTitle" autocomplete="off"></td>
		</tr>
	</table>

	<table border="1">
		<tr>
			<td><span><h3>Diary Introduce</h3></span></td>
		</tr>
		<tr>
			<td><input value="${Diary.diaryIntroduce }" type="text" name="diaryIntroduce" autocomplete="off"></td>
			<td><input type="hidden" value="${Diary.diaryUserId }" name="diaryUserId"></td>
		</tr>
	</table>
	
	
	
	<table>
		<tr>
			<td><button style="background-color: gray;">완료</button></td>
		</tr>
	</table>
</form>	
	
</body>
</html>