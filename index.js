let optionOpt = document.querySelectorAll('#option>.opt>p')
optionOpt[0].style.backgroundColor = 'skyblue'
optionOpt[1].style.backgroundColor = 'orange'
optionOpt[2].style.backgroundColor = 'gold'
optionOpt[3].style.backgroundColor = 'wheat'
optionOpt[4].style.backgroundColor = 'yellowgreen'
optionOpt[5].style.backgroundColor = 'rgb(231, 155, 127)'

// variable for navigation container
let menu = document.querySelector('#container ul')
//sub menu variable
let submenu = document.querySelector('#container #menu')
// close variable
let exit = document.querySelector('#container ul #close')


// function click of sub-menu
submenu.addEventListener('click',()=>{
    menu.style.marginRight = "120px"
    exit.style.display = "initial"
})
// function click of close-menu
exit.addEventListener('click',()=>{
    menu.style.marginRight = "-120px"
})

// console.log(exit)