<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components:{
    Navbar
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a { 
    text-decoration: none;
}
.table_col a{
  color: white;
  text-decoration: none;
}
.table_col td{
  border-bottom: 1px solid white;
}
.table_col {
      margin: auto;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 17px;
  background: white;
  text-align: left;
  border-collapse: collapse;
  color: #3E4347;
}
.table_col th:first-child, .table_col td:first-child {
color: #F5F6F6;
border-left: none;
}
.table_col th {
font-weight: normal;
border-bottom: 2px solid #F5E1A6;
border-right: 20px solid white;
border-left: 20px solid white;
padding: 8px 10px;
}
.table_col td {
border-right: 20px solid white;
border-left: 20px solid white;
padding: 12px 10px;
color: #8b8e91;
}
</style>
