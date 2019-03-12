<template>
	<div class="count">
		<span @click="decrease" :class="{ unable: num === 1 }">-</span>
		<span v-text="num"></span>
		<span @click="increase" :class="{ unable: num === 5 }">+</span>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                props: {
                        num: Number
                },
	        methods: {
                        increase(){
				if(this.num ===5) return;
				else this.$emit('increase');
                        },
		        decrease(){
				if(this.num ===1) return;
				else this.$emit('decrease');
		        }
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.count
		display flex
		align-items center
		span
			width: 1.4rem
			height: 1.4rem
			flex-grow 1
			line-height 1.4rem
			border 0.07rem solid rgb(153,153,153)
			text-align center
			margin-right -0.07rem
			font-size 1rem
			&.unable
				color rgb(221,221,221)
				border-color rgb(221,221,221)


</style>