/* global $ */
$( document ).ready(function() {
    console.log('loading...');
    fetchEvents(postEvents);
});

function fetchEvents(callback) {
    $.get('/events/search', function(data) {
        console.log('Got\n' + JSON.stringify(data.events, null, '  '))
        if (data) {
            callback(data);
        } else {
            console.error('Unable to load events');
        }
    })
}

function postEvents(events) {
    if (events.length == 0) {
        $('#events').append('<p>No events :(</p>')
    } else {
        $.each(events, function(index, event) {
            console.log(JSON.stringify(event, null, '  '))
            $('#events').append('<p>'+event.name+' ' + event.tags + ' ' + event.state + '</p>');
        });
    }
}