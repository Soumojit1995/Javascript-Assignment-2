let interval;
let time = 0;
$('#button-stop').click(function () {
    clearInterval(interval);
})

$('#button-reset').click(function () {
    clearInterval(interval);
    let seconds = "00 : 00";
    $('#timeShow').html(seconds);
})
$('#button-start').click(function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

function startTimer() {
    time++;
    let hourHtml = '';
    let minutesHtml = '';
    let second = time;
    let hours = Math.floor((second % (100 * 60 * 60 * 24)) / (100 * 60 * 60));
    let minutes = Math.floor((second % (100 * 60 * 60) / (100 * 60)));
    let seconds = Math.floor(second % (60 * 100) / (100));
    let milliSeconds = Math.floor(second % 100);
    if (hours > 0) {
        hourHtml = `${(hours).toString().padStart(2,0)} : `;
    }
    if (minutes > 0) {
        minutesHtml = `${(minutes).toString().padStart(2,0)} : `
    }
    let html = `${hourHtml + minutesHtml}${(seconds).toString().padStart(2,0)} : ${(milliSeconds).toString().padStart(2,0)}`;
    console.log(time)
    $('#timeShow').html(html);

}