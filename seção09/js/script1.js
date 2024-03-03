// Ajax (HMLHttpResqust) - Asynchronous JavaScript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[nome=github_user]');
let div = document.querySelector('#app');

btn.onclick = function() {

    //Limpar o conteudo da div
    div.innerHTML = '';

    // Instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    //console.log(ajax.readyState); //0
    // Abrir uma conexão com metodo (GET, POST, PUT, DELETE... )
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    //console.log(ajax.readyState); //1
    //enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function() {

        //criar elemento span
        let spanNome = document.createElement('span');

        //criar a variavel nome
        let txtNome = '';

        //ajax.readyState -> 0 => Antes da conexão ser aberta
        //ajax.readyState -> 1 => Após aabrir a conexão
        //ajax.readyState -> 2 => headers (cabeçalhos) foram recebidos
        //ajax.readyState -> 3 => Carregando o corpo da requisição (conteúdo/dados)
        //ajax.readyState -> 4 => O conteudo (dados) está pronto para uso

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                //transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                //se o usuario possui nome
                if(usuario['name'] !==null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNome = document.createTextNode(`Não encontrei o usuario ${input.value}`);
                }

                // adiciona o texto ao span e o span a div
                spanNome.appendChild(txtNome);
                div.appendChild(spanNome);

                //limpar input
                input.value = '';
            }
        }
    }
}