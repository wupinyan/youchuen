<template>
    <div class="meta">
        <h3>
            <slot name="name"/>
        </h3>
        <p>
            <slot name="description"/>
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
    background-color: $color2;
    text-align: center;
    color: whitesmoke;
    h3{
        border-bottom: solid orange;
        margin: 0;
        letter-spacing: 8px;
    }
    p {
        margin: 0;
        font-weight: 900;
    }
}
</style>