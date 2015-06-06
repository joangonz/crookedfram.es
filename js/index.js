
        $(document).ready(function () {
            
            $('.portfolioItem.medium').hover(function () {
                $('html').addClass('medium');
                $('.siteHeader-description').addClass('active');
                $('.portfolioItem').addClass('active');
                $('.logo').addClass('active');
            }, function () {
                $('html').removeClass('medium');
                $('.siteHeader-description').removeClass('active');
                $('.portfolioItem').removeClass('active');
                $('.logo').removeClass('active');
            });
            


            $('.portfolioItem.dribbble').hover(function () {
                $('html').addClass('dribbble');
                $('.siteHeader-description').addClass('active');
                $('.portfolioItem').addClass('active');
                $('.logo').addClass('active');
            }, function () {
                $('html').removeClass('dribbble');
                $('.siteHeader-description').removeClass('active');
                $('.portfolioItem').removeClass('active');
                $('.logo').removeClass('active');
            });
            


            $('.portfolioItem.twitter').hover(function () {
                $('html').addClass('twitter');
                $('.siteHeader-description').addClass('active');
                $('.portfolioItem').addClass('active');
                $('.logo').addClass('active');
            }, function () {
                $('html').removeClass('twitter');
                $('.siteHeader-description').removeClass('active');
                $('.portfolioItem').removeClass('active');
                $('.logo').removeClass('active');
            });
            


            $('.portfolioItem.instagram').hover(function () {
                $('html').addClass('instagram');
                $('.siteHeader-description').addClass('active');
                $('.portfolioItem').addClass('active');
                $('.logo').addClass('active');
            }, function () {
                $('html').removeClass('instagram');
                $('.siteHeader-description').removeClass('active');
                $('.portfolioItem').removeClass('active');
                $('.logo').removeClass('active');
            });
            
            
        });
