var commentsLimit = 2;


function addComment(threadId, comment) {
    var comment_tmpl = $.templates("#reviewTmpl");
    temp = {
        replies: comment.replies
    };
    $.extend(temp, getPostAttribute(comment));
    comment_tmpl.link("#temp", temp);

    var threadParent = $('#parent_' + threadId);
    var viewAll = threadParent.find('.viewComments');
    if (viewAll.length) {
        viewAll.before($('#temp').html());
    }
    else
    {
        threadParent.append($('#temp').html());

        if (threadParent.find('>div').length > commentsLimit)
            threadParent.append('<div class="viewComments"><span class="glyphicon glyphicon-comment"></span><a>'
                + getLangValue('MoreComment') + '</a></div>');
    }

    $('#temp').html('');

    var postStart = threadParent.find('.post_start');
    postStart.attr('start', parseInt(postStart.attr('start')) + 1);
    $("time.timeago").timeago();
    showHideCommandButton($('#' + comment.id).find('.command_button'));
}

function getCommentsFromThread(thread, start) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetCommentsFromThread', 'threadId':thread.id, 'start': start, 'userId': userId},
        dataType: 'json',
        success: function(result){
            thread.comments = [];
            for (var i = 0; i < result.length; i++) {
                var comment = result[i],
                    temp = {
                        type: 'comment',
                        replies: comment.replies
                    };
                $.extend(temp, extractAjaxPostAttribute(comment));
                thread.comments.push(temp);
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function createNewComment(threadId, cmtBox) {
    var thread = $('#' + threadId),
        comment_box = thread.find('.comment_box'),
        input = comment_box.find('input'),
        text = input.val(),
        uploadPhotos = getUploadedPhoto(comment_box.find('form')),
        comment = {};

    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'InsertIntoComment', 'threadId':threadId, 'userId': userId, 'text': text
            , 'image': JSON.stringify(uploadPhotos)},
        dataType: 'json',
        success: function(result){
            if (result != '0') {
                comment = {
                    id: result,
                    photo: photo,
                    name: userName,
                    text: text,
                    type: 'comment',
                    time: (new Date()).toISOString(),
                    uploadphotos: uploadPhotos.map(function(obj) {return {photo: obj}}),
                    vote: '',
                    up:0,
                    down: 0,
                    user_id: userId
                }
                addComment(threadId,comment);

                input.val('');
                comment_box.toggle();

                removeImageFromPreview(cmtBox);
                resetCommentForm(cmtBox);
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function initCommentEvent() {
    $('body').on('click', '.send_comment', function() {
        createNewComment($(this).closest('.post_start').attr('id'), $(this).closest('.comment_box'));
    });

    $('body').on('click', '.cancel_comment', function() {
        resetCommentForm($(this).closest('.comment_box'));
    });

    $('body').on('click', '.viewComments', function(event) {
        var threadE = $(this).closest('.mix').find('.post_start'), thread = {id:threadE.attr('id')};

        $.when.apply($, [getCommentsFromThread(thread, threadE.attr('start'))]).then(function() {
            thread.comments.forEach(function(comment) {
                addComment(thread.id,comment);
            });

            if (thread.comments.length < commentsLimit)
                threadE.closest('.mix').find('.viewComments').remove();
        });
    });
}

function resetCommentForm(cmtBox) {
    var form = cmtBox.find('form');
    cmtBox.hide()
        .find('input').val('');
    clearUploadedPhotos(form.attr('id'));
}
