var div = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {
    div.innerHTML = "<div class='color'>\n    <table>\n    <tr>\n      <th>Key</th>\n      <th>Keycode</th> \n      <th>Code</th>\n    </tr>\n    <tr>\n      <td>".concat(e.key === ' ' ? 'Space' : e.key, "</td>\n      <td>").concat(e.keyCode, "</td> \n      <td>").concat(e.code, "</td>\n    </tr>\n    \n  </table>");
});
