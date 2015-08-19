var app = {
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		document.addEventListener('pause', app.onDevicePause, false);
		document.addEventListener('resume', app.onDeviceResume, false);
		document.addEventListener('offline', app.onOffline, false);
		document.addEventListener('online', app.onOnline, false);

		if (device.platform === 'Android') {
			document.addEventListener('backbutton', app.onBackButton, false);
			document.addEventListener('menubutton', app.onMenuButton, false);
			document.addEventListener('searchbutton', app.onSearchButton, false);
		}

		$('#app').append('<div class="row"><div class="col-lg-12 text-center"><h2>Device is Ready!</h2></div></div>');
		navigator.splashscreen.hide();
		navigator.geolocation.getCurrentPosition(app.onGeolocationSuccess, app.onGeolocationError);
	},

	onGeolocationSuccess: function(position) {
		console.log(position);
	},

	onGeolocationError: function(error) {
		console.log(error);
	},

	onDevicePause: function() {
		console.log('App went into the background.');
	},

	onDeviceResume: function() {
		console.log('App was brought back to the foreground.');
	},

	onOnline: function() {
		console.log('Device got a network connection.');
	},

	onOffline: function() {
		console.log('Device lost network connection.');
	},

	onBackButton: function() {
		console.log('User pressed back button.');
	},

	onMenuButton: function() {
		console.log('User pressed menu button.');
	},

	onSearchButton: function() {
		console.log('User pressed search button.');
	}
}

/* Stop app rotating outside of right way up portrait. */
function shouldRotateToOrientation(degrees) {
	return (degrees === 0);
};

app.initialize();
