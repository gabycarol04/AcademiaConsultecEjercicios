//Insertar elementos en el DOM
function changeDom(){
    document.getElementById('section-dom').innerHTML = '<h6 class="title">'+'Probando un subtítulo'+'</h6>';
}

//Solicitud Síncrona
function executeCountryServices(){
    try {
        let request = new XMLHttpRequest();
        request.open('GET', 'https://restcountries.eu/rest/v2/all');
        request.onload = function(result){
            console.log(result);
        }
        request.send();
        if(request.status == 200)
            console.log("Peticion realizada");
        else
            console.log("Not ok, response diferente de 200");
    } catch (error) {
        console.log(error);
    }
}

//Solicitud Asíncrona
    //No estoy segura, investigar como es asincrono
    //No estoy segura si es necesario colocar async antes de function
function executeCountryServicesAsyn(){
    try {
        let asyncRequest = new XMLHttpRequest();
        asyncRequest.open('GET', 'https://restcountries.eu/rest/v2/all', true); //El true especifica que es 
        
        //Imprime el resultado en consola
        asyncRequest.onload = function(result){
            console.log(result);
        }

        asyncRequest.send();

        if(asyncRequest.status == 200)
            console.log("Peticion realizada");
        else
            console.log("Not ok, response diferente de 200");
    } catch (error) {
        console.log(error);
    }
}

//Solicitud con fetch
async function solicitudFetch(){
    try {
        const paises = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await paises.json();
        //console.log(data);
        const table = document.querySelector('.show-data');
        data.forEach(element => {
            console.log(element);
            table.innerHTML+=`
                <ul>
                    <li>${element.name}</li>
                    <li><img src=${element.flag}></li>
                </ul>
            `
        });
    } catch (error) {
        console.log(error);
    }
}

//
async function solicitudAsincrona(){
    try{
        let service = new XMLHttpRequest();
        service.open('GET', 'https://restcountries.eu/rest/v2/all');
        service.onload = function () {
            let countries = JSON.parse(service.responseText);
            console.log(countries[0]);
            let htmlAMostrar = "<table>";
            countries.forEach((pais, countryIndex) => {
                htmlAMostrar += `<tr>
                <td>${countryIndex + 1}</td>
                <td>${pais.name}</td>
                <td><img src="${pais.flag}" /></td>
                </tr>`;
            });
            htmlAMostrar += "</table>"
            document.getElementById('section-country').innerHTML = htmlAMostrar;
        };
        service.send();
    }catch (error){
        console.log(error);
    }
}
