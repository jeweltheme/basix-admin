import Vue from 'vue'

//Components
import Alert from './Alert.vue'
import Buttons from './Buttons.vue'
import Badges from './Badges.vue'
import AnimateNumber from './AnimateNumber.vue'

//Progress Bars
import ProgressBars from './ProgressBars.vue'
import BootstrapProgressBar from './progressbar/BootstrapProgressBar.vue'


//Importing Custom Components
import SidebarCollapse from './sidebar/SidebarCollapse.vue';
import CardTemplate from './widgets/CardTemplate.vue'


// Registered Components
Vue.component( 'basix-alert', Alert)
Vue.component( 'sidebar-collapse', SidebarCollapse )
Vue.component( 'card', CardTemplate )
Vue.component( 'basix-counter', AnimateNumber )
Vue.component( 'bootstrap-progress-bar', BootstrapProgressBar )


export {
  Alert,
  SidebarCollapse,
  CardTemplate,
  AnimateNumber,
  ProgressBars,
  BootstrapProgressBar,
  Tables
}
