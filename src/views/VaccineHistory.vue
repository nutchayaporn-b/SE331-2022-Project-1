<template>
  <div class="flex flex-col w-[60%]">
    <div class="flex gap-4">
      <UserCard
        :name="user.name"
        :surname="user.surname"
        :age="user.age"
        :hometown="user.hometown"
        :dose="user.vaccines.length"
      />
      <table class="">
        <tr class="text-black">
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Dose (#)</th>
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Date Of Vaccination</th>
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Vaccine ID</th>
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Name of Vaccination</th>
        </tr>
        <VaccineTableBodyInfo
          v-for="vaccine in user.vaccines"
          :dose="user.vaccines.indexOf(vaccine) + 1"
          :vaccineDate="vaccine.timestamp"
          :vaccineId="vaccine.id"
          :vaccineName="vaccine.name"
        />
      </table>
    </div>
    <div class="flex mt-4">
      <div class="flex-col flex gap-3">
        <h4 class="text-2xl font-bold">Write a Recommendation</h4>
        <textarea
          cols="30"
          rows="10"
          class="px-2 py-1 text-lg border border-black border-solid"
          placeholder="Write here..."
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
import users from "../mockups/users";
import VaccineTableBodyInfo from "../components/VaccineTableBodyInfo.vue";
export default {
  components: {
    UserCard,
    VaccineTableBodyInfo,
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    user() {
      return users.find((u) => u.id == this.userId);
    },
  },
};
</script>
