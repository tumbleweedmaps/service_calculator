// Services Imports 
// Copywriting
import {service_01_copywriting} from './scripts/scripts_services/service_copywriting.js'
import {service_02_toneOfVoice} from './scripts/scripts_services/service_toneOfVoice.js'

// Btns Import
import {bts_show_array} from './scripts/scripts_buttons/button_references.js'
import {bts_hide_array} from './scripts/scripts_buttons/button_references.js'

// Btns Imports
import { dropdowns } from './scripts/scripts_dropdowns/dropdowns_references.js'




bts_show_array.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    dropdowns[i].style.display = 'grid';
  });
});

bts_hide_array.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    dropdowns[i].style.display = 'none';
  });
});



const list_copyright = [service_01_copywriting, service_02_toneOfVoice]
const dropdown_copyright = document.getElementById('dropdown_copyright')


list_copyright.forEach((x, index) => {
  const service = document.createElement('div');
  service.classList.add('service'); // Optional: style wrapper if needed

  service.innerHTML = `
    <div class="row_title">${x.name}</div>
    <div class="row_desc">${x.about}</div>
    <div class="row_price">${x.price}</div>
    <input 
      type="checkbox" 
      class="checkboxes" 
      id="checkbox_${index}" 
      data-name="${x.name}" 
      data-price="${x.price}" 
    />
  `;

  // Optional: attach behavior
  const checkbox = service.querySelector('.checkboxes');
  checkbox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    console.log(`${x.name} is ${checked ? 'checked' : 'unchecked'}`);
  });

  dropdown_copyright.appendChild(service);
});

const btnSubmit = document.getElementById('btnSubmit')
btnSubmit.addEventListener('click', () => {
    document.getElementById('subtotals').style.display = 'grid'
})







