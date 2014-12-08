//SIDE MENU SCRIPTS
 $(document).ready(function () {
            $('.menu-close-icon').click(function (e) {
                e.preventDefault();
                $('#side-menu').animate({ left: '-250px', top: '-1000px' });
               
            });
            $('.menu-open-icon').click(function (e) {
                e.preventDefault();
                $('#side-menu').animate({ left: '0px', top: '0px' });
               
            });
 });
