<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create Sequence</h1>
            <form @submit.prevent="handleSubmitForm">
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
                    <button class="btn btn-success btn-block">Create</button>
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
            sequence: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                numX: 0,
                numY: 0,
                numZ: 0
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:3000/api/create-sequence';

            let a = this.sequence.num2 - this.sequence.num1;

            if ((this.sequence.num3 == this.sequence.num2 + a * 2) && (this.sequence.num4 == this.sequence.num3 + a * 3)) {
                axios.post(apiURL, this.sequence).then(() => {
                    this.$router.push('/view');
                    this.sequence = {
                        num1: 0,
                        num2: 0,
                        num3: 0,
                        num4: 0,
                        numX: 0,
                        numY: 0,
                        numZ: 0
                    }
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