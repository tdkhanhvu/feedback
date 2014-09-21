var countThreadId = 2;
var threads = [];
var allCategories = ['service','park','product'];
var initFilter = false;

function addThread(thread) {
    var thread_tmpl = $.templates("#threadTmpl");

    thread_tmpl.link("#temp", {
        id : thread.thread_id,
        category: thread.categories.join(' '),
        order: thread.order
    });
    $('#Container').append($('#temp').html());
    $('#temp').html('');

    var review_tmpl = $.templates("#reviewTmpl");
    var temp = {
        solved: thread.solved,
        categories: thread.categories,
        ratingId: 'rating' + thread.thread_id
    };
    $.extend(temp, getReviewAttribute(thread));
    review_tmpl.link("#" + thread.thread_id, temp);
    $('#rating' + thread.thread_id).raty({
        readOnly: true,
        score: thread.rate
    });

    $("time.timeago").timeago();

    if ($('#button_all').hasClass('active'))
        $('#button_service').click();
    $('#button_all').click();
}

function getThreadsFromBranch(branchId) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetThreadsFromBranch', 'branchId':branchId},
        dataType: 'json',
        success: function(result){
            for (var i = 0; i < result.length; i++) {
                var thread = result[i];
                threads.push(
                    {
                        thread_id: thread.id,
                        id: '11111' + thread.id,
                        photo: thread.photo,
                        name: thread.name,
                        categories: [
                            'service',
                            'park'
                        ],
                        desc: thread.desc,
                        order: thread.order,
                        type: 'thread',
                        solved: thread.solved,
                        time: thread.time,
                        rate: thread.rate,
                        vote: thread.vote,
                        voteUp: false,
                        voteDown: false,
                        uploadphotos: [
                            {
                                photo: '1.jpg'
                            },
                            {
                                photo: '2.jpg'
                            },
                            {
                                photo: '3.jpg'
                            }
                        ],
                        replies: [
                        ]
                    });
            }
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function initThreadEvent() {
    $('body').on('click', '.send_thread', function() {
        countThreadId++;
        var categories = new Array();
        allCategories.forEach(function(category) {
            if ($('#input_' + category).is(':checked'))
                categories.push(category);
        })

        var thread = {
            thread_id: 'thread'+countThreadId,
            id: 'thread'+countThreadId + '_1',
            photo: photo,
            name: userName,
            categories: categories,
            desc: $('#input_comment').val(),
            order: countThreadId,
            type: 'thread',
            solved: false,
            time: (new Date()).toISOString(),
            rate: $('#feedback').raty('score'),
            vote: 0,
            voteUp: false,
            voteDown: false,
            replies: []
        };
        addThread(thread);

        resetSubmitThreadForm();
    });

    $('body').on('click', '.cancel_thread', function() {
        resetSubmitThreadForm()
    });
}

function getStatus(status) {
    switch(status) {
        case "1":
            return "<span class='label label-success tag'>Đã Giải Quyết</span>";
        case "0":
            return "<span class='label label-danger tag'>Chưa Giải Quyết</span>";
        default:
            return "";
    }
}

function getCategoryLabel(categories) {
    var result = "";
    categories.forEach(function(category) {
        var temp = "";
        switch(category) {
            case 'service':
                temp = "<span class='label label-primary tag'>Phục Vụ</span>";
                break;
            case 'park':
                temp =  "<span class='label label-success tag'>Giữ Xe</span>";
                break;
            case 'product':
                temp = "<span class='label label-warning tag'>Sản Phẩm</span>";
                break;
            default:
                temp = "";
        }
        result = result + temp + "\n";
    })
    return result;
}

function resetSubmitThreadForm() {
    $('#input_comment').val('');
    $('#feedback').raty('cancel', false);
    allCategories.forEach(function(category) {
        $('#input_' + category).attr('checked', false)
            .parent().removeClass('active');
    })

    //var id = $('.comment_box').find('form').attr('id');
    //(Dropzone("#" + id)).removeAllFiles(true);
    //alert((Dropzone("#" + id)).files);
}