<template>
  <div>
    <n-button-group>
      <n-button @click="activate('top')">Top</n-button>
      <n-button @click="activate('right')">Right</n-button>
      <n-button @click="activate('bottom')">Bottom</n-button>
      <n-button @click="activate('left')">Left</n-button>
    </n-button-group>
    <n-drawer v-model="active" :default-width="502" :placement="placement" resizable>
      <n-drawer-content title="Stoner">
        Stoner is a 1965 novel by the American writer John Williams.
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeRef = ref(false);
    const placementRef = ref("right");

    const activate = (place) => {
      activeRef.value = true;
      placementRef.value = place;
    };

    return {
      active: activeRef,
      placement: placementRef,
      activate,
    };
  },
});
</script>
