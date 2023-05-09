function perros_randoms(){
    /*
    AQUI NO LA SUPE HACER PARA MOSTRAR LOS 5 DX

    const container =document.querySelector("#dog-image-container");
    const url = "https://dog.ceo/api/breeds/image/random/5";

    fetch(url)

    .then(resp => resp.json() )

    .then(images => {
        const imgs = images.message

        let imgsArray = imgs.map((img) =>{
            let i = `<img src=${img}>`
           
            return i
        })

        imgsArray.forEach(element => {
            document.getElementById("foto_1").src = element;
            container.innerHTML += element 
       });
    
    })

   
    */

    url = "https://dog.ceo/api/breeds/image/random/1";

    fetch(url)

    .then(function(response) {
        return response.json();
    })

    .then(function(data){
            console.log(data.message);
           
            ver_imagen(data.message);

    })

    .catch(function(error){
        console.log("Error" + error);
    });
}   

function ver_imagen(image_url){

  
    document.getElementById("foto_1").src =image_url;
}  
