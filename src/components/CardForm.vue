<template>
  <form @submit.prevent>
    <my-input
      placeholder="enter your name"
      v-model:value="card.title"
      @input="card.title = $event.target.value"
      class="input"
    />
    <my-input
      placeholder="enter your description"
      v-model:value="card.body"
      @input="card.body = $event.target.value"
      class="input"
    />
    <my-button class="btn" @click="createCard"> Create Card</my-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ICard } from "@/models";

export default defineComponent({
  data() {
    return {
      card: {
        title: "",
        body: "",
      } as ICard,
    };
  },
  methods: {
    createCard() {
      this.card.id = Date.now();
      this.$emit("create", this.card);
      this.card = {
        title: "",
        body: "",
      };
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 20px;
}
</style>
