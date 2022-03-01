export const sendClock = (time) => {
     return {
          type: 'clock',
          payload:time
     }
}