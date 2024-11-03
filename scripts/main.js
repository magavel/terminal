
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));


app.addEventListener("keypress", async function(event){
    if(event.key === "Enter"){
        await delay(150);
        getInputValue();

        removeInput();
        await delay(150);
        new_line();
    }
});

app.addEventListener("click", function(event){
    const input = document.querySelector("input");
    input.focus();
})


async function open_terminal(){
    createText("Welcome");
    await delay(350);
    createText("Starting the server...");
    await delay(750);
    createText("You can run several commands:");

    createCode("whois", "Who am i and what do i do.");
    createCode("help", "See all commands.");
    createCode("social -a", "All my social networks.");

    await delay(500);
    new_line();
}


function new_line(){

    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    p.setAttribute("class", "path")
    p.textContent = "# user";
    span1.textContent = " in";
    span2.textContent = " ~/portfolio";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class", "type")
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone")
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();

}

function removeInput(){
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue(){

    const value = document.querySelector("input").value;
    if(value === "help"){
        trueValue(value);

        createCode("articles", "Tech articles i have written.");
        createCode("whois", "Who am i and what do i do.");
        createCode("social -a", "All my social networks.");
        createCode("clear", "Clean the terminal.");

    }
    else if(value === "articles"){
        trueValue(value);
        createText("<a href='https://zenn.dev/magavel' target='_blank'><i class='fa fa-rss-square white'></i> zenn.dev/magavel</a>")
    }
    else if(value === "whois"){
        trueValue(value);
        createText("name: Magavel")
        createText("role: Software Engineer")
        createText("skills: Go, AWS, MySQL")
        createText("country: Japan")
    }
    else if(value === "social -a"){
        trueValue(value);
        createText("<a href='https://github.com/y-magavel' target='_blank'><i class='fab fa-github white'></i> github.com/y-magavel</a>")
        createText("<a href='https://www.linkedin.com/in/magavel/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/magavel</a>")
    }
    else if(value === "social"){
        trueValue(value);
        createText("Didn't you mean: social -a?")
    }

    else if(value === "clear"){
        document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    }
    else{
        falseValue(value);
        createText(`command not found: ${value}`)
        createText(`Type 'help' to see list of available commands.`)
    }
}

function trueValue(value){

    const div = document.createElement("section");
    div.setAttribute("class", "type2")
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone")
    const mensagem = document.createElement("h2");
    mensagem.setAttribute("class", "success")
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
}

function falseValue(value){

    const div = document.createElement("section");
    div.setAttribute("class", "type2")
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone error")
    const mensagem = document.createElement("h2");
    mensagem.setAttribute("class", "error")
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
}

function createText(text, classname){
    const p = document.createElement("p");

    p.innerHTML =
        text
    ;
    app.appendChild(p);
}

function createCode(code, text){
    const p = document.createElement("p");
    p.setAttribute("class", "code");
    p.innerHTML =
        `${code} <br/><span class='text'> ${text} </span>`;
    app.appendChild(p);
}

open_terminal();