
function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function acceptCookies() {
    console.log('gespeichert');
    setCookie("cookieAccepted", "true", 365);
    document.getElementById("cookie-banner").classList.add("hide");
}

// Überprüfen, ob der Cookie bereits akzeptiert wurde
if (getCookie("cookieAccepted") !== "true") {
    document.getElementById("cookie-banner").classList.remove("hide");
}
