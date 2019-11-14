<template>
  <Card>
    <Icon :type="data.type"/><span class="title" :class="{ complete: (data.status == 'Done') }">{{ data.title }}</span>
    <div class="buttons">
      <button @click.prevent="toggleGoal($event, data.id, data.status)" class="btn-complete">{{ data.status == "Done" ? "&#10003;" : "&#8634;" }}</button>
      <button @click.prevent="deleteGoal($event, data.id)" class="btn-delete">&#128465;</button>
    </div>
    <div v-if="data.subgoals">
        <GoalListView v-for="(subgoal) in data.subgoals" :key="subgoal.id" :data="subgoal" />
    </div>
  </Card>
</template>

<script>
import Card from './Card.vue';
import Icon from './Icon.vue';

export default {
  name: 'GoalListView',
  props: ['data', 'showDetail'],
  components: {
    Card,
    Icon
  },
  methods: {
    toggleGoal(event, goalId, currStatus) {
      this.$emit('toggle-goal', event, goalId, currStatus);
    },
    deleteGoal(event, goalId) {
      this.$emit('delete-goal', event, goalId);
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: large;
}
.title.complete {
  text-decoration: line-through;
}
.buttons {
  float: right;
}
.btn-complete {
  background-color: green;
  color: white;
  margin: 0 0;
  padding: 2px;
  width: 25px;
  height: 25px;
}
.btn-delete {
  background-color: red;
  color: white;
  margin: 0 0;
  padding: 2px;
  width: 25px;
  height: 25px;
}
</style>
