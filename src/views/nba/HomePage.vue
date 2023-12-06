<template>
  <b-row>
    <b-col lg="12">
      <b-card no-body class="mb-2 p-3 border-bottom">
        <b-row>
          <b-col md="12" class="pb-3">
            <div>
              <div class="d-flex justify-content-between">
                <h4>
                  First Buckets
                </h4>
                <div>
                  <button class="btn btn-soft-primary align-self-center mx-2">
                    Reset
                  </button>
                  <button class="btn btn-primary align-self-center" @click="loadFirstBuckets">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    Search
                  </button>
                </div>
              </div>
              <b-row class="mt-3">
                <b-col md="2">
                  <label>Season Type</label>
                  <select-component :value="firstBucketsParams.seasonType" :options="optionsSeasonType"
                    class="form-control" :close-on-select="true" @change="updateQuerySeasonType"></select-component>
                </b-col>
                <b-col md="10">
                  <label>Teams</label>
                  <select-component :value="firstBucketsParams.teamsSelected" mode="tags" :options="optionsTeams" class="form-control"
                    :close-on-select="false" @change="updateTeamsSelected"></select-component>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row v-show="!isLoading">
          <b-col v-for="(value, index) in firstBucketsTeams" :key="index" md="3">
            <b-card no-body>
              <b-card-header :style="{ backgroundColor: 'var(--' + value.team.tricode + ')' }" class="p-0">
                <b-row class="d-flex align-items-center">
                  <b-col md="10" class="d-flex justify-content-center align-items-center px-0 py-1">
                    <img :src="'https://cdn.nba.com/logos/nba/' + value.team.nbaTeamId + '/global/D/logo.svg'"
                      class="img-fluid" alt="group-bg" loading="lazy" style="width: 80px;" />
                    <div class="ms-0">
                      <div class="text-muted-50 text-white">
                        {{ value.team.tricode }}
                      </div>
                      <h5 class="profile-header text-white fw-bold text-uppercase">
                        {{ value.team.name }}
                      </h5>
                    </div>
                  </b-col>
                </b-row>
              </b-card-header>
              <b-card-body class="border">
                <FirstBucket :firstAttempts="value.firstAttempts" :key="tableKey"></FirstBucket>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>
  
<script setup>
import { useStore } from 'vuex'
import { ref, reactive } from 'vue'
import { listFirstBuckets } from "@/api/BET/NBACustomStatistics";
import FirstBucket from '@/components/modules/bet/FirstBucket.vue'

let optionsTeams = ref([])
const store = useStore();
const tableKey = ref(0);
const isLoading = ref(false);
const firstBucketsTeams = ref([])
const firstBucketsParams = reactive({
  teamsSelected: Array.from({ length: 4 }, () => Math.floor(Math.random() * 30) + 1),
  seasonType: ''
})
const optionsSeasonType = [
  { value: '', name: 'All games' },
  { value: 'Pre Season', name: 'Pre Season' },
  { value: 'Regular Season', name: 'Regular Season' },
  { value: 'Playoffs', name: 'Playoffs' },
]

const updateTeamsSelected = (newValue) => {
  firstBucketsParams.teamsSelected.splice(0, firstBucketsParams.teamsSelected.length, ...newValue); // Atualize a instância reativa original
}

const updateQuerySeasonType = (newValue) => {
  firstBucketsParams.seasonType = newValue
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

const loadFirstBuckets = () => {
  isLoading.value = true
  firstBucketsParams.teamsSelected.sort((a, b) => a - b);
  const params = {
    teamsId: firstBucketsParams.teamsSelected.join(','),
    seasonType: firstBucketsParams.seasonType
  }
  listFirstBuckets(params).then((response) => {
    firstBucketsTeams.value = response;
    isLoading.value = false
    tableKey.value += 1;
  })
}

loadTeams()
loadFirstBuckets()
</script>
  
<style lang="scss" scoped>
.multiselect-dropdown{
  max-height: 35rem !important;
}
</style>