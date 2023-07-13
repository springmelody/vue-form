<template>
  <div class="px-10 py-8">
    <h1 class="text-5xl mb-5">Vue simple form</h1>
    <form @submit.prevent="sendForm" class="flex flex-col">
      <base-input v-model="event.name" label="Name" type="text" class="mb-5" />
      <base-input
        v-model="event.surname"
        label="Surname"
        type="text"
        class="mb-5"
      />

      <base-input
        v-model="event.location"
        label="Location"
        type="text"
        class="mb-5"
      />
      <base-select
        label="Select a language"
        v-model="event.language"
        :options="languages"
      />

      <h2>you have a pet project?</h2>
      <base-radio-group
        v-model="event.petproject"
        name="petproject"
        :options="petOptions"
      />

      <h3>Extras</h3>
      <div class="flex gap-5 mb-5">
        <base-checkbox label="Sport" v-model="event.hobby.sport" />
        <base-checkbox label="Music" v-model="event.hobby.music" />
        <base-checkbox label="Lisp" v-model="event.hobby.lisp" />
        <base-checkbox label="Other" v-model="event.hobby.other" />
      </div>
      <button class="w-1/12 bg-green-900" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: ["javascript", "clojure", "erlang", "elixir"],
      event: {
        language: "",
        name: "",
        surname: "",
        description: "",
        location: "",
        petproject: 1,
        hobby: {
          sport: false,
          music: false,
          lisp: false,
          other: false,
        },
      },
      petOptions: [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
      ],
    };
  },
  methods: {
    sendForm() {
      alert(JSON.stringify(this.event, null, 2));
    },
  },
};
</script>
