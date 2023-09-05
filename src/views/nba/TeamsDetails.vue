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
          <b-row class="p-3">
            <b-col md="8" class="border-end">
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
                    <b-card-body class="p-1">
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
                      <div class="text-center">
                        <small>
                          {{ game.info.date }}
                        </small>
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
import { onMounted, ref } from 'vue'
import { getTeamInfos } from "@/api/BET/NBATeams.js";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const teams = store.state.nba.teams
    let actualTeam = ref({})

    let roster = ref({})
    let games = ref({})

    const filterTeam = () => {
      actualTeam.value = teams.filter(team => team.teamId == route.params.id)[0]
    }

    const loadTeamData = () => {
      getTeamInfos(actualTeam.value.teamId).then((response) => {
        // games.value = response.games
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
          console.log(gamesArray);
          games.value = gamesArray
        });
      })

    }

    onMounted(() => {
      filterTeam()
      loadTeamData()
    });

    return {
      actualTeam,
      roster,
      games
    }
  }
}

</script>
  
<style setup>
.score {
  font-size: 24px;
}
</style>