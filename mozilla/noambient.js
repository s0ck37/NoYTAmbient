// Disable ambient mode on youtube.com (18/11/2026)
// by s0ck37

const timer = setInterval(() => {

	const cinematics = document.getElementById("cinematics");

	if (cinematics) {

		console.warn("[NoYTAmbient] Found cinematics container, hiding.");
		cinematics.style.setProperty("display", "none", "important");

		clearInterval(timer);
	}
}, 200);
