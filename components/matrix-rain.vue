<template>
    <canvas id="matrix" class="w-[100vw] h-[100vh]"></canvas>
</template>

<script>
export default {
    name: "matrix-rain",
    mounted() {
        let tileSize = 10;
        let fadeFactor = 0.05;

        let canvas;
        let ctx;

        let columns = [];
        let maxStackHeight;

        canvas = document.getElementById( 'matrix' );
        ctx = canvas.getContext('2d');

        initMatrix();

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // start the main loop
        tick();

        function initMatrix()
        {
            maxStackHeight = Math.ceil(window.innerHeight/tileSize);

            // divide the canvas into columns
            for ( let i = 0 ; i < window.innerWidth/tileSize ; ++i )
            {
                var column = {};
                // save the x position of the column
                column.x = i*tileSize;
                // create a random stack height for the column
                column.stackHeight = 10+Math.random()*maxStackHeight;
                // add a counter to count the stack height
                column.stackCounter = 0;
                // add the column to the list
                columns.push( column );
            }
        }

        function draw()
        {
            // draw a semi transparent black rectangle on top of the scene to slowly fade older characters
            ctx.fillStyle = "rgba(15, 23, 42 , "+fadeFactor+" )";
            ctx.fillRect( 0 , 0 , canvas.width , canvas.height );

            // pick a font slightly smaller than the tile size
            ctx.font = (tileSize-2)+"px monospace";
            ctx.fillStyle = "rgb( 99, 102, 241 )";
            for ( let i = 0 ; i < columns.length ; ++i )
            {
                // pick a random ascii character (change the 94 to a higher number to include more characters)
                var randomCharacter = String.fromCharCode( 33+Math.floor(Math.random()*94) );
                ctx.fillText( randomCharacter , columns[i].x , columns[i].stackCounter*tileSize+tileSize );

                // if the stack is at its height limit, pick a new random height and reset the counter
                if ( ++columns[i].stackCounter >= columns[i].stackHeight )
                {
                    columns[i].stackHeight = 10+Math.random()*maxStackHeight;
                    columns[i].stackCounter = 0;
                }
            }
        }

// MAIN LOOP
        function tick()
        {
            draw();
            setTimeout( tick , 50 );
        }
    }
}
</script>

<style scoped>

</style>