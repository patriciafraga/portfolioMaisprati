function validationForm() {
    let validationCod = document.forms["register"]["cod"].value;
    let validationTitle = document.forms["register"]["title"].value;
    let validationDirector = document.forms["register"]["director"].value;
    let validationDate = document.forms["register"]["date"].value;
    let validationActors = document.forms["register"]["actors"].value;
    let validationIMDB = document.forms["register"]["imdb"].value;
    let validationRadio = document.forms["register"]["radio"].value;
   

    if(validationCod == "") {
        alert("Digite o código do filme!");
        return false;
    }
    if(validationTitle == "") {
        alert("Digite o título do filme!");
        return false;
    }
    if(validationDirector == "") {
        alert("Digite o direitor do filme!");
        return false;
    }
    if(validationDate== "") {
        alert("Digite a data de lançamento do filme!");
        return false;
    }
    if(validationActors == "") {
        alert("Digite o ator/atriz principal do filme!");
        return false;
    }
    if(validationIMDB == "") {
        alert("Digite o IMDB do filme!");
        return false;
    }
    if(validationRadio == "") {
        alert("Marque qual o gênero do filme!");
        return false;
    }
    alert("Cadastro concluído com sucesso!");
}

function insert(){
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;
    let director = document.forms["register"]["director"].value;
    let date = document.forms["register"]["date"].value;
    let actors = document.forms["register"]["actors"].value;
    let imdb = document.forms["register"]["imdb"].value;
    let radio = document.forms["register"]["radio"].value;
    
    let insert = window.document.getElementById("insertRow");
    insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td scope="col">${title}</td>
    <td scope="col">${director}</td>
    <td scope="col">${date}</td>
    <td scope="col">${actors}</td>
    <td scope="col">${imdb}</td>
    <td scope="col">${radio}</td>
    `
}
