<script>
/*
 * @description : Follow your developments and activities with algorithms
 * @author : Gokhan Katar
 * @github : https://github.com/gokhankatar
 * @x : https://twitter.com/gokhan_crypto/
 * @instagram :  https://www.instagram.com/katargokhan96/
 */

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "HomeView",
  data() {
    return {
      slides: [
        {
          src: "https://improveyourself-images.s3.eu-north-1.amazonaws.com/dashboard.png",
        },
        { src: "https://improveyourself-images.s3.eu-north-1.amazonaws.com/books.png" },
        { src: "https://improveyourself-images.s3.eu-north-1.amazonaws.com/create.png" },
        { src: "https://improveyourself-images.s3.eu-north-1.amazonaws.com/proje.png" },
      ],
      useList: [
        { title: this.$t("projects"), text: this.$t("projects-info") },
        { title: this.$t("books"), text: this.$t("books-info") },
        { title: this.$t("investments"), text: this.$t("investments-info") },
        { title: this.$t("movies"), text: this.$t("movies-info") },
        { title: this.$t("games"), text: this.$t("games-info") },
        { title: this.$t("dashboard"), text: this.$t("dashboard-info") },
      ],
      tab: null,
    };
  },
  methods: {
    goToVueJs() {
      window.open("https://vuejs.org", "_blank");
    },
    goToVuetify() {
      window.open("https://vuetifyjs.com/en/", "_blank");
    },
    goToVueRouter() {
      window.open("https://router.vuejs.org/", "_blank");
    },
    goToVuex() {
      window.open("https://vuex.vuejs.org/", "_blank");
    },
    goToAws() {
      window.open("https://aws.amazon.com/", "_blank");
    },
    goToGsap() {
      window.open("https://gsap.com/", "_blank");
    },
    goToFontAwesome() {
      window.open("https://fontawesome.com/", "_blank");
    },
    goToI18n() {
      window.open("https://vue-i18n.intlify.dev/", "_blank");
    },
  },
  mounted() {
    // gsap animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".carousel", {
      opacity: 0,
      duration: 2.5,
    });
    gsap.to(".carousel", {
      opacity: 1,
      duration: 2.5,
    });

    gsap.from("#how-to-use", {
      scrollTrigger: {
        trigger: "#how-to-use",
      },
      scale: 0.1,
      duration: 2,
      ease: "bounce",
    });

    gsap.to("#how-to-use", {
      scrollTrigger: {
        trigger: "#how-to-use",
      },
      scale: 1,
      duration: 2,
      ease: "bounce",
    });

    gsap.from(".expansion-panel", {
      scrollTrigger: {
        trigger: "#how-to-use",
        start: "top center",
      },
      scale: 0.1,
      duration: 2,
      ease: "elastic",
    });
    gsap.to(".expansion-panel", {
      scrollTrigger: {
        trigger: "#how-to-use",
        start: "top center",
      },
      scale: 1,
      duration: 2,
      ease: "elastic",
    });

    gsap.from("#why-use", {
      scrollTrigger: {
        trigger: "#why-use",
      },
      scale: 0.1,
      duration: 2,
      ease: "bounce",
    });

    gsap.to("#why-use", {
      scrollTrigger: {
        trigger: "#why-use",
      },
      scale: 1,
      duration: 2,
      ease: "bounce",
    });

    gsap.from(".why-use-card", {
      scrollTrigger: {
        trigger: "#why-use",
      },
      scale: 0.1,
      duration: 2,
      ease: "bounce",
    });

    gsap.to(".why-use-card", {
      scrollTrigger: {
        trigger: "#why-use",
      },
      scale: 1,
      duration: 2,
      ease: "bounce",
    });

    gsap.from("#header-technologies", {
      scrollTrigger: {
        trigger: "#header-technologies",
      },
      scale: 0.1,
      duration: 2.2,
      ease: "bounce",
    });

    gsap.to("#header-technologies", {
      scrollTrigger: {
        trigger: "#header-technologies",
      },
      scale: 1,
      duration: 2.2,
      ease: "bounce",
    });

    gsap.from(".technologies", {
      scrollTrigger: {
        trigger: "#header-technologies",
      },
      scale: 0.4,
      duration: 2.2,
      ease: "bounce",
    });

    gsap.to(".technologies", {
      scrollTrigger: {
        trigger: ".technologies",
        toggleActions: "restart pause reverse pause",
        scrub: true,
      },
      scale: 1,
      duration: 2.2,
      ease: "bounce",
    });

    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
      },
      opacity: 0.1,
      duration: 2.5,
      ease: "bounce",
    });

    gsap.to(".footer", {
      scrollTrigger: {
        trigger: ".footer",
      },
      opacity: 1,
      duration: 2.5,
      ease: "bounce",
    });
  },
};
</script>

