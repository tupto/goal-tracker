const state = {
    isLoaded: false,
    items: [],
    err: null
}

const getters = {
    isLoaded: state => state.isLoaded,
    items: state  => state.items,
    err: state  => state.err
}

const mutations = {
    getGoalsSuccess(state, items) {
        state.isLoaded = true;
        state.items = items;
    },
    getGoalsError(state, error) {
        state.isLoaded = false;
        state.error = error;
    },
    async addGoal(state, goal) {
        try {
            const collection = await this._vm.$db.collection("goals");
            collection.add(goal);
        } catch(e) {
            state.error = e;
        }
    },
    async updateGoal(state, update) {
        state;
        update;
    }
}

const actions = {
    async getGoals({ commit }) {
        try {
            const collection = await this._vm.$db.collection("goals");

            collection.onSnapshot(async (snapshot) => {
                let goals = [];
                await snapshot.forEach(async (docRef) => {
                  const goal = await docRef.data();
                  goals.push({ ...goal, id: docRef.id });
                });
        
                commit('getGoalsSuccess', goals);
              });

        } catch (e) {
            commit("getGoalsError", e);
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}