document.getElementById('exportPdf').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const address = document.getElementById('address').value;

    if(!name||!birthday||!address){
        if(name&&birthday){
            showMessage("Please Enter Address");
        }
        else if(name&&address){
            showMessage("Please Enter Birthday");
        }
        else if(birthday&&address){
            showMessage("Please Enter Name");
        }else{
                showMessage("Enter All The Details");
        }
        return;
    }

    const content = document.createElement('div');
    content.innerHTML = 
    `
        <h2 style="text-align:center;">Member Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;
    const options = {
        margin: 20,
        filename: 'memberDetails.pdf',
        image: { type: 'jpeg'},
    };

    html2pdf()
        .from(content)
        .set(options)
        .save();
});

function showMessage(message){
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}
function logoutToLogin(){
    window.location.href = 'login.html';
}