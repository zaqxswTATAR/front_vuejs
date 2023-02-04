<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Sequence here -->
            <h1>Edit Data</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="Number 1"></label>
                    <input type="number" class="form-control" v-model="sequence.num1" required>
                </div>
                <div class="form-group">
                    <label for="Number 2"></label>
                    <input type="number" class="form-control" v-model="sequence.num2" required>
                </div>
                <div class="form-group">
                    <label for="Number 3"></label>
                    <input type="number" class="form-control" v-model="sequence.num3" required>
                </div>
                <div class="form-group">
                    <label for="Number 4"></label>
                    <input type="number" class="form-control" v-model="sequence.num4" required>
                </div>
                <br>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            sequence: {}
        }
    },
    created() {
        let apiURL = `http://localhost:3000/api/edit-sequence/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.sequence = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/api/update-sequence/${this.$route.params.id}`;

            let a = this.sequence.num2 - this.sequence.num1;

            if ((this.sequence.num3 == this.sequence.num2 + a * 2) && (this.sequence.num4 == this.sequence.num3 + a * 3)) {
                axios.put(apiURL, this.sequence).then((res) => {
                    console.log(res)
                    this.$router.push('/view')
                }).catch(err => {
                    console.log(err)
                })
            } else {
                alert('Please input in the following relation:\n(Number 3) = (Number 2) + a * 2\n(Number 4) = (Number 3) + a * 3\nwhile a = (Number 2)-(Number 1)');
            }
        }
    }
}
</script>