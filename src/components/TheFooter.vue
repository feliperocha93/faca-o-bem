<template>
  <footer>
    <v-container class="py-4 px-2 px-md-0">
      <ul>
        <li>
          Icons made by
          <a
            alt="Autor dos ícones do site"
            class="link"
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            title="Freepik"
            >Freepik</a
          >
          from
          <a
            alt="Flaticon"
            class="link"
            href="https://www.flaticon.com/"
            target="_blank"
            title="Flaticon"
          >
            www.flaticon.com</a
          >
        </li>

        <li>
          Photo by
          <a
            alt="Unsplash do autor da Imagem da Home"
            class="link"
            href="https://unsplash.com/@judebeck?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            title="Jude Beck"
            >Jude Beck</a
          >
          on
          <a
            alt="Unsplash da Imagem da Home"
            class="link"
            href="https://unsplash.com/s/photos/love?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            title="Unsplash"
            >Unsplash</a
          >
        </li>

        <li>
          Developed with
          <IconBase
            width="22"
            height="14"
            iconName="CaridadeCoracaoMini"
            fill="#f5ebef"
          >
            <CaridadeCoracaoMini />
          </IconBase>
          by
          <a
            alt="Linkedin do desenvolvdir"
            class="link"
            href="https://www.linkedin.com/in/felipe-rocha-67066035/"
            target="_blank"
            title="Linkedin do dev"
            >Felipe Rocha</a
          >
        </li>
      </ul>
    </v-container>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import IconBase from "@/components/IconBase.vue";
import CaridadeCoracaoMini from "@/components/icons/CaridadeCoracaoMini.vue";

export default Vue.extend({
  name: "TheFooter",
  components: {
    IconBase,
    CaridadeCoracaoMini
  }
});
</script>

<style lang="scss" scoped>
footer {
  background: $base-5;
  font-size: 10px;
  font-weight: 300;
  color: $cinza-claro-1;
}

li:not(:last-child) {
  margin-bottom: 8px;
}

svg {
  fill: $cinza-claro-1;
}
</style> 
