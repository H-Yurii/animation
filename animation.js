let loadingBody = document.querySelector('.loading')
let numbersCounter = document.querySelector('.counter')
let circle = document.querySelector('.circle')
let bodyMain = document.querySelector('.body__main')
let header = document.querySelector('.header')
let main = document.querySelector('.main')
let number = 0

for (let i = 0; i < 100; i++) {
    setTimeout(function () {
        number++;
        numbersCounter.textContent = number
        circle.classList.add('while')

        if (number === 100) {
            setTimeout(function () {
                circle.classList.add('after')
            }, 1000)
            setTimeout(function () {
                circle.classList.add('box')
            }, 2000)
            setTimeout(function () {
                loadingBody.classList.add('none')
                bodyMain.classList.add('visible')
            }, 2500)
            setTimeout(function () {
                header.classList.add('visible')
                main.classList.add('visible')
            }, 3200)
        }
    }, i * 10)
}

let secondSection = document.querySelector('.main__body-secondSection')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        secondSection.style.transform = `translateY(${10 - (scrollPosition / window.innerHeight) * 200}vh)`
    }
})


let thirdSection = document.querySelector('.main__body-thirdSection')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        thirdSection.style.transform = `translateY(${75 - (scrollPosition / window.innerHeight) * 150}vh)`
    }
})


let fourthSection = document.querySelector('.main__body-fourthSection')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        fourthSection.style.transform = `translateY(${210 - (scrollPosition / window.innerHeight) * 180}vh)`
    }
})

let fifthSection = document.querySelector('.main__body-fifthSection')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        fifthSection.style.transform = `translateY(${330 - (scrollPosition / window.innerHeight) * 180}vh)`
    }
})


let video = document.querySelector('.main__thirdSection-video')

window.addEventListener('scroll', checkVideo)

checkVideo()

function checkVideo() {
    const triggerBottom = window.innerHeight / 5 * 7

    const videoTop = video.getBoundingClientRect().top

    if (videoTop < triggerBottom) {
        video.classList.add('show')
    }
    else {
        video.classList.remove('show')
    }
} 


/* let block = document.querySelector('.main__security-block')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        block.style.width = `${1800}px`
    }
}) */


let securityBlock = document.querySelector('.main__body-sixSection')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        securityBlock.style.transform = `translateY(${460 - (scrollPosition / window.innerHeight) * 180}vh)`
    }
})


let block = document.querySelector('.main__security-block')

window.addEventListener('scroll', checkBlock)

checkBlock()

function checkBlock() {
    const triggerBottom = window.innerHeight / 5 * 6

    const blockTop = block.getBoundingClientRect().top

    if (blockTop < triggerBottom) {
        block.classList.add('show')
    }
    else {
        block.classList.remove('show')
    }
} 


let footer = document.querySelector('.footer')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        footer.style.transform = `translateY(${700 - (scrollPosition / window.innerHeight) * 180}vh)`
    }
})



let titles = document.querySelectorAll('.main__thirdSection-title')

window.addEventListener('scroll', checkTitles)

checkTitles()

function checkTitles() {
    const triggerBottom = window.innerHeight / 5 * 7

    titles.forEach(title => {
        titleTop = title.getBoundingClientRect().top

        if (titleTop < triggerBottom) {
            title.classList.add('show')
        }
        else {
            title.classList.remove('show')
        }
    });
}

let text = document.querySelectorAll('.main__thirdSection-text')

window.addEventListener('scroll', checkText)

checkText()

function checkText() {
    const triggerBottom = window.innerHeight / 5 * 7

    text.forEach(txt => {
        txtTop = txt.getBoundingClientRect().top

        if (txtTop < triggerBottom) {
            txt.classList.add('show')
        }
        else {
            txt.classList.remove('show')
        }
    });
}

let images = document.querySelectorAll('.main__fourthSection-img')

window.addEventListener('scroll', checkImages)

function checkImages() {
    const triggerBottom = window.innerHeight / 5 * 11

    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top

        if (imgTop < triggerBottom) {
            img.classList.add('change')
        }
        else {
            img.classList.remove('change')
        }
    });
}

let videos = document.querySelectorAll('.main__fourthSection-video')

window.addEventListener('scroll', checkVideos)

checkVideos()

function checkVideos() {
    const triggerBottom = window.innerHeight / 5 * 7

    videos.forEach((video) => {
        const videoTop = video.getBoundingClientRect().top

        if (videoTop < triggerBottom) {
            video.classList.add('show')
        }
        else {
            video.classList.remove('show')
        }
    });
} 


let img = document.querySelector('.paralax-1')
let img2 = document.querySelector('.paralax-2')
let img3 = document.querySelector('.paralax-3')
let img4 = document.querySelector('.paralax-4')

window.addEventListener('mousemove', function (event) {
    let x = event.offsetX
    let y = event.offsetY

    img.style.transform = `translate(${-x/4}px, ${-y/5}px)`
    img2.style.transform = `translate(${-x/10}px, ${y/4}px)`
    img3.style.transform = `translate(${-x/40}px, ${-y/4}px)`
    img4.style.transform = `translate(${x/5}px, ${-y/6}px)`
})

let barMenu = document.querySelector('.header__bar-menu')
let menu = document.querySelector('.header__menu')

barMenu.addEventListener('click', function () {
    if (menu.classList.contains('change')) { 
        menu.classList.remove('change')
        barMenu.classList.remove('change')
    } else {
        menu.classList.add('change')
        barMenu.classList.add('change')
    }
})