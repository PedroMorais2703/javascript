// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    //limpar div
    div.innerHTML = '';

    //criar o span
    letspanNome = document.createElement('span');

    //criar o txtnome
    let txtnome = '';

    //recuperar o input
    let github_user = document.querySelector('input[name=github_user]');

    //metodo [GET, POST, DELETE]
    axios.get(`https://api.github.com/users/${github_user}`);
        then(function (response) {
            if(response.data.name !== null){
                txtNome = document.createElement(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuario encontrado não possui nome.');
            }

            //adicionar o texto ao span e o span a div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        
            
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possivel realizar a requisição');
            //adiciona o conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
}