<template>
  <div class="md:w-2/3 py-8">
    <h3 class="text-base font-medium py-5">Персональный данные</h3>
    <form action.submit="" class="flex flex-col gap-4">
      <v-field
        v-model:modelValue.trim="userName"
        placeholder="Имя"
        type="text"
        for-name="name"
      />
      <v-field
        v-model:modelValue.trim="userAge"
        placeholder="Возраст"
        type="number"
        for-name="age"
      />
    </form>
    <div>
      <div class="mt-10 flex justify-between items-center mb-3">
        <h3 class="text-base font-medium py-5">Дети (макс. 5)</h3>
        <button
          @click="addChildren"
          class="px-3 py-2 border-2 border-blue-400 rounded-full text-blue-400 md:text-base text-sm flex items-center gap-1 outline-none"
          :class="[{ 'opacity-40 pointer-events-none ': isDisabled }]"
        >
          <span class="font-bold text-lg md:text-md"> &#65291;</span> Добавить
          ребенка
        </button>
      </div>
      <div
        class="flex gap-2 py-2 md:flex-nowrap flex-wrap"
        v-for="(item, index) in children"
        :key="item.id"
      >
        <v-field
          v-model:modelValue.trim="children[index].name"
          placeholder="Имя"
          type="text"
          :for-name="'clildName' + item.id"
        />

        <v-field
          v-model:modelValue.trim="children[index].age"
          placeholder="Возраст"
          type="number"
          :for-name="'childAge' + item.id"
        />

        <button @click="deleteChildren(item.id)" class="text-blue-400">
          Удалить
        </button>
      </div>
    </div>
    <div class="py-10">
      <button
        @click="saveData"
        class="px-5 py-3 bg-blue-500 text-white rounded-full"
        :class="[{ 'opacity-40 pointer-events-none': saveButtonDisabled }]"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import vField from "../components/base/vField.vue";
import { useLocalStorage } from "@/helpers";

const store = useStore();
const router = useRouter();
const isDisabled = ref(false);

watch(
  () => store.state.userChildren.length,
  (count) => {
    if (count >= 5) {
      isDisabled.value = true;
    } else {
      isDisabled.value = false;
    }
  }
);

const userName = computed({
  get() {
    return store.state.user.name;
  },
  set(value) {
    store.commit("setName", value);
  },
});

const userAge = computed({
  get() {
    return store.state.user.age;
  },
  set(value) {
    store.commit("setAge", value);
  },
});

const children = computed({
  get() {
    return store.state.userChildren;
  },
  set(value) {
    console.log(value);
  },
});

const saveButtonDisabled = computed(() => {
  const validChild = children.value.every(
    (item) => !!item.name.length && !!item.age.length
  );
  return !userAge.value.length || !userName.value.length || !validChild;
});

const addChildren = () => {
  store.commit("setChildren", {
    id: Date.now(),
    name: "",
    age: "",
  });
};

const deleteChildren = (id) => {
  store.commit("removeChildren", id);
};

const saveData = () => {
  router.push({ name: "preview" });

  useLocalStorage.setStorage(store.state);
};
</script>

<style lang="scss" scoped></style>
