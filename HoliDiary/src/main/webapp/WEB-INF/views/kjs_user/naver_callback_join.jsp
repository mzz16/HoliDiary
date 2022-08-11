<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<script type="text/javascript">

  var naver_id_login = new naver_id_login("rX3BsIpQkj6CJiShI2rn", "http://localhost/main/social.join.naver");
  // 접근 토큰 값 출력
  //alert(naver_id_login.oauthParams.access_token);
  // 네이버 사용자 프로필 조회
  naver_id_login.get_naver_userprofile("naverSignInCallback()");
  // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
  function naverSignInCallback() {
    //console.log(naver_id_login.getProfileData('name'));
    //console.log(naver_id_login.getProfileData('nickname'));
    //console.log(naver_id_login.getProfileData('id'));
    //console.log(naver_id_login.getProfileData('email'));
    //console.log(naver_id_login.getProfileData('profile_image'));
    
    let name = naver_id_login.getProfileData('name');
    let nickname = naver_id_login.getProfileData('nickname');
    let naverID = naver_id_login.getProfileData('id');
    let email = naver_id_login.getProfileData('email');
    let profile_image = naver_id_login.getProfileData('profile_image');
    let id = email.split('@')[0];
    
    console.log(email.split('@')[0]);
    
      $.ajax({
		url : "id.check",
		type : "GET",
		dataType : "text",
		data : {"naverID" : naverID,
				"userID" : id
		},
		success : function(getData){
			console.log(getData);
			if(getData == 1){
				alert('이미 등록된 회원입니다');
				location.href= "http://localhost/main/join.option";
				}else if(getData == 2){
					alert('카카오로 이미 등록된 회원입니다. 아닌 경우 간편회원가입 이용후, 네이버연동을 이용해주세요.');
				}else{
					// 회원가입을 시킨다
	 				$.ajax({
						url : "join.naver",
						type : "POST",
						dataType : "json",
						data : {"userID": id, 
							"userPW": "없음",
							"userName": name,
							"userPhoneNumber": "없음",
							"userEmail": email,
							"userImg": profile_image,
							"userDiaryUrl": "http://localhost/main/popup.open?userId=" + id,
							"userNickname": nickname,
							"naverID": naverID
						},
						success : function(result) {
							console.log(result);
							if(result == 1){
								alert('회원가입 성공');
								location.href= "http://localhost/main/";
							}
						},
						error : function(request, status, error) {
							console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
								alert('회원가입에 실패했습니다. 간편회원가입을 이용해주세요.');
								location.href= "http://localhost/main/join.option";
							
						}
					}); 
					
				}
			},
		error : function(request,status,error) {
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		} 
  })
     
  }

</script>
	

</body>
</html>