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
          <b-row class="p-2 border-bottom">
            <h4>
              First Attempts
            </h4>
            <apexchart :key="chartKey" :series="barchart.series" type="bar" height="350" :options="barchart.options" />
          </b-row>
          <!-- <b-row class="p-2 border-bottom">
            <h4>First Attempts</h4>
            <b-col md="2" v-for="player in firstAttempts" :key="player.name" class="p-1">
              <div class="card border shadow">
                <div class="card-body p-3">
                  <div class="d-flex justify-content-between">
                    <div>
                      <span><b>{{ player.name }}</b></span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between mt-2">
                    <div>
                      <span>{{ player.fgMade }} of {{ player.fgAttempted }}</span>
                    </div>
                    <div>
                      <span>
                        {{ (100 * (parseFloat(player.fgMade / player.fgAttempted))).toFixed(1) }} %
                      </span>
                    </div>
                  </div>
                  <div class="mt-3">
                    <b-progress :max="0" class="bg-soft-danger shadow-none w-100 mb-3" height="8px">
                      <b-progress-bar :value="parseInt(100 * (player.fgMade / player.fgAttempted))"
                        variant="success"></b-progress-bar>
                    </b-progress>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row> -->
          <b-row class="p-3">
            <b-col md="8">
              <b-row>
                <h4>Roster</h4>
                <b-col md="4" v-for="player in roster" :key="player.playerId">
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
            <b-col md="4">
              <b-row>
                <h4>Last games</h4>
                <div>
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

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const teams = store.state.nba.teams
    let actualTeam = ref({})

    let roster = ref({})
    let games = ref({})
    let firstAttempts = ref({})
    const chartKey = ref(0);
    const barchart = reactive({
      series: [],
      options: {
        chart: {
          type: 'bar',
          height: 450,
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

    const loadTeamData = () => {
      getTeamInfos(actualTeam.value.teamId).then((response) => {
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
      chartKey
    }
  }
}

</script>
  
<style setup>
.score {
  font-size: 24px;
}
</style>