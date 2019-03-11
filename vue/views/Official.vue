<template>
	<div class="official">
		<OHeader></OHeader>
		<div class="content">
			<swiper  :options="swiperOption">
				<swiper-slide  v-for="item in list" :key="item.id">
					<img class="swiperImg" :src="item.avatar" alt="暂无相关图片">
				</swiper-slide>
			</swiper>
			<div class="floor1">
				<div class="lft" @click="toProductList">
					<span>Think笔记本</span><img src="../assets/mainstore/w148.jpg" alt="">
				</div>
				<div class="center" @click="toProductList">
					<span>Think台式机</span><img src="../assets/mainstore/w149.jpg" alt="">
				</div>
				<div class="rgt"  @click="toProductList">
					<span>Think选件</span><img src="../assets/mainstore/w150.jpg" alt="">
				</div>
			</div>
			<div class="recommend">推荐</div>
			<div class="shows">
				<div class="lft">
					<img src="../assets/mainstore/w249.jpg" alt="">
					<span>ThinkPad X280 笔记本电脑</span>
					<span class="price">￥7299</span>
				</div>
				<div class="rgt">
					<img src="../assets/mainstore/w250.jpg" alt="">
					<span>ThinkPad E480 笔记本电脑</span>
					<span class="price">￥5999</span>
				</div>
			</div>
			<div class="product-content">
				<router-link
					:to="`/product/${ item.id }`"
					v-for="item in productList"
					class="product" :key="item.id"
					push>
					<img :src="item.avatar" alt="">
					<div class="title" v-text="item.name"></div>
					<div class="price" v-text="`￥${item.price}`"></div>
				</router-link>
			</div>
			<div class="recommend">明星单品</div>
			<swiper  :options="swiperOption1" class="swiper-foot">
				<swiper-slide>
					<div class="product swiper-product" v-for="item2 in starList" :key="item2.id">
						<img :src="item2.avatar" alt="暂无相关图片">
						<div class="name" v-text="item2.name"></div>
						<div class="price" v-text="`￥${item2.price}`"></div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import OHeader from '../components/OHeader.vue';
        export default {
                components: { OHeader },
                data(){
                        return {
                                pid: 0,                    //点击的商品id
                                swiperOption: {
                                        loop: true
                                },
                                swiperOption1: {
                                        loop: false
                                }
                        }
                },
	        computed: {
                        list(){ return this.$store.state.mainstore.list; },
		        productList(){ return this.$store.state.mainstore.list2; },
		        starList(){ return this.$store.state.mainstore.list3; }
	        },
	        methods: {
                        toProductList(){ this.$router.push('/productlist') }
	        },
                created(){
                        this.$store.dispatch('mainstore/init');
                        this.$store.dispatch('mainstore/init2');
                        this.$store.dispatch('mainstore/init3');
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.official
		background-color rgb(232,232,232)
		overflow hidden
		.content
			margin-top: 2.5rem
	.swiper-slide
		width: 100%
	.swiperImg
		width: 100%
	.floor1
		display flex
		justify-content space-around
		div
			display flex
			justify-content center
			align-items center
			background-color white
			width 31%
			height: 4.2rem
			margin-top: .4rem
			img
				width: 3rem
	.recommend
		margin .8rem
		padding-left .3rem
	.shows
		display flex
		justify-content space-around
		margin-bottom .3rem
		font-size .8rem
		div
			display flex
			width: 49%
			flex-direction column
			align-items left
			justify-content center
			background-color white
			padding 0 .8rem .8em
			img
				align-self center
				width: 70%
			.price
				color #e2231a
	.product-content
		display flex
		flex-wrap wrap
		justify-content space-around
	.product
		display flex
		background-color white
		justify-content center
		flex-direction column
		align-items left
		width: 47%
		/*height: 12.5rem*/
		padding 0 .5rem .8rem
		font-size .8rem
		margin-bottom .5rem
		img
			width: 80%
			align-self center
		.price
			margin-top .5rem
			color #e2231a
			font-size .9rem
		.title
			margin-top -0.1rem
			width: 100%
			font-size .9rem
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
	.swiper-foot
		width: 100%
		div
			.swiper-slide
				display flex
				flex-wrap nowrap
				justify-content space-around
				align-items left
				width: 100%
				.porduct
					width: 33.333%
					img
						align-self center
					.name
						white-space nowrap
						overflow hidden
						text-overflow ellipsis

</style>