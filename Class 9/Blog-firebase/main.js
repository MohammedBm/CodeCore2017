firebase.database().ref('posts').once('value').then(
    function(data) {
        console.log(data)
    }
)
