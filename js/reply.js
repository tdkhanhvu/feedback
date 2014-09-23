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
            alert(xhr.responseText);
        }
    });
}

function createNewReply(commentId) {
    var comment = $('#' + commentId),
        comment_box = comment.find('.comment_box'),
        input = comment_box.find('input'),
        text = input.val(),
        reply = {};

    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'InsertIntoReply', 'commentId':commentId, 'userId': userId, 'text': text},
        dataType: 'json',
        success: function(result){
            if (result != '0') {
                reply = {
                    id: result,
                    photo: photo,
                    name: userName,
                    text: text,
                    type: 'reply',
                    time: (new Date()).toISOString(),
                    vote: 0,
                    voteUp:false,
                    voteDown: false
                }
                addReply(commentId,reply);

                input.val('');
                comment_box.toggle();
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function initReplyEvent() {
    $('body').on('click', '.send_reply', function() {
        createNewReply($(this).closest('.comment_detail').attr('id'));
    });

    $('body').on('click', '.cancel_reply', function() {
        $(this).closest('.comment_box').toggle()
            .find('input').val('');
    });

    $('body').on('click', '.viewReplies', function(event) {
        var commentE = $(this).closest('.comment_detail'), comment = {id:commentE.attr('id')};

        $.when.apply($, [getRepliesFromComment(comment, commentE.attr('start'))]).then(function() {
            comment.replies.forEach(function(reply) {
                addReply(comment.id,reply);
            });

            if (comment.replies.length < repliesLimit)
                commentE.find('.viewReplies').remove();
        });
    });
}
