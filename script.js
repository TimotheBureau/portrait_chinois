// boucle analogies 
document.addEventListener("DOMContentLoaded", function () {

    fetch('data.json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            data.forEach(function afficheAnalogie(resultat) {
                document.querySelector('.liste-analogies').innerHTML += "<section class='sec'><div class='image " + resultat.class + "' id='" + resultat.id + "'><h2>SI J'ÉTAIS <strong>" + resultat.analogie + ",</strong><br>JE SERAIS " + resultat.valeur + ".</h2></div></section><p id='" + resultat.justifid + "'><strong>Parce que</strong> " + resultat.justif + "</p>";
                // pour insérer des images popup 
                // + "<div class='popup popup-invisible'>" + resultat.illustration + "</div>"
            });
        });
    });


    // nouvelle analogie
    document.querySelector('#analogie').addEventListener('keyup', function (e) {
        document.querySelector('.nouvelle-analogie').innerHTML = "<section class='sec'><div class='image'><h2>SI J'ÉTAIS <strong>" + document.querySelector('#analogie').value + ",</strong><br>JE SERAIS " + document.querySelector('#valeurAnalogie').value + ".</h2></div></section>" + "<p><strong>Parce que</strong> " + document.querySelector('#justif').value + "</p>";
    });
    document.querySelector('#valeurAnalogie').addEventListener('keyup', function (e) {
        document.querySelector('.nouvelle-analogie').innerHTML = "<section class='sec'><div class='image'><h2>SI J'ÉTAIS <strong>" + document.querySelector('#analogie').value + ",</strong><br>JE SERAIS " + document.querySelector('#valeurAnalogie').value + ".</h2></div></section>" + "<p><strong>Parce que</strong> " + document.querySelector('#justif').value + "</p>";
    });
    document.querySelector('#justif').addEventListener('keyup', function (e) {
        document.querySelector('.nouvelle-analogie').innerHTML = "<section class='sec'><div class='image'><h2>SI J'ÉTAIS <strong>" + document.querySelector('#analogie').value + ",</strong><br>JE SERAIS " + document.querySelector('#valeurAnalogie').value + ".</h2></div></section>" + "<p><strong>Parce que</strong> " + document.querySelector('#justif').value + "</p>";
    });

    // envoi du formulaire
    document.querySelector('#submit').addEventListener('click', function (e) {
        e.preventDefault();
        console.log("analogie : " + document.querySelector('#analogie').value);
        console.log("valeur de l'analogie : " + document.querySelector('#valeurAnalogie').value);
        console.log("justification : " + document.querySelector('#justif').value);

        var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector("#email").value + "&message=Si j'étais ... " + document.querySelector("#analogie").value + ", je serais ... " + document.querySelector("#valeurAnalogie").value + ". Parce que ..." + document.querySelector("#justif").value;
        fetch(urlVisitee).then(function (response) {
            response.json().then(function (data) {
                if (data.status == "success") {
                    document.querySelector("#messageApresEnvoi").innerHTML = "Votre message a bien été reçu";
                } else {
                    document.querySelector("#messageApresEnvoi").innerHTML = "Problème : votre message n'a pas été reçu";
                }
            })
        })

    })


    // mentions légales : volet déroulant
    document.querySelector('.volet-invisible').addEventListener('click', function (click) {
        // affiche 'clic' dans la console
        console.log('clic');
        // déroule les mentions légales
        document.querySelector('.volet-invisible').animate([{ minHeight: '18rem' }], { duration: 800 })
        setTimeout(function () {
            window.scrollTo(0, document.body.clientHeight);
        }, 2);
        // fixation du déroulement
        setTimeout(function () {
            document.querySelector('.volet-invisible').classList.add('volet-visible');
            document.querySelector('.volet-invisible').classList.remove('volet-invisible');
        }, 0);
    });




});