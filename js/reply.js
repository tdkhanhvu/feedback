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

function getRepliesFromThread(comment, start) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetRepliesFromThread', 'commentId':comment.comment_id, 'start': start},
        dataType: 'json',
        success: function(result){
            comment.replys = [];
            for (var i = 0; i < result.length; i++) {
                var reply = result[i];
                comment.replys.push(
                    {
                        id: reply.id,
                        photo: 'firm/kfc.jpg',
                        name: 'KFC',
                        text: reply.text,
                        type: 'reply',
                        time: comment.time,
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