(function() {
	var form,
		request;
	
	function start() {
		form = document.forms[ 0 ];
		list = document.getElementById( "list" );
		newLink = document.getElementById( "new" );
		editLink = document.getElementById( "edit" );
	
		form.cancel.addEventListener( "click", cancel, false );
		form.add.addEventListener( "click", addPin, false );
		form.addEventListener( "submit", formSubmit, false );
	}
	
	window.populateForm = function( page ) {
		form.url.value = page.url;
		form.title.value = page.title;
	};

	function addPin( event ) {
		if( request !== undefined ) {
			return;
		}
		
		var url = "https://api.pinboard.in/v1/posts/add?auth_token=" + safari.extension.secureSettings.APIToken + "&format=json";
		
		url += "&url=" + encodeURIComponent( form.url.value );
		url += "&description=" + encodeURIComponent( form.title.value );
		url += "&extended=" + encodeURIComponent( form.description.value );
		url += "&tags=" + encodeURIComponent( form.tags.value );
		url += "&shared=" + encodeBoolean( !form.isPrivate.checked );
		url += "&toread=" + encodeBoolean( form.isReadLater.checked );
		
		request = new XMLHttpRequest();
		request.responseType = "json";
		request.addEventListener( "load", addPinResponseHandler, false );
		request.open( "POST", url, true );
		request.send();
	}
	
	function addPinResponseHandler( event ) {
		cancel();
	}
	
	function formSubmit( event ) {
		// Don't refresh the page
		event.preventDefault();
		return false;
	}
	
	function cancel() {
		safari.self.hide();
		clear();
	}
	
	function encodeBoolean( bool ) {
		return bool ? "yes" : "no";
	}

	function clear() {
		request = undefined;
		
		form.url.value = "";
		form.title.value = "";
		form.description.value = "";
		form.tags.value = "";
		form.isPrivate.checked = false;
		form.isReadLater.checked = false;
	}

	window.addEventListener( "DOMContentLoaded", start, false );
	window.addEventListener( "blur", clear, false );
})();
