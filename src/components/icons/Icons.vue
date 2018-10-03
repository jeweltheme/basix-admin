<template>
    <div class="animated fadeIn">
        <router-view :sets="sets"></router-view>
    </div>
</template>

<script>
    import FullSet from './Set.vue';
    export default{
        name: 'icons',
        components: {
            FullSet
        },
        computed: {
          sets () {
            let sets = []
            require(this.setsPath + 'fontnames.json').forEach(name => {
              let set = require(this.setsPath + name + '.json')
              this.addfilteredListsTo(set)
              sets.push(set)
            })
            return sets
          }
        },
        methods: {
          addfilteredListsTo (set) {
                let list = set.lists[0].icons
                let filteredLists = []
                filteredLists.push(list.slice(0, 6))
                filteredLists.push(list.slice(6, 12))
                filteredLists.push(list.slice(12, 18))
                set.filteredLists = filteredLists
            }
        },
        data(){
            return{
                setsPath: './sets/'
            }
        }
    }
</script>

<style>
  @import "../../assets/scss/_icon-styles.scss";
</style>