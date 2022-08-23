<template>
  <div class="flex flex-col w-[60%]">
    <div class="grid grid-cols-3 gap-8">
      <!-- Render user card if user has been vaccinated -->
      <template v-for="user in users">
        <UserCard
          v-if="user.vaccines.length > 0"
          :name="user.name"
          :surname="user.surname"
          :age="user.age"
          :hometown="user.hometown"
          :dose="user.vaccines.length"
          @click="goToVaccineHistory(user)"
        />
      </template>
    </div>
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
import users from "../mockups/users";
import router from "../router";
export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users,
    };
  },
  methods: {
    goToVaccineHistory(user) {
      router.push(`/vaccine-history/${user.id}`);
    },
  },
};
</script>
