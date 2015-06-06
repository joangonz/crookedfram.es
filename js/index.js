
        $(document).ready(function () {
            
            $('.portfolioItem.medium').hover(function () {
                $('html').addClass('medium');
                
            }, function () {
                $('html').removeClass('medium');
                
            });
            
            $('.portfolioItem.dribbble').hover(function () {
                $('html').addClass('dribbble');
               
            }, function () {
                $('html').removeClass('dribbble');
                
            });
            
            $('.portfolioItem.twitter').hover(function () {
                $('html').addClass('twitter');
            }, function () {
                $('html').removeClass('twitter');
            });
            
            $('.portfolioItem.instagram').hover(function () {
                $('html').addClass('instagram');
            }, function () {
                $('html').removeClass('instagram');
            });
            
            
        });
