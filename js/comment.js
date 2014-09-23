var commentsLimit = 2;


function addComment(threadId, comment) {
    var comment_tmpl = $.templates("#reviewTmpl");
    temp = {
        replies: comment.replies
    };
    $.extend(temp, getReviewAttribute(comment));
    comment_tmpl.link("#temp", temp);

    var thread = $('#parent_' + threadId);
    var viewAll = thread.find('.viewComments');
    if (viewAll.length) {
        viewAll.before($('#temp').html());
    }
    else
    {
        thread.append($('#temp').html());

        if (thread.find('>div').length > commentsLimit)
            thread.append('<div class="viewComments"><span class="glyphicon glyphicon-comment"></span><a>View more comments</a></div>');
    }

    $('#temp').html('');

    var postStart = thread.find('.post_start');
    postStart.attr('start', parseInt(postStart.attr('start')) + 1);
    $("time.timeago").timeago();
}

function getCommentsFromThread(thread, start) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetCommentsFromThread', 'threadId':thread.id, 'start': start},
        dataType: 'json',
        success: function(result){
            thread.comments = [];
            //alert('result ' + result.length);
            for (var i = 0; i < result.length; i++) {
                var comment = result[i];
                thread.comments.push(
                    {
                        id: comment.id,
                        photo: 'firm/kfc.jpg',
                        name: 'KFC',
                        text: comment.text,
                        type: 'comment',
                        time: comment.time,
                        vote: comment.vote,
                        voteUp:false,
                        voteDown: true,
                        replies: comment.replies
                    });
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}
