<template>
    <div>我是home {{res}}</div>
</template>

<script>
    import axios from 'axios'
    import {ref} from 'vue'
    export default {
        name: "HOME",
        data(){
            return {
                res: ref('没有请求')
            }
        },
        mounted() {
            axios.get('http://192.168.1.8:3000/search?keywords=海阔天空').then(res => {
                this.res = res
                console.log(res)
            })
        },
        methods(){

        }
    }
</script>

<style scoped>

</style>