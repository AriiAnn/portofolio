import Typed from "typed.js";
import AOS from "aos";

const About = {
  async render() {
    return `
    <!-- About -->
    <section id="about" data-aos="zoom-in-down">
      <div class="container">
        <div class="row me-5">
          <div class="col-lg-6 offset-1 profil my-5">
          <h1>About Me</h1>
          <h4 class="mt-3 mb-3" style="font-size:32px;"><span id="element"></span></h4>
<p>Saya adalah seorang mahasiswa Sistem Informasi semester 5 di Universitas Malikussaleh yang bersemangat dalam menjelajahi dunia IT, khususnya dalam bidang pengembangan web. Saat ini, saya tengah aktif mengikuti program Dicoding 2023 batch 5 dalam peran sebagai pengembang front end dan backend web, sambil juga berpartisipasi dalam program bootcamp Full Stack Developer batch 9. Perjalanan ini telah memberikan pemahaman mendalam tentang pengembangan website dan memperkuat fondasi pengetahuan saya dalam ranah teknologi. Saya percaya bahwa keberanian untuk terus belajar adalah kunci untuk mencapai kesuksesan di masa depan, dan saya sangat bersemangat untuk terus mengeksplorasi dan menyumbangkan ide-ide inovatif dalam dunia teknologi.</>            
          </div>
          <div class="col-lg-4 d-flex justify-content-center">
            <img src="./profilari.jpeg" class="rounded-circle justify-content-center img-fluid" style="height:300px;">
          </div>
          </div>
          <div class="offset-1 mb-5">
            <h1>Resume</h1>
            <div>you can read my CV <a href="./cv/cv.pdf">here.</a>
          </div>
      </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    AOS.init();

    const typed = new Typed("#element", {
      strings: ["Muhammad Ariansyah"],
      typeSpeed: 80,
    });
  },
};

export default About;
