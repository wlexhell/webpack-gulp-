module.exports = function(){
    var greet = document.createElement('div')

    greet.textContent = '你好这里是webpack,你有什么想法吗,我不知道'
    var img = document.createElement('img')
    img.src = 'src/img/1.jpg'
    greet.appendChild(img)
    return greet
}