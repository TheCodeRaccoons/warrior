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


function GetAchievements()
{
    //Levels
    if(_user.Levels.Squire)
    {
        $('#squireImg').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_squire.png\">") 
    }
    if (_user.Levels.Apprentice)
    {
        $('#apprenticeeImg').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_apprentice.png\">")  
    }
    if (_user.Levels.Knight)
    {
        $('#knightImg').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_knight.png\">")  
    }
    if (_user.Levels.Warrior)
    {
        $('#warriorImg').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_warrior.png\">")  
    }
    if (_user.Levels.Spartan)
    {
        $('#spartanImg').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_spartan.png\">")  
    }

    //Achievements
    if (_user.Achievements.First_Timer > 0)
    {
        $('#first').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_first_time.png\">")  
    }
    if (_user.Achievements.X5 > 0)
    {
        $('#x5').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_x5.png\">")  
    }
    if (_user.Achievements.X10 > 0)
    {
        $('#x10').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_x10.png\">")  
    }
    if (_user.Achievements.Half_Waypoint > 0)
    {
        $('#half').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_half.png\">")  
    }
    if (_user.Achievements.Unstoppable > 0)
    {
        $('#non_stop').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_non_stop.png\">")  
    }
    if (_user.Achievements.Warrior > 0)
    {
        $('#im_warrior').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_1.png\">")  
    }
    if (_user.Achievements.Over_Hundred > 0)
    {
        $('#over100').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_101.png\">")  
    }
    if (_user.Achievements.Just_In_Point > 0)
    {
        $('#onpoint').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_on_point.png\">")  
    }
    if (_user.Achievements.One_More > 0)
    {
        $('#one_more').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_one_more.png\">")  
    }
    if (_user.Achievements.Bye_Bye > 0)
    {
        $('#bye').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_bye_bye.png\">")  
    }
    if (_user.Achievements.Hard_Core > 0)
    {
        $('#hardcore').html("<img class=\"responsive-img\" src=\"img/achievements/achievement_hard_core.png\">")  
    }
}