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
    margin: 32px auto;
    width: fit-content;
    text-align: center;
    h3{
        border-bottom: solid orange;
        margin: 0;
        font-size: 24px;
        letter-spacing: 8px;
    }
    p, a {
        margin: 0;
        color: black;
        font-size: 20px;
        font-weight: 900;
    }
}
</style>