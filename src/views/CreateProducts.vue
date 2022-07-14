<template>
    <ion-page>
        <ion-heder :translucent = "true">
        {   {name}}
            <ion-toolbar>
                <ion-title>Formulario para añadir productos</ion-title>
            </ion-toolbar>
        </ion-heder>
        <ion-content :fullscreen = "true">
            <ion-item>
                <ion-label position="floating">Nombre del producto:</ion-label>
                <ion-input v-model="name"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Precio del producto:</ion-label>
                <ion-input v-model="price"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Detalles del producto:</ion-label>
                <ion-input v-model="details"></ion-input>
            </ion-item>
            <div class="ion-text-center">
                <ion-button @click="addRole">Agregar Producto</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import{
            IonPage,
            IonHeder,
            IonToolbar,
            IonTitle,
            IonContent,
            IonItem,
            IonLabel,
            IonInput,
            IonButton,
        }from '@ionic/vue';
import {defineComponent} from 'vue';
import axios from 'axios';

    export default defineComponent({
        name: 'ProductForm',
        components :{
            IonPage,
            IonHeder,
            IonToolbar,
            IonTitle,
            IonContent,
            IonItem,
            IonLabel,
            IonInput,
            IonButton,
        },
        data(){
            return{
                name: '',
                price: '',
                details: ''
            }
        },
        methods: {
            addRole: function(){
                var bodyFormData= new FormData();
                bodyFormData.append('name',this.name);
                bodyFormData.append('price',this.price);
                bodyFormData.append('details',this.details);

                axios({
                    method:"post",
                    url: "http://soa.test/create-product",
                    data: bodyFormData,
                })
                .then(function(response){
                    console.console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });

            }
        }

    });
</script>