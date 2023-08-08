<script setup>
</script>
<template>
    <div class="contact">
        <h2 class="contact__title">Contact Us</h2>
        <menu class="contact__list">
            <li class="contact__list--item">
                <span>Cell (Main):</span>
                <span><a href="tel:+5404180404">540-418-0404</a></span>
            </li>
            <!-- <li class="contact__list--item"> <span>Cell (Main):</span><span>304-657-2180</span></li> -->
            <li class="contact__list--item">
                <span>Cell (Work):</span>
                <span><a href="tel:+6124506115">612-450-6115</a></span>
            </li>
            <li class="contact__list--item">
                <span>Email (Primary):</span>
                <span><a href="mailto:tsurwagilbert@gmail.com">tsurwagilbert@gmail.com</a></span>
            </li>
            <li class="contact__list--item">
                <span>Email (Work):</span>
                <span><a href="mailto:rabuttsurwa@outlook.com">rabuttsurwa@outlook.com</a></span>
            </li>
        </menu>
    </div>
</template>
  
  
<style lang="scss" scoped>
.contact {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
        margin-bottom: 1.5rem;
        color: $colour-primary;
        text-transform: uppercase;
    }

    &__list {
        list-style: none;
        margin: 0 auto;
        text-align: center;

        &--item {
            font-size: 2rem;

            &:not(:last-child) {
                margin-bottom: 0.5rem;
            }

            span {
                &:first-child {
                    font-weight: bolder;
                    margin-right: 1rem;
                }

                &:nth-child(2) {
                    color: $colour-primary;
                }
            }

            a {

                &,
                &:link,
                &:visited {
                    color: currentColor;
                    text-decoration: none;
                }

                &:hover,
                &:active {
                    color: rgba($colour-primary, 0.8);
                }
            }
        }
    }
}
</style>