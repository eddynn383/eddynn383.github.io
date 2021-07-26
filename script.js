const NAV_TOGGLE_BTN = '#navToggle';
const NAV_CTN = '.layout';
const NAV_TOGGLE_CLS = 'js--open';

const NAV = 'nav';
const NAV_LINK = '.has-children > a';
const NAV_PARENT_LINK = 'li';
const NAV_ACTIVE_CLS = 'js--active';


function toggleNav($elem, toggleBtn, toggleCtn, toggleClass) {
    $elem.on('click', toggleBtn, function(e) {
        if(!$(this).closest(toggleCtn).hasClass(toggleClass)) {
            e.preventDefault();
            $(this).closest(toggleCtn).addClass(toggleClass).siblings().removeClass(toggleClass)
        } else {
            $(this).closest(toggleCtn).removeClass(toggleClass)
        }
    })
}

toggleNav($(NAV_TOGGLE_BTN), null, NAV_CTN, NAV_TOGGLE_CLS);
toggleNav($(NAV), NAV_LINK, NAV_PARENT_LINK, NAV_ACTIVE_CLS);

$('select').select2({
    minimumResultsForSearch: Infinity
});

$('.pane_feedback-items').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})