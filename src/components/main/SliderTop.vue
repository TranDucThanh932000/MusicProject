<template>
  <v-row >
    <v-sheet
        class="slider-top"
        width="calc(100%-15px)"
        style="background-color:#170f23;margin: 0px 12px;"
    >
        <v-slide-group
        v-model="model"
        show-arrows
        >
            <v-slide-item
                v-for="(slider, index) in sliders"
                :key="index"
            >
                <v-card
                class="card-img"
                style="border-radius: 10px;"
                >
                    <v-img :src="slider.img" style="object-fit:cover;border-radius: 8px;width: 377px;"></v-img>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          img: 'https://dienmaythudo.vn/wp-content/uploads/2020/07/tivi-sony-android-4k-ultra-hd-49-inch-49x8050h-1.gif',
          chanel: "123",
        },
        {
          img: 'https://www.saigonhd.com/upload/tinymce/San%20Pham/VIEWSONIC/VIEWSONIC%20X100%204K/VIEWSONIC-X100-4K_1.jpg',
          detail: "123",
        },
        {
          img: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-nen-4k-tuyet-dep-cho-may-tinh.jpg',
          detail: "123",
        },
        {
          img: 'http://saohaivuong.com/wp-content/uploads/2021/05/maxresdefault-1024x576-1.jpg',
          detail: "123",
        },
        {
          img: 'https://cdn.tgdd.vn/Files/2014/12/24/592178/do-phan-giai-man-hinh-dien-thoai-la-gi_800x450-600x400.jpg',
          detail: "123",
        },
        {
          img: 'https://dienmaydatviet.com/wp-content/uploads/2020/11/tivi-samsung-tizen-os-4k-ultra-hd-43-inch-43tu6900-4.jpg',
          detail: "123",
        },
      ],
      model: 0,
    };
  },
};
</script>

<style scope>
  .v-responsive__sizer{
    height: 200px;
    padding-bottom: 0px !important;
  }
  .mdi-chevron-left{
    font-size: 60px !important;
    color: black !important;
  }
  .mdi-chevron-right{
    font-size: 60px !important;
    color: black !important;
  }
  .slider-top .v-slide-group__prev{
    position: absolute;
    top: 37%;
    left: 0px;
    min-width: 0px !important;
    z-index: 10000;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    visibility: hidden;
  }
  .slider-top .v-slide-group__next{
    min-width: 0px !important;
    position: absolute;
    top: 37%;
    right: -0.1px;
    z-index: 10000;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    visibility: hidden;
  }
  .slider-top{
    width: calc(100% - 40px);
  }
  .slider-top:hover .v-slide-group__prev{
    visibility: visible;
  }
  .slider-top:hover .v-slide-group__next{
    visibility: visible;
  }
  .card-img{
    margin : 0px 15px;
  }
  .card-img:nth-child(4n){
    margin-left: 0px;
  }
  .card-img:first-child{
    margin-left: 0px;
  }
  .card-img:nth-child(3n){
    margin-right: 0px;
  }
  .card-img:last-child{
    margin-right: 0px;
  }

</style>