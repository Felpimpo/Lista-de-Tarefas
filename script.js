$(document).ready(function() {
    $('#addTaskButton').click(function() {
        var taskText = $('#taskInput').val();
        if (taskText) {
            $('#taskList').append(
                `<div class="task-item">
                    <span>${taskText}</span>
                    <button class="doneButton">feita</button>
                </div>`
            );
            $('#taskInput').val(''); // Clear the input field
        }
    });
  
    // Event delegation to handle click on dynamically created elements
    $('#taskList').on('click', '.doneButton', function() {
        $(this).parent().find('span').toggleClass('feita');
    });
  });