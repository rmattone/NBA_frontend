<template>
    <b-row class="d-flex justify-content-center">
        <b-col md="8">
            <div class="mb-3 form-floating">
                <b-form-input type="text" class="form-control" id="floatingInput1" placeholder=""
                    v-model="listPeopleQuery.query" v-on:keyup="listAllPeople" />
                <label for="floatingInput1">Quem você está procurando?</label>
            </div>
        </b-col>
    </b-row>
    <b-row class="scrollable-container d-flex justify-content-center">
        <b-skeleton-wrapper :loading="loading">
            <template #loading>
                <b-col md="8" v-for="index in 6" :key="index">
                    <div class="card my-1">
                        <div class="d-flex align-items-center justify-content-between p-3">
                            <b-skeleton type="avatar" class="img-fluid avatar-48 rounded-circle">
                            </b-skeleton>
                            <b-skeleton class="mt-2" width="45%" height="24px"></b-skeleton>
                            <b-button variant="icon btn-primary " pill>
                                <span class="btn-inner">
                                    <i class="icon">
                                        <svg class="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="2.5"
                                                stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                            <path d="M13.2258 18.2988L19.2498 12.2748L13.2258 6.24976" stroke="currentColor"
                                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </i>
                                </span>
                            </b-button>
                        </div>
                    </div>
                </b-col>
            </template>

            <b-col md="8">
                <div v-for="person in people" :key="person.personId" class="card my-1">
                    <router-link :to="{ name: 'default.person', params: { id: person.personId } }" width="32"
                        viewBox="0 0 24 24">
                        <div class="d-flex justify-content-center p-3 ">
                            <img :src="person.photo" class="img-fluid avatar-48 rounded-circle" alt="profile-image-1"
                                loading="lazy" />
                            <div class="d-flex align-items-center justify-content-between flex-grow-1">
                                <div class="mx-3">
                                    <h5>{{ person.name }}</h5>
                                    <small class="text-ellipsis short-1">{{ person.birthPlace }}</small>
                                </div>
                                <!-- <router-link :to="{ name: 'avtacha.schedule.edit', params: { id: schedule.id } }" width="32" viewBox="0 0 24 24"> -->
                                <b-button variant="icon btn-primary " pill>
                                    <span class="btn-inner">
                                        <!-- <icon-component type="outlined" icon-name="chevron-right" :size="24"></icon-component> -->
                                        <i class="icon">
                                            <svg class="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor"
                                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                                <path d="M13.2258 18.2988L19.2498 12.2748L13.2258 6.24976"
                                                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </svg>
                                        </i>
                                    </span>
                                </b-button>
                            </div>
                        </div>
                    </router-link>
                </div>
            </b-col>
        </b-skeleton-wrapper>
    </b-row>
</template>

<script>
import { fetchListPeople } from '@/api/people/people.js'


export default {
    data() {
        return {
            people: [],
            person: {},
            listPeopleQuery: {
                page: 1,
                perPage: 10,
                lastPage: null,
                total: null,
                query: ''
            },
            loading: true,
        }
    },
    methods: {
        listAllPeople() {
            fetchListPeople({
                page: this.listPeopleQuery.page,
                perPage: this.listPeopleQuery.perPage,
                query: this.listPeopleQuery.query
            }).then((response) => {
                this.people = []
                const { data } = response
                this.listPeopleQuery.lastPage = response.last_page
                this.listPeopleQuery.total = response.total
                data.forEach((element) => {
                    this.people.push({
                        personId: element.personId,
                        name: element.name,
                        birth: element.birth,
                        death: element.death,
                        description: element.description,
                        birthPlace: element.birthPlace,
                        address: element.address,
                        photo: (element.photo) ? 'data:image/jpeg;base64, ' + element.photo : null
                    })
                })
                this.loading = false
            })
        },
        changePage(page) {
            this.listPeopleQuery.page = page
            this.listAllPeople()
        }
    },
    mounted() {
        this.listAllPeople()
    }
}
</script>
<style>
/* .scrollable-container {
  height: 650px; 
  overflow-y: auto;
} */
</style>

