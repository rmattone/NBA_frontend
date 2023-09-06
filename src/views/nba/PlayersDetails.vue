<template>
    <b-row>
        <b-col lg="12" class="">
            <b-card no-body class="mb-0">
                <b-card-header :style="{ backgroundColor: 'var(--' + team.tricode + ')' }" class="p-5 ">
                    <b-row class="d-flex align-items-center">
                        <b-col md="2">
                            <router-link :to="{ name: 'nba.team', params: { id: team.teamId } }">
                                <img :src="'https://cdn.nba.com/logos/nba/' + team.nbaTeamId + '/global/D/logo.svg'"
                                    class="img-fluid" alt="group-bg" loading="lazy" style="width: 150px;" />
                            </router-link>
                        </b-col>
                        <b-col md="10" class="d-flex justify-content-start align-items-center p-2">
                            <img :src="'https://cdn.nba.com/headshots/nba/latest/1040x760/' + player.nbaPlayerId + '.png'"
                                alt="profile-img" class="img-fluid" loading="lazy" style="height: 200px;" />
                            <div>
                                <div class="text-muted-50 text-white">
                                    {{ team.city }} {{ team.name }}
                                </div>
                                <h2 class="profile-header text-white fw-bold text-uppercase">
                                    {{ player.firstName }} {{ player.familyName }}
                                </h2>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-header>
                <b-card-body>
                    <div class="py-3">
                        <div class="d-flex justify-content-between">
                            <h4>
                                Filters
                            </h4>
                            <button class="btn btn-primary align-self-center" @click="loadGames">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                Search
                            </button>
                        </div>
                        <b-row class="mt-3">
                            <b-col md="3">
                                <label>Opponent Team</label>
                                <select-component :value="queryFilter.opponentTeamId" :options="teams" class="form-control"
                                    :close-on-select="true" @change="updateQueryTeamId"></select-component>
                            </b-col>
                            <!-- <b-col md="3">
                                <label>Opponent Team</label>
                                <select-component :value="selectedDoutor" :options="teams" class="form-control"
                                    :close-on-select="true" @change="updateDoutor"></select-component>
                            </b-col> -->
                        </b-row>
                    </div>
                    <div class="py-3">
                        <h4>
                            Statistics
                        </h4>
                        <div class="table-responsive text-center p-0">
                            <table id="user-list-table" class="table table-striped table-sm" role="grid"
                                style="font-size: 15px;">
                                <thead>
                                    <tr class="ligth">
                                        <th>GAME DATE</th>
                                        <th>MATCHUP</th>
                                        <th>W/L</th>
                                        <th>MIN</th>
                                        <th>PTS</th>
                                        <th>FGM</th>
                                        <th>FGA</th>
                                        <th>FG%</th>
                                        <th>3PM</th>
                                        <th>3PA</th>
                                        <th>3P%</th>
                                        <th>FTM</th>
                                        <th>FTA</th>
                                        <th>FT%</th>
                                        <th>OREB</th>
                                        <th>DREB</th>
                                        <th>REB</th>
                                        <th>AST</th>
                                        <th>STL</th>
                                        <th>BLK</th>
                                        <th>TOV</th>
                                        <th>PF</th>
                                        <th>+/-</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="game in games" :key="game.gameInfo.gameId">
                                        <td>
                                            {{ game.gameInfo.date }}
                                        </td>
                                        <td>
                                            {{ game.teamStats[0].tricode }}
                                            {{ game.teamStats[0].points }}
                                            {{ game.teamStats[0].host == 1 ? 'vs' : '@' }}
                                            {{ game.teamStats[1].points }}
                                            {{ game.teamStats[1].tricode }}
                                        </td>
                                        <td>
                                            {{ parseInt(game.teamStats[0].points) >
                                                parseInt(game.teamStats[1].points) ? 'W' :
                                                'L' }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.minutes }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.points }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.fieldGoalsMade }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.fieldGoalsAttempted }}
                                        </td>
                                        <td>
                                            {{ (100 * (parseFloat(game.playerStats.fieldGoalsMade /
                                                game.playerStats.fieldGoalsAttempted))).toFixed(1) }}%
                                        </td>
                                        <td>
                                            {{ game.playerStats.threePointersMade }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.threePointersAttempted }}
                                        </td>
                                        <td>
                                            {{ (100 * (parseFloat(game.playerStats.threePointersMade /
                                                game.playerStats.threePointersAttempted))).toFixed(1) }}%
                                        </td>
                                        <td>
                                            {{ game.playerStats.freeThrowsMade }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.freeThrowsAttempted }}
                                        </td>
                                        <td>
                                            {{ (100 * (parseFloat(game.playerStats.freeThrowsMade /
                                                game.playerStats.freeThrowsAttempted))).toFixed(1) }}%
                                        </td>
                                        <td>
                                            {{ game.playerStats.reboundsOffensive }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.reboundsDefensive }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.rebounds }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.assists }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.steals }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.blocks }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.turnovers }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.foulsPersonal }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.plusMinusPoints }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
    
<script>
import { getPlayer } from "@/api/BET/NBAPlayers.js";
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'

export default {
    setup() {
        const route = useRoute();
        const playerId = route.params.id;
        const store = useStore();

        let player = ref({})
        let team = ref({})
        let games = ref([])
        let teams = ref([])
        let queryFilter = {
            opponentTeamId: null
        }

        const loadPlayer = () => {
            getPlayer(playerId).then((response) => {
                player.value.playerId = response.playerId
                player.value.nbaPlayerId = response.nbaPlayerId
                player.value.firstName = response.firstName
                player.value.familyName = response.familyName
                team.value = {
                    teamId: response.team.teamId,
                    name: response.team.name,
                    city: response.team.city,
                    tricode: response.team.tricode,
                    slug: response.team.slug,
                    nbaTeamId: response.team.nbaTeamId,
                }
                games.value = response.lastGames
            })
        }
        const loadGames = () => {
            getPlayer(playerId, {
                ...queryFilter
            }).then((response) => {
                games.value = response.lastGames
            })
        }

        const loadTeams = () => {
            const allTeams = []
            store.state.nba.teams.forEach(element => {
                allTeams.push({
                    value: element.teamId,
                    name: element.name,
                })
            });
            teams.value = allTeams
        }

        const updateQueryTeamId = (newValue) => {
            queryFilter.opponentTeamId = newValue
        }

        onMounted(() => {
            loadPlayer()
            loadTeams()
        });

        return {
            player,
            team,
            games,
            teams,
            queryFilter,
            loadGames,
            updateQueryTeamId
        }
    }
}

</script>  

<style setup></style>