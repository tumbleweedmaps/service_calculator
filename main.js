// Services Imports 
// Copywriting
import {service_copywriting} from './scripts/scripts_services/service_copywriting.js'
import {service_toneOfVoice} from './scripts/scripts_services/service_toneOfVoice.js'
import {services_array_copyrighting} from './scripts/scripts_services/services_arrays.js'

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



const list_copyright = [service_copywriting, service_toneOfVoice]
const dropdown_copyright = document.getElementById('dropdown_copyright')





let runningTotal = [];

services_array_copyrighting.forEach((x, index) => {
  const service = document.createElement('div');
  service.classList.add('service');

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

  const checkbox = service.querySelector('.checkboxes');

  checkbox.addEventListener('change', (e) => {
    const price = parseFloat(e.target.dataset.price);
    if (e.target.checked) {
      runningTotal.push(price);
    } else {
      // Remove one instance of this price
      const i = runningTotal.indexOf(price);
      if (i !== -1) runningTotal.splice(i, 1);
    }
    console.log(`Running total:`, runningTotal);
  });

  dropdown_copyright.appendChild(service);
});

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', () => {
  const sum = runningTotal.reduce((acc, val) => acc + val, 0);
  document.getElementById('subtotals').style.display = 'grid';
  document.getElementById('subtotals').textContent = `Total: $${sum.toFixed(2)}`;
  console.log(`Final total: $${sum.toFixed(2)}`);
});






