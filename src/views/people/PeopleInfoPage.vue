<template>
    <b-row class="d-flex justify-content-center">
        <b-skeleton-wrapper :loading="loading">
            <template #loading>
                <b-row class="d-flex justify-content-center">
                    <b-col sm="8">
                        <div class="card">
                            <div class="card-header">
                                <router-link :to="{ name: 'default.dashboard' }" width="32" viewBox="0 0 24 24">
                                    <b-button variant="icon btn-primary" pill>
                                        <span class="btn-inner">
                                            <i class="icon">
                                                <svg class="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor"
                                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                    <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                                                        stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </svg>
                                            </i>
                                        </span>
                                    </b-button>
                                </router-link>
                                <div class="header-title d-flex justify-content-center text-center">
                                    <b-skeleton type="avatar" size="9rem">
                                    </b-skeleton>
                                </div>
                                <h2 class="card-title mt-2 d-flex justify-content-center">
                                    <b-skeleton class="mt-2" width="30%" height="32px"></b-skeleton>
                                </h2>
                            </div>
                            <div class="card-body px-5">
                                <b-row>
                                    <b-col sm="12" class="my-3">
                                        <h5 class="mb-2">
                                            Localização:
                                        </h5>
                                        <b-skeleton class="mt-2" width="30%" height="24px"></b-skeleton>
                                    </b-col>
                                    <b-col sm="12">
                                        <h5>
                                            Quem foi ?:
                                        </h5>
                                        <b-skeleton class="mt-2" width="85%" height="24px"></b-skeleton>
                                        <b-skeleton class="mt-2" width="38%" height="24px"></b-skeleton>
                                        <b-skeleton class="mt-2" width="40%" height="24px"></b-skeleton>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </template>
            <b-col sm="8">
                <div class="card">
                    <div class="card-header">
                        <router-link :to="{ name: 'default.dashboard' }" width="32" viewBox="0 0 24 24">
                            <b-button variant="icon btn-primary" pill>
                                <span class="btn-inner">
                                    <i class="icon">
                                        <svg class="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="2.5"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor"
                                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </i>
                                </span>
                            </b-button>
                        </router-link>
                        <div class="header-title text-center">
                            <b-avatar :src="person.photo" size="9rem" rounded></b-avatar>
                            <h2 class="card-title mt-2">
                                <strong>
                                    {{ person.name }}
                                </strong>
                            </h2>
                        </div>
                    </div>
                    <div class="card-body px-5">
                        <b-row>
                            <b-col sm="12" class="my-3">
                                <h5 class="mb-2">
                                    Localização:
                                </h5>
                                {{ person.address }}
                            </b-col>
                            <b-col sm="12">
                                <h5>
                                    Quem foi {{ person.name }}?:
                                </h5>
                                <div v-html="person.description"></div>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-skeleton-wrapper>

    </b-row>
</template>

<script>
import { getPerson } from '@/api/people/people.js'


export default {
    data() {
        return {
            personId: this.$route.params.id,
            person: {},
            loading: true,
        }
    },
    methods: {
        getPersonData() {
            getPerson(this.personId).then((response) => {
                this.person = {
                    personId: response[0].personId,
                    name: response[0].name,
                    birth: response[0].birth,
                    death: response[0].death,
                    description: response[0].description,
                    birthPlace: response[0].birthPlace,
                    address: response[0].address,
                    photo: (response[0].photo) ? 'data:image/jpeg;base64, ' + response[0].photo : null
                }
                this.loading = false
            })
        },
    },
    mounted() {
        this.getPersonData()
    }
}
</script>

