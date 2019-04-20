var bindClick = function (button, func) {
    button.onclick = func
}

var MenuBar = {
    refresh: function () {
        console.log('ˢ�²˵�����')
    }
}
var SubMenu = {
    add: function () {
        console.log('�����Ӳ˵�')
    },
    del: function () {
        console.log('ɾ���Ӳ˵�')
    }
}

(function main() {
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const button3 = document.getElementById('button3')
    bindClick(button1, MenuBar.refresh)
    bindClick(button2, SubMenu.add)
    bindClick(button3, SubMenu.del)
})()