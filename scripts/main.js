const btn = document.getElementById("btn");
const in_t = document.getElementById("in");
const taskContainer = document.getElementById("taskContainer");

btn.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (in_t.value) {
        const p = document.createElement('p');
        p.textContent = in_t.value;
        const check=document.createElement('input');
        
        check.type = 'checkbox';
        const del= document.createElement('button');
        del.textContent='❌';
        p.appendChild(del);
        p.appendChild(check);
        taskContainer.appendChild(p); 
        in_t.value = ''; 
        check.addEventListener('click',function()
    {
        if (check.checked) {
                p.style.textDecoration = 'line-through';
    }
        else {
                p.style.textDecoration = 'none';} 
});
        del.addEventListener('click',function(){
            taskContainer.removeChild(p);
        }
     );
    }
});