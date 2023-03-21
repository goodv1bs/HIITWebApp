window.onload = function() {

	var restSeconds = 60;
	var restMinutes = 3;
	var sprintSeconds = 30;
	var appendRestSeconds = document.getElementById("rest-seconds");
	var appendRestMinutes = document.getElementById("rest-minutes");
	var appendSprintSeconds = document.getElementById("sprint-seconds");
	var appendIntervalTracker = document.getElementById("interval-tracker");
	var buttonStart = document.getElementById("start-timer");
	var buttonStop = document.getElementById("stop-timer");
	var buttonReset = document.getElementById("reset-timer");
	var interval;
	var mode = "sprint";
	var intervalTracker = 0;

	function timerManager() {
		if (mode == "sprint") {
			sprintSeconds--;
			if (sprintSeconds > 9) {
				appendSprintSeconds.innerHTML = sprintSeconds;
			}else if (sprintSeconds <= 9 && sprintSeconds > 0) {
				appendSprintSeconds.innerHTML = "0" + sprintSeconds;
			}else if (sprintSeconds == 0) {
				appendSprintSeconds.innerHTML = "00";
				restSeconds = 60;
				restMinutes = 3;
				appendRestMinutes.innerHTML = restMinutes;
				appendRestSeconds.innerHTML = "00";
				mode = "rest";
			}	
		}else if (mode == "rest") {
			restSeconds--;
			if (restSeconds == 59) {
				appendRestSeconds.innerHTML = restSeconds;
				restMinutes--;
				appendRestMinutes.innerHTML = restMinutes;
			}else if (restSeconds < 59 && restSeconds > 9) {
				appendRestSeconds.innerHTML = restSeconds;
			}else if (restSeconds <= 9 && restSeconds > 0) {
				appendRestSeconds.innerHTML = "0" + restSeconds;
			}else if (restSeconds == 0 && restMinutes > 0) {
        appendRestSeconds.innerHTML = "00";
				restSeconds = 60;
			}else if (restMinutes == 0 && restSeconds == 0) {
				sprintSeconds = 30;
				appendSprintSeconds.innerHTML = sprintSeconds;
				intervalTracker++;
				appendIntervalTracker.innerHTML = intervalTracker;
				appendRestSeconds.innerHTML = "0" + restSeconds;
				appendRestMinutes.innerHTML = restMinutes;
				mode = "sprint";
				if (intervalTracker == 4) {
					clearInterval(interval);
					appendRestSeconds.innerHTML = "00";
					appendRestMinutes.innerHTML = "3";
					appendSprintSeconds.innerHTML = "30";
					alert("You finished your workout! Great job!");
				}
			}
		}
	}

	buttonStart.onclick = function() {
		clearInterval(interval);
		interval = setInterval(timerManager, 1000);
	}

	buttonStop.onclick = function() {
		clearInterval(interval);
	}

	buttonReset.onclick = function() {
		clearInterval(interval);
		appendRestSeconds.innerHTML = "00";
		appendRestMinutes.innerHTML = "3";
		appendSprintSeconds.innerHTML = "30";
		mode = "sprint";

	}

}