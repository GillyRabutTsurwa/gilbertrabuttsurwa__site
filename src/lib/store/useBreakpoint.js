import { writable } from "svelte/store";
export const showElement = writable();

//@ts-ignore
export const toggleElementOnResize = (breakpointInPx, maxOrMinWidth = "max-width") => {
    const mediaQueryList = window.matchMedia(`(${maxOrMinWidth}: ${breakpointInPx}px)`);

    if (mediaQueryList.matches) {
        console.log(`Window is ${maxOrMinWidth === "max-width" ? "max" : "min"} ${breakpointInPx}px`);
        showElement.set(true);
    } else {
        console.log(`Window is ${maxOrMinWidth === "max-width" ? "over" : "under"} ${breakpointInPx}px`);
        showElement.set(false);
    }
};

//IMPORTANT: i need to return the function to use in my component, so i am returning it as is: no writeable() or nothing, cause I don't need to update or subscribe to anything. i just need to call the function and my reactive store value, showElement, will update accordinlgy
