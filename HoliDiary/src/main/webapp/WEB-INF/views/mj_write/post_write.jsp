<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" name="viewport"
	content="width=device-width, initial-scale=1">
<title>Insert title here</title>
<script type="text/javascript" src="resources/ckeditor/ckeditor.js"></script>
</head>
<body>

	<input type="button" value="Map" onclick="showPopupMap();" />

	<script language="javascript">
		function showPopupMap() {
			let options = "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=800, height=650, top=100, left=270";
			window.open("map.open", "map", options);
		}
	</script>

	<form action="post.reg.do" method="post">
		<div class="container" style="margin-top: 20px">
			<div class="content" style="width: 100%">
				<div class="row justify-content-md-center">
					<div id="postTitle"
						style="border: 1px; width: 80%; float: left; height: 30px">
						<div class="postTitleWrite"
							style="margin-left: -50px; font-size: 12pt;">
							                제목<input type="text" name="postTitle" class="postTitleWriteContent"
								style="width: 85%; margin-left: 20px; border: 1px solid grey;">                              
						</div>
						<div>
							<input type="hidden" value="${sessionScope.loginUser.userID }" name="postWriter">
						</div>
					</div>
					            
					<div class="diaryPostCategory">
						<div class="diaryPostCategory"
							style="width: 20%; height: 20px; float: right; margin-top: -12px; font-size: 12px">
							<select name="postCategory" id="postCategory">
								<option selected>분류</option>
								<option value="post">Post</option>
							</select>                  
						</div>
					</div>
					
					<div class="diaryPostCountry">
						<div class="diaryPostCountry"
							style="width: 20%; height: 20px; float: right; margin-top: -12px; font-size: 12px">
							<select name="postCountry" id="postCountry">
								<option selected>국가</option>
								<option value="유럽">유럽</option>
								<option value="아시아">아시아</option>
								<option value="아메리카">아메리카</option>
								<option value="아프리카">아프리카</option>
								<option value="오세아니아">오세아니아</option>
							</select>                  
						</div>
					</div>
				</div>
				            
				<hr>
				            
				<div class="row justify-content-md-center">
					<div class="col_c" style="margin-bottom:  30px">
						<div class="input-group">
							<textarea class="form-control" id="postTxt" name="postTxt"></textarea>
						</div>
					</div>
				</div>

				<script type="text/javascript">
					 CKEDITOR
							.replace('postTxt', {
										height : 400,
										filebrowserUploadUrl : 'fileupload.do',
										font_names : '맑은 고딕/Malgun Gothic;굴림/Gulim;돋움/Dotum;바탕/Batang;궁서/Gungsuh;Arial/Arial;Comic Sans MS/Comic Sans MS;Courier New/Courier New;Georgia/Georgia;Lucida Sans Unicode/Lucida Sans Unicode;Tahoma/Tahoma;Times New Roman/Times New Roman;MS Mincho/MS Mincho;Trebuchet MS/Trebuchet MS;Verdana/Verdana',
										font_defaultLabel : '맑은 고딕/Malgun Gothic',
										fontSize_defaultLabel : '12',
										language : 'ko',
									});
				</script>
				            
				<div class="row justify-content-md-center">
					<button type="submit" class="writeUpload" style="font-weight: bold"> 등록 </button>
					<button type="button" onclick="history.go(-1)" class="writeCancel" style="font-weight: bold"> 취소 </button>
				</div>
			</div>
		</div>
	</form>


</body>
</html>