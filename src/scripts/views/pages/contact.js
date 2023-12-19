import AOS from "aos";

const Skills = {
  async render() {
    return `
      <section id="contact" data-aos="zoom-in-down">
        <div class="container">
          <div class="offset-1 me-3">
            <h1 class="mb-3 mt-5">Contact</h1>
            <p>
              Please don’t hesitate to get in touch with me by following my
              social media below:
            </p>
            <ul>
              <li>
                <div>
                  GitHub: <a href="https://github.com/AriiAnn">AriiAnn</a>
                </div>
              </li>
              <li>
                <div>
                  Instagram: <a href="https://www.instagram.com/ariansyah1111/">ariansyah1111</a>
                </div>
              </li>
              <li>
                <div>
                  LinkedIn: <a href="https://www.linkedin.com/in/m-ariansyah">Muhammad Ariansyah</a>
                </div>
              </li>
              <li>
              <div>
                WhatsApp: <a href="https://wa.me/6285156820186">Muhammad Ariansyah</a>
              </div>
            </li>
            </ul>
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
