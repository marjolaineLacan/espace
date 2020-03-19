$(document).ready(function(){

        // ************** Page accueil ****************
        $("#categories li").click(function(){
                $(this).children(".texte").slideToggle(500), 
                $(this).siblings("li").children(".texte").slideUp(500),
                $(this).children(".texte").css("background-color", "black")
        });

        // ********** Planetes geantes *******************
        
        $(".planetes").click(function(){
                var texte = $(this).children("p").text();
                $("#carre p").text(texte)
                $("#carre").slideDown("slow")
                var nom = $(this).children("figcaption").text();
                $("#nomPlaneteG").text(nom),
                $("#medaillon img").attr("src", this.children[0].src),                
                $("#planetesG").css("opacity" , "0.4"),
                $("header").css("opacity" , "0.4"),
                $("footer").css("opacity" , "0.4")
        });


        $("#croix").click(function(){
                $("#carre").slideUp("slow"),
                $("#planetesG").css("opacity" , "1"),
                $("header").css("opacity" , "1"),
                $("footer").css("opacity" , "0.4")
        });

        // ************* Planètes intérieures ****************

        $("#boutonMercure").click(function(){
                $("#mercure").css("animation-name","tourne");
        });
        
        $("#boutonVenus").click(function(){
                $("#venus").css({
                        "animation-name":"tourne",    
                });
        });

        $("#boutonTerre").click(function(){
                $("#terre").css({
                        "animation-name":"tourne",     
                });
        });

        $("#boutonMars").click(function(){
                $("#mars").css({
                        "animation-name":"tourne",      
                });
        });


        $("#boutonStop").click(function(){
                $(".stop").css({
                        "animation-name":"rien",        
                });
        });


        $("#boutonAll").click(function(){
                $(".stop").css({
                        "animation-name":"tourne",        
                });
        });

        // ********** page contact formulaire **************
        $("#tel").blur(function(){
                var tel = $("#tel").val();
                if (isNaN(tel)){
                        alert("vous devez saisir un numéro valide");
                } else if (tel.length != 10){
                        alert("vous devez saisir un numéro valide");
                }
        });


        $("#valider").click(function(){
                var nom = $("#nom").val();
                if (nom == ""){
                        alert("vous devez saisir un nom");
                }

                var mail = $("#email").val();
                if (mail = ""){
                        alert("vous devez saisir un email");
                }
        });
        
        

}) /* fin ready */

