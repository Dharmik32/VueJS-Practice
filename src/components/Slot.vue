<template>
    <div class="cart">
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="content"></slot>
        </content>
        <footer>
            <slot name="footer">
                <button>Click Me</button>
            </slot>
        </footer>
    </div>

</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Slot',
    props: {
        name: String
    }

}
</script>

<style>
.cart {
    border: 1px solid;
    width: 170px;
    text-align: center;
    padding: 20px;
}
</style>