const app = Vue.createApp({
  data() {
    return {
      frameworks: [
        { name: "Vue", selected: true },
        { name: "React", selected: false },
        { name: "Angular", selected: false },
        { name: "Svelte", selected: false },
      ],
    };
  },
  methods: {
    selectTag(f) {
      f.selected = !f.selected;
    },
  },
  computed: {
    selectedTags() {
      return (s = this.frameworks.filter((i) => i.selected));
    },
  },
});

app.mount("#app");
