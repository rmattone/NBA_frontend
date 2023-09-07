<template>
  <b-row>
    <b-col lg="12">
      <b-card no-body class="mb-0">
        <b-card-header :style="{ backgroundColor: 'var(--' + actualTeam.tricode + ')' }" class="p-5 ">
          <b-row class="d-flex align-items-center">
            <b-col md="10" class="d-flex justify-content-center align-items-center p-2">
              <img :src="'https://cdn.nba.com/logos/nba/' + actualTeam.nbaTeamId + '/global/D/logo.svg'" class="img-fluid"
                alt="group-bg" loading="lazy" style="width: 150px;" />
              <div class="ms-5">
                <div class="text-muted-50 text-white">
                  {{ actualTeam.tricode }}
                </div>
                <h2 class="profile-header text-white fw-bold text-uppercase">
                  {{ actualTeam.name }}
                </h2>
              </div>
            </b-col>
          </b-row>
        </b-card-header>
        <b-card-body>
          <b-row class="p-3 border-bottom">
            <b-col md="12">
              <b-row>
                <h4>Roster</h4>
                <b-col md="2" v-for="player in roster" :key="player.playerId">
                  <router-link :to="{ name: 'nba.player', params: { id: player.playerId } }">
                    <div class="d-flex justify-content-start align-items-center p-2">
                      <div class="pe-3">
                        <img
                          :src="'https://cdn.nba.com/headshots/nba/latest/1040x760/' + player.nbaPlayerId + '.png?imwidth=1040&imheight=760'"
                          class="rounded-circle  p-1" alt="1" loading="lazy" style="height: 75px;" />
                      </div>
                      <h6>
                        {{ player.firstName }} <strong>{{ player.familyName }}</strong>
                      </h6>
                    </div>
                  </router-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="p-3 border-bottom">
            <b-col md="12" class="py-3">
              <div class="py-3">
                <div class="d-flex justify-content-between">
                  <h4>
                    Filters
                  </h4>
                  <div>
                    <button class="btn btn-soft-primary align-self-center mx-2" @click="resetTeamData">
                      Reset
                    </button>
                    <button class="btn btn-primary align-self-center" @click="loadTeamData">
                      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                      Search
                    </button>
                  </div>
                </div>
                <b-row class="mt-3">
                  <b-col md="3">
                    <label>Last number of games</label>
                    <input class="form-control" type="number" v-model="queryParams.nLastGames" />
                  </b-col>
                  <b-col md="3">
                    <label>Start Date</label>
                    <flat-picker v-model="queryParams.startDate" className="form-control" :config="{
                      dateFormat: 'd/m/Y'
                    }"></flat-picker>
                  </b-col>
                  <b-col md="3">
                    <label>End Date</label>
                    <flat-picker v-model="queryParams.endDate" className="form-control" :config="{
                      dateFormat: 'd/m/Y'
                    }"></flat-picker>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col md="8">
              <h4>
                First Attempts
              </h4>
              <apexchart :key="chartKey" :series="barchart.series" type="bar" height="550" :options="barchart.options" />
            </b-col>
            <b-col md="4">
              <b-row>
                <h4>Last {{ games.length }} games</h4>
                <div class="scrollable-container">
                  <b-card no-body class="card bg-soft-secondary mb-3" v-for="game in games" :key="game.info.gameId">
                    <b-card-body class="p-1 pb-3">
                      <div class="text-center">
                        <small>
                          {{ game.info.date }}
                        </small>
                      </div>
                      <div class="d-flex justify-content-around align-items-center">
                        <div>
                          {{ game.teamStats[0].tricode }}
                          <img :src="'https://cdn.nba.com/logos/nba/' + game.teamStats[0].teamId + '/global/D/logo.svg'"
                            class="img-fluid" alt="group-bg" loading="lazy" style="width: 70px;" />
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="score">
                            {{ game.teamStats[0].points }}
                          </span>
                          <span class="mx-2">
                            {{ game.teamStats[0].host == 1 ? 'vs' : '@' }}
                          </span>
                          <span class="score">
                            {{ game.teamStats[1].points }}
                          </span>
                        </div>
                        <div>
                          <img :src="'https://cdn.nba.com/logos/nba/' + game.teamStats[1].teamId + '/global/D/logo.svg'"
                            class="img-fluid" alt="group-bg" loading="lazy" style="width: 70px;" />
                          {{ game.teamStats[1].tricode }}
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
              </b-row>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <div>
  </div>
