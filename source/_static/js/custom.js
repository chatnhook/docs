jQuery(function(){
  setTimeout(function () {
    console.log('rm -rf ads');
    $('.ethical-rtd').remove();
  }, 1500);

  if (typeof(Storage) !== "undefined") {
    console.log('document ready!');

    var project_name = false;
    var firstLoad = true;

    function updatePage(new_project_name) {
      if (firstLoad) {
        firstLoad = false;
        $(".wy-nav-content").html($(".wy-nav-content").html().replace(/&lt;project&gt;/g, new_project_name));
      } else {
        var re = new RegExp(project_name, "g");
        $(".wy-nav-content").html($(".wy-nav-content").html().replace(re, new_project_name));
      }
    }

    var to = 0;
    $(document).on('keyup', '#project_name', function () {
      var value = $(this).val();
      localStorage.setItem('project_name', value);
      clearTimeout(to);
      to = setTimeout(function () {
        updatePage(value);
      }, 1000);
    });


    var html = '<div id="projectbox" style="padding-top: 4px;">\n' +
      '    <div class="searchformwrapper">\n' +
      '    <form class="search">\n' +
      '      <input type="text" id="project_name" placeholder="Your project name"/>\n' +
      '    </form>\n' +
      '    </div>\n' +
      '</div>';
    $('div[role="search"]').append(html);


    project_name = localStorage.getItem('project_name');
    if (project_name) {
      $('#project_name').val(project_name);
      updatePage(project_name);
    }
  }

});