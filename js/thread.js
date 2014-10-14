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

    thread_tmpl.link("#temp", {
        id : 'parent_' + thread.id,
        category: thread.categories.join(' '),
        order: thread.order,
        solve: thread.solved == '0' ? 'unsolved' : 'solved'
    });

    $('#Container').mixItUp('append',$('#temp').find('div'));
    $('#temp').html('');

    $.extend(temp, getPostAttribute(thread));
    insertDom(review_tmpl , temp, 'parent_' + thread.id)
    $('#rating' + thread.id).raty({
        readOnly: true,
        score: thread.rate
    });

    $("time.timeago").timeago();

    lastThread = $('#parent_' + thread.id);
    startThread++;
    disableLoadThread = false;
}

function getThreadsFromBranch(branchId, limit) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetThreadsFromBranch', 'branchId':branchId, 'userId': userId,'start': startThread, 'limit': limit},
        dataType: 'json',
        success: function(result){
            threads = [];

            for (var i = 0; i < result.length; i++) {
                var thread = result[i],
                    temp = {
                        categories: thread.categories.map(function(obj) {return convertCategoryLabel(obj['name'])}),
                        order: thread.order,
                        type: 'thread',
                        solved: thread.solved,
                        rate: thread.rate,
                        uploadphotos: thread.images.map(function(obj) {return {photo: obj.image_name}})
                    };

                $.extend(temp, extractAjaxPostAttribute(thread));
                threads.push(temp);
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function createNewThread(branchId, text) {
    var rate = $('#feedback').raty('score') || 0,
        categories = new Array(),
        uploadPhotos = getUploadedPhoto($('#feedback').parent().find('form')),
        temp = new Array();
    allCategories.forEach(function(category) {
        if ($('#input_' + category).is(':checked')) {
            categories.push(category);
            temp.push(convertCategoryLabelToInt(category));
        }
    })

    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'InsertIntoThread', 'branchId':branchId, 'userId': userId, 'text': text, 'rate': rate,
            'category': JSON.stringify(temp), 'image': JSON.stringify(uploadPhotos)},
        dataType: 'json',
        success: function(result){
            if (result != '0') {
                var thread = {
                    id: result,
                    photo: photo,
                    name: userName,
                    categories: categories,
                    text: text,
                    type: 'thread',
                    solved: '0',
                    time: (new Date()).toISOString(),
                    uploadphotos: uploadPhotos.map(function(obj) {return {photo: obj}}),
                    rate: rate,
                    vote: 0,
                    voteUp: false,
                    voteDown: false,
                    user_id: userId,
                    comments: []
                };
                addThread(thread);

                removeImageFromPreview($('#feedback').closest('.comment_box'));
                resetSubmitThreadForm();
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function initThreadEvent() {
    $('body').on('click', '.send_thread', function() {
        createNewThread(branchId, $('#input_comment').val());
    });

    $('body').on('click', '.cancel_thread', function() {
        resetSubmitThreadForm()
    });

    $('body').on('click', '.accept', function() {
        markSolved($(this).closest('.post_start'));
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

function convertCategoryLabelToInt(category) {
    switch(category) {
        case 'service':
            return 1;
        case 'park':
            return 2;
        case 'product':
            return 3;
        default:
            return -1;
    }

    return -1;
}

function resetSubmitThreadForm() {
    var feedbackId = $('#feedback');

    $('#input_comment').val('');
    feedbackId.raty('cancel', false);

    allCategories.forEach(function(category) {
        $('#input_' + category).attr('checked', false)
            .parent().removeClass('active');
    })

    clearUploadedPhotos(feedbackId.parent().find('form').attr('id'));
}

function loadThread(numOfThread) {
    $.when.apply($, [getThreadsFromBranch(branchId,numOfThread)]).then(function() {
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

function markSolved(thread) {
    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'MarkSolved', 'threadId':thread.attr('id'), 'status': 1},
        dataType: 'json',
        success: function(result){
            if (result == true) {
                thread.closest('.mix').removeClass('unsolved').addClass('solved').
                    find('.thread_tag .label-danger').removeClass('label-danger')
                    .addClass('label-success').html('Đã Giải Quyết');

                thread.find('.accept').remove();
            }
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}