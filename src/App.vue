<template>
  <div id="app">
    <canvas id="matrix-rain"></canvas>
    <section class="hero is-fullheight">
      <img src="@/assets/images/background.jpg" alt="Background Image" class="hero-background">
      <div class="hero-body" data-aos="fade-up">
        <div class="container has-text-centered">
          <figure class="image is-128x128 is-inline-block" data-aos="zoom-in">
            <img class="is-rounded" src="@/assets/images/profile-cropped.jpg" alt="Profile Picture">
          </figure>
          <h1 class="title" data-aos="fade-right">
            Justin Ed Pierre Tecson
          </h1>
          <h2 class="subtitle" data-aos="fade-left">
            Full Stack Developer
          </h2>
        </div>
      </div>
    </section>

    <section class="section" data-aos="fade-up">
      <div class="container">
        <h3 class="title has-text-centered">About Me</h3>
        <div class="content has-text-centered">
          <p>
            Passionate developer with experience in building web applications using modern technologies.
          </p>
        </div>
      </div>
    </section>

    <section class="section" data-aos="fade-up">
      <div class="container">
        <h3 class="title has-text-centered">Projects</h3>
        <div class="columns is-multiline">
          <div class="column is-full-mobile is-one-third-tablet" v-for="project in projects" :key="project.id">
            <div class="card">
              <div class="card-content">
                <p class="title">{{ project.name }}</p>
                <p class="subtitle">{{ project.description }}</p>
              </div>
              <footer class="card-footer">
                <a :href="project.link" class="card-footer-item">View Project</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-aos="fade-up">
      <div class="container">
        <h3 class="title has-text-centered">Skills</h3>
        <div class="columns is-multiline">
          <div class="column is-full-mobile is-one-third-tablet" v-for="skill in skills" :key="skill.name">
            <div class="card">
              <div class="card-content">
                <div class="columns is-vcentered">
                  <div class="column is-narrow">
                    <i :class="skill.icon" class="icon is-large" style="font-size: 2.5em;"></i>
                  </div>
                  <div class="column">
                    <p class="title">{{ skill.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-aos="fade-up">
      <div class="container">
        <h3 class="title has-text-centered">Current Workplace</h3>
        <div class="columns is-multiline">
          <div class="column is-full-mobile is-one-third-tablet" v-for="workplace in workplaceList" :key="workplace.id">
            <div class="card">
              <div class="card-content">
                <p class="title">{{ workplace.name }}</p>
                <p class="subtitle">{{ workplace.address }}</p>
                <p>{{ workplace.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-aos="fade-up">
      <div class="container">
        <h3 class="title has-text-centered">Education</h3>
        <div class="columns is-multiline">
          <div class="column is-full-mobile is-one-third-tablet" v-for="education in educationList" :key="education.id">
            <div class="card">
              <div class="card-content">
                <p class="title">{{ education.degree }}</p>
                <p class="subtitle">{{ education.institution }}</p>
                <p>{{ education.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Developer Portfolio</strong> by Justin Ed Pierre Tecson. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          <br>
          <a href="https://github.com/setsunafjustin00208">GitHub Profile</a>
        </p>
      </div>
    </footer>
    <button class="dark-mode-toggle" @click="toggleDarkMode">🌓</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: 'PITA', description: 'Code blocks application teaching for students and grading', link: 'https://github.com/setsunafjustin00208/pita' },
        { id: 2, name: 'Traffic Light Simulator', description: 'A traffic light simulator using PHP and Arduino', link: 'https://github.com/setsunafjustin00208/trafficlightsimulator-12-01-20' },
        { id: 3, name: 'Python Currency Converter', description: 'A small Windows Program written in Python', link: 'https://github.com/setsunafjustin00208/python-currency-converter' },
      ],
      educationList: [
        { id: 5, degree: 'Bachelor of Science in Computer Science', institution: 'Holy Cross College', year: '2018 - 2022' },
        { id: 4, degree: 'Senior High School', institution: 'Holy Cross College', year: '2016 - 2018' },
        { id: 3, degree: 'Junior High School', institution: 'Paralaya High School', year: '2012 - 2016' },
        { id: 2, degree: 'Elementary', institution: 'Candaba Elementary School', year: '2006 - 2012' },
        { id: 1, degree: 'Kindergarten', institution: 'Candaba Ecumenical Learning Center', year: '2004 - 2006' },
      ],
      workplaceList: [
        { id: 1, name: 'GMA New Media Inc.', address: '12F GMA Network Center, EDSA cor Timog Avenue, Quezon City, PH 1101', year: '2022 - Current' }
      ],
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS (Bulma, Bootstrap)', icon: 'fab fa-css3-alt' },
        { name: 'JS', icon: 'fab fa-js' },
        { name: 'PHP (Codeigniter 3/4, Laravel)', icon: 'fab fa-php' },
        { name: 'MYSQL', icon: 'fas fa-database' },
        { name: 'C++ (Arduino)', icon: 'fab fa-cuttlefish' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'C# (Unity)', icon: 'fas fa-code' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'VB.Net', icon: 'fas fa-code' }
      ]
    }
  },
  methods: {
    toggleDarkMode() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
    }
  },
  mounted() {
    this.startMatrixRain();
  },
  methods: {
    toggleDarkMode() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
    },
    startMatrixRain() {
      const canvas = document.getElementById('matrix-rain');
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const fontSize = 16;
      const columns = canvas.width / fontSize;

      const drops = Array.from({ length: columns }, () => 1);

      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }

      setInterval(draw, 33);
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero {
  position: relative;
}

.image.is-128x128 {
  margin: 0 auto;
}

@media (max-width: 768px) {
  .image.is-128x128 {
    margin: 0 auto;
  }
  .hero-body {
    padding: 2rem 1rem;
  }
  .title, .subtitle {
    font-size: 1.5rem;
  }
  .card-content {
    padding: 1rem;
  }
}

.dark-mode-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
}

#matrix-rain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: black;
}
</style>