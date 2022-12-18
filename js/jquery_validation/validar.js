$(document).ready(function(){
	$("#frmCadastro").validate({
		rules:{
			nome:{
				//required: true,
				minlength: 3,
				
				email: {
					required: true,
					email: true
				}
		}
	})

})