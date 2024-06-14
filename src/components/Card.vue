<script setup>
    import {defineProps, ref} from 'vue'
    import {useRouter} from 'vue-router'
    import Modal from "./Modal.vue";

    const router = useRouter();
    const {country} = defineProps(["country"]);
    const isModalOpened = ref(false);

    const openModal = () => {
        isModalOpened.value = true;
    };
    const closeModal = () => {
        isModalOpened.value = false;
    };
</script>

<template>
    <div class="card" @click="openModal">
        <div class="flag">
            <img :src="country.flags.png" :alt="country.flags.alt">
        </div>
        <div class="description">
            
            <p><span>Country Name: </span>{{ country.name.official }}</p>
            <p><span>2 character Country Code: </span>{{ country.cca2 }}</p>
            <p><span>3 character Country Code: </span>{{ country.cca3 }}</p>
            <p><span>Native Country Name: </span>{{ country.name.nativeName }}</p> 
            <p><span>Alternative Country Name: </span>{{ country.altSpellings }}</p>
            <p><span>Country Calling Codes: </span>{{ country.idd }}</p>
        </div>
    </div>
    <Modal :isOpen="isModalOpened" @modal-close="closeModal">
        <p class="title"><span>Capital: </span>{{ country.capital ? country.capital[0] : "Unnown" }}</p>
        <p class="title"><span>Population: </span>{{ (country.population).toLocaleString('en-US') }}</p>
        <p class="title"><span>Region: </span>{{ country.region }}</p>
        <p class="title"><span>Continent: </span>{{ country.continents }}</p>
    </Modal>
</template>

<style scoped lang="scss">

    .card{
        cursor: pointer;
        border-radius: 5px;
        background-color: var(--elements);
        color: var(--text-color);
        box-shadow: 21px 23px 40px rgba(0, 0, 0, 0.07);

        &:hover{
            box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        }

        img{
            width: 100%;
            object-fit: cover;
            aspect-ratio: 320/200;
            border-radius: 5px 5px 0 0;
        }

        .description{
            padding: 20px;

            h3{
                font-weight: 800;
                margin-bottom: 10px;
            }

            p{
                margin-bottom: 10px;

                span{
                    font-weight: 600;
                }
            }
        }
    }

    .title{
         margin-bottom: 20px;
         font-size: 20px;

        span{
            font-weight: 600;
        }
    }
</style>
