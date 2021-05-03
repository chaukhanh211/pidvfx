$(document).ready(
    function(){
        $('#thumbnail_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 736,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
        });
    }
);

const app = {
    videos : [
        {
          name: "WAVVE 24시",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/ncmK-LsrRJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/WAVVE.jpg"
        },
        {
          name: "Tiger remix",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/_8-XPTglbUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tiger.jpg"
        },
        {
          name: "Huyền Thoại RUNETERRA",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/EsLCWt0A8ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/Huyen-thoai-RUNETERRA.jpg"
        },
        {
          name: "NƯỚC TĂNG LỰC NUMBER1 CHANH & DÂU",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/qQi_zn_zOJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/number1.jpg"
        },
        {
          name: "Tuyết Ưng VNG",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/iAz5VOqRfNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tuyetung.jpg"
        },
        {
          name: "TVC KR",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/YGcgghFRpoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tvc-kr.jpg"
        },
        {
          name: "showreel 2019 - 2020",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/4iM9tVGSyrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/showreel.jpg"
        },
        {
          name: "Rigging Training",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/sK81mj_tFLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/Riggingtraining.jpg"
        },
        {
          name: "Animation Training",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/ZZntlpXbLvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/animationtraining.jpg"
        },
        {
          name: "Showreel VFX 2018",
          path: '<iframe class= "responsive-iframe" width="830" height="500" src="https://www.youtube.com/embed/TzPhvU5cySs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/showreel2018.jpg"
        },
        
    ],
    render: function() {
        const htmls = this.videos.map(video => {
            return `
            <li class="thumbnail-item">
              <img alt='${video.path}'  
              data-lazy="${video.image}">
            </li>
            `
        })
        $('#thumbnail_slider').html(htmls)
    },
    handleEvents: function() {
        $('.thumbnail-item').click(function() {

            var value = $(this).find('img').attr('alt');
            $('#popup').css('display','block'); 
            $('.popup').html(value); 
            }

        );
        $('#popup').click(function() {
            $('iframe').attr('src', $('iframe').attr('src'));
            $('#popup').css('display','none');
        });
    },

    start: function() {
        //Render playlist
        this.render()
        //Xử lý sự kiện
        this.handleEvents()
    } 

}
app.start()

