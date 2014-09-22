var threads = [];
var allCategories = ['service','park','product'];
var initFilter = false;

function addThread(thread) {
    var thread_tmpl = $.templates("#threadTmpl");

    thread_tmpl.link("#temp", {
        id : thread.id,
        category: thread.categories.join(' '),
        order: thread.order
    });
    $('#Container').append($('#temp').html());
    $('#temp').html('');

    var review_tmpl = $.templates("#reviewTmpl");
    var temp = {
        solved: thread.solved,
        categories: thread.categories,
        ratingId: 'rating' + thread.id
    };
    $.extend(temp, getReviewAttribute(thread));
    review_tmpl.link("#" + thread.id, temp);
    $('#rating' + thread.id).raty({
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
                        id: thread.id,
                        photo: thread.photo,
                        name: thread.name,
                        categories: thread.categories.map(function(obj) {return obj['name']}),
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
                id: result.id,
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
        insertIntoThread('company_ff_kfc', $('#input_comment').val());
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
            case 'Phuc Vu':
            case 'service':
                temp = "<span class='label label-primary tag'>Phục Vụ</span>";
                break;
            case 'Giu Xe':
            case 'park':
                temp =  "<span class='label label-success tag'>Giữ Xe</span>";
                break;
            case 'San Pham':
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