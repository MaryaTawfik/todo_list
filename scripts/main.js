const btn = document.getElementById("btn");
const in_t = document.getElementById("in");
const taskContainer = document.getElementById("taskContainer");

btn.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (in_t.value) {
        const taskRow = document.createElement('div');
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
        save();

        check.addEventListener('click', function() {
            if (check.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            } 
            save();
        });

        del.addEventListener('click', function() {
            taskContainer.removeChild(taskRow);
            save();
        });
    }
});

const save = () => {
    localStorage.setItem("t", taskContainer.innerHTML);
};

const pull = () => {
    taskContainer.innerHTML = localStorage.getItem("t");
    const taskRows = taskContainer.getElementsByClassName('task-row');

    for (let row of taskRows) {
        const check = row.querySelector('input[type="checkbox"]');
        const taskText = row.querySelector('p');
        const del = row.querySelector('button');

        
        if (check.checked) {
            taskText.style.textDecoration = 'line-through';
        }

        
        check.addEventListener('click', function() {
            if (check.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            }
            save();
        });

        
        del.addEventListener('click', function() {
            taskContainer.removeChild(row);
            save();
        });
    }
};


pull();