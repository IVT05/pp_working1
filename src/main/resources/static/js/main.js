function goToHi() {
    var href = document.getElementById("name").value;
    location.href = "http://localhost:8080/hi?name=" + href;
}
