<template>
    <b-row>
        <b-col sm="12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Lista de Pessoas</h4>
                    </div>
                    <div>
                        <b-button variant="soft-secondary" @click="listAllPeople">
                            <i class="user-add">
                                <icon-component type="dual-tone" icon-name="refresh" :size="24"></icon-component>
                            </i>
                            Atualizar
                        </b-button>
                        <b-button variant="primary" @click="handleAddPerson" class="mx-1">
                            <i class="user-add">
                                <icon-component type="dual-tone" icon-name="user-add" :size="24"></icon-component>
                            </i>
                            Adicionar pessoa
                        </b-button>
                    </div>
                </div>
                <div class="card-body px-0">
                    <div class="table-responsive text-center">
                        <table id="user-list-table" class="table table-striped" role="grid">
                            <thead>
                                <tr class="ligth">
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Data de Nascimento</th>
                                    <th>Data de Falecimento</th>
                                    <th>
                                        <input type="text" class="form-control" id="fname" placeholder="Quem você está procurando?" v-model="listPeopleQuery.query" v-on:keyup="listAllPeople"/>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="person in people" :key="person.personId">
                                    <td>
                                        {{ person.personId }}
                                    </td>
                                    <td>
                                        {{ person.name }}
                                    </td>
                                    <td>
                                        {{ person.birth }}
                                    </td>
                                    <td>
                                        {{ person.death }}
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-evenly">
                                            <b-button variant="primary " @click="updatePerson(person)">
                                                <i class="pencil">
                                                    <icon-component type="dual-tone" icon-name="pencil"
                                                        :size="24"></icon-component>
                                                </i>
                                            </b-button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="btn-toolbar justify-content-end px-3">
                        <nav aria-label="Standard pagination example">
                            <ul class="pagination">
                                <li class="page-item" :class="{ disabled: this.listPeopleQuery.page === 1 }">
                                    <a class="page-link" href="#" aria-label="Previous" @click="changePage(1)"
                                        :disabled="this.listPeopleQuery.page === 1">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>

                                <li class="page-item" v-if="listPeopleQuery.page !== 1">
                                    <a class="page-link" href="#" aria-label="Previous"
                                        @click="changePage(this.listPeopleQuery.page - 1)">
                                        {{ this.listPeopleQuery.page - 1 }}
                                    </a>
                                </li>

                                <li class="page-item active" aria-current="page">
                                    <a class="page-link" href="#">
                                        {{ this.listPeopleQuery.page }}
                                    </a>
                                </li>

                                <li class="page-item" v-if="listPeopleQuery.page !== this.listPeopleQuery.lastPage">
                                    <a class="page-link" href="#" aria-label="Next"
                                        @click="changePage(this.listPeopleQuery.page + 1)">
                                        {{ this.listPeopleQuery.page + 1 }}
                                    </a>
                                </li>

                                <li class="page-item"
                                    :class="{ disabled: this.listPeopleQuery.page === this.listPeopleQuery.lastPage }">
                                    <a class="page-link" href="#" aria-label="Next"
                                        @click="changePage(this.listPeopleQuery.lastPage)"
                                        :disabled="this.listPeopleQuery.page === this.listPeopleQuery.lastPage">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
    <b-modal v-model="personModal" title="Pessoa" centered size="xl" @ok="handleUpdatePerson(person)">
        <form>
            <b-row>
                <b-col md="12" class="form-group">
                    <label class="form-label" for="fname">Nome:</label>
                    <input type="text" class="form-control" id="fname" v-model="person.name" />
                </b-col>
                <b-col md="6" class="form-group">
                    <label class="form-label" for="lname">Nascimento:</label>
                    <input type="text" class="form-control" id="fname" v-model="person.birth" />
                </b-col>
                <b-col md="6" class="form-group">
                    <label class="form-label" for="lname">Morte:</label>
                    <input type="text" class="form-control" id="fname" v-model="person.death" />
                </b-col>
                <b-col md="12" class="form-group">
                    <label class="form-label" for="lname">Lugar de Nascimento:</label>
                    <input type="text" class="form-control" id="fname" v-model="person.birthPlace" />
                </b-col>
                <b-col md="12" class="form-group">
                    <label class="form-label" for="lname">Endereço:</label>
                    <input type="text" class="form-control" id="fname" v-model="person.address" />
                </b-col>
                <b-col md="12" class="form-group">
                    <label class="form-label me-2" for="lname">Imagem:</label>
                    <input type="file" @change="uploadFile" ref="file">
                    <div class="col" v-if="person.photo">
                        <img :src="person.photo" style="height: 90px; width: 90px;" />
                    </div>
                </b-col>
                <b-col md="12" class="form-group">
                    <label class="form-label" for="lname">Descrição:</label>
                    <quill-editor theme="snow" style="height: 200px" v-model:content="person.description" contentType="html"
                        @change="updateDescription" />
                </b-col>
            </b-row>
        </form>
    </b-modal>
</template>

<script>
import { fetchListPeople, updatePerson, createPerson } from '@/api/people/people.js'
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
// import UppyDashboard from '@/components/custom/uppy/UppyDashboard.vue'


export default {
    components: { QuillEditor },
    data() {
        return {
            personModal: ref(false),
            people: [],
            person: {},
            listPeopleQuery: {
                page: 1,
                perPage: 10,
                lastPage: null,
                total: null,
                query: ''
            },
            images: null
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
            })
        },
        changePage(page) {
            this.listPeopleQuery.page = page
            this.listAllPeople()
        },
        updatePerson(person) {
            this.person = person
            this.personModal = true
        },
        updateDescription(newValue) {
            this.person.description = newValue
            console.log(this.person)
        },
        handleUpdatePerson() {
            const formData = new FormData();
            formData.append('name', this.person.name);
            formData.append('birth', this.person.birth);
            formData.append('death', this.person.death);
            formData.append('description', this.person.description);
            formData.append('birthPlace', this.person.birthPlace);
            formData.append('address', this.person.address);
            if (this.images) {
                formData.append('photo', this.images);
            }

            if (this.person.personId == null) {                
                createPerson(formData).then((response) => {
                    if (response) {
                        this.listAllPeople()
                        this.emptyPerson()
                        this.$toast.success(`Pessoa adicionada com sucesso!`)
                    } else {
                        this.$toast.error(`Aconteceu algum erro.`)
                    }
                })
            } else {
                updatePerson(formData, this.person.personId).then((response) => {
                    if (response) {
                        this.listAllPeople()
                        this.$toast.success(`Usuário atualizado com sucesso!`)
                        this.emptyPerson()
                    } else {
                        this.$toast.error(`Aconteceu algum erro.`)
                    }
                })
            }
        },
        uploadFile() {
            this.images = this.$refs.file.files[0];
        },
        handleAddPerson() {
            this.emptyPerson()
            this.personModal = true
        },
        emptyPerson(){
            this.person = {
                personId: null,
                name: '',
                birth: '',
                death: '',
                description: '',
                birthPlace: '',
                address: '',
                photo: null
            }
        }
    },
    mounted() {
        this.listAllPeople()
    }
}
</script>
