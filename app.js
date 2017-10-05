angular.module("todo",[])
.controller("todoCtrl",todoCtrl);

function todoCtrl(){
    var todo = this;
    todo.tasks = [];
    var inIndex = 0;

    todo.add = function(t){
        todo.tasks.push({"name":t,status:0});
        todo.task = "";
    }

    todo.delete = function(index){
        todo.tasks.splice(index,1);
    }

    todo.changeStatus = function(index){
        todo.tasks[index].status = todo.tasks[index].status?0:1;
    }

    todo.edit = function(index){
        todo.task = todo.tasks[index].name;
        inIndex = index;
    }

    todo.update = function(){
        todo.tasks[inIndex].name = todo.task;
        todo.task="";
    }
}