
    var  squire_text;
    var  apprentice_text;
    var  knight_text;
    var  warrior_text;
    var  spartan_text;
    var  first_time_text;
    var  times5_text;
    var  times10_text;
    var  half_way_text;
    var  unstoppable_text;
    var  im_warrior_text;
    var  over_100_text;
    var  in_point_text;
    var  one_more_text;
    var  bye_bye_text;
    var  hard_core_text; 
$(document).ready(function() 
{  
    var _user = JSON.parse(localStorage.getItem('User'))  
    if(_user == null)
    { 
        window.location.href = 'index.html';
    } 
    
    switch(_user.Language)
    {
        case "1":  
            squire_text         = "Consigue mas de 100 horas de ayuno" ;
            apprentice_text     = "Consigue mas de 300 horas de ayuno" ;
            knight_text         = "Consigue mas de 450 horas de ayuno" ;
            warrior_text        = "Consigue mas de 999 horas de ayuno" ;
            spartan_text        = "Consigue mas de 1000 horas de ayuno" ;
            first_time_text     = "Completa tu primer ayuno" ;
            times5_text         = "Consigue una racha de 5 ayunos" ;
            times10_text        = "Consigue una racha de 10 ayunos" ;
            half_way_text       = "Consigue una racha de 15 ayunos" ;
            unstoppable_text    = "Consigue una racha de 30 ayunos" ;
            im_warrior_text     = "Consigue una racha de 60 ayunos" ;
            over_100_text       = "Completa un ayuno con mas del 100%" ;
            in_point_text       = "Completa un ayuno con exactamente 100%" ;
            one_more_text       = "Completa un ayuno con 1 hora extra" ;
            bye_bye_text        = "Registra una reducción de peso" ;
            hard_core_text      = "Completar un ayuno con más de 18 horas" ;

            $("#squire_title").html("Escudero")  
            $("#apprentice_title").html("Aprendis")  
            $("#knight_title").html("Caballero")  
            $("#warrior_title").html("Guerrero")  
            $("#spartan_title").html("Espartano")  
            $("#first_time_title").html("Primera vez")  
            $("#times5_title").html("X5")  
            $("#times10_title").html("X10")  
            $("#half_way_title").html("Medio camino")  
            $("#unstoppable_title").html("Imparable")  
            $("#im_warrior_title").html("Soy Guerrero")  
            $("#over_100_title").html("Mas del 100")  
            $("#in_point_title").html("En el punto")  
            $("#one_more_title").html("Una mas")  
            $("#bye_bye_title").html("Bye bye")  
            $("#hard_core_title").html("Hard core")  
            InitializeTooltips()
    
            break;
        case "2":     
        squire_text         = "Achieve a total of 100 fasting hours" ;
        apprentice_text     = "Achieve a total of 300 fasting hours" ;
        knight_text         = "Achieve a total of 450 fasting hours" ;
        warrior_text        = "Achieve a total of 999 fasting hours" ;
        spartan_text        = "Achieve over 1000 fasting hours" ;
        first_time_text     = "Comlpete your first fast" ;
        times5_text         = "Achieve a streak of 5 fasts" ;
        times10_text        = "Achieve a streak of 10 fasts" ;
        half_way_text       = "Achieve a streak of 15 fasts" ;
        unstoppable_text    = "Achieve a streak of 30 fasts" ;
        im_warrior_text     = "Achieve a streak of 60 fasts" ;
        over_100_text       = "Complete a fast with over 100% on the timer" ;
        in_point_text       = "Complete a fast with 100% on the timer" ;
        one_more_text       = "Complete a fast with an extra hour" ;
        bye_bye_text        = "Register a weight loss on your profile" ;
        hard_core_text      = "Finish a fast with more than 18 hours" ;

        $("#squire_title").html("Squire")  
        $("#apprentice_title").html("Apprentice")  
        $("#knight_title").html("Knight")  
        $("#warrior_title").html("Warrior")  
        $("#spartan_title").html("Spartan")  
        $("#first_time_title").html("First time")  
        $("#times5_title").html("X5")  
        $("#times10_title").html("X10")  
        $("#half_way_title").html("Half way")  
        $("#unstoppable_title").html("Unstoppable")  
        $("#im_warrior_title").html("Im warrior")  
        $("#over_100_title").html("Over 100")  
        $("#in_point_title").html("In point")  
        $("#one_more_title").html("One more")  
        $("#bye_bye_title").html("Bye bye")  
        $("#hard_core_title").html("Hard core")  
        InitializeTooltips()
            break;
        default: 
        squire_text         = "Consigue mas de 100 horas de ayuno" ;
        apprentice_text     = "Consigue mas de 300 horas de ayuno" ;
        knight_text         = "Consigue mas de 450 horas de ayuno" ;
        warrior_text        = "Consigue mas de 999 horas de ayuno" ;
        spartan_text        = "Consigue mas de 1000 horas de ayuno" ;
        first_time_text     = "Completa tu primer ayuno" ;
        times5_text         = "Consigue una racha de 5 ayunos" ;
        times10_text        = "Consigue una racha de 10 ayunos" ;
        half_way_text       = "Consigue una racha de 15 ayunos" ;
        unstoppable_text    = "Consigue una racha de 30 ayunos" ;
        im_warrior_text     = "Consigue una racha de 60 ayunos" ;
        over_100_text       = "Completa un ayuno con mas del 100%" ;
        in_point_text       = "Completa un ayuno con exactamente 100%" ;
        one_more_text       = "Completa un ayuno con 1 hora extra" ;
        bye_bye_text        = "Registra una reducción de peso" ;
        hard_core_text      = "Completar un ayuno con más de 18 horas" ;
        
        $("#squire_title").html("Escudero")  
        $("#apprentice_title").html("Aprendis")  
        $("#knight_title").html("Caballero")  
        $("#warrior_title").html("Guerrero")  
        $("#spartan_title").html("Espartano")  
        $("#first_time_title").html("Primera vez")  
        $("#times5_title").html("X5")  
        $("#times10_title").html("X10")  
        $("#half_way_title").html("Medio camino")  
        $("#unstoppable_title").html("Imparable")  
        $("#im_warrior_title").html("Soy Guerrero")  
        $("#over_100_title").html("Mas del 100")  
        $("#in_point_title").html("En el punto")  
        $("#one_more_title").html("Una mas")  
        $("#bye_bye_title").html("Bye bye")  
        $("#hard_core_title").html("Hard core")  
        InitializeTooltips()
            break;
    }
    
    GetAchievements()
});