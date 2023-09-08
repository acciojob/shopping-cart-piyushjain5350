const itemName=document.getElementById('item-name-input');
const itemPrice=document.getElementById('item-price-input');
const addItemBtn=document.getElementById('add');
const tableAddItem=document.getElementById('add-item');
const total=document.getElementById('total');

var totalVal=0;


addItemBtn.addEventListener('click',()=>{
    if(itemName.value!=''|| itemPrice.value!='' ){
        const tr=document.createElement('tr');
        console.log(typeof Number(itemPrice.value))
        tr.innerHTML=`
         <td>${itemName.value}</td>
         <td>${itemPrice.value}</td>
        `
        tableAddItem.appendChild(tr);
        totalVal=totalVal+Number(itemPrice.value);
        total.innerText=`Grand total => ${totalVal}`;

        itemName.value='';
        itemPrice.value='';
        console.log(totalVal);
    }
})