<template>
  <div class="d-flex justify-center align-center ma-5" v-if="$store.state.isShowTitle">
    <v-icon icon="fas fa-home" color="teal-darken-2" size="x-large"></v-icon>
  </div>

  <v-carousel
    class="carousel"
    v-if="!$store.state.isShowTitle"
    height="800"
    progress="teal-darken-2"
    hide-delimiters
    cycle
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      class="slider-image"
      cover
      :src="slide.src"
    >
    </v-carousel-item>
  </v-carousel>

  <v-container class="pa-5" v-if="!$store.state.isShowTitle">
    <!-- * How to use start -->
    <v-row>
      <v-col>
        <h2
          id="how-to-use"
          class="text-h5 text-sm-h4 text-md-h3 font-weight-bold text-center py-5"
        >
          {{ $t("how-to-use") }}
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels class="expansion-panel" variant="accordion">
          <v-expansion-panel
            v-for="item in useList"
            :key="item"
            :text="item.text"
            :title="item.title"
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <!-- ! How to use end -->

    <!-- * Why should use it start -->
    <v-row>
      <v-col>
        <h2
          id="why-use"
          class="text-h5 text-sm-h4 text-md-h3 font-weight-bold text-center py-5"
        >
          {{ $t("why-should") }}
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="why-use-card">
        <v-card>
          <v-tabs v-model="tab" bg-color="teal-darken-2">
            <v-tab value="practical">{{ $t("practical") }}</v-tab>
            <v-tab value="open-source">{{ $t("open-source") }}</v-tab>
            <v-tab value="accesibility">{{ $t("accesibility") }}</v-tab>
            <v-tab value="freeNoMembership">{{ $t("free") }}</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="practical">
                {{ $t("practical-info") }}
              </v-tabs-window-item>

              <v-tabs-window-item value="open-source">
                {{ $t("open-source-info") }}
              </v-tabs-window-item>

              <v-tabs-window-item value="accesibility">
                {{ $t("accesibility-info") }}
              </v-tabs-window-item>
              <v-tabs-window-item value="freeNoMembership">
                {{ $t("free-info") }}
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- ! Why should use it end -->

    <!-- * Technologies start -->
    <v-row>
      <v-col>
        <h2
          id="header-technologies"
          class="text-h5 text-sm-h4 text-md-h3 font-weight-bold text-center py-5"
        >
          {{ $t("technologies") }}
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="technologies">
        <div class="chips d-flex flex-wrap justify-center align-center">
          <v-chip
            @click="goToVueJs"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >VueJs</v-chip
          >
          <v-chip
            @click="goToVuetify"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >Vuetify</v-chip
          >
          <v-chip
            @click="goToVueRouter"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >Vue Router</v-chip
          >
          <v-chip
            @click="goToVuex"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >Vuex</v-chip
          >
          <v-chip
            @click="goToAws"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >Amazon Web Services</v-chip
          >
          <v-chip
            @click="goToGsap"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >Gsap</v-chip
          >
          <v-chip
            @click="goToFontAwesome"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >Font Awesome</v-chip
          >
          <v-chip
            @click="goToI18n"
            class="chip cursor-pointer"
            size="x-large"
            variant="outlined"
            >Vue i18n</v-chip
          >
        </div>
      </v-col>
    </v-row>
    <!-- ! Technologies end -->

    <v-footer class="footer d-flex flex-column mt-5 py-5">
      <div
        id="footer-container"
        class="d-flex flex-column flex-md-row w-100 justify-between align-center px-2 py-5"
      >
        <strong>{{ $t("footer-msg") }}</strong>

        <v-spacer></v-spacer>

        <ul class="socials d-flex flex-wrap justify-center align-center">
          <a
            href="https://twitter.com/gokhan_crypto"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fa-brands fa-x-twitter" id="social-icon"></i>
          </a>
          <a href="https://discord.gg/QNh6y9vv" target="_blank" aria-label="Discord">
            <i class="fa-brands fa-discord" id="social-icon"></i>
          </a>
          <a href="https://github.com/gokhankatar" target="_blank" aria-label="Github">
            <i class="fa-brands fa-github" id="social-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/katargokhan96/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fa-brands fa-instagram" id="social-icon"></i>
          </a>
        </ul>
      </div>

      <div class="px-4 py-2 bg-teal text-center w-100">
        {{ new Date().getFullYear() }} — <strong>GK Software</strong>
      </div>
    </v-footer>
  </v-container>
</template>

<style scoped>
.slider-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-text {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

.chips {
  gap: 1rem;
}

.chip:hover {
  border-color: #00796b;
  background: #00796b;
  color: #fff;
}

#footer-container {
  gap: 1rem;
}

.socials {
  display: flex;
  gap: 2rem;
}

#social-icon {
  border: 1px solid #00796b;
  border-radius: 50%;
  color: #00796b;
  cursor: pointer;
  padding: 1rem;
  font-size: 1.5rem;
  transition: all 0.2s ease;
}

#social-icon:hover {
  background-color: #00796b;
  color: #fff;
}
</style>
