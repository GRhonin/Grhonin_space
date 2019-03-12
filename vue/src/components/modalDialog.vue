<template>
	<div v-show="isShow" class="modal">
		<div class="content">
			<div class="header">
				<slot name="header"></slot>
			</div>
			<div class="body">
				<slot name="body"></slot>
			</div>
			<div class="footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                props: {
                        isShow: { type: Boolean, required: true }
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.modal
		position: fixed
		width: 100%
		height: 100%
		left: 0
		top: 0
		background-color: rgba(155,155,155,0.4)
		.content
			position: absolute
			padding: 10px 20px
			left: 50%
			top: 50%
			width: 60%
			transform: translateX(-50%) translateY(-80%)
			background-color: white
			display flex
			justify-content center
			flex-direction column
			align-items center
			border-radius .1rem
			.header
				font-size: .45rem
				line-height .6rem
				background-color lightblue
				text-align center
				width: 100%
			.body
				margin: 1rem 0
				text-align center
				font-size .4rem
			.footer
				background-color #eeeeee
				text-align center
				width: 40%
				font-size .4rem
</style>