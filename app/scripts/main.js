$(document).ready(function() {
    var hash =  location.hash;
    console.log(hash);
    if (hash == "#about") {
        $(".mb-about").show();
        $(".mb-contact").hide();
        $(".mb-works").hide();
        $(".mb-kasaneru-row").hide();
    } else if (hash == "#works") {
        $(".mb-works").show();
        $(".mb-about").hide();
        $(".mb-contact").hide();
        $(".mb-kasaneru-row").hide();
    } else if (hash == "#contact") {
        $(".mb-contact").show();
        $(".mb-about").hide();
        $(".mb-works").hide();
        $(".mb-kasaneru-row").hide();
    } else if (hash == "#kasaneru") {
        $(".mb-contact").hide();
        $(".mb-about").hide();
        $(".mb-works").hide();
        $(".mb-kasaneru-row").show();
    } else {
        $(".mb-works").show();
    }

    $(".mba").on('click',function() {
        $(".mb-about").show();
        $(".mb-contact").hide();
        $(".mb-works").hide();
        $(".mb-kasaneru-row").hide();
    });
    $(".mbw").on('click',function() {
        $(".mb-works").show();
        $(".mb-about").hide();
        $(".mb-contact").hide();
        $(".mb-kasaneru-row").hide();
    });
    $(".mbc").on('click',function() {
        $(".mb-contact").show();
        $(".mb-about").hide();
        $(".mb-works").hide();
        $(".mb-kasaneru-row").hide();
    });
    $(".mb-kasaneru").on('click',function() {
        $(".mb-contact").hide();
        $(".mb-about").hide();
        $(".mb-works").hide();
        $(".mb-kasaneru-row").show();
    });
});

