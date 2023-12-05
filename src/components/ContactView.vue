<template>
    <div style="text-align: center;position: relative; z-index=-2">
        <h1> Contact Component</h1>
        
        <ChildComponent />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default defineComponent({
    components: {
        ChildComponent,
    },
    // Parent component options go here
});
</script>
