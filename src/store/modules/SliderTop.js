export default {
    namespaced: true,
    state : () => ({
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
    }),
    getters: {
        sliders : state => state.sliders,
    }
}