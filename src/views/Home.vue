<template>
  <div class="flex flex-col w-[60%]">
    <div class="grid grid-cols-3 gap-8">
      <UserCard
        v-for="user in users"
        :name="user.name"
        :surname="user.surname"
        :age="user.age"
        :hometown="user.hometown"
        :dose="user.vaccines.length"
      />
    </div>
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
import users from "../mockups/users";
export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users,
    };
  },
};
</script>
