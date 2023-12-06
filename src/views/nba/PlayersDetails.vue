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
                    <b-row>
                        <b-col md="12" class="pb-3">
                            <div>
                                <div class="d-flex justify-content-between">
                                    <h4>
                                        Filters
                                    </h4>
                                    <div>
                                        <button class="btn btn-soft-primary align-self-center mx-2" @click="resetTeamData">
                                            Reset
                                        </button>
                                        <button class="btn btn-primary align-self-center" @click="loadGames">
                                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <b-row class="mt-3">
                                    <b-col md="2">
                                        <label>Last number of games</label>
                                        <input class="form-control" type="number" v-model="queryParams.nLastGames" />
                                    </b-col>
                                    <b-col md="3">
                                        <label>Opponent Team</label>
                                        <select-component :value="queryParams.opponentTeamId" :options="optionsTeams"
                                            class="form-control py-0" :close-on-select="true"
                                            @change="updateQueryTeamId"></select-component>
                                    </b-col>
                                    <b-col md="4">
                                        <label>Season Type</label>
                                        <select-component :value="queryParams.seasonType" :options="optionsSeasonType"
                                            class="form-control py-0" :close-on-select="true"
                                            @change="updateQuerySeasonType"></select-component>
                                    </b-col>
                                    <!-- <b-col md="2">
                                        <label>Playing at</label>
                                        <select-component :value="queryParams.host" :options="optionsHost"
                                            class="form-control py-0" :close-on-select="true"
                                            @change="updateQueryHost"></select-component>
                                    </b-col> -->
                                    <b-col md="2">
                                        <label>Start Date</label>
                                        <flat-picker v-model="queryParams.startDate" className="form-control" :config="{
                                            dateFormat: 'd/m/Y'
                                        }"></flat-picker>
                                    </b-col>
                                    <b-col md="2">
                                        <label>End Date</label>
                                        <flat-picker v-model="queryParams.endDate" className="form-control" :config="{
                                            dateFormat: 'd/m/Y'
                                        }"></flat-picker>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                    <div class="py-3">
                        <b-row class="mb-3 align-items-center">
                            <b-col>
                                <h4>
                                    Games
                                </h4>
                            </b-col>
                            <b-col md="9">
                                <select-component :value="tableColumnsSelected" mode="tags" :options="tableColumns"
                                    class="form-control" :close-on-select="false"
                                    @change="updateTableColumnsSelected"></select-component>
                            </b-col>
                        </b-row>
                        <div class="table-responsive text-center p-0 scrollable-container">
                            <table class="table table-striped table-sm" role="grid" style="font-size: 14px;"
                                :key="tableKey">
                                <thead>
                                    <tr class="ligth">
                                        <th>GAME DATE</th>
                                        <th>MATCHUP</th>
                                        <th>W/L</th>
                                        <th>MIN</th>
                                        <th v-if="tableColumnsSelected.includes('PTS')">PTS</th>
                                        <th v-if="tableColumnsSelected.includes('FGM')">FGM</th>
                                        <th v-if="tableColumnsSelected.includes('FGA')">FGA</th>
                                        <th v-if="tableColumnsSelected.includes('FG%')">FG%</th>
                                        <th v-if="tableColumnsSelected.includes('3PM')">3PM</th>
                                        <th v-if="tableColumnsSelected.includes('3PA')">3PA</th>
                                        <th v-if="tableColumnsSelected.includes('3P%')">3P%</th>
                                        <th v-if="tableColumnsSelected.includes('FTM')">FTM</th>
                                        <th v-if="tableColumnsSelected.includes('FTA')">FTA</th>
                                        <th v-if="tableColumnsSelected.includes('FT%')">FT%</th>
                                        <th v-if="tableColumnsSelected.includes('OREB')">OREB</th>
                                        <th v-if="tableColumnsSelected.includes('DREB')">DREB</th>
                                        <th v-if="tableColumnsSelected.includes('REB')">REB</th>
                                        <th v-if="tableColumnsSelected.includes('AST')">AST</th>
                                        <th v-if="tableColumnsSelected.includes('STL')">STL</th>
                                        <th v-if="tableColumnsSelected.includes('BLK')">BLK</th>
                                        <th v-if="tableColumnsSelected.includes('TOV')">TOV</th>
                                        <th v-if="tableColumnsSelected.includes('PF')">PF</th>
                                        <th v-if="tableColumnsSelected.includes('+/-')">+/-</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="game in games" :key="game.gameInfo.gameId">
                                        <td>
                                            {{ game.gameInfo.date }}
                                        </td>
                                        <td>
                                            {{ game.teamStats[0].tricode ?? '' }}
                                            {{ game.teamStats[0].points }}
                                            {{ game.teamStats[0].host == 1 ? 'vs' : '@' }}
                                            {{ game.teamStats[1].points }}
                                            {{ game.teamStats[1].tricode ?? '' }}
                                        </td>
                                        <td>
                                            {{ parseInt(game.teamStats[0].points) >
                                                parseInt(game.teamStats[1].points) ? 'W' :
                                                'L' }}
                                        </td>
                                        <td>
                                            {{ game.playerStats.minutes }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('PTS')">
                                            {{ game.playerStats.points }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('FGM')">
                                            {{ game.playerStats.fieldGoalsMade }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('FGA')">
                                            {{ game.playerStats.fieldGoalsAttempted }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('FG%')">
                                            {{ (100 * (parseFloat(game.playerStats.fieldGoalsMade /
                                                game.playerStats.fieldGoalsAttempted))).toFixed(1) }}%
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('3PM')">
                                            {{ game.playerStats.threePointersMade }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('3PA')">
                                            {{ game.playerStats.threePointersAttempted }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('3P%')">
                                            {{ (100 * (parseFloat(game.playerStats.threePointersMade /
                                                game.playerStats.threePointersAttempted))).toFixed(1) }}%
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('FTM')">
                                            {{ game.playerStats.freeThrowsMade }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('FTA')">
                                            {{ game.playerStats.freeThrowsAttempted }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('FT%')">
                                            {{ (100 * (parseFloat(game.playerStats.freeThrowsMade /
                                                game.playerStats.freeThrowsAttempted))).toFixed(1) }}%
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('OREB')">
                                            {{ game.playerStats.reboundsOffensive }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('DREB')">
                                            {{ game.playerStats.reboundsDefensive }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('REB')">
                                            {{ game.playerStats.rebounds }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('AST')">
                                            {{ game.playerStats.assists }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('STL')">
                                            {{ game.playerStats.steals }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('BLK')">
                                            {{ game.playerStats.blocks }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('TOV')">
                                            {{ game.playerStats.turnovers }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('PF')">
                                            {{ game.playerStats.foulsPersonal }}
                                        </td>
                                        <td v-if="tableColumnsSelected.includes('+/-')">
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
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import FlatPicker from 'vue-flatpickr-component'

export default {
    components: { FlatPicker },
    setup() {
        const route = useRoute();
        const playerId = route.params.id;
        const store = useStore();

        let player = ref({})
        let team = ref({})
        let games = ref([])
        let optionsTeams = ref([])
        const queryParams = reactive({
            startDate: null,
            endDate: null,
            nLastGames: 15,
            opponentTeamId: null,
            host: null,
            seasonType: 'Regular Season'
        })
        const optionsSeasonType = [
            { value: '', name: 'All games' },
            { value: 'Pre Season', name: 'Pre Season' },
            { value: 'Regular Season', name: 'Regular Season' },
            { value: 'Playoffs', name: 'Playoffs' },
        ]
        const tableKey = ref(0);
        let tableColumnsSelected = reactive([
            "PTS",
            "FGM",
            "FGA",
            "3PM",
            "3PA",
            "REB",
            "AST",
            "STL",
            "BLK",
            "TOV",
            "PF"
        ])
        const tableColumns = reactive(
            [
                { value: 'PTS', name: 'PTS' },
                { value: 'FGM', name: 'FGM' },
                { value: 'FGA', name: 'FGA' },
                { value: 'FG%', name: 'FG%' },
                { value: '3PM', name: '3PM' },
                { value: '3PA', name: '3PA' },
                { value: '3P%', name: '3P%' },
                { value: 'FTM', name: 'FTM' },
                { value: 'FTA', name: 'FTA' },
                { value: 'FT%', name: 'FT%' },
                { value: 'OREB', name: 'OREB' },
                { value: 'DREB', name: 'DREB' },
                { value: 'REB', name: 'REB' },
                { value: 'AST', name: 'AST' },
                { value: 'STL', name: 'STL' },
                { value: 'BLK', name: 'BLK' },
                { value: 'TOV', name: 'TOV' },
                { value: 'PF', name: 'PF' },
                { value: '+/-', name: '+/-' },
            ])


        const resetTeamData = () => {
            queryParams.startDate = null
            queryParams.endDate = null
            queryParams.opponentTeamId = null
            queryParams.nLastGames = 15
            queryParams.host = null
            queryParams.seasonType = ""
            loadPlayer()
        }

        const getDateFormat = (date) => {
            return date.split('/')[2] + '-' + date.split('/')[1] + '-' + date.split('/')[0]
        }

        const loadPlayer = () => {
            const params = {
                startDate: queryParams.startDate != null ? getDateFormat(queryParams.startDate) : null,
                endDate: queryParams.endDate != null ? getDateFormat(queryParams.endDate) : null,
                nLastGames: queryParams.nLastGames,
                opponentTeamId: queryParams.opponentTeamId,
                host: queryParams.host,
                seasonType: queryParams.seasonType,
            }
            getPlayer(playerId, params).then((response) => {
                player.value.playerId = response.playerId
                player.value.nbaPlayerId = response.nbaPlayerId
                player.value.firstName = response.firstName
                player.value.familyName = response.familyName
                team.value = {
                    teamId: response.team.teamId,
                    name: response.team.name,
                    city: response.team.city,
                    tricode: response.team.tricode ?? null,
                    slug: response.team.slug,
                    nbaTeamId: response.team.nbaTeamId,
                }
                games.value = response.lastGames
            })
        }
        const loadGames = () => {
            const params = {
                startDate: queryParams.startDate != null ? getDateFormat(queryParams.startDate) : null,
                endDate: queryParams.endDate != null ? getDateFormat(queryParams.endDate) : null,
                nLastGames: queryParams.nLastGames,
                opponentTeamId: queryParams.opponentTeamId,
                host: queryParams.host,
                seasonType: queryParams.seasonType
            }
            getPlayer(playerId, params).then((response) => {
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
            optionsTeams.value = allTeams
        }

        const updateQueryTeamId = (newValue) => {
            queryParams.opponentTeamId = newValue
        }
        const updateQuerySeasonType = (newValue) => {
            queryParams.seasonType = newValue
        }

        const updateTableColumnsSelected = (newValue) => {
            tableColumnsSelected.splice(0, tableColumnsSelected.length, ...newValue); // Atualize a instância reativa original
            console.log(tableColumnsSelected);
            tableKey.value += 1;
        }

        onMounted(() => {
            loadPlayer()
            loadTeams()
        });

        return {
            player,
            team,
            games,
            optionsTeams,
            queryParams,
            loadGames,
            updateQueryTeamId,
            resetTeamData,
            tableColumns,
            updateTableColumnsSelected,
            tableColumnsSelected,
            tableKey,
            optionsSeasonType,
            updateQuerySeasonType
        }
    }
}

</script>  

<style setup>
.scrollable-container {
    max-height: 550px;
    overflow-y: auto;
}
</style>