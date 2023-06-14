const deleteButton = $('.boxup-button.delete')

deleteButton.onclick = () => {
    let nameDelete = $('#fullname.Buttery-White-hover.boxup-style').value

    let urlIdDelete = 'http://192.168.20.156:5002/member?name=' + encodeURIComponent(nameDelete)

    fetch(urlIdDelete)
        .then(response => response.json())
        .then(data => data['members'][0].id)
        .then(idDelete => {
            console.log(idDelete)
            let formData = new FormData();
            formData.append('id', idDelete);

            fetch('http://192.168.20.156:5002/member', {
                method: 'DELETE',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response data here
                    console.log(data)
                })
                .catch(error => {
                    // Handle any errors that occur
                });
        })
        .catch(error => {
            // Handle any errors that occur
        });

}