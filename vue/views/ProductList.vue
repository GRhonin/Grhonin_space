<template>
	<div class="product-content">
		<div class="head-content">
			<div class="header">
				<i class="el-icon-arrow-left"></i>
				<div>
					<i class="el-icon-search"></i>
					<input type="text" placeholder="输入要搜索的内容">
				</div>
				<span>搜索</span>
			</div>
			<div class="title-list">
				<ul>
					<li>新品</li>
					<li>销量优先</li>
					<li>价格</li>
					<li>筛选</li>
				</ul>
			</div>
		</div>
		<div class="pro-list">
			<div class="details"></div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.product-content
		display flex
		flex-direction column
		.head-content
			flex-shrink 0
			.title-list
				height: 2.56rem
				background-color rgb(229,229,229)
				ul
					display flex
					justify-content space-around
					height: 100%
					li
						border thin solid #d2d2d2
						text-align center
						width: 25%
						font-size .9rem
						line-height 2.56rem
		.pro-list
			flex-grow 1
	.header
		background-color rgb(245,245,245)
		height: 3rem
		display flex
		padding 0 1rem
		justify-content space-between
		align-items center
		font-size .9rem
		color #7f7f7f
		i.el-icon-arrow-left
			font-size 1.4rem
		div
			display flex
			justify-content center
			align-items center
			i
				margin-right -1.2rem
				z-index 1000
				color #7f7f7f
			input
				margin-right -1.2rem
				height: 2rem
				border none
				outline none
				width: 13.75rem
				border-radius 1rem
				padding 0 1.5rem
</style>