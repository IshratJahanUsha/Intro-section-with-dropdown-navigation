const menuBtn = document.querySelector('.menu-bar')
const navbar = document.querySelector('.navbar')
const menuCloseBtn = document.querySelector('.menu-close-btn')
const title = document.querySelectorAll('.title')
const options = document.querySelectorAll('.options')
const arrow = document.querySelectorAll('.arrow')

menuBtn.addEventListener("click", ()=>{
    navbar.classList.add('active')
})

menuCloseBtn.addEventListener("click", ()=>{
    navbar.classList.remove('active')
})



title.forEach((dropdown,index1)=>{

    dropdown.addEventListener('click',()=>{

        options.forEach((option,index2)=>{

            if(index1 == index2){

                option.classList.toggle('active')

            }
        })

        arrow.forEach((arr,index3)=>{

            if(index1 == index3){

                arr.classList.toggle('active')
                
            }
        })
    })
})