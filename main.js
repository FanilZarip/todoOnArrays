// Функция changeStatus - будет менять статус задачи 
// changeStatus("write a post", "Done")
// Функция addTask - добавляет новую задачу
// addTask('have a walk')
// Функция deleteTask - удаляет задачу
// deleteTask('have a walk')
// Функция showList будет выводить весь список дел в виде 
//. Todo: 
//  "create a new practice task",
//  "make a bed",
// In Progress: 
//  "write a post"
// Done:
//  -

let list = [ { name: 'create a post', status: 'In progress', priority: 'low'  }, { name: 'test', status: 'Done', priority: 'high'  } ];
const statusList = {
    ToDo: 'TODO',
    InProgress: 'In progress',
    Done: 'Done',
};

const priorityList = {
    low: 'low',
    high: 'high',
};

function addTask(name) {
    list.push({
        name,
        status: statusList.ToDo,
        priority:priorityList.low,
    });
}

function changeStatus(taskName, status) {
    list.find(function (task) {
        if (taskName === task.name) {
            return task.status = status;
        }
    });
}

function changePriority(taskName, priority) {
    list.find(function (task) {
        if (taskName === task.name) {
            return task.priority = priority;
        }
    });
}

function deleteTask(taskName) {
    
    list = list.filter(function(task){
        if (taskName !== task.name) {
            return task;
        }
    });
    
}

function showList() {
    console.log("Full tasks list:\n", list);
}

function showBy(param) {
    const title = {
        ToDo: 'Todo:',
        InProgress: 'InProgress:',
        Done: 'Done:',
    }

    const titlePriority = {
        high: 'high:',
        low: 'low:',
    }

    if (param === 'status') {
        sortByStatus(statusList.ToDo, title.ToDo);
        sortByStatus(statusList.InProgress, title.InProgress);
        sortByStatus(statusList.Done, title.Done);
    } else {
        sortByStatus(priorityList.high, titlePriority.high);
        sortByStatus(priorityList.low, titlePriority.low);
    }
    
    function sortByStatus(status, statusTitle) {
        console.log(statusTitle);
        let counter = 0;
        list.forEach(function (elem) {
            if (elem[param] === status) {
                console.log(elem.name);
                counter++;
            }
        })
        if (counter === 0) {
            console.log('-');
        }
        console.log('\n');
    }  
}        


addTask('make to DO');
addTask('learn Array Methods');
addTask('go to bed');
changeStatus('make to DO', statusList.InProgress);
changePriority('go to bed', priorityList.high);
deleteTask('test');

showList();
console.log('-----------------');
showBy('status');
showBy('priority');