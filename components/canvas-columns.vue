<template>
    <canvas id="columns"></canvas>
</template>

<script>
export default {
    name: "canvas-columns",
    mounted() {

        let tileSize = 300;

        let canvas;
        let ctx;

        canvas = document.getElementById( 'columns' );
        ctx = canvas.getContext('2d');

        canvas.width = document.getElementById('ABOUT ME').offsetWidth;
        canvas.height = document.getElementById('ABOUT ME').offsetHeight;

        function drawLine(ctx, x1, y1, x2,y2, width = 3) {
            // start a new path
            ctx.beginPath();

            ctx.setLineDash([15, 10]);

            // place the cursor from the point the line should be started
            ctx.moveTo(x1, y1);

            // draw a line from current cursor position to the provided x,y coordinate
            ctx.lineTo(x2, y2);

            // set strokecolor
            ctx.strokeStyle = 'rgb(55, 65, 81)';

            // set lineWidht
            ctx.lineWidth = width;

            // add stroke to the line
            ctx.stroke();
        }

        // divide the canvas into columns
        for ( let i = 0 ; i < canvas.width/tileSize ; ++i )
        {
            drawLine(ctx, i*tileSize, 0, i*tileSize, canvas.height, 1);
        }
    }
}
</script>

<style scoped>

</style>