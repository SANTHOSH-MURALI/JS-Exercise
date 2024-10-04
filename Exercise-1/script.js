
function getBrowserDetails() {
    const userAgent = navigator.userAgent;  //Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:130.0) Gecko/20100101 Firefox/130.0
    let browserName, browserVersion;

    // Detect browser name and version
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        browserVersion = userAgent.split("Chrome/")[1].split(" ")[0];
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        browserVersion = userAgent.split("Firefox/")[1];
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        browserVersion = userAgent.split("Version/")[1].split(" ")[0];
    } else {
        browserName = "Unknown";
        browserVersion = "Unknown";
    }
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    return [ browserName, browserVersion, screenWidth, screenHeight];
}
let details = getBrowserDetails();
document.getElementById("Browser-Name").innerHTML = details[0];
document.getElementById("Browser-Version").innerHTML = details[1];
document.getElementById("Screen-Width").innerHTML = details[2];
document.getElementById("Screen-Height").innerHTML = details[3];
//console.log(details);