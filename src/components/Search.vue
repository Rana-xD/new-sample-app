<script setup>
    import {ref, defineEmits} from 'vue';

    const emit = defineEmits(["filterSearch","sortCountryName"]);
    const expanded = ref(false);
    const typedValue = ref("");
    const selected = ref("Sort by Asc");
    const inputFocus = () => {document.querySelector('input').focus();}

    const getSortParams = (sort) => {
        emit("sortCountryName",sort=='Sort by Asc'?'Asc':sort);
    }

    const getSearchParams = (countryName) => {
        emit("filterSearch",countryName);
    }
</script>

<template>
    <div class="search-nav">
        <div class="container">
            <div class="dropdown shadow">
                <ul class="selection" @click="expanded = !expanded" @focusout="expanded=false">
                    <li class="default-option">{{ selected }} </li>
                    <ul class="options shadow" :class="expanded ? 'show':''">
                        <li class="option" @click="selected='Asc';getSortParams(selected)" v-show="selected!='Sort by Asc'">Sort by Asc</li>
                        <li class="option" @click="selected='Desc';getSortParams(selected)">Sort by Desc</li>
                    </ul>
                </ul>
            </div>
            <div class="input shadow" @click="inputFocus">
                <input type="text" name="input-field" id="input-field" placeholder="Search for a country..." v-model.trim="typedValue" @input="getSearchParams(typedValue)" @focus="expanded=false">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .search-nav{
        font-size: 14px;
        padding: 35px 0;

        .container{
            .input{
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                color: var(--input);
                background-color: var(--elements);
                padding-inline: 20px;
                border-radius: 5px;
                
                span{
                    background-color: transparent;
                    border: none;
                }

                input{
                    border: none;
                    outline: none;
                    background-color: transparent;
                    padding: 10px 15px;
                    color: var(--input);

                    &::placeholder {
                        color: var(--input);
                    }
                }
            }
      

            .dropdown{
                width: 50%;
                margin-top: 20px;
                .selection{
                    width: 100%;
                    position: relative;
                    border-radius: 5px;

                    &:hover{cursor: pointer;}

                    li{
                        list-style-type: none;
                        padding: 10px 20px;
                        background-color: var(--elements);
                        color: var(--text-color);
                    }

                    .default-option{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-radius: 5px;
                    }

                    .options{
                        position: absolute;
                        top: 45px;
                        z-index: 99;
                        border-radius: 10px;
                        display: none;
                        width: 100%;

                        &.show{display: block;}

                        .option:first-child{border-radius: 5px 5px 0 0;}
                        .option:last-child{border-radius: 0 0 5px 5px;}
                        .option:hover{
                            cursor: pointer;
                            background-color: var(--hover-bg);
                            color: var(--hover-txt);
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
      .search-nav{
        .container{
            display: flex;
            justify-content: space-between;
            padding: 45px auto;

            .input{
                width: 475px;
            }

            .dropdown{
                margin-top: 0;
                width: 205px;
            }
        }
      }

      
    }
</style>
