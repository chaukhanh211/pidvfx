$(document).ready(
    function(){
        $('#thumbnail_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // asNavFor: '#slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
        });
    }
);

const app = {
    videos : [
        {
          name: "WAVVE 24시",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/ncmK-LsrRJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/WAVVE.jpg"
        },
        {
          name: "Tiger remix",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/_8-XPTglbUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/tiger.jpg"
        },
        {
          name: "Huyền Thoại RUNETERRA",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/EsLCWt0A8ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/Huyen-thoai-RUNETERRA.jpg"
        },
        {
          name: "NƯỚC TĂNG LỰC NUMBER1 CHANH & DÂU",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/qQi_zn_zOJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/number1.jpg"
        },
        {
          name: "Tuyết Ưng VNG",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/iAz5VOqRfNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/tuyetung.jpg"
        },
        {
          name: "TVC KR",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/YGcgghFRpoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/tvc-kr.jpg"
        },
        {
          name: "showreel 2019 - 2020",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/4iM9tVGSyrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/showreel.jpg"
        },
        {
          name: "Rigging Training",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/sK81mj_tFLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/Riggingtraining.jpg"
        },
        {
          name: "Animation Training",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/ZZntlpXbLvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/animationtraining.jpg"
        },
        {
          name: "Showreel VFX 2018",
          path: '<iframe width="830" height="500" src="https://www.youtube.com/embed/TzPhvU5cySs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          image: "/Web/imgThumb/showreel2018.jpg"
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

