function r(link) {
    var win = window.open(link, '_blank');
    if (win) {
        win.focus();
    } else {
        rc(link);
    }
    }
    function rc(link) {
    window.location=link;
    }
    