let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

let promice = function(){
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name="github_user').value;

        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null)
        
        ajax.onreadystatechange = function(){
            if(ajax.readyState ===4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText));
                }else{
                    reject('Não foi encontrado nenunhm usuario com este nome.')
                }
            }
        }
    }); 
}

btn.onclick = function(){
    // Limpar a div
    div.innerHTML = '';

    //criar span
    let spanNome = document.createElement('span');

    //criar a variavel nome
    let txtNome = '';

    // Executar a promise
    promise()
        // resolve (sucesso)
        .then(function(response){
            //se o usuario tem nome
            if(response['name'] !== null){
                txtNome = document.createTextNode(response['name']);

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
            txtNome = document.createTextNode(error);
            //adiciona o texto ao span e o span a div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
}   