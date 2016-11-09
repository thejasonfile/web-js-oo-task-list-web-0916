// Initialize

$(function() { // on document ready
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();

  $('#add_list :submit').on('click', function(){
    event.preventDefault();
    let list_title = $('#list_title').val();
    let list = new List(list_title);
    list.build();
    $('#list_title').val('');
  })

  $('#add_task :submit').on('click', function(){
    event.preventDefault();
    let task_desc = $('#task_description').val();
    let task_priority = $('#task_priority').val();
    let task = new Task(task_desc, task_priority, list);
    task.build();
    $('#task_description').val('');
    $('#task_priority').val('');
  })

  $('#lists').on('click', '.destroy-list', function(){
    event.preventDefault();
    //remove the list from the select dropdown
    $(this).parents('div .list').remove()
  })

  $('#lists').on('click', '.destroy-task', function(){
    event.preventDefault();
    $('option[value="0"]').remove()
    $(this).parents('li').remove()
  })
});