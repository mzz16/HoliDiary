function deleteUser(){
	let ok = confirm('진짜로 삭제?');
	
	if(ok){
		location.href="delete.user";
	}
}