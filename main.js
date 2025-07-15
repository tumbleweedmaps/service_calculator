// Services Imports 
// Copywriting
import {service_01_copywriting} from './scripts/scripts_services/service_copywriting.js'
import {service_02_toneOfVoice} from './scripts/scripts_services/service_toneOfVoice.js'

// Btns Import
import {bts_show_array} from './scripts/scripts_buttons/button_references.js'
import {bts_hide_array} from './scripts/scripts_buttons/button_references.js'

// Btns Imports
import { dropdowns } from './scripts/scripts_dropdowns/dropdowns_references.js'


bts_show_array[0].addEventListener('click', ()=> {
dropdowns[0].style.display = 'grid'
})

bts_show_array[1].addEventListener('click', ()=> {
dropdowns[1].style.display = 'grid'
})

bts_show_array[2].addEventListener('click', ()=> {
dropdowns[2].style.display = 'grid'
})



const list_copyright = [service_01_copywriting, service_02_toneOfVoice]
const dropdown_copyright = document.getElementById('dropdown_copyright')

list_copyright.forEach((x) => {
    const service = document.createElement('div')
    const div_title = document.createElement('div')
    const div_price = document.createElement('div')
    const div_desc = document.createElement('div')
    const div_check = document.createElement('input')
    div_check.type = 'checkbox'
    div_check.setAttribute('class', 'checkboxes')
    
    div_title.innerHTML = x.name
    div_price.innerHTML= x.price
    div_desc.innerHTML = x.about

    service.appendChild(div_title)
    service.appendChild(div_desc)    
    service.appendChild(div_price)   
    service.appendChild(div_check)     

    // dropdown_copyright.appendChild(service)
})







    // const btnSubmit = document.getElementById('btnSubmit')
    // const section_total = document.getElementById('section_total') 

    // const input_01 = document.getElementById('input_01');
    // const input_02 = document.getElementById('input_02');
    // const input_03 = document.getElementById('input_03');
    // const input_04 = document.getElementById('input_04');
    // const input_05 = document.getElementById('input_05');

    // const service_01 = {
    //     name: 'Service 1',
    //     checkbox: input_01,
    //     price: 1000
    // } 

    //     const service_02 = {
    //     name: 'Service 2',
    //     checkbox: input_02,
    //     price: 2000
    // }

    // const allServicesArray = [service_01, service_02]

    // btnSubmit.addEventListener('click', () => {
    //     console.log('submit')
    //     let shoppingList = []
        
    //     allServicesArray.forEach((x) => {
    //         if(x.checkbox.checked == true) {
    //             console.log(x.price)
    //             shoppingList.push(x.price)

    //         }
    //     })

    //     let total = shoppingList.reduce((sum, num) => sum + num, 0);
    //     section_total.innerHTML = total
    //     console.log(shoppingList)
    //     console.log(total)

    // })