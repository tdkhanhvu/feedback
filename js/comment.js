var commentsLimit = 2;


function addComment(threadId, comment) {
    var comment_tmpl = $.templates("#reviewTmpl");
    temp = {
    };
    $.extend(temp, getReviewAttribute(comment));
    comment_tmpl.link("#temp", temp);

    var thread = $('#' + threadId);
    var viewAll = thread.find('.viewAll');
    if (viewAll.length) {
        viewAll.before($('#temp').html());
    }
    else
    {
        thread.append($('#temp').html());

        if (thread.find('>div').length > commentsLimit)
            thread.append('<div class="viewAll"><span class="glyphicon glyphicon-comment"></span><a>View more comments</a></div>');
    }

    $('#temp').html('');
    thread.attr('start', parseInt(thread.attr('start')) + 1);
    $("time.timeago").timeago();
}

function getCommentsFromThread(thread, start) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetCommentsFromThread', 'threadId':thread.thread_id, 'start': start},
        dataType: 'json',
        success: function(result){
            thread.comments = [];
            for (var i = 0; i < result.length; i++) {
                var comment = result[i];
                thread.comments.push(
                    {
                        id: comment.id,
                        photo: 'firm/kfc.jpg',
                        name: 'KFC',
                        desc: comment.desc,
                        start: false,
                        time: thread.time,
                        vote: comment.vote,
                        voteUp:false,
                        voteDown: true
                    });
            }
        },
        error: function(xhr, status, error) {
            //var err = eval("(" + xhr.responseText + ")");
            //alert(err.Message);
            alert(xhr.responseText);
        }
    });
}
