<template>
  <aside
    class="
      scrollbar
      bg-white
      shadow
      h-screen
      overflow-y-auto
      top-0
      lg:block lg:relative lg:w-64 lg:z-auto
    "
    :class="[
      style[mobilePosition],
      open ? 'absolute w-8/12 z-40 sm:w-5/12' : 'pb-32 lg:pb-6',
    ]"
  >
    <div class="pb-32 lg:pb-6">
      <sidenav-header />
      <ul class="mt-6 md:pl-6">
        <li>
          <sidenav-items />
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { inject } from 'vue';
import SidenavItems from './Items.vue';
import SidenavHeader from './Header.vue';

export default {
  name: 'SideNavigation',
  components: { SidenavItems, SidenavHeader },
  props: {
    mobilePosition: {
      type: String,
      default: '',
    },
  },
  setup() {
    const open = inject('open');

    const style = {
      left: 'left-0',
      right: 'right-0',
    };

    return { open, style };
  },
};
</script>

<style scoped></style>
<style>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* hide sidenav scrollbar on Chrome, Opera and other webkit Browsers*/
}
.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none; /* hide sidenav scrollbar on Firefox, IE and Edge*/
}
</style>
