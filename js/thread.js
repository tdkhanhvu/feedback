var threads = [];
var allCategories = ['service','park','product'];
var initFilter = false;
var lastThread = null;
var startThread = 1;

function addThread(thread) {
    var thread_tmpl = $.templates("#threadTmpl"),
        review_tmpl = $.templates("#reviewTmpl"),
        temp = {
            solved: thread.solved,
            categories: thread.categories,
            ratingId: 'rating' + thread.id
        };

//    insertDom(thread_tmpl, {
//        id : 'parent_' + thread.id,
//        category: thread.categories.join(' '),
//        order: thread.order
//    }, 'Container');

    thread_tmpl.link("#temp", {
        id : 'parent_' + thread.id,
        category: thread.categories.join(' '),
        order: thread.order
    });

    $('#Container').mixItUp('append',$('#temp').find('div'));
    $('#temp').html('');

    $.extend(temp, getReviewAttribute(thread));
    insertDom(review_tmpl , temp, 'parent_' + thread.id)
    $('#rating' + thread.id).raty({
        readOnly: true,
        score: thread.rate
    });

    $("time.timeago").timeago();


    //if ($('#button_all').hasClass('active'))
    //    $('#button_service').click();
    //$('#button_all').click();
    lastThread = $('#parent_' + thread.id);
    startThread++;
}

function getThreadsFromBranch(branchId, limit) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetThreadsFromBranch', 'branchId':branchId, 'start': startThread, 'limit': limit},
        dataType: 'json',
        success: function(result){
            threads = [];

            for (var i = 0; i < result.length; i++) {
                var thread = result[i];
                threads.push(
                    {
                        id: thread.id,
                        photo: thread.photo,
                        name: thread.name,
                        categories: thread.categories.map(function(obj) {return convertCategoryLabel(obj['name'])}),
                        text: thread.text,
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
                        ]
                    });
            }
        },
        error: function(xhr, status, error) {
            //var err = eval("(" + xhr.responseText + ")");
            alert(xhr.responseText);
        }
    });
}

function insertIntoThread(branchId, text) {
    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'InsertIntoThread', 'branchId':branchId, 'userId': userId, 'photo': photo, 'name': userName, 'text': text},
        dataType: 'json',
        success: function(result){
            var categories = new Array();
            allCategories.forEach(function(category) {
                if ($('#input_' + category).is(':checked'))
                    categories.push(category);
            })

            var thread = {
                id: result,
                photo: photo,
                name: userName,
                categories: categories,
                text: text,
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
        },
        error: function(xhr, status, error) {
            //var err = eval("(" + xhr.responseText + ")");
            alert(xhr.responseText);
        }
    });
}

function initThreadEvent() {
    $('body').on('click', '.send_thread', function() {
        insertIntoThread('branch_kfc_1', $('#input_comment').val());
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

function convertCategoryLabel(category) {
    switch(category) {
        case 'Phuc Vu':
            return "service";
        case 'Giu Xe':
            return "park";
        case 'San Pham':
            return "product";
        default:
            return '';
    }

    return '';
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

function loadThread(numOfThread) {
    $.when.apply($, [getThreadsFromBranch('kfc_1',numOfThread)]).then(function() {
        loadComments = [];

        threads.forEach(function(thread){
            loadComments.push(getCommentsFromThread(thread, 1));
        })

        $.when.apply($, loadComments).then(function() {
            threads.forEach(function(thread){
                addThread(thread);
                thread.comments.forEach(function(reply, index) {
                    if (index < commentsLimit)
                        addComment(thread.id,reply);
                })
            })
        });
    });
}
