<template>
    <canvas id="grid"></canvas>
</template>

<script>
export default {
    name: "canvas-grid",
    mounted() {

        let tileSize = 30;

        let canvas;
        let ctx;

        canvas = document.getElementById( 'grid' );
        ctx = canvas.getContext('2d');

        canvas.width = document.getElementById('job-descriptions').offsetWidth;
        canvas.height = document.getElementById('job-descriptions').offsetHeight;

        function drawLine(ctx, x1, y1, x2,y2, width = 3) {
            // start a new path
            ctx.beginPath();

            // place the cursor from the point the line should be started
            ctx.moveTo(x1, y1);

            // draw a line from current cursor position to the provided x,y coordinate
            ctx.lineTo(x2, y2);

            // set strokecolor
            ctx.strokeStyle = '#374151';

            // set lineWidht
            ctx.lineWidth = width;

            // add stroke to the line
            ctx.stroke();
        }

        // divide the canvas into columns
        for ( let i = 0 ; i < canvas.width/tileSize ; ++i )
        {
            drawLine(ctx, i*tileSize, 0, i*tileSize, canvas.height, 1);
            drawLine(ctx, 0, i*tileSize, canvas.width, i*tileSize, 0.6);
        }
    }
}
</script>

<style scoped>

</style>