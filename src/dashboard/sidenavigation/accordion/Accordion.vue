<template>
  <div>
    <div
      role="button"
      class="flex justify-start my-2 py-6 px-4 text-black text-sm"
      @click="toggle"
    >
      <slot name="item" />
      <span class="ml-auto">
        <span v-if="isActive">
          <angle-down-icon />
        </span>
        <span v-else>
          <angle-right-icon />
        </span>
      </span>
    </div>
    <div
      id="accordion"
      ref="myText"
      :style="[isActive ? { height: computedHeight } : {}]"
      class="
        -mt-5
        overflow-hidden
        text-gray-600
        transition-height
        ease
        duration-300
      "
    >
      <slot name="panel" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AngleDownIcon from './AngleDownIcon.vue';
import AngleRightIcon from './AngleRightIcon.vue';

export default {
  name: 'Accordion',
  components: { AngleRightIcon, AngleDownIcon },
  setup() {
    const myText = ref();
    const isActive = ref(false);
    const computedHeight = ref('0');

    const toggle = () => {
      isActive.value = !isActive.value;
    };

    const initHeight = () => {
      myText.value.style.height = 'auto';
      computedHeight.value = getComputedStyle(myText.value).height;
      myText.value.style.height = '0';
    };

    onMounted(initHeight);

    return { toggle, computedHeight, myText, isActive };
  },
};
</script>

<style scoped>
#accordion {
  height: 0;
  overflow: hidden;
  transition: 300ms;
}
</style>
