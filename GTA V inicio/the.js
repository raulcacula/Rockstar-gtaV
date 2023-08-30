

const myObserver = new IntersectionObserver((efeito) => {
    efeito.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach( (element) => myObserver.observe(element))



var slide = document.querySelectorAll('.slide-imgs img')
var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var img3 = document.querySelector('#img3')

var minu1 = document.querySelector('#minus1')
var minu2 = document.querySelector('#minus2')
var minu3 = document.querySelector('#minus3')

function click1(){

    if(minu1 = img1.style.display = 'block'){
        img2.style.display = 'none'
        img3.style.display = 'none'

    }
}
function  click2(){

    if(minu2 = img2.style.display = 'block'){
        img1.style.display = 'none'
        img3.style.display = 'none'

    }
}
function click3(){
    if(minu3 = img3.style.display = 'block'){
        img1.style.display = 'none'
        img2.style.display = 'none'
    }
}

const wrap = document.querySelector('.wrapper-cars')

let press = false
let staX  = 0

wrap.addEventListener('mousedown' , function (e){
    press = true
    staX = e.clientX
    this.style.cursor = 'grabbing'
})

wrap.addEventListener('mouseleave', function (e){
    press = false
})

window.addEventListener('mouseup', function (e){
    press = false
    wrap.style.cursor = 'grap'
})

wrap.addEventListener('mousemove', function (e){
    if(!press){
        return
    }
    this.scroollLeft += - e.clientX
})

function menuShow(){
    var items = document.querySelector('#items-container')
    var bars = document.querySelector('.bg-container')

    if(items.style.display == 'block'){
         items.style.display = 'none'
         bars.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }else{
        items.style.display = 'block'
        bars.innerHTML = '<i class="fa-solid fa-x"></i>' 
        
    }
}