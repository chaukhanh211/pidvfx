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
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/ncmK-LsrRJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/WAVVE.png"
        },
        {
          name: "Tiger remix",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/_8-XPTglbUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tiger.jpg"
        },
        {
          name: "Huyền Thoại RUNETERRA",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/EsLCWt0A8ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/Huyen-thoai-RUNETERRA.jpg"
        },
        {
          name: "NƯỚC TĂNG LỰC NUMBER1 CHANH & DÂU",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/qQi_zn_zOJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/number1.jpg"
        },
        {
          name: "Tuyết Ưng VNG",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/iAz5VOqRfNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tuyetung.jpg"
        },
        {
          name: "TVC KR",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/YGcgghFRpoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tvc-kr.jpg"
        },
        {
          name: "showreel 2019 - 2020",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/4iM9tVGSyrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/showreel.jpg"
        },
        {
          name: "Rigging Training",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/sK81mj_tFLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/Riggingtraining.jpg"
        },
        {
          name: "Animation Training",
          path: '<iframe class= "responsive-iframe "  src="https://www.youtube.com/embed/ZZntlpXbLvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/animationtraining.jpg"
        },
        {
          name: "Showreel VFX 2018",
          path: '<iframe  src="https://www.youtube.com/embed/cUQW2Kl6DrY" class= "responsive-iframe " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/showreel2018.jpg"
        },
        {
          name: "[한화그룹 디지털 광고] 지속가능한 친환경기술-탄소 줄이는 기술",
          path: '<iframe  src="https://www.youtube.com/embed/sYlwC4OHymU" title="YouTube video player" class= "responsive-iframe " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/mq1.jpg"
        },
        
    ],
    render: function() {
        const htmls = this.videos.map(video => {
            return `
            <li class="thumbnail-item p-2">
              <img  class=" border-5 p-0 h-100" alt='${video.path}'  
             src="${video.image}">
            </li>
            `
        })

      //   const videoColumn = this.videos.map(video => {
      //     return `
      //     <div data-aos="fade-right" class="col-md-6 p-2 z-2">
      //     ${video.path}
      //     </div>
      //     <div data-aos="fade-left" class="col-md-6 p-2" >
      //     ${video.path}
      //     </div>
      //     `
      // })
        
        $('#thumbnail_slider').html(htmls)
        //$('#video-column').html(videoColumn)
    },
    handleEvents: function() {
        $('.thumbnail-item').click(function() {
            var value = $(this).find('img').attr('alt');
            $('#popup').css('display','block'); 
            $('.popup').html(value); 
            }

        );
        $('#popup').click(function() {
            $('#popup iframe').attr('src', $('iframe').attr('src'));
            $('#popup').css('display','none');
        });

        $('img.w-100').click(function() {
          var value = $(this).attr('alt');
          $('#popup').css('display','block'); 
          $('.popup').html(value); 
        })

        $('.play-button').click(function() {
          var value = $(this).parent().find('img').attr('alt');
          $('#popup').css('display','block'); 
          $('.popup').html(value); 
        })
    },

    start: function() {
        //Render playlist
        this.render()
        //Xử lý sự kiện
        this.handleEvents()
    } 

}
app.start()

