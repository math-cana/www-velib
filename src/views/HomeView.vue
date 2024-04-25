<template>
  <div>
    <carte-projet :key="maj"/>
    <station :key="maj"/>
  </div>
</template>

<script>
import CarteProjet from '../components/carte.vue';
import Station from '../components/station.vue';


export default {
  name: 'HomeView',

  data(){
    return{
      maj : 0,
    }
  },
  components: {
    CarteProjet,
    Station,
    
  },
  mounted(){
    this.$store.state.controler.load()
        .then(
          (data) => {
            this.$store.state.donneeVelib = data;
            this.$store.state.donnee = data;
          }
        )
        .catch(() => {
          console.log("Erreur")
        }
        );
      }
    }

</script>