var element = {
    name: 'id-article-right-top',
    width: '200px',
    heigth: '100px'
}
window.onload = function(){
    new Vue({el: '#title',data: {massage: 'Nebula'}});
}
function Window_alert ( text ) {
    alert ( text );
}
function Click_deformation (  ) {
    var c_element = document.getElementById ( element.name );
    c_element.style.width = element.width;
    c_element.style.height = "100px";
}
function Element_deformation ( c_element ) {
}