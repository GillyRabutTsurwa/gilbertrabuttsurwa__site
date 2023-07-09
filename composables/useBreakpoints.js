import { ref } from "vue";
// IMPORTANTNOTE: this function MUST run client side
export const useBreakpoints = () => {
    const showElement = ref(null);
    const pixels = ref(0);
    const toggleElementOnResize = (breakpointInPx, maxOrMinWidth = "max-width") => {
        const mediaQueryList = window.matchMedia(`(${maxOrMinWidth}: ${breakpointInPx}px)`);

        if (mediaQueryList.matches) {
            console.log(`Window is ${maxOrMinWidth === "max-width" ? "max" : "min"} ${breakpointInPx}px`);
            showElement.value = true;
        } else {
            console.log(`Window is ${maxOrMinWidth === "max-width" ? "over" : "under"} ${breakpointInPx}px`);
            showElement.value = false;
        }

        pixels.value = breakpointInPx;
    };

    return {
        showElement: showElement,
        pixels: pixels,
        toggleElementOnResize: toggleElementOnResize,
    };
};
