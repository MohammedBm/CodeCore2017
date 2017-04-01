$(document).ready(function() {
    let names = [];
    $('#user-form').submit(function(event) {
        let name = $('#name').val()
        names.push(name);
        // appendNames(name);
        $('#names').append(`
            <h1>${name}</h1>
            <hr>
          `)
        console.log(names);
        $('#name').val('');
        //this will prevent the default behaviout of the form whic is either
        // submitting to the `action` irl or if you havent specified the `action`
        //url then the default behavier of the form is to refresh the page.
        event.preventDefault();
    });
});
// //we can use function to shorten the code
// function appendNames(name) {
//     $('#names').append(`
//     <h1>${name}</h1>
//     <hr>
//   `)
// }
