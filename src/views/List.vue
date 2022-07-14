<template>
    <ion-page>
        <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title>Lista</ion-title>
        </ion-toolbar>
        </ion-header>
        
        <ion-content :fullscreen="true">
            {{ myfavs }}
            <ion-list>
                <ion-item-sliding v-for ="cancion in lista" :key="cancion.id">
                    <ion-item>
                        <ion-label>{{cancion.name}}</ion-label>
                    </ion-item>
                    <ion-item-options side="start">
                        <ion-item-option @click="Like(cancion)">

                            <ion-icon v-if="cancion.isFav" src="assets/icon/svg/heart.svg"> </ion-icon>
                            <ion-icon v-else src="assets/icon/svg/heart-outline.svg"> </ion-icon>

                    </ion-item-option>
                    </ion-item-options>
                    <ion-item-options side="end">
                        <ion-item-option @click="Delete(cancion)">
                            Eliminar
                        </ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { 
    IonContent,
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonList,
    IonItem,
    IonLabel, 
    IonItemSliding,
    IonItemOptions,
    IonItemOption} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ListPage',
    components:{
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList,
        IonItem,
        IonLabel,
        IonItemSliding,
        IonItemOptions,
        IonItemOption
    },
    data() {
        return {
            lista : [
                {id:1, name: 'Moscow Mule', isFav:false},
                {id:2, name: 'Despues de la playa', isFav:false},
                {id:3, name: 'Me porto bonito', isFav:false},
                {id:4, name: 'Titi me preguntó', isFav:false},
                {id:5, name: 'Un ratito', isFav:false},
                {id:6, name: 'Un ratito', isFav:false},
                {id:7, name: 'Un ratito', isFav:false},
                {id:8, name: 'Un ratito', isFav:false},
                {id:9, name: 'Un ratito', isFav:false},
                {id:10, name: 'Un ratito', isFav:false},
                {id:11, name: 'Un ratito', isFav:false},
                {id:12, name: 'Un ratito', isFav:false},
                {id:13, name: 'Un ratito', isFav:false},
                {id:14, name: 'Un ratito', isFav:false},
                {id:15, name: 'Un ratito', isFav:false},
                {id:16, name: 'Un ratito', isFav:false},
                {id:17, name: 'Un ratito', isFav:false},
                {id:18, name: 'Un ratito', isFav:false},
                {id:19, name: 'Un ratito', isFav:false},
                {id:20, name: 'Un ratito', isFav:false},
                

            ],
            myfavs:[]
        }
    },
    methods: {
        Like : function(element) {
            if(!element.isFav){
                this.myfavs.push(element.name);
                element.isFav = true;
            } else{
                this.myfavs = this.myfavs.filter(item => item !== element.name)
                element.isFav = false;
            }

        }
    }
});
</script>