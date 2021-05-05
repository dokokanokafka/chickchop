
	window.onload = function () {
		getValue();
		var $formObject = document.getElementById( "fh5co-header-subscribe" );
		for( var $i = 0; $i < $formObject.length; $i++ ) {
			$formObject.elements[$i].onkeyup = function(){
				getValue();
			};
			$formObject.elements[$i].onchange = function(){
				getValue();
			};
		}
		document.getElementById( "sampleOutputLength" ).innerHTML = $formObject.length;
	}
	function getValue() {
		var $formObject = document.getElementById( "fh5co-header-subscribe" );
		document.getElementById( "sampleOutputName" ).innerHTML = $formObject.formName.value;
		document.getElementById( "sampleOutputArea" ).innerHTML = $formObject.formArea.value;
		document.getElementById( "sampleOutputAge" ).innerHTML = $formObject.formAge.value;
		document.getElementById( "sampleOutputComent" ).innerHTML = $formObject.formComent.value;
	}
