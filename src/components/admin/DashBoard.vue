<template>
    <router-view></router-view>
</template>

<script>
export default { 
    created(){
        this.$store.dispatch('updateShowMenu', false)
        this.$store.dispatch('updateShowFixedPlay', false)
    }
}
</script>