function InitializeTooltips()
{
    // Initialize tooltips
    $('.tooltipped').tooltip({delay: 25, tooltip:"new",position:"down"});

    //Squire Achievement
    var squire = $('#squire');
    squire.attr('data-tooltip', squire_text);
    squire.tooltip();

    //Squire Achievement 
    var apprentice = $('#apprentice');
    apprentice.attr('data-tooltip', apprentice_text);
    apprentice.tooltip();

    //Squire Achievement 
    var knight = $('#knight');
    knight.attr('data-tooltip', knight_text);
    knight.tooltip();

    //Squire Achievement 
    var warrior = $('#warrior');
    warrior.attr('data-tooltip', warrior_text);
    warrior.tooltip();

    //----------------Next Line
    
    //Squire Achievement 
    var spartan = $('#spartan');
    spartan.attr('data-tooltip', spartan_text);
    spartan.tooltip();

    //Squire Achievement 
    var first_time = $('#first_time');
    first_time.attr('data-tooltip', first_time_text);
    first_time.tooltip();

    //Squire Achievement 
    var times5 = $('#times5');
    times5.attr('data-tooltip', times5_text);
    times5.tooltip();

    //Squire Achievement 
    var times10 = $('#times10');
    times10.attr('data-tooltip', times10_text);
    times10.tooltip(); 

    //----------------Next Line

    //Squire Achievement 
    var half_way = $('#half_way');
    half_way.attr('data-tooltip', half_way_text);
    half_way.tooltip();

    //Squire Achievement 
    var unstoppable = $('#unstoppable');
    unstoppable.attr('data-tooltip', unstoppable_text);
    unstoppable.tooltip();

    //Squire Achievement 
    var im_warrior = $('#im_warrior');
    im_warrior.attr('data-tooltip', im_warrior_text);
    im_warrior.tooltip();

    //Squire Achievement 
    var over_100 = $('#over_100');
    over_100.attr('data-tooltip', over_100_text);
    over_100.tooltip(); 

    //----------------Next Line

    //Squire Achievement 
    var in_point = $('#in_point');
    in_point.attr('data-tooltip', in_point_text);
    in_point.tooltip();

    //Squire Achievement 
    var one_more = $('#one_more');
    one_more.attr('data-tooltip', one_more_text);
    one_more.tooltip();

    //Squire Achievement 
    var bye_bye = $('#bye_bye');
    bye_bye.attr('data-tooltip', bye_bye_text);
    bye_bye.tooltip();

    //Squire Achievement 
    var hard_core = $('#hard_core');
    hard_core.attr('data-tooltip', hard_core_text);
    hard_core.tooltip(); 
}