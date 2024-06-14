<script setup>
  import {ref} from 'vue';
  import Card from '../components/Card.vue';
  import Search from '../components/Search.vue';

  const sortData = (arr, key, asc = true) => {
    return arr.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return asc ? x.localeCompare(y) : y.localeCompare(x);
    });
  }

  const appendCountryOfficialName = (arr) => {
    return arr.map((country) => {
      country.countryName = country.name.official;
      return country
    })
  }

  const countries = ref(null)
  const allCountries = ref(null)
  const currentPage = ref(1)
  const totalItem = ref(0)
  const Name = ref('')
  const sortBy = ref('Asc')

  const getCountries = async(countryName=null) => {
    let api = "https://restcountries.com/v3.1/";
    
    if(countryName === null || countryName === '') {
      if(Name.value === '' || countryName === '' || countryName === null){
        api = api+'all';
        Name.value = countryName;
      } else{
        api = api+'name/'+Name.value
      }
    }else {
      api = api+'name/'+countryName;
      Name.value = countryName;
    }


    console.log(api);
    const startIndex = (currentPage.value - 1) * 5;
    const endIndex = startIndex + 5;

    const response = await fetch(api);
    const data = await response.json();
    const countryData = appendCountryOfficialName(data);

    // I sort data by name.official instead of cca3
    allCountries.value = sortData(countryData, "countryName",sortBy.value==='Asc');
    countries.value = allCountries.value.slice(startIndex, endIndex);

    totalItem.value = countryData.length

    return countries.value;
    
  }
  getCountries()

  const sortCountryName = (sort='Asc') => {
    sortBy.value = sort;
    getCountries();
  }

  const handlePageChange = (data) => {
    currentPage.value = data;
    getCountries();
  }
  
  

</script>

<template>
  <Search @filter-search="getCountries" @sort-country-name="sortCountryName"/>
  <main class="contents">
    <div class="container">
      <Card v-for="country in countries" :key="country.cca3" :country="country"/>
    </div>
  </main>
  <div class="pagination">
    <vue-awesome-paginate
      :total-items="totalItem"
      :items-per-page="5"
      v-model="currentPage"
      @click="handlePageChange"
    />
  </div>
</template>

<style scoped lang="scss">

    .container{
        display: grid;
        gap: 40px;
        font-size: 16px;
    }

    .pagination{
      margin-top: 30px;
      display: flex;
      justify-content: center;
     }

    @media screen and (min-width: 768px) {
      .container{
        grid-template-columns: repeat(5, 1fr);
        gap: 30px;
      }
    }
</style>
