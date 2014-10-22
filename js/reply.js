var repliesLimit = 5;

function addReply(commentId, reply) {
    var reply_tmpl = $.templates("#reviewTmpl"),
        temp = {},
        comment = $('#' + commentId),
        viewAll = comment.find('.viewReplies');
    $.extend(temp, getPostAttribute(reply));

    insertDom(reply_tmpl, temp, commentId);
    comment.attr('start', parseInt(comment.attr('start')) + 1);
    $("time.timeago").timeago();
}

function getRepliesFromComment(comment, start) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetRepliesFromComment', 'commentId':comment.id, 'start': start, 'userId': userId},
        dataType: 'json',
        success: function(result){
            comment.replies = [];
            for (var i = 0; i < result.length; i++) {
                var reply = result[i],
                    temp = {type: 'reply'};
                $.extend(temp, extractAjaxPostAttribute(reply));

                comment.replies.push(temp);
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function createNewReply(commentId, cmtBox) {
    var comment = $('#' + commentId),
        comment_box = comment.find('.comment_box'),
        input = comment_box.find('input'),
        text = input.val(),
        uploadPhotos = getUploadedPhoto(comment_box.find('form')),
        reply = {};

    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'InsertIntoReply', 'commentId':commentId, 'userId': userId, 'text': text
            , 'image': JSON.stringify(uploadPhotos)},
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
                    uploadphotos: uploadPhotos.map(function(obj) {return {photo: obj}}),
                    vote: '',
                    up:0,
                    down: 0,
                    user_id: userId
                }
                addReply(commentId,reply);

                input.val('');
                comment_box.toggle();

                removeImageFromPreview(cmtBox);
                resetReplyForm(cmtBox);
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function initReplyEvent() {
    $('body').on('click', '.send_reply', function() {
        createNewReply($(this).closest('.comment_detail').attr('id'), $(this).closest('.comment_box'));
    });

    $('body').on('click', '.cancel_reply', function() {
        resetReplyForm($(this).closest('.comment_box'));
    });

    $('body').on('click', '.viewReplies', function(event) {
        var commentE = $(this).closest('.comment_detail'),
            replies = commentE.find('.reply_content');

        if (!replies.length) {
            commentE.find('.previousReplies').trigger('click');
        }
        else {
            var prevReplies = commentE.find('.previousReplies');
            $(this).hide();
            replies.show();
            commentE.find('.hideReplies').show();
            if (prevReplies.length)
                prevReplies.show();
        }
    });

    $('body').on('click', '.previousReplies', function(event) {
        var prev = $(this),
            commentE = prev.closest('.comment_detail'),
            comment = {id:commentE.attr('id')};

        $.when.apply($, [getRepliesFromComment(comment, commentE.attr('start'))]).then(function() {
            comment.replies.forEach(function(reply) {
                addReply(comment.id,reply);
            });

            prev.show();
            commentE.find('.hideReplies').show();
            commentE.find('.viewReplies').hide();
            if (comment.replies.length < 10)
                prev.remove();
        });
    });

    $('body').on('click', '.hideReplies', function(event) {
        var commentE = $(this).closest('.comment_detail'),
            prevReplies = commentE.find('.previousReplies');
        $(this).hide();
        commentE.find('.viewReplies').show();
        commentE.find('.reply_content').hide();
        if (prevReplies.length)
            prevReplies.hide();
    });
}

function resetReplyForm(cmtBox) {
    var form = cmtBox.find('form');
    cmtBox.hide()
        .find('input').val('');
    clearUploadedPhotos(form.attr('id'));
}
