async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });


    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {

        response.json().then(data => {
            console.log(data);
            alert(data);
        });

    }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);