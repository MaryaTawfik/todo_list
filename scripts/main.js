const btn = document.getElementById("btn");
const in_t = document.getElementById("in");
const taskContainer = document.getElementById("taskContainer");

btn.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (in_t.value) {const taskRow = document.createElement('div');
        taskRow.className = 'task-row';

        const check = document.createElement('input');
        check.type = 'checkbox';

        const taskText = document.createElement('p');
        taskText.textContent = in_t.value;

        const del = document.createElement('button');
        del.textContent = '✖';

        taskRow.appendChild(check);
        taskRow.appendChild(taskText);
        taskRow.appendChild(del);
        taskContainer.appendChild(taskRow); 

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
            taskContainer.removeChild(taskRow);
        }
     );
    }
});