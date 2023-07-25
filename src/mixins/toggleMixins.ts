export default {
  props: {
    show: {
      type: Boolean as () => boolean,
      default: false,
    },
  },
  methods: {
    hideDialog(this: {
      $emit: (event: "update:show", value: boolean) => void;
    }) {
      this.$emit("update:show", false);
    },
  },
};
