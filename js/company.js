var companies = [];
var branchId = '';
var companyId = '';
function initCompany() {
    if (language == 'en') {
        if (companyId == 'company_bank_dbs') {
            var branches = [];
            $.when.apply($, [getAllBranchesFromCompany(companyId, branches)]).then(function() {
                var company = {
                    photo: 'dbs_logo.png',
                    description: 'One of the best banks in Singapore',
                    time: 'Mon-Fri: 8:30 AM - 6:30 PM',
                    address: '304 Choa Chu Kang Avenue 4, Singapore 680304',
                    phone: '1800 111 1111',
                    branches: branches
                };
                branchId = branches[0].id;
                $.templates("#companyTmpl").link('#companyInfo', company);
                $("#branch_list").select2();
                $("#branch_list").on("change", function(e) { loadBranchInfo(e)});

                if (!initFilter) {
                    $.views.helpers({getStatus: getStatus});
                    $.views.helpers({getCategoryLabel: getCategoryLabel});

                    $('#Container').mixItUp({animation:{effect: 'translateY'}});
                    initFilter = true;
                }
                loadThread(2);
            });
        }
    }
    else {
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
                branchId = branches[0].id;
                $.templates("#companyTmpl").link('#companyInfo', company);
                $("#branch_list").select2();
                $("#branch_list").on("change", function(e) { loadBranchInfo(e)});

                if (!initFilter) {
                    $.views.helpers({getStatus: getStatus});
                    $.views.helpers({getCategoryLabel: getCategoryLabel});

                    $('#Container').mixItUp({animation:{effect: 'translateY'}});
                    initFilter = true;
                }
                loadThread(2);
            });
        }
    }

}

function loadBranchInfo(e) {
    $('#Container').find('.mix').remove();
    branchId = e.val;
    startThread = 1;
    loadThread(2);
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

function getCompaniesByIndustryId(industryId, industryName) {
    console.log('make call getCompaniesByIndustryId for id ' + industryId);
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetAllCompaniesFromIndustries', 'industryId':industryId},
        dataType: 'json',
        success: function(result){
            console.log("receive result " + result.length);
            for (var i = 0; i < result.length; i++) {
                var company = result[i];
                console.log(company);
                companies.push(
                    {
                        industryName : industryName,
                        companyName : company.name,
                        companyPhoto : company.image,
                        id: company.id
                    });
            }
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
}