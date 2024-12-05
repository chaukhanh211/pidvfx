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
          name: "Showreel collection",
          path: '<iframe src="https://www.youtube.com/embed/YvPtT6NkD9s?si=yrnKrQE_Ri0ao8YA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          image: "imgThumb/showreel_collection2.png"
        },
        {
          name: "WAVVE 24시",
          path: '<iframe  src="https://www.youtube.com/embed/ncmK-LsrRJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/WAVVE.PNG"
        },
        {
          name: "Tiger remix",
          path: '<iframe  src="https://www.youtube.com/embed/_8-XPTglbUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tiger.jpg"
        },
        {
          name: "Huyền Thoại RUNETERRA",
          path: '<iframe  src="https://www.youtube.com/embed/EsLCWt0A8ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/Huyen-thoai-RUNETERRA.jpg"
        },
        {
          name: "NƯỚC TĂNG LỰC NUMBER1 CHANH & DÂU",
          path: '<iframe  src="https://www.youtube.com/embed/qQi_zn_zOJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/number1.jpg"
        },
        {
          name: "Tuyết Ưng VNG",
          path: '<iframe  src="https://www.youtube.com/embed/iAz5VOqRfNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tuyetung.jpg"
        },
        {
          name: "TVC KR",
          path: '<iframe  src="https://www.youtube.com/embed/YGcgghFRpoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/tvc-kr.jpg"
        },
        {
          name: "showreel 2019 - 2020",
          path: '<iframe  src="https://www.youtube.com/embed/4iM9tVGSyrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/showreel.jpg"
        },
        {
          name: "Rigging Training",
          path: '<iframe  src="https://www.youtube.com/embed/sK81mj_tFLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/Riggingtraining.jpg"
        },
        {
          name: "Animation Training",
          path: '<iframe  src="https://www.youtube.com/embed/ZZntlpXbLvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/animationtraining.jpg"
        },
        {
          name: "Showreel VFX 2018",
          path: '<iframe  src="https://www.youtube.com/embed/cUQW2Kl6DrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/showreel2018.jpg"
        },
        {
          name: "[한화그룹 디지털 광고] 지속가능한 친환경기술-탄소 줄이는 기술",
          path: '<iframe  src="https://www.youtube.com/embed/sYlwC4OHymU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "imgThumb/mq1.jpg"
        }
    ],
    effect: [
      "fade-left",
      "fade-right",
      "fade-up",
      "fade-down",
      "flip-left",
      "flip-right",
      "flip-up",
      "flip-down",
      "zoom-in",
      "zoom-in-up",
      "zoom-out-up",
      "zoom-in-left",
      "fade-left"
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
        

        // var videoColumn = [];
        // var count = 0;
        // this.videos.push(this.videos[0]);
        // for (i = 0; i < this.videos.length/2; i++)
        // {
        //       videoColumn.push( `<div class="d-flex justify-content-around">
        //       <div data-aos="${this.effect[count]}" class="col-md-6 p-2 z-2 " >
        //           <img alt='${this.videos[count].path}' src='${this.videos[count].image}' class="w-100 border-5">
        //           <div class="play-button"></div>
        //       </div>
        //       <div data-aos="${this.effect[count + 1]}" class="col-md-6 p-2 z-2 " >
        //           <img alt='${this.videos[count + 1].path}' src='${this.videos[count + 1].image}' class="w-100 border-5">
        //           <div class="play-button"></div>
        //       </div>
        //     </div>`)
        //     count = count + 2;
        // }
       
        $('#thumbnail_slider').html(htmls)
        // $('#video-column').html(videoColumn)
    },
    handleEvents: function() {
        $('.thumbnail-item').click(function() {
            var value = $(this).find('img').attr('alt');
            $('#popup').css('display','block'); 
            $('.popup').html(value); 
            }
        );
        // $('#zalo').click(function() {
        //   //var value = $(this).find('img').attr('alt');
        //   $('#popup').css('display','block'); 
        //   $('.popup').html("<img src='../imgThumb/qr-zalo.png'>"); 
        //   }
      //);
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

