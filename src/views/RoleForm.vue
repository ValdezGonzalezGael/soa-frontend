<template>
    <ion-page>
        <ion-heder :translucent = "true">
        {   {name}}
            <ion-toolbar>
                <ion-title>Formulario para añadir roles</ion-title>
            </ion-toolbar>
        </ion-heder>
        <ion-content :fullscreen = "true">
            {{name}}
            <ion-item>
                <ion-label position="floating">Nombre:</ion-label>
                <ion-input v-model="name"></ion-input>
            </ion-item>
            <div class="ion-text-center">
                <ion-button @click="addRole">Agregar</ion-button>
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
        name: 'RoleForm',
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
                name: ''
            }
        },
        methods: {
            addRole: function(){
                var bodyFormData= new FormData();
                bodyFormData.append('name',this.name);

                axios({
                    method:"post",
                    url: "http://soa.test/create-role",
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