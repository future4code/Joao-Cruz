var Postar = () =>
    {

        var titulo = document.getElementById("titulo-post")
        var autor = document.getElementById("autor-post")
        var conteudo = document.getElementById("conteudo-post")
        
        const poste = 
        {
            titulo: titulo.value,
            autor: autor.value,
            conteudo: conteudo.value
        }
        titulo.value = " "
        autor.value = " "
        conteudo.value = " "

        var Objct = []
        Objct.push(poste);
        console.log(Objct);
        titulo.value =""
    }

var Post = () =>
{

    var container = document.getElementById("container-de-posts")
    container.innerHTML += `<p>${titulo}</p>`
    container.innerHTML += `<p>${autor}</p>`
    container.innerHTML += `<p>${conteudo}</p>`


}    

const enter = (event) =>
{
    if(event.key === "Enter") 
    {
        apertouBotao()
    }
}
