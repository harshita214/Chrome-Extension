$(document).ready(function () {
    $('#message-dialog').hide();
})

$('#search-button').click(function () {
    $('#message-dialog').hide();
    $('#left-results-column').empty();
    $('#right-results-column').empty();

    $.get("https://api.github.com/search/users", {
        q: $('input[name="username"]').val()
    }, searchUsersCallback);
});

function searchUsersCallback(data) {
    var count = data.total_count;

    for (i = 0; i <= 7 && i < count; ++i) {
        var avatar_url = data.items[i].avatar_url;
        var html_url = data.items[i].html_url;
        var login = data.items[i].login;
        var html = '<a href="' + html_url + '" target="_tab">' +
            '<div class="card hoverable tooltipped" data-position="top" data-delay="10" data-tooltip="' + login + '">' +
            '<div class="card-image">' +
            '<img src="' + avatar_url + '">' +
            '</div>' +
            '</div>' +
            '</a>';
        var result_card = $(html);

        if (i % 2 === 0) { // Even
            $('#left-results-column').append(result_card);
        } else {
            $('#right-results-column').append(result_card);
        }
    }

    if (count === 0) {
        $('#message-dialog').show();
    } else {
        $('.tooltipped').tooltip({
            delay: 10
        });
    }
}