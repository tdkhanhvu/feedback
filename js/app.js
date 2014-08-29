(function(){

    var industries = [
        {
            id: 1,
            name: "Taxi",
            companies: [
                {
                    id: 'taxi_1',
                    name: "Vinasun",
                    photo: "vinasun.jpg"
                },
                {
                    id: 'taxi_2',
                    name: "Saigontourist",
                    photo: "saigontourist.jpg"
                },
                {
                    id: 'taxi_3',
                    name: "Saigon Air",
                    photo: "saigonair.jpg"
                },
                {
                    id: 'taxi_4',
                    name: "Phương Trang",
                    photo: "phuong_trang.jpg"
                },
                {
                    id: 'taxi_5',
                    name: "Hoàng Long",
                    photo: "hoang_long.jpg"
                },
                {
                    id: 'taxi_6',
                    name: "Dầu Khí Cửu Long",
                    photo: "dau_khi_cuu_long.jpg"
                },
                {
                    id: 'taxi_7',
                    name: "Vinataxi",
                    photo: "vinataxi.jpg"
                },
                {
                    id: 'taxi_8',
                    name: "Mai Linh",
                    photo: "mai_linh.jpg"
                }
            ]
        },
        {
            id: 2,
            name: "Cây Xăng",
            companies: [
                {
                    id: 'cayxang_1',
                    name: "Bến Thành",
                    photo: "ben_thanh.jpg"
                },
                {
                    id: 'cayxang_2',
                    name: "Nơ Trang Long",
                    photo: "no_trang_long.jpg"
                },
                {
                    id: 'cayxang_3',
                    name: "Điện Biên Phủ",
                    photo: "dien_bien_phu.jpg"
                },
                {
                    id: 'cayxang_4',
                    name: "Nguyễn Tri Phương",
                    photo: "nguyen_tri_phuong.jpg"
                }
            ]
        },
        {
            id: 3,
            name: "Cinema",
            companies: [
                {
                    id: 'cinema_1',
                    name: "Galaxy Cinema",
                    photo: "galaxy_cinema.jpg"
                },
                {
                    id: 'cinema_2',
                    name: "Megastar Cinema",
                    photo: "megastar_cinema.jpg"
                },
                {
                    id: 'cinema_3',
                    name: "Lotte Cinema",
                    photo: "lotte_cinema.jpg"
                },
                {
                    id: 'cinema_4',
                    name: "Cinebox Cinema",
                    photo: "cinebox_cinema.jpg"
                }
            ]
        },
        {
            id: 4,
            name: "Viễn Thông",
            companies: [
                {
                    id: 'vienthong_1',
                    name: "Viettel",
                    photo: "viettel.jpg"
                },
                {
                    id: 'vienthong_2',
                    name: "Mobifone",
                    photo: "mobifone.jpg"
                },
                {
                    id: 'vienthong_3',
                    name: "Vinaphone",
                    photo: "vinaphone.jpg"
                },
                {
                    id: 'vienthong_4',
                    name: "Beeline",
                    photo: "beeline.jpg"
                }
            ]
        },
        {
            id: 5,
            name: "Siêu Thị",
            companies: [
                {
                    id: 'sieuthi_1',
                    name: "CoopMart",
                    photo: "coopmart.jpg"
                },
                {
                    id: 'sieuthi_2',
                    name: "Big C",
                    photo: "bigC.jpg"
                },
                {
                    id: 'sieuthi_3',
                    name: "Maximark",
                    photo: "maximark.jpg"
                },
                {
                    id: 'sieuthi_4',
                    name: "Lotte Mart",
                    photo: "lottemart.jpg"
                }
            ]
        },
        {
            id: 6,
            name: "Trung Tâm Mua Sắm",
            companies: [
                {
                    id: 'trungtammuasam_1',
                    name: "Parkson",
                    photo: "parkson.jpg"
                },
                {
                    id: 'trungtammuasam_2',
                    name: "Vincom",
                    photo: "vincom.jpg"
                },
                {
                    id: 'trungtammuasam_3',
                    name: "Now Zone",
                    photo: "nowzone.jpg"
                },
                {
                    id: 'trungtammuasam_4',
                    name: "Lotte Mart",
                    photo: "lottemart.jpg"
                },
                {
                    id: 'trungtammuasam_5',
                    name: "Aeon Mall",
                    photo: "aeon_mall.jpg"
                },
                {
                    id: 'trungtammuasam_6',
                    name: "Diamond Plaza",
                    photo: "diamond_plaza.jpg"
                }
            ]
        },
        {
            id: 7,
            name: "Thức Ăn Nhanh",
            companies: [
                {
                    id: 'fastfood_1',
                    name: "Lotteria",
                    photo: "lotteria.jpg"
                },
                {
                    id: 'fastfood_2',
                    name: "KFC",
                    photo: "kfc.jpg"
                },
                {
                    id: 'fastfood_3',
                    name: "Jollibee",
                    photo: "jollibee.jpg"
                },
                {
                    id: 'fastfood_4',
                    name: "Burger King",
                    photo: "burgerking.jpg"
                },
                {
                    id: 'fastfood_5',
                    name: "McDonalds",
                    photo: "mcdonald.jpg"
                },
                {
                    id: 'fastfood_6',
                    name: "Pizza Hut",
                    photo: "pizzahut.jpg"
                }
            ]
        }
    ];

    var app = angular.module('web', []);

    app.controller('FeedbackController', function(){
        var companies = new Array();
        industries.forEach(function(industry){
            industry.companies.forEach(function(company) {
                companies.push({industryName:industry.name,companyName:company.name, photo:company.photo, company_id: company.id});
            })
        })

        this.companies = companies;
    });


})();
