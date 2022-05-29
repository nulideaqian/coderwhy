import "../css/title.less"
import '../css/test.css'
import '../css/image.css'
import zznhImage from '../img/zznh.png'
import '../font/iconfont.css'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = '你好啊，goahead'

const bgDivEl = document.createElement('div')
bgDivEl.className = 'image-bg'

const imgEl = document.createElement('img')
imgEl.src = zznhImage

const iEl = document.createElement('i')
iEl.className = 'iconfont icon-ashbin'

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)

console.log('ddd')
