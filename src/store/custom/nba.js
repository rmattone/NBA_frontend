import { listTeams } from "@/api/BET/NBATeams.js";

const state = {
    teams: [],
}

const mutations = {
    LOAD_TEAMS(state, teams) {
        state.teams = teams
    },
    SAVE_TEAMS(state) {
        window.localStorage.setItem('teams', JSON.stringify(state.teams));
    },
}

const actions = {
    loadTeams({ commit }) {
        const teams = []
        listTeams().then((response) => {
            response.forEach((element) => {
                teams.push({
                    teamId: element.teamId,
                    nbaTeamId: element.nbaTeamId,
                    name: element.name,
                    tricode: element.tricode,
                    slug: element.slug,
                    color: element.color,
                    image: require('@/assets/images/nba/logos/' + element.slug + '.svg')
                })
            })
            commit('LOAD_TEAMS', teams);
            commit('SAVE_TEAMS')
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