</template>
  
<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { onMounted, ref, reactive } from 'vue'
import { getTeamInfos } from "@/api/BET/NBATeams.js";
import FlatPicker from 'vue-flatpickr-component'

export default {
  components: { FlatPicker },
  setup() {
    const store = useStore();
    const route = useRoute();

    const teams = store.state.nba.teams
    let actualTeam = ref({})

    const queryParams = reactive({
      startDate: null,
      endDate: null,
      nLastGames: null
    })

    let roster = ref({})
    let games = ref({})
    let firstAttempts = ref({})

    const chartKey = ref(0);
    const barchart = reactive({
      series: [],
      options: {
        chart: {
          type: 'bar',
          height: 550,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 15,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '16px',
                  fontWeight: 800
                }
              }
            }
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '16px',
          }
        },
        legend: {
          position: 'top',
          offsetY: 25,
          style: {
            colors: ['#126e51', '#98002e']
          }
        },
        xaxis: {
          type: 'category',
          categories: [],
          labels: {
            enabled: true,
            style: {
              fontSize: '16px',
              fontWeight: 800
            }
          }
        },
        colors: ['#126e51', '#98002e']
      }
    })

    const filterTeam = () => {
      actualTeam.value = teams.filter(team => team.teamId == route.params.id)[0]
    }

    const resetTeamData = () => {
      queryParams.startDate = null
      queryParams.endDate = null
      queryParams.nLastGames = null
      loadTeamData()
    }

    const getDateFormat = (date) => {
      return date.split('/')[2] + '-' + date.split('/')[1] + '-' + date.split('/')[0]
    }

    const loadTeamData = () => {
      const params = {
        startDate: queryParams.startDate != null ? getDateFormat(queryParams.startDate) : null,
        endDate: queryParams.endDate != null ? getDateFormat(queryParams.endDate) : null,
        nLastGames: queryParams.nLastGames
      }
      getTeamInfos(actualTeam.value.teamId, params).then((response) => {
        roster.value = response.players
        let gamesArray = []
        response.games.forEach(element => {
          element.teamStats[0].tricode = teams.filter(team => team.nbaTeamId == element.teamStats[0].teamId)[0].tricode
          element.teamStats[1].tricode = teams.filter(team => team.nbaTeamId == element.teamStats[1].teamId)[0].tricode

          gamesArray.push({
            info: element.info,
            teamStats: [
              element.teamStats.filter(teamStat => teamStat.teamId == actualTeam.value.nbaTeamId)[0],
              element.teamStats.filter(teamStat => teamStat.teamId != actualTeam.value.nbaTeamId)[0],
            ]
          })
          games.value = gamesArray
          queryParams.nLastGames = gamesArray.length
        });
        firstAttempts.value = response.firstAttempts

        let fgMissed = []
        let fgMade = []
        let categories = []
        response.firstAttempts.forEach(element => {
          fgMissed.push((element.fgAttempted - element.fgMade))
          fgMade.push(element.fgMade)
          categories.push(element.name)
        })
        barchart.series = [
          {
            name: 'Made',
            data: fgMade
          },
          {
            name: 'Missed',
            data: fgMissed
          },
        ]
        // barchart.options.colors = ['#'+actualTeam.value.color, '#c03221']
        barchart.options.colors = ['#126e51', '#c03221']
        barchart.options.xaxis.categories = categories
        chartKey.value += 1;
      })

    }

    onMounted(() => {
      filterTeam()
      loadTeamData()
    });

    return {
      actualTeam,
      roster,
      games,
      firstAttempts,
      barchart,
      chartKey,
      loadTeamData,
      queryParams,
      resetTeamData
    }
  }
}

</script>
  
<style setup>
.score {
  font-size: 24px;
}

.scrollable-container {
  max-height: 550px;
  overflow-y: auto;
  /* Add a vertical scrollbar when content overflows */
}
</style>