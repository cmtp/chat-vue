<template>
    <div class="Form flex-container">
        <input type="text" id="message">
        <button id="sendBtn">send</button>
    </div>
</template>
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
