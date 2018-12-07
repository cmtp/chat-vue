<template>
    <div class="Form flex-container">
        <input type="text" id="message" v-model="message">
        <button id="sendBtn" v-on:click="sendMessage()">send</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            message: ''
        }
    },
    methods: {
        sendMessage: function() {
            console.log(this.message);
        }
    }
}
</script>

<style lang="scss" scoped>
.Form {
    bottom: 30px;
    height: 30px;
    position: absolute;
    width: 100%;
    #message {
        width: 90%;
    }
    #sendBtn {
        width: 10%;
    }
}
</style>
