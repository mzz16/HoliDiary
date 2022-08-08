<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="resources/sm_css/sm_modal.js"></script>
</head>
<body>

	<div  class="black_bg"></div>
	<div  class="modal_wrap">
		    
		<div  class="modal_close">
			<a  href="#">close</a>
		</div>
		    
		<div>        모달창 내용    </div>

		<script>
			    window.onload = function() {
				function onClick() {
					document.querySelector('.modal_wrap').style.display = 'block';
					document.querySelector('.black_bg').style.display = 'block';
				}
				function offClick() {
					document.querySelector('.modal_wrap').style.display = 'none';
					document.querySelector('.black_bg').style.display = 'none';
				}
				document.getElementById('modal_btn').addEventListener('click',
						onClick);
				document.querySelector('.modal_close').addEventListener(
						'click', offClick);
			};
		</script>
</body>
</html>