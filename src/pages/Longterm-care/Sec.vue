<template>
    <section>
        <h1>
            <slot name="title"/>
        </h1>
        
        <slot name="content"/>
        
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: 15vw 5%;
    font-weight: 900;
    h1 {
        border-bottom: solid orange 4px;
    }
}
</style>