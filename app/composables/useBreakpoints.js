import { ref } from "vue";
// IMPORTANTNOTE: this function MUST run client side
export const useBreakpoints = () => {
    const showElement = ref(null);
    const pixels = ref(0);
    const toggleElementOnResize = (breakpointInPx, maxOrMinWidth = "max-width") => {
        const mediaQueryList = window.matchMedia(`(${maxOrMinWidth}: ${breakpointInPx}px)`);

        if (mediaQueryList.matches) {
            showElement.value = true;
        } else {
            showElement.value = false;
        }

        pixels.value = breakpointInPx;
    };

    return { showElement: showElement, pixels: pixels, toggleElementOnResize: toggleElementOnResize };
};
