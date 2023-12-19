import AOS from "aos";

const Skills = {
  async render() {
    return `
    <section id="skills" data-aos="fade-up">
    <div class="container mt-5">
      <div class="row col-11">
        <div class="offset-1">
        <h1 class="m-3">Project</h1>

        <div class="row gap-5 mt-5 mb-5">
        <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/udara.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Cek Udara</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">CEK UDARA merupakan aplikasi berbasis web yang mengusung tema <i>Lingkungan</i>, project ini merupakan tugas Capstone atau tugas akhir dari kegiatan SIB Dicoding. Project ini dibangun dalam bentuk tim yang beranggotakan 5 orang. <a href="https://cek-udara.my.id/">cek udara</a> </p>
          <a href="https://github.com/Cepu-Developer" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/restaurant.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Tempat Makan</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Tempat Makan merupakan web app katalog restoran dengan experience dan fungsionalitas yang baik ketika diakses pada perangkat mobile. Aplikasi web ini dibangun sebagai syarat kelulusan kelas Menjadi Front-End Web Developer Expert. <a href="https://main--wondrous-profiterole-8e42cc.netlify.app/">web restaurant</a></p>
          <a href="https://github.com/AriiAnn/Catalog-restaurant-pwa" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/film.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Film21</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Film21 merupakan aplikasi web dengan memanfaatkan materi, seperti JavaScript ES6, Web Component, Webpack sebagai module bundler, dan menampilkan data dari REST API. Aplikasi web ini dibangun sebagai syarat kelulusan kelas Belajar Fundamental Front-End Web Development. <a href="https://effulgent-dragon-974a5c.netlify.app/">Film21</a></p>
          <a href="https://github.com/AriiAnn/Film21" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>
      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/doorsmeer.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">DOORSMEER</h5>
          <h6 class="card-subtitle mb-3 text-muted">Universitas Malikussaleh</h6>
          <p class="card-text mb-5">Doorsmeer merupakan aplikasi web dengan memanfaatkan materi php dan menggunakan databse mysql. Aplikasi web ini dibangun untuk menyelesaikan tugas kuliah. Project ini dibangun oleh tim yang beranggotakan 3 orang</p>
          <a href="https://github.com/AriiAnn/doorsmeer/" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>
      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/manajemenspp.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">MANAJEMEN SPP</h5>
          <h6 class="card-subtitle mb-3 text-muted">Universitas Malikussaleh</h6>
          <p class="card-text mb-5">berkontribusi dalam membuat aplikasi manajemen spp yang berbasis mobile. tugas saya membuat web server dan membantu membuat api. aplikasi ini dibuat untuk menyelesaikan tugas kuliah Pemrograman Mobile 2. project ini dibangun oleh tim yang beranggotakan 4 orang.</p>
          <a href="https://github.com/AriiAnn/Webserver-manajemen-spp" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>

      </div>
      </div>
      </div>
    </section>

   
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    AOS.init();
  },
};

export default Skills;
