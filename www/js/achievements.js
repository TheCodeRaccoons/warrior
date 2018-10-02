
$(document).ready(function() 
{ 
    changeTooltip();

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.tooltipped');
        var instances = M.Tooltip.init(elems, options);
    });
});

function changeTooltip() {
    var tt1 = document.getElementById('abc');
    tt1.dataset.tooltip = "def";
  }