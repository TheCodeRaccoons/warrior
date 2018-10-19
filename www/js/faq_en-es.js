
var _user = JSON.parse(localStorage.getItem('User')) 
if(_user)
{ 
    SetLanguage()
}
else
{
    window.location.href = 'profile.html';
}

function SetLanguage()
{ 
    switch(_user.Language)
    {
        case "1":  
            $("#title").html("Preguntas Frecuentes:")
            $("#askus").html(" Preguntanos via <a style=\"color:#3499E1\" onclick=\"location.href='mailto:uriarte.coach@gmail.com?Subject=Preguntas%20De%20La%20Dieta';\">Correo Electronico</a>")

            $("#faq_1_title").html("¿Qué es la dieta del guerrero?") 
            $("#faq_1_body").html("Es un estilo de vida alimenticio dedicado a desintoxicar tu cuerpo diariamente mediante el ayuno intermitente (ayunos mayores a 14 horas todos los días) el cual tiene como resultados mas visibles y notorios la perdida de peso y la quema de grasa.")  

            $("#faq_2_title").html("¿En cuanto tiempo veo resultados?")  
            $("#faq_2_body").html(" Como todo, depende de tu estilo de vida y de el lugar donde estés al iniciar este régimen, pero en promedio los resultados se empiezan a notar desde la segunda semana.")  

            $("#faq_3_title").html("¿Es seguro? ¿Es sano?")  
            $("#faq_3_body").html("Si. Los principios de este régimen precisamente son la desintoxicación de tu cuerpo.")  

            $("#faq_4_title").html("¿Qué puedo comer?")  
            $("#faq_4_body").html("Te sugiero que no modifiques tu dieta actual al menos los primeros 28 días, después puedes llevar cualquier tipo de dieta siempre y cuando cumplas con tus requerimientos calóricos necesarios.")  

            $("#faq_5_title").html("¿Es apta para mujeres?")  
            $("#faq_5_body").html("Si, pero debes hacerlo de forma muy gradual.")  

            $("#faq_6_title").html("¿Puedo entrenar en ayunas?")  
            $("#faq_6_body").html("Si, pero dale a tu cuerpo 1 semana para que se adapte a tu entrenamiento regular.")  

            $("#faq_7_title").html("¿Es mejor entrenar en ayunas o durante la ventana de comida?")  
            $("#faq_7_body").html("Lo mejor es entrenar constantemente, es decir, lo que mas se adapte a tu estilo de vida sin importar la hora. Si lo que quieres es quemar grasa, entrenar en ayunas acelerará tus resultados. Si lo que quieres es incrementar tu masa muscular entrenar en medio de tu ventana de comida puede ayudarte. Esto no quiere decir que haciéndolo a la inversa no funcione.")  
            
            $("#faq_8_title").html("¿Cuántas horas debo de ayunar?")  
            $("#faq_8_body").html("Esto depende de tus metas y de cómo reacciona tu cuerpo, te sugiero que hagas el régimen de 4 semanas y después hagas la semana de ¨la campana” para después mantenerte entre 14 y 18 horas de ayuno. Lo mas común es 16/8 (16 horas de ayuno con 8 horas de comida)")  

            $("#faq_9_title").html("¿Lo pueden hacer menores de 18 años?    ")  
            $("#faq_9_body").html("De preferencia no, están en pleno desarrollo y deben ingerir toda la nutrición posible.")  

            $("#faq_10_title").html("¿Si estoy enfermo(a) puedo hacerlo?")  
            $("#faq_10_body").html("De preferencia espera a estar sano. Si estas medicado(a) y aun así quieres iniciar hazlo de forma muy gradual y corre con tu médico ante cualquier malestar.")  
            
            $("#faq_11_title").html("¿Cuánto tiempo dura este régimen?")  
            $("#faq_11_body").html("Muchos lo adaptamos a nuestro estilo de vida y tenemos años ayunando, sin embargo te sugiero iniciar con 28 días mínimo con un deseado de 56 y después tu decidas si es algo que podrias hacer por mas tiempo.  ")  

            $("#faq_12_title").html("¿Es obligatoria la suplementación?")  
            $("#faq_12_body").html("No. Pero es una realidad que actualmente la comida ya no tiene los nutrientes de antes, que estamos escasos de enzimas y que nuestro estilo de vida es tan acelerado que la suplementación si bien no es obligatoria yo si la veo como necesaria")  

            break;
        case "2":     

            $("#title").html("FAQ")
            $("#askus").html("Ask us via <a style=\"color:#3499E1\" onclick=\"location.href='mailto:uriarte.coach@gmail.com?Subject=Preguntas%20De%20La%20Dieta';\">e-mail</a>")

            $("#faq_1_title").html("What is the warior's diet?") 
            $("#faq_1_body").html("It is a diet dedicated to detoxifying your body daily through intermittent fasting (fasts greater than 14 hours every day) which has the most visible and notable results in weight loss and fat burning. ")  
    
            $("#faq_2_title").html("does it takes long to see results?")  
            $("#faq_2_body").html("Just as any other diet it depends on your life style and your condition when starting the regime, but you can start seeing the results after a couple of weeks")   

            $("#faq_3_title").html("Is it safe or healthy?")  
            $("#faq_3_body").html("It is! the main principle of this regime is detoxifying your body")    

            $("#faq_4_title").html("What can I eat?")  
            $("#faq_4_body").html("I suggest you not to modify your actual diet, at least during the first couple of weeks, after that you can start doing any diet that meets the caloric requirements for you")  
    
            $("#faq_5_title").html("Can I do this if I'm a women?")  
            $("#faq_5_body").html("Yes but as everyone else try to do it gradually")  

            $("#faq_6_title").html("Can I exercise while fasting?")  
            $("#faq_6_body").html("You can, but give your body about a week in order to adapt to your regular training.")   

            $("#faq_7_title").html("Should I exercise during my fast window or during my meal window?")  
            $("#faq_7_body").html("The best you can do is being constant on your decition, meaning, what ever you can adapt better to your lifestyle, even tho, some times taining during the fast window can increase fatburn, but training during meal window can improve muscle gain. ")  
            
            $("#faq_8_title").html("How many hours should I fast?")  
            $("#faq_8_body").html("It depends on your goals and how your body reacts but one of the most common is the 16/8 (16 hours of fast for every 8 hours of ingest)")  
    
            $("#faq_9_title").html("Can an underage do this?")  
            $("#faq_9_body").html("It can, but it's preferred not to since they are still developing their body and need to get as much nutrition as possible.")  
    
            $("#faq_10_title").html("Can I do it if I'm sick?")  
            $("#faq_10_body").html("I would recommend to wait until you are healthy, if you're being medicated and you still want to keep the regime do it gradually and go with your doctor if you feel bad in any way")   
            
            $("#faq_11_title").html("how long does this regime last?")  
            $("#faq_11_body").html("A lot of people adopt this regime as a life style and spend years doing it, but I will suggest going first for between 28 and 56 days, after that you can decide if you want to keep it or not ")   

            $("#faq_12_title").html("Is supplementation mandatory?")  
            $("#faq_12_body").html("No, but it is true that food now a days has just not enough nutrients, that said, even if it is not mandatory I would still recommend it")


            break;
        default: 
            $("#title").html("Preguntas Frecuentes:")
            $("#askus").html(" Preguntanos via <a style=\"color:#3499E1\" onclick=\"location.href='mailto:uriarte.coach@gmail.com?Subject=Preguntas%20De%20La%20Dieta';\">Correo Electronico</a>")
            
            $("#faq_1_title").html("¿Qué es la dieta del guerrero?") 
            $("#faq_1_body").html("Es un estilo de vida alimenticio dedicado a desintoxicar tu cuerpo diariamente mediante el ayuno intermitente (ayunos mayores a 14 horas todos los días) el cual tiene como resultados mas visibles y notorios la perdida de peso y la quema de grasa.")  

            $("#faq_2_title").html("¿En cuanto tiempo veo resultados?")  
            $("#faq_2_body").html(" Como todo, depende de tu estilo de vida y de el lugar donde estés al iniciar este régimen, pero en promedio los resultados se empiezan a notar desde la segunda semana.")  

            $("#faq_3_title").html("¿Es seguro? ¿Es sano?")  
            $("#faq_3_body").html("Si. Los principios de este régimen precisamente son la desintoxicación de tu cuerpo.")  

            $("#faq_4_title").html("¿Qué puedo comer?")  
            $("#faq_4_body").html("Te sugiero que no modifiques tu dieta actual al menos los primeros 28 días, después puedes llevar cualquier tipo de dieta siempre y cuando cumplas con tus requerimientos calóricos necesarios.")  

            $("#faq_5_title").html("¿Es apta para mujeres?")  
            $("#faq_5_body").html("Si, pero debes hacerlo de forma muy gradual.")  

            $("#faq_6_title").html("¿Puedo entrenar en ayunas?")  
            $("#faq_6_body").html("Si, pero dale a tu cuerpo 1 semana para que se adapte a tu entrenamiento regular.")  

            $("#faq_7_title").html("¿Es mejor entrenar en ayunas o durante la ventana de comida?")  
            $("#faq_7_body").html("Lo mejor es entrenar constantemente, es decir, lo que mas se adapte a tu estilo de vida sin importar la hora. Si lo que quieres es quemar grasa, entrenar en ayunas acelerará tus resultados. Si lo que quieres es incrementar tu masa muscular entrenar en medio de tu ventana de comida puede ayudarte. Esto no quiere decir que haciéndolo a la inversa no funcione.")  
            
            $("#faq_8_title").html("¿Cuántas horas debo de ayunar?")  
            $("#faq_8_body").html("Esto depende de tus metas y de cómo reacciona tu cuerpo, te sugiero que hagas el régimen de 4 semanas y después hagas la semana de ¨la campana” para después mantenerte entre 14 y 18 horas de ayuno. Lo mas común es 16/8 (16 horas de ayuno con 8 horas de comida)")  

            $("#faq_9_title").html("¿Lo pueden hacer menores de 18 años?    ")  
            $("#faq_9_body").html("De preferencia no, están en pleno desarrollo y deben ingerir toda la nutrición posible.")  

            $("#faq_10_title").html("¿Si estoy enfermo(a) puedo hacerlo?")  
            $("#faq_10_body").html("De preferencia espera a estar sano. Si estas medicado(a) y aun así quieres iniciar hazlo de forma muy gradual y corre con tu médico ante cualquier malestar.")  
            
            $("#faq_11_title").html("¿Cuánto tiempo dura este régimen?")  
            $("#faq_11_body").html("Muchos lo adaptamos a nuestro estilo de vida y tenemos años ayunando, sin embargo te sugiero iniciar con 28 días mínimo con un deseado de 56 y después tu decidas si es algo que podrias hacer por mas tiempo.  ")  

            $("#faq_12_title").html("¿Es obligatoria la suplementación?")  
            $("#faq_12_body").html("No. Pero es una realidad que actualmente la comida ya no tiene los nutrientes de antes, que estamos escasos de enzimas y que nuestro estilo de vida es tan acelerado que la suplementación si bien no es obligatoria yo si la veo como necesaria")  
            break;
    }
}