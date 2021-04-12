var element = {
    name: '#list-article-li-search'
}
window.onload = function(){
    main ( );
}
//主函数
function main ( ) {
    text ( );
}
function text ( ) {
    new Vue( { el: '#id-title-text', data: { text: '' } } );
    //标题
    new Vue( { el: '#list-article-li-user', data: { text: '用户' } } );
    new Vue( { el: '#list-article-li-community', data: { text: '社区' } } );
    new Vue( { el: '#list-article-li-gihub', data: { text: 'GitHub' } } );
    new Vue( { el: '#list-article-li-proposal', data: { text: '建议' } } );
    //列表
    new Vue( { el: '#list-article-li-search', data: { text: '搜索' } } );
    new Vue( { el: '#list-article-li-live', data: { text: '直播' } } );
    new Vue( { el: '#list-article-li-game', data: { text: '游戏' } } );
    new Vue( { el: '#list-article-li-shopping', data: { text: '购物' } } );
    new Vue( { el: '#list-article-li-knowledge', data: { text: '知识' } } );
    new Vue( { el: '#list-article-li-travel', data: { text: '旅行' } } );
    new Vue( { el: '#list-article-li-chat', data: { text: '社交' } } );
    new Vue( { el: '#list-article-li-work', data: { text: '工作' } } );
    new Vue( { el: '#list-article-li-video', data: { text: '视频' } } );
    new Vue( { el: '#list-article-li-music', data: { text: '音乐' } } );
    new Vue( { el: '#list-article-li-app', data: { text: '应用' } } );
    new Vue( { el: '#list-article-li-news', data: { text: '新闻' } } );
    new Vue( { el: '#list-article-li-home', data: { text: '家居' } } );
    new Vue( { el: '#list-article-li-Sports', data: { text: '体育' } } );
    new Vue( { el: '#list-article-li-car', data: { text: '汽车' } } );
    new Vue( { el: '#list-article-li-healthy', data: { text: '健康' } } );
    new Vue( { el: '#list-article-li-book', data: { text: '书籍' } } );
    new Vue( { el: '#list-article-li-finance', data: { text: '金融' } } );
    new Vue( { el: '#list-article-li-military ', data: { text: '军事' } } );
    new Vue( { el: '#list-article-li-diet ', data: { text: '饮食' } } );
}
function Window_alert ( text ) {
    alert ( text );
}
function Click_deformation (  ) {
    var c_element = document.getElementById ( element.name );
    c_element.style.display = "none";
}
function Element_deformation ( c_element ) {
}