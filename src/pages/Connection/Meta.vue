<template>
    <div class="meta">
        <h3>
            <slot name="name"/>
        </h3>
        <p>
            <slot name="scription"/>
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/style.scss';
.meta {
    border-radius: 4px;
    margin: 5vw auto;
    padding: 12px 40px;
    width: fit-content;
    background-color: rgba($color1, .7);
    text-align: center;
    h3 {
        border-bottom: solid orange;
        margin: 0;
    }
    p {
        margin: 0;
        font-weight: 900;
    }
}
</style>