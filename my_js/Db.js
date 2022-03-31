// MenuToggle
let toggle=document.querySelector('.toggle')
let mainMenu=document.querySelector('.mainMenu')
let navigation=document.querySelector('.navigation')
let main=document.querySelector('.main')
let logo=document.querySelector('.logoManagement')
let logoImg=document.querySelector('.imgLogoManagement')
toggle.addEventListener('click',function(){
    mainMenu.classList.toggle('active')
    logo.classList.toggle('hideTitle')
    logoImg.classList.toggle('zoomOut')
})




// keep hover
let listMenu=document.querySelectorAll('.navigation li')
function activeLink(){
    listMenu.forEach((item)=> 
        item.classList.remove('hovered'))

        this.classList.add('hovered')
}
listMenu.forEach((item)=>
    item.addEventListener('mouseover',activeLink))

// end keep hover


// Login admin
let login=document.querySelector('#data .admin button')
let formLogin=document.querySelector('.formLogin')

login.addEventListener('click',function(){
    login.style.display='none'
    formLogin.style.display='flex'
    let accountLogin=document.getElementById('accountLogin')
    let user=document.getElementById('user')
    let pass=document.getElementById('pass')
    let loginButton=document.querySelector('.formLogin form button')
        loginButton.addEventListener('click',function(e){
            if(user.value=='admin' && pass.value=='123'){
                e.preventDefault()
                accountLogin.style.display='flex'
                formLogin.style.display='none'
            }
            else{
                alert('cas')
            }
        })
})
// End of login admin

// Order Managerment
    let lineTableOrder=document.querySelectorAll('.orderList table tbody tr')
    for(let i=0; i<lineTableOrder.length; i++){
        if(i%2!=0){
            lineTableOrder[i].classList.add('colorLine')
        }
    }

// End of Managerment



// Product Management
    let dropDownTypeProduct=document.querySelector('.menuTypeProduct button')
    let listTypeProduct=document.querySelector('.listTypeProduct')
    let valueTypeProduct=document.querySelector('.mainProduct .tableProduct .menuTypeProduct .typeProduct input')
    dropDownTypeProduct.addEventListener('click',function(){
        listTypeProduct.classList.toggle('hideListTypeProduct')
        let chooseTypeProduct=document.querySelectorAll('.listTypeProduct p')
        let displayTypeProduct=document.querySelector('.typeProduct')
        chooseTypeProduct.forEach((item)=>
            item.addEventListener('click',function(){
                displayTypeProduct.innerHTML=item.innerHTML
                valueTypeProduct.value=item.innerHTML
                listTypeProduct.classList.add('hideListTypeProduct')
            }))
        
        // let valueTable=document.querySelectorAll('.tableProduct table tbody tr td')
        // for(let i=0; i<chooseTypeProduct.length; i++){
        //     chooseTypeProduct[i].addEventListener('click',function(){
        //         if(i==3){
        //             valueTable.forEach(e=>
        //                 e.innerHTML=''
        //             )
        //         }
        //     })
        // }
    })

// End of Product Management



// Statistical : Thống kê

    let mainStatistical=document.querySelector('.mainStatistical')
    let mainCustomerManagement=document.querySelector('.mainCM')
    let mainProduct=document.querySelector('.mainProduct')
    for(let i=0; i<listMenu.length; i++){
        listMenu[i].addEventListener('mouseover',function(){
            if(i==4){
                mainStatistical.style.display='block'    
            }
            else{
                mainStatistical.style.display='none'
            }
            if(i==3){
                mainCustomerManagement.style.display='flex'
                
            }
            else{
                mainCustomerManagement.style.display='none'
            }
            if(i==2){
                mainProduct.style.display='block'
            }
            else{
                mainProduct.style.display='none'
            }

        })
    }
    // hoverStatistical.addEventListener('mouseover',function(){
    //     mainStatistical.style.display='block'
    // })
// End of Statistical