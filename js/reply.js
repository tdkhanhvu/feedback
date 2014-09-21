var repliesLimit = 2;


function addReply(threadId, reply) {
    var review_tmpl = $.templates("#reviewTmpl");
    temp = {
    };
    $.extend(temp, getReviewAttribute(reply));
    review_tmpl.link("#temp", temp);

    var thread = $('#' + threadId);
    var viewAll = thread.find('.viewAll');
    if (viewAll.length) {
        viewAll.before($('#temp').html());
    }
    else
    {
        thread.append($('#temp').html());

        if (thread.find('>div').length > repliesLimit)
            thread.append('<div class="viewAll"><span class="glyphicon glyphicon-comment"></span><a>View more comments</a></div>');
    }

    $('#temp').html('');
    thread.attr('start', parseInt(thread.attr('start')) + 1);
    $("time.timeago").timeago();
}

function getRepliesFromThread(thread, start) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetRepliesFromThread', 'threadId':thread.thread_id, 'start': start},
        dataType: 'json',
        success: function(result){
            thread.replies = [];
            for (var i = 0; i < result.length; i++) {
                var reply = result[i];
                thread.replies.push(
                    {
                        id: reply.id,
                        photo: 'firm/kfc.jpg',
                        name: 'KFC',
                        desc: reply.desc,
                        start: false,
                        time: thread.time,
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
