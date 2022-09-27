// Tutaj za pomocą fetch'a pobieram dane dotyczące menu w aktualnym z express.js server'a. Następnie wyświetlane, po czym zależnie o zalogowanego użytkownika skaładane zamówienia.

class Wybierak{
    constructor(){
        this.url = 'http://localhost:8000/zaczek';
        this.pick = document.querySelector('.pick');
    }

    fetch(){
        if(window.location == 'http://localhost:8080/afterLogin.html'){
            fetch(this.url)
            .then( response => {
                return response.json();
            })
            .then( data => {
                const regex = /[1-9]./g;
                const data1 = data.split(regex);
                console.log(data1)
                this.pickTemplate(data1);
            })
            .catch( err => console.log(err));
        }
    }

    pickTemplate(menuString){

        const pick = menuString.map( (element) => {
            return `<li> ${element}</li>`;
        });

        let template = `<ul>${pick}</ul>`;
        let templateReduced = template.replace(/>,</g,'><');
        this.pick.innerHTML = templateReduced;
    }

}


const wybierak = new Wybierak();

wybierak.fetch();