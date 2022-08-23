<template>
  <div class="flex flex-col w-[60%]">
    <div class="md:grid md:grid-cols-3 gap-8">
      <!-- Render user card if user has been vaccinated -->
      <template v-for="(user, i) in users">
        <UserCard
          v-if="user.vaccines.length > 0 && i < currentPage * 6 + 1"
          :name="user.name"
          :surname="user.surname"
          :age="user.age"
          :hometown="user.hometown"
          :img="user.img"
          :dose="user.vaccines.length"
          @click="goToVaccineHistory(user)"
        />
      </template>
    </div>
    <Pagination :start="(users.length / currentPage) * 6" />
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
import users from "../mockups/users";
import router from "../router";
import Pagination from "../components/Pagination.vue";
export default {
  components: {
    UserCard,
    Pagination,
  },
  data() {
    return {
      users,
      currentPage: 1,
    };
  },
  methods: {
    goToVaccineHistory(user) {
      router.push(`/vaccine-history/${user.id}`);
    },
  },
};
</script>
