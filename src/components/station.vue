<template>
<div class="paris">
        <div><b>Arrondissements</b></div>
      <table id="barre" >
        <td><v-checkbox class="b1" label="1" v-model="selectFiltre" value="1" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b2" label="2" v-model="selectFiltre" value="2" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b3" label="3" v-model="selectFiltre" value="3" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b4" label="4" v-model="selectFiltre" value="4" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b5" label="5" v-model="selectFiltre" value="5" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b6" label="6" v-model="selectFiltre" value="6" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b7" label="7" v-model="selectFiltre" value="7" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b8" label="8" v-model="selectFiltre" value="8" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b9" label="9" v-model="selectFiltre" value="9" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b10" label="10" v-model="selectFiltre" value="10" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b11" label="11" v-model="selectFiltre" value="11" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b12" label="12" v-model="selectFiltre" value="12" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b13" label="13" v-model="selectFiltre" value="13" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b14" label="14" v-model="selectFiltre" value="14" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b15" label="15" v-model="selectFiltre" value="15" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b16" label="16" v-model="selectFiltre" value="16" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b17" label="17" v-model="selectFiltre" value="17" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b18" label="18" v-model="selectFiltre" value="18" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b19" label="19" v-model="selectFiltre" value="19" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="b20" label="20" v-model="selectFiltre" value="20" @change="afficherFiltre();"></v-checkbox></td>

      </table>
    </div>
<div class="grand">
  <div class="dep">
    <div><b>Départements</b></div>
    <table>
      <div>
        <td><v-checkbox class="92" label="92" value="922" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="93" label="93" value="93" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="94" label="94" value="94" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox class="95" label="95" value="95" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
      </div>
    </table>
  </div>
  <div class="other">
    <div><b>Mobile</b></div>
    <table>
        
      <div>
        <td><v-checkbox label="Mobile" value="92" v-model="selectFiltre" @change="afficherFiltre()"></v-checkbox></td>
      </div>
    </table>
  </div>
</div>
  <div>
    <div class="tab">
    <table>
        <tr>
          <th>Numéro</th>
          <th>Nom</th>
          <th>CB</th>
          <th>Ouvert</th>
        </tr>
        <tr v-for="item in this.$store.state.donnee" :key="item.numero" @click="selectItem(item)">
          <td>{{ item.stationcode }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.is_renting }}</td>
          <td>{{ item.is_returning ? 'Ouvert' : 'Fermé' }}</td>
        </tr>
    </table>
  </div>
   </div>
    <div>
      <h1>Les information Station: {{ stationcode }}</h1>
    </div>
    <div class="Station">
    <div class="gauche">
      <div> Nom : {{ name }}</div>
      <div>Ville : {{ nom_arrondissement_communes }}</div>
      <div>Ouvert : {{ is_returning }}</div>
    </div>
    <div class="droite">
      <div>Capacité : {{ capacity }}</div>
      <div>Vélos Disponible : {{ numdocksavailable }}</div>
      <div>Attaches Disponibles : {{ numbikesavailable }}</div>
      <div>Carte Bleu : {{ is_renting }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stationScript',

  

  methods: {
    selectItem(item) {
      this.$store.state.maStation = item;
      this.$parent.maj++;
      console.log("Station Choisie : ", this.$store.state.maStation);
    },
    afficherFiltre() {
  if (this.selectFiltre >= 1 && this.selectFiltre <= 9) {
    const filteredData = this.$store.state.donneeVelib.filter(data => {
      const code = data.stationcode;
      return code && code.length === 4 && code.charAt(0) === this.selectFiltre.toString();
    });
    this.$store.state.donnee = filteredData;
  } 
  else if (this.selectFiltre >= 10 && this.selectFiltre <= 20) {
    const filteredData = this.$store.state.donneeVelib.filter(data => {
      const code = data.stationcode;
      return code && code.length === 5 && code.substring(0, 2) === this.selectFiltre.toString();
    });
    this.$store.state.donnee = filteredData;
  }
  else if (this.selectFiltre == 922) {
    const filteredData = this.$store.state.donneeVelib.filter(data => {
      const code = data.stationcode;
      return code && code.length >= 5 && parseInt(code.substring(0, 2)) >= 21 && parseInt(code.substring(0, 2)) < 30;
    });
    this.$store.state.donnee = filteredData;}
  else if (this.selectFiltre == 93) {
    const filteredData = this.$store.state.donneeVelib.filter(data => {
      const code = data.stationcode;
      return code && code.length >= 5 && parseInt(code.substring(0, 2)) >= 30 && parseInt(code.substring(0, 2)) < 40;
    });
    this.$store.state.donnee = filteredData;}
  else if (this.selectFiltre == 94) {
    const filteredData = this.$store.state.donneeVelib.filter(data => {
      const code = data.stationcode;
      return code && code.length >= 5 && parseInt(code.substring(0, 2)) >= 40 && parseInt(code.substring(0, 2)) < 50;
    });
    this.$store.state.donnee = filteredData;}
  else if (this.selectFiltre == 95) {
    const filteredData = this.$store.state.donneeVelib.filter(data => {
      const code = data.stationcode;
      return code && code.length >= 5 && parseInt(code.substring(0, 2)) >= 50 && parseInt(code.substring(0, 2)) < 60;
    });
    this.$store.state.donnee = filteredData;}
    else if (this.selectFiltre ==92) {
    const filteredData = this.$store.state.donneeVelib.filter(data => {
      const code = data.stationcode;
      return code && code.length === 5 && code.substring(0, 2) === this.selectFiltre.toString();
    });
    this.$store.state.donnee = filteredData;
  }
  else {
    this.$store.state.donnee = [...this.$store.state.donneeVelib];
  }
  }
    
},
data() {
  return {
    stationcode: this.$store.state.maStation.stationcode,
    name: this.$store.state.maStation.name,
    nom_arrondissement_communes: this.$store.state.maStation.nom_arrondissement_communes,
    is_returning: this.$store.state.maStation.is_returning,
    capacity: this.$store.state.maStation.capacity,
    numdocksavailable: this.$store.state.maStation.numdocksavailable,
    numbikesavailable: this.$store.state.maStation.numbikesavailable,
    is_renting: this.$store.state.maStation.is_renting,
    selectFiltre: '',
  }}
};
</script>


<style>

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.tab{
    max-height: 250px;
    overflow-y: auto;
    border: 3px solid #e2e1e1e3;
    float: left;
    width: 100%;
    background: #f0eeeee3;
    font-size: 20px;
    box-shadow: 5px 2px 2px #ccc;
    text-align: left;
    padding: 8px;
}
td:hover{
  text-decoration: underline;
    border:2px solid #79c424;
    background: #ffffffe3;
}
.barre{
  background-repeat: repeat-x;
  height: 46px;
  width: 100%;
}
.gauche,
.droite {
  flex: 1;
  padding: 20px;
}

.gauche {
  background-color: #eee;
}

.droite {
  background-color: #ddd;
}
.grand{
  display: flex;
}
.dep, .other{
  flex: 1;
  border: 1px solid black;
  padding: 10px; 
}
.paris{
  padding: 10px; 
}
</style>