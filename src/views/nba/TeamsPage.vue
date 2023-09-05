<template>
  <b-row>
    <b-col lg="2" v-for="team in teams" :key="team.teamId">
      <router-link :to="{ name: 'nba.team', params: { id: team.teamId } }">
        <b-card>
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column text-center align-items-center justify-content-between">
              <div class="fs-italic">
                <h5>{{ team.name }}</h5>
                <div class="text-muted-50">
                  <small>{{ team.tricode }}</small>
                </div>
              </div>
              <div class="card-profile-progress">
                <div id="circle-progress-1" class="circle-progress circle-progress-basic circle-progress-primary"
                  data-min-value="0" data-max-value="100" data-value="0" data-type="percent"></div>
                <img :src="team.image" alt="User-Profile" class="theme-color-default-img card-img" loading="lazy" />
              </div>
            </div>
          </div>
        </b-card>
      </router-link>
    </b-col>
  </b-row>
  <div>
  </div>
</template>
  
<script>
import { useStore } from 'vuex'


export default {
  setup() {
    const store = useStore();
    const teams = store.state.nba.teams

    return {
      teams
    }
  }
}

</script>
  
  