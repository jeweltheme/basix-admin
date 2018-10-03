<template>
    <a id="menuToggle" class="menutoggle pull-left" @click="handleSidebarToggle">
        <i class="fa fa fa-tasks"></i>
    </a>
</template>
<script>
export default{
    data(){
        return{
            clickable: true
        }
    },
    methods: {
        handleSidebarToggle(){
            if( this.clickable ){
                this.clickable = false;
                document.body.classList.toggle('open');
                this.clickable = true;
            }

        }
    }
}
</script>