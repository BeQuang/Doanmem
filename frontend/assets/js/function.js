deleteForm = function (
    button,
    id,
    link,
) {
    button.onclick = () => {
        let formData = new FormData();
        formData.append('id', id);


        fetch(link, {
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
        }
}