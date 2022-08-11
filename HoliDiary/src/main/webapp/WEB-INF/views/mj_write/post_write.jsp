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
            
            
	<div class="container" style="margin-top: 20px">
		<div class="content" style="width: 100%">
			<div class="row justify-content-md-center">
				<div id="postTitle" style="border: 1px; width: 80%; float: left; height: 30px">
					<div class="postTitleWrite" style="margin-left: -50px; font-size: 12pt;">
		                제목<input type="text" class="form-control" style="width: 85%; margin-left: 20px;border: 1px solid grey;">                              
					</div>
				</div>
				            
				<div class="col-sm-3">
					<div class="input-group mb-3" style="width: 20%; height:20px; float: right; margin-top: -12px; font-size: 12px">
	                    <select name="category" id="category">
							<option selected>분류</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>                  
					</div>
				</div>
			</div>
			            
			<hr>
			            
			<div class="row justify-content-md-center">
				<div class="col_c" style="margin-bottom:  30px">
					<div class="input-group">
						<textarea class="form-control" id="p_content"></textarea>
						<script type="text/javascript">
						 CKEDITOR.replace('p_content', {
								height : 500
							});
						</script>
					</div>
				</div>
			</div>

			            
			<div class="row justify-content-md-center">
				<button type="submit" class="btn btn-outline-secondary" style="font-weight:  bold"> 등록 </button>
			</div>
		</div>
	</div>

</body>
</html>