<script lang="ts">
    export let invert: boolean;
    export let height: string | null = null;
    export let width: string | null = null;
    export let horizontal: boolean = false;
</script>

<svg viewBox="0 0 24 24" version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" 
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
    class:inverted={invert}
    class:horizontal={horizontal}
    style:height={height} style:width={width}>
    <g transform="matrix(2,0,0,2,-12,-11.35)">
        <path d="M12,15.375L6,9.375L7.4,7.975L12,12.575L16.6,7.975L18,9.375L12,15.375Z" style="fill-rule:nonzero;"/>
    </g>
</svg>

<style>
    svg {
        vertical-align: top;
    }

    .inverted {
        transform: scaleY(-1);
    }

    .horizontal {
        transform: rotate(90deg)
    }

    .horizontal.inverted {
        transform: rotate(90deg) scaleY(-1);
    }
</style>