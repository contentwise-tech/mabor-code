/// <reference path="../libs/core/enums.d.ts"/>

async function delay<T>(duration: number, value: T | Promise<T>): Promise<T>;
async function delay(duration: number): Promise<void>
async function delay<T>(duration: number, value?: T | Promise<T>): Promise<T> {
    // eslint-disable-next-line
    const output = await value;
    await new Promise<void>(resolve => setTimeout(() => resolve(), duration));
    return output;
}

namespace pxsim.mabor {
    /**
     * This is rgbLed
     */
    //% blockId="sampleRgbLed" block="RGB LED strip color"
    //% hop.fieldEditor="gridpicker"
    //% red=255 green=255 blue=255
    export function rgbLed(red: number, green: number, blue: number) {
        console.log('show ' + red + ',' + green + ',' + blue);
    }
}

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return delay(ms)
    }
}

function logMsg(m:string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg:string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        board().writeSerial(msg + "\n")
    }
}
