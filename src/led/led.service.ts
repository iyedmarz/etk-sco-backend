import { Injectable } from '@nestjs/common';
import { SerialPort } from 'serialport';


@Injectable()
export class LedService {

  async setLedColor(color: number[]): Promise<void> {

    const port = new SerialPort({ path: "COM3", baudRate: 9600 });

    port.on("open", () => { //this.port.on 
      // open logic
      console.log("open reached")
      //writing to port
      port.write(color, (error) => {
        if (error) {
          console.log("error writing to port:", error.message);
        } else {
          console.log("writing to port succeded");
          // closing port after using it
          port.close((err) => {
            if (err) {
              console.error("Error closing serial port:", err.message);
            } else {
              console.log("Serial port closed.");
            }
          })
        }
      })
    });

    port.on("error", function (err) { //this.port.on
      console.log("Error: ", err.message);
    });

  }
}