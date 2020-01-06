<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-2 mb-2">

                    <div class="card">
                        <div class="row">
                            <aside class="col-sm-5 border-right">
                                <img
                                    src="storage/images/mug.gif"
                                    class="img-fluid mt-5"
                                >
                            </aside>
                            <aside class="col-sm-7">
                                <article class="card-body p-3">
                                    <h3 class="title mb-3">Payment Template</h3>

                                    <p class="price-detail-wrap">
                                        <span class="price h3 text-warning">
                                            <span class="currency">US $</span><span class="num">5</span>
                                        </span>
                                    </p>
                                    <dl class="item-property">
                                        <dt>Description</dt>
                                        <dd>
                                            <p>
                                                This is an example template for a simple product page. To recieve payments in your VIPFS app, I recommend that you use <a href="https://metamask.io/">MetaMask</a>. This Chrome/Firefox extension injects an Ethereum provider into the browser tab.
                                            </p>

                                            <p>
                                                You can then use the method <code>this.$root.createRequestTransaction(0.037)</code> to prompt the user into sending an Ethereum transaction directly from their browser to your Ethereum account. You can find the code for this template in <code>vipfs/src/components/payment.vue</code>. You can easily modify the code to make a fully decentralised crypto-based e-commerce store.
                                            </p>

                                            <p>
                                                <strong>Note:</strong> If you click the Buy Now button you will be prompted to pay 0.037 ETH (~$5 USD) to my account as a donation, you will not recieve a product.
                                            </p>
                                        </dd>
                                    </dl>

                                    <hr>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <dl class="param param-feature">
                                                <dt>Model#</dt>
                                                <dd>12345611</dd>
                                            </dl>
                                        </div>
                                        <div class="col-md-4">
                                            <dl class="param param-feature">
                                                <dt>Color</dt>
                                                <dd>Black and white</dd>
                                            </dl>
                                        </div>
                                        <div class="col-md-4">
                                            <dl class="param param-feature">
                                                <dt>Delivery</dt>
                                                <dd>USA, Japan and Europe</dd>
                                            </dl>
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <dl class="param param-inline">
                                                <dt>Quantity:</dt>
                                                <dd>
                                                    <select
                                                        class="form-control form-control-sm"
                                                        style="width:70px;"
                                                        v-model="quantity"
                                                    >
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="col-sm-7">
                                            <dl class="param param-inline">
                                                <dt>Size:</dt>
                                                <dd>
                                                    <label class="form-check form-check-inline">
                                                        <input
                                                            class="form-check-input"
                                                            type="radio"
                                                            name="size"
                                                            value="s"
                                                            v-model="size"
                                                        >
                                                        <span class="form-check-label">S</span>
                                                    </label>
                                                    <label class="form-check form-check-inline">
                                                        <input
                                                            class="form-check-input"
                                                            type="radio"
                                                            name="size"
                                                            value="m"
                                                            v-model="size"
                                                        >
                                                        <span class="form-check-label">M</span>
                                                    </label>
                                                    <label class="form-check form-check-inline">
                                                        <input
                                                            class="form-check-input"
                                                            type="radio"
                                                            name="size"
                                                            value="l"
                                                            v-model="size"
                                                        >
                                                        <span class="form-check-label">L</span>
                                                    </label>
                                                    <label class="form-check form-check-inline">
                                                        <input
                                                            class="form-check-input"
                                                            type="radio"
                                                            name="size"
                                                            value="xl"
                                                            v-model="size"
                                                        >
                                                        <span class="form-check-label">XL</span>
                                                    </label>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <hr>
                                    <button
                                        @click="buyNow"
                                        class="btn btn-lg btn-primary"
                                    >Buy Now</button>
                                </article>
                            </aside>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        quantity: 1,
        size: 'l'
    }),

    mounted () {},

    methods: {
        buyNow () {
            this.$root
                .createRequestTransaction(0.037)
                .then(() => this.$notify('Transaction Successful!'))
                .catch(err => console.error(err))
        }
    }
}
</script>
