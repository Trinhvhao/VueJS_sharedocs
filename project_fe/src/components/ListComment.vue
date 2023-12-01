<script>
import axios from 'axios'
export default {
    data() {
        return {
            comments: []
        }
    },
    created() {
        axios.get('https://655179565c69a7790328dd93.mockapi.io/api/v1/comments')
        .then(response => {
            this.comments = response.data
        })
        .catch(e => {
        this.errors.push(e)
        })
    },
    methods: {
        deleteComment(id) {
            axios.delete('https://655179565c69a7790328dd93.mockapi.io/api/v1/comments/' + id)
            .then(response => {
                console.log(response)
                this.comments = this.comments.filter(function(item) {
                    return item.id != id
                })
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
}
</script>
<template>
    <div>
        <ul>
            <li v-for="comment in comments" :value="comment.id" :key="comment.content">
                {{ comment.id }}.{{ comment.email}} - {{ comment.content }}
                <button type="button" @click="deleteComment(comment.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>