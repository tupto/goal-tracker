<template>
    <div>
        <h1>Account Goals</h1>
        <div v-if="isLoaded" key="items">
            <GoalViewList v-for="(goal) in items" :key="goal.id" :data="goal" @toggle-goal="toggleGoal"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

import GoalViewList from '../components/GoalViewList.vue'

export default {
    components: {
        GoalViewList
    },
    computed: {
        ...mapGetters(['isLoaded', 'items', 'err'])
    },
    methods: {
        ...mapActions(['getGoals']),
        ...mapMutations(['addGoal', 'updateGoal']),
        async toggleGoal(event, goalId, currStatus) {
            let newStatus = '';
            if (currStatus == "Done") {
                newStatus = "In Progress";
            } else {
                newStatus = "Done";
            }

            try {
                this.$db.collection('goals').doc(goalId).update({ status: newStatus });
            } catch(e) {
                console.log(this);
            }
        }
    },
    mounted() {
        this.getGoals();
    }
}
</script>