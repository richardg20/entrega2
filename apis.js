function perros_randoms(){

    url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)

    .then(function(response) {
        return response.json();
    })

    .then(function(data){
        ver_imagen(data.message);
    })

    .catch(function(error){
        console.log("Error" + error);
    });
}   

function ver_imagen(image_url){
    document.getElementById("foto_1").src =image_url;
    document.getElementById("foto_2").src =image_url;
}