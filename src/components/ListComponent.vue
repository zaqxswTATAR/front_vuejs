<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display Sequence list -->
            <h1>Show Sequence</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Number 1</th>
                                <th>Number 2</th>
                                <th>Number 3</th>
                                <th>Number 4</th>
                                <th>X</th>
                                <th>Y</th>
                                <th>Z</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="sequence in Sequences" :key="sequence._id">
                                <td>{{ sequence.num1 }}</td>
                                <td>{{ sequence.num2 }}</td>
                                <td>{{ sequence.num3 }}</td>
                                <td>{{ sequence.num4 }}</td>
                                <td>{{ sequence.numX }}</td>
                                <td>{{ sequence.numY }}</td>
                                <td>{{ sequence.numZ }}</td>
                                <td>
                                    <router-link :to="{name: 'edit', params: {id: sequence._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteSequence(sequence._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Sequences: []
        }
    },
    created() {
        let apiURL = 'http://localhost:3000/api';
        axios.get(apiURL).then(res => {
            this.Sequences = res.data
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        deleteSequence(id) {
            let apiURL = `http://localhost:3000/api/delete-sequence/${id}`;
            let indexOfArrayItem = this.Sequences.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Sequences.splice(indexOfArrayItem, 1)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
}
</script>