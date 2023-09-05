<template>
    <b-col md="12" class="mb-3">
        <b-form-input type="text" placeholder="Player name" v-model="searchName" v-on:keyup="loadTeams"></b-form-input>
    </b-col>
    <b-row>
        <b-col lg="6" v-for="team in teams" :key="team.teamId">
            <b-card>
                <div class="d-flex align-items-center">
                    <b-col md="3">
                        <div class="d-flex flex-column text-center align-items-center justify-content-between">
                            <div class="fs-italic">
                                <h5>{{ team.name }}</h5>
                            </div>
                            <img :src="team.image" :alt="team.name + ' Logo'" class="img-fluid"
                                style="width: 100px; height: 100px;" loading="lazy" />
                        </div>
                    </b-col>
                    <b-col md="9" style="min-height: 250px;">
                        <b-row>
                            <b-col md="4" v-for="player in team.players" :key="player.playerId">
                                <router-link :to="{ name: 'nba.player', params: { id: player.playerId } }">
                                    <div class="d-flex justify-content-start align-items-center p-2">
                                        <!-- <div class="pe-3">
                                        <img :src="'https://cdn.nba.com/headshots/nba/latest/1040x760/'+player.nbaPlayerId+'.png?imwidth=1040&imheight=760'" class="rounded-circle bg-soft-primary p-1"
                                            width="75" height="75" alt="1" loading="lazy" />
                                    </div> -->
                                        <h6
                                            :class="((player.firstName.toLowerCase().includes(searchName) || player.familyName.toLowerCase().includes(searchName)) && searchName != '') ? 'text-info' : ''">
                                            {{ player.firstName }} <strong>{{ player.familyName }}</strong>
                                        </h6>
                                    </div>
                                </router-link>
                            </b-col>
                        </b-row>
                    </b-col>
                </div>
                <!-- <div class="d-flex align-items-center justify-content-center">
                    <div class="d-flex flex-column text-center align-items-center justify-content-between">
                        <div class="fs-italic">
                            <h5>{{ team.name }}</h5>
                            <div class="text-muted-50">
                                <small>{{ team.tricode }}</small>
                            </div>
                        </div>
                        <div class="card-profile-progress">
                            <div id="circle-progress-1"
                                class="circle-progress circle-progress-basic circle-progress-primary" data-min-value="0"
                                data-max-value="100" data-value="0" data-type="percent"></div>
                            <img :src="team.image" alt="User-Profile" class="theme-color-default-img card-img"
                                loading="lazy" />
                        </div>
                    </div>
                </div> -->
            </b-card>
        </b-col>
    </b-row>
    <div>
    </div>
</template>
    
<script>
//   import { listTeams } from "@/api/BET/NBATeams.js";
import { listPlayersByTeam } from "@/api/BET/NBAPlayers.js";
import { onMounted, ref } from 'vue'

export default {
    setup() {
        let teams = ref([])
        let searchName = ref('')
        const loadTeams = () => {
            listPlayersByTeam({
                playerName: searchName.value
            }).then((response) => {
                const result = []
                response.forEach((element) => {
                    result.push({
                        teamId: element.teamId,
                        name: element.name,
                        tricode: element.tricode,
                        slug: element.slug,
                        image: require('@/assets/images/nba/logos/' + element.slug + '.svg'),
                        players: element.players
                    })
                })
                teams.value = result
            })
        }

        onMounted(() => {
            loadTeams()
        });

        return {
            teams,
            searchName,
            loadTeams
        }
    }
}

</script>  