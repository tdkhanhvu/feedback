english = {};
vietnamese = {};

(function(){
    addLangValue('Service', 'Service', 'Phục Vụ');
    addLangValue('Park', 'Park', 'Giữ Xe');
    addLangValue('Product', 'Product', 'Sản Phẩm');
    addLangValue('Solved', 'Solved', 'Đã Giải Quyết');
    addLangValue('Unsolved', 'Unsolved', 'Chưa Giải Quyết');
}());

function addLangValue(key, en, vi) {
    english[key] = en;
    vietnamese[key] = vi;
}
function getLangValue(key) {
    switch(language) {
        case 'en':
            return english[key];
        case 'vi':
            return vietnamese[key];
        default:
            return '';
    }
}