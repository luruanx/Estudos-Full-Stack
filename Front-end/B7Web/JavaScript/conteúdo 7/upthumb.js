// UPLOAD

async function sent() {
    let file = document.getElementById('file').files[0];

    let body = new FormData();
    body.append('title', 'blablabla');
    body.append('file', file);

    let req = await fetch('www.osite.com/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}



// THUMBNAILS

function show() {
    let image = document.getElementById("image").files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.width = 300;

    document.getElementById("area").appendChild(img);
}

// opção 2

function mostrar() {
    let reader = new FileReader();
    let image = document.getElementById('image').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(image);
}