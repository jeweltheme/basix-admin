<template>

        <a v-if="ExternalLink" :href="url" :classes="classList">
            <i class="menu-icon" :class="icon"></i> <span class="menu-title-text"> {{ name }} </span>
            <span :class="'badge badge-' + badge.variant" v-if="badge && badge.text">{{ badge.text }}</span>
        </a>

        <router-link v-else :to="url" :class="classList" exact>
            <i class="menu-icon" :class="icon"></i> <span class="menu-title-text">{{ name }}</span>
            <span :class="'badge badge-' + badge.variant" v-if="badge && badge.text" >{{ badge.text }}</span>
        </router-link>

</template>

<script>
    import isExternal from 'is-url-external'

    export default{
        name: 'sidebar-nav-link',
        props: {
            name: {
                type: String,
                default: ''
            },
            url: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            badge: {
                type: Object,
                default: ()=>{}
            },
            variant: {
                type: String,
                default: ''
            }
        },
        computed: {
            classList(){
                return [
                    '',
                    this.linkVariant
                ]
            },
            linkVariant(){
                return this.variant ? `nav-link-${this.variant}` : ''
            },
            ExternalLink(){
                return isExternal(this.url)
            }

        }
    }
</script>