var companies = [];
var branchId = '';
var companyId = '';

function initCompany() {
    var company = {},
        branches = [];
    $.when.apply($, [getAllBranchesFromCompany(companyId, branches)], loadCompanyInfo(companyId, company)).then(function() {
        company.branches = branches;

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

function loadBranchInfo(e) {
    $('#Container').find('.mix').remove();
    branchId = e.val;
    startThread = 1;
    loadThread(2);
}

function loadCompanyInfo(companyId, company) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetCompanyInfo', 'companyId':companyId},
        dataType: 'json',
        success: function(result){
            console.log(result);
            company.address = result.address;
            company.description = result.description;
            company.phone = result.phone;
            //TODO: need to add logo field to company table
            company.photo = result.info;
            company.time = result.time;
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText );
        }
    });
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