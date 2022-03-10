<template>
  <div class="container">
    <div>
      <h1>Add New Character</h1>
      <br />
      <input
        type="text"
        v-model="addCharacters.name"
        placeholder="Enter Name"
      />
      <br />
      <input
        type="text"
        v-model="addCharacters.height"
        placeholder="Enter Height"
      />
      <br />
      <input
        type="text"
        v-model="addCharacters.mass"
        placeholder="Enter Weight"
      />
      <br />
      <input
        type="text"
        v-model="addCharacters.gender"
        placeholder="Enter Gender"
      />
      <br />
      <button
        @click="addCharactersToTable"
        class="btn btn-warning"
        :disabled="!isDisabled"
      >
        Add Character
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewForm",
  data() {
    return {
      addCharacters: {
        name: null,
        height: null,
        mass: null,
        gender: null,
      },
    };
  },
  methods: {
    addCharactersToTable() {
      this.$emit("addCharactersToTable", this.addCharacters);
    },
  },
  computed: {
    isDisabled() {
      return (
        this.addCharacters.name !== null &&
        this.addCharacters.height !== null &&
        this.addCharacters.mass !== null &&
        this.addCharacters.gender !== null
      );
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

input {
  margin-bottom: 20px;
  width: 20%;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
}
</style>
