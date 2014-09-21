var repliesLimit = 5;

function addReply(commentId, reply) {
    var reply_tmpl = $.templates("#reviewTmpl");
    temp = {
    };
    $.extend(temp, getReviewAttribute(reply));
    reply_tmpl.link("#temp", temp);

    var comment = $('#' + commentId);
    var viewAll = comment.find('.viewReplies');
    if (viewAll.length) {
        viewAll.before($('#temp').html());
    }
    else
    {
        comment.append($('#temp').html());

        if (comment.find('>div').length > repliesLimit)
            comment.append('<div class="viewReplies"><span class="glyphicon glyphicon-reply"></span><a>View more replies</a></div>');
    }

    $('#temp').html('');
    comment.attr('start', parseInt(comment.attr('start')) + 1);
    $("time.timeago").timeago();
}

function getRepliesFromComment(comment, start) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetRepliesFromComment', 'commentId':comment.id, 'start': start},
        dataType: 'json',
        success: function(result){
            comment.replies = [];
            for (var i = 0; i < result.length; i++) {
                var reply = result[i];
                comment.replies.push(
                    {
                        id: reply.id,
                        photo: 'firm/kfc.jpg',
                        name: 'KFC',
                        text: reply.text,
                        type: 'reply',
                        time: reply.time,
                        vote: reply.vote,
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