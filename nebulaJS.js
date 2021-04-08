window.onload = function(){
    new Vue({el: '#title',data: {massage: 'Nebula'}});
    var element = {
        name: "id-article-right-top",
        width: "100px",
        heigth: "100px"
    }
    Click_deformation ( element );
}
function Window_alert ( text ) {
    alert ( text );
}
function Click_deformation ( c_element ) {
    document.getElementById ( c_element.name ).style.width = c_element.width;
    document.getElementById ( c_element.name ).style.height = c_element.height;
}
function Element_deformation ( c_element ) {
}