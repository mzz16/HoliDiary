
// 전화번호 자동 하이픈 생성 함수
function phoneNumberHyphen(){
	var autoHypenPhone = function(str){
	      str = str.replace(/[^0-9]/g, '');
	      var tmp = '';
	      if( str.length < 4){
	          return str;
	      }else if(str.length < 7){
	          tmp += str.substr(0, 3);
	          tmp += '-';
	          tmp += str.substr(3);
	          return tmp;
	      }else if(str.length < 11){
	          tmp += str.substr(0, 3);
	          tmp += '-';
	          tmp += str.substr(3, 3);
	          tmp += '-';
	          tmp += str.substr(6);
	          return tmp;
	      }else{              
	          tmp += str.substr(0, 3);
	          tmp += '-';
	          tmp += str.substr(3, 4);
	          tmp += '-';
	          tmp += str.substr(7);
	          return tmp;
	      }
	  
	      return str;
	}


	var phoneNum = document.joinForm.userPhoneNumber;

	phoneNum.onkeyup = function(){
	  console.log(this.value);
	  this.value = autoHypenPhone( this.value ) ;  
	}
}


// 카카오 소셜 로그인을 위한 초기 설정
Kakao.init('4341fa67ca594172a2669bd0ccaf89fc');
console.log('카카오톡 권한 : ' + Kakao.isInitialized());

// 카카오톡으로 로그인 하기
function loginWithKakao() {
	
	  Kakao.Auth.login({
      success: function(authObj) {
        //alert(JSON.stringify(authObj))
        Kakao.API.request({
		          url: '/v2/user/me',
		          success: function(res) {
		            //alert(JSON.stringify(res))
		            let id = res.id
		            $.ajax({
		        		url : "id.check",
		        		type : "GET",
		        		dataType : "text",
		        		data : {"kakaoID" : id},
		        		success : function(getData){
		        			console.log(getData);
		        			if(getData == 1){
		        				Kakao.Auth.authorize({
		        					redirectUri: 'http://localhost/main/social.kakao'
		        				})
		        			}else if(getData == 0){
		        				alert('회원가입을 먼저 진행해주세요');
		        			}
		        		},
		        		error : function(request,status,error) {
		        			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		        		}
		        	});
		          },
		          fail: function(error) {
		        	  console,log('login success, but failed to request user information: ' +
				                JSON.stringify(error))
		          },
		        })
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    })
	
	
	
	
    
  }

function joinWithKakao() {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost/main/social.kakao'
    })
  }




// 레디
$(function() {
	phoneNumberHyphen();
});
