<template>
	<div>
		<div v-for="(item, index) in list" :key="index">
			<span v-text="index"></span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                data(){
                        return {
                                list: [5, 8, 6, 9]
                        }
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>