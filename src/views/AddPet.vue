<template>

<div>
 
	
	<FormPet/>
</div>
</template>

<script>
// @ is an alias to /src
import FormPet from "@/components/FormPet.vue";

export default {
  name: "addpet",
  components: {
    FormPet
  }
};
</script>

<style>
.corpo{
	height: 80%;
	max-height: 550px;
	overflow: scroll;
}
</style>