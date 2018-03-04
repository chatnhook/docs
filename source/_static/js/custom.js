$(document).ready(function () {
  if (typeof(Storage) !== "undefined") {
    var project_name = false;
    var firstLoad = true;
    function updatePage(new_project_name){
      if(firstLoad) {
        console.log('replace');
        $("body").html($("body").html().replace(/\<project\>/g, new_project_name));
      } else {
        var re = new RegExp(project_name,"g");
        $("body").html($("body").html().replace(re, new_project_name));
      }
    }

    var to = 0;
    $('#project_name').on('keyup', function () {
      var value = $(this).val();
      localStorage.setItem('project_name', value);
      clearTimeout(to);
      to = setTimeout(function () {
        updatePage(value);
      });
    });
  }

  if(localStorage.getItem('project_name')){
    project_name = localStorage.getItem('project_name');
    $('#project_name').val(project_name);
    updatePage(project_name);
  }

});