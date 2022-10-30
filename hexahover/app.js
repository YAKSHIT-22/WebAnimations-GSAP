var cursor = document.querySelector('#cursor');
window.onmousemove = function(e) {
    cursor.style.left = e.clientX+'px';
    cursor.style.top = e.clientY+'px';
}