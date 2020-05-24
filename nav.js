let navUlSelectedLi;
let navUlLiSelectedMenu;

function selectedMenu(_this) {
    if (navUlLiSelectedMenu !== undefined) {
        navUlLiSelectedMenu.setAttribute('class', '')
    }
    _this.setAttribute('class', ' on')
    navUlLiSelectedMenu = _this
}

function navToggleButton(_this) {
    if (navUlSelectedLi && navUlSelectedLi !== _this.parentNode.parentNode) {
        navUlSelectedLi.setAttribute('class', ''); navUlSelectedLi = undefined
        _this.parentNode.parentNode.setAttribute('class', 'on')
    }
    if (navUlSelectedLi) { navUlSelectedLi.setAttribute('class', ''); navUlSelectedLi = undefined }

    // let testB = _this.parentNode.parentNode.getAttribute('class')
    // if (testB === 'on') {
    //     _this.parentNode.parentNode.setAttribute('class', '')
    // } 
    else {
        _this.parentNode.parentNode.setAttribute('class', 'on')
        navUlSelectedLi = _this.parentNode.parentNode;
    }
}