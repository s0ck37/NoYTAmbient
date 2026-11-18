// Disable ambient mode on youtube.com (18/11/2026)
// by s0ck37

const timer = setInterval(() => {

	const cinematics = document.getElementById("cinematics");

	if (cinematics) {

		console.warn("[NoYTAmbient] Found cinematics container, hiding.");
		cinematics.style.display = "none"; 

		clearInterval(timer);
	}
}, 200);
