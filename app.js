let ville = 'Rennes';

recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');

changerDeVille.addEventListener('click', () => {

    ville = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=d1274b53216e66dde55a35e24746ec07&units=metric';

    let requete = new XMLHttpRequest();

    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {

        if (requete.readyState === XMLHttpRequest.DONE) {

            if (requete.status === 200) {

                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;

                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;

            } else {

                alert('Un problème est survenu, merci de réessayer plus tard !');

            }
        }
    };
}