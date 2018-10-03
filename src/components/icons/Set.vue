<template>
    <div class="Set">

        <card >
            <div class="row">
                <div class="header-text col-lg-4">
                <h2>{{set.name}}</h2>
               
            </div>
            <div class="search col-lg-4">
                <div class="form-group with-icon-left">
                    <div class="input-group">
                        <span class="back-to-fonts">
                            <router-link :to="{path: '/components/icons'}"><i class="fa fa-hand-o-left"></i></router-link>
                        </span>
                        <form class="form-inline">
                            <input type="text" placeholder="Search Icon"  required v-model="selector" aria-label="Search" class="form-control mr-sm-2">
                            <button type="submit" class="btn btn-outline-success my-2 my-sm-0"><i class="fa fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </card>

        <template v-for="list in validatedLists">
            <card :headerText="list.name">
                <span v-if="list.icons.length === 0">No icons found</span>
                <template v-for="i in Math.floor(list.icons.length/8+1)">
                    <div class="icons">
                        <div class="icon-grid-container" v-for="j in 8" v-if="list.icons[(i-1)*8 + j-1]">
                            <span :class="iconClass(list.icons[(i-1)*8 + j-1])" aria-hidden="true" :style="'font-size: '+iconSize+'px'"></span>
                            <div class="iconText">{{list.icons[(i-1)*8 + j-1]}}</div>
                        </div>
                    </div>
                </template>
            </card>
        </template>

    </div>
</template>

<script>
    export default{
        name: 'set',
        props: ['name', 'sets'],
        methods:{
            iconClass(icon){
                return this.set.prefix + ' ' + this.set.prefix + '-' + icon
            }
        },
        computed: {
            set(){
                for (let set of this.sets){
                    if(set.href === this.name ) return set
                }
            },
            validatedLists(){
                if( this.selector === '' ){
                    return this.set.lists
                }
                let result = [{name: 'Icons Founded', icons:[]}]
                this.set.lists.forEach(list =>{
                    list.icons.forEach(icon =>{
                        if(icon.match(this.selector)){
                            result[0].icons.push(icon)
                        }
                    })
                })
                return result
            }
        },
        data: function(){
            return{
                selector: '',
                iconSize: 30,
                slider: {
                    formatter: v => `${v}px`,
                    height: 2,
                    direction: 'horizontal',
                    min: 20,
                    max: 40,
                    interval: 1,
                    speed: 0.5
                }
            }
        }
    }
</script>

<style lang="scss">
  .Set{
    .header {
      background-color: white;
      padding: 2rem 0 2rem 0;

      .header-text {
        text-align: left;
        padding-left: 2.5rem;
        h2 {
          margin-bottom: 0;
        }
      }


      margin-bottom: 2rem;
    }

    .back-to-fonts {
        font-size: 25px;
        padding-right: 20px;
    }

    .icons{
          .icon-grid-container {
            padding: .5rem 0 5rem 0px;
            margin: 0px 0 2rem;
            text-align: center;
            height: 6rem;
            position: relative;
            min-height: 1px;
            float: left;
            width: 200px;
            height: 80px;


            &:hover {
              background-color: #20a8d8;
              color: white;
              cursor: pointer;
            }
        }
    }
}
</style>