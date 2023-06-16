const input = document.querySelector('input');
const btn = document.querySelector('a');

function gerar() {
    let randomString = Math.random().toString(26).slice(-4)
    input.value = randomString
}
function copy() {
    navigator.clipboard.writeText(input.value)
    btn.classList.add('active');
    setTimeout(function () {
        btn.classList.remove('active');
        input.value = "";
    }, 2000)
}