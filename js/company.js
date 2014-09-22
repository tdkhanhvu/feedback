var companies = [];

function initReview() {
    $.views.helpers({getStatus: getStatus});
    $.views.helpers({getCategoryLabel: getCategoryLabel});

    //if (!initFilter) {
        $('#Container').mixItUp({animation:{effect: 'translateY'}});
    //    initFilter = true;
    //}

    loadThread(2);
}

function initCompany(companyId) {
    if (companyId == 'company_ff_kfc') {
        var branches = [];
        $.when.apply($, [getAllBranchesFromCompany(companyId, branches)]).then(function() {
            var company = {
                photo: 'kfc_logo.png',
                description: 'Bên cạnh những món ăn truyền thống như gà rán và Bơ-gơ, đến với thị trường Việt Nam, KFC đã chế biến thêm một số món để phục vụ những thức ăn hợp khẩu vị người Việt như: Gà Big‘n Juicy, Gà Giòn Không Xương, Cơm Gà KFC, Bắp Cải Trộn … Một số món mới cũng đã được phát triển và giới thiệu tại thị trường Việt Nam, góp phần làm tăng thêm sự đa dạng trong danh mục thực đơn, như: Bơ-gơ Tôm, Lipton, Bánh Egg Tart.',
                time: '7h30-11h00 &amp; 13h00-16h00 các ngày trong tuần',
                address: 'A43 Trường Sơn – Phường 4 – Quận Tân Bình – Tp.HCM',
                phone: '0123456789',
                branches: branches
            };
            $.templates("#companyTmpl").link('#companyInfo', company);
            $("#branch_list").select2({maximumSelectionSize: 1 });
            $('#s2id_branch_list').append('<img style="position:absolute;width:30px;top:0px;right:0px;" src="./css/dropdown/search.png"/>');

            $('#overlay').css('display','block');

            $('.right-preview').toggleClass('unscrollable');
            $('.wrapper').toggleClass('unscrollable');
        });

        initReview();
    }
}

function getAllBranchesFromCompany(companyId, branches) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetAllBranchesFromCompany', 'companyId':companyId},
        dataType: 'json',
        success: function(result){
            for (var i = 0; i < result.length; i++) {
                var branch = result[i];
                branches.push(
                    {
                        id: branch.id,
                        name: branch.address
                    });
            }
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}