
//마이페이지 회원만 이용가능
function mypageCheckUser(){
	
		let id = $("#userID");
		//alert(id.val());
		
		$.ajax({
			url: 'id.check',
			type : 'GET',
			dataType : 'text',
			data : {'userID' : id.val()},
			success : function(result) {
				console.log(result);
				if(result == 0){
					alert('로그인 후 이용해주세요');
					return false;
				} else{
					location.href="mypage.go";
					return true;
				}
				
			},
			error : function(request,status,error) {
    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    			alert('문제가 발생했습니다. 다시 이용해주세요.')
    			return false;
    		}
		});
		
}



// 탈퇴
function deleteUser(){
	let ok = confirm('진짜로 삭제?');
	
	if(ok){
		location.href="delete.user";
	}
}