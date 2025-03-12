function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cargo = document.getElementById("cargo").value;
    
    if(nome === "" || email === "" || cargo === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p><strong>Nome:</strong> ${nome} <br> <strong>Email:</strong> ${email} <br> <strong>Cargo:</strong> ${cargo}</p><hr>`;
    
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cargo").value = "";
}