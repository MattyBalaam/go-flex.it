const FACTOR = 60;
const DIVIDER = ":";

export function timeStringToSeconds(time: string) {
  const [hour, minute, seconds] = time.split(DIVIDER).map(Number);

  const minutes = hour * FACTOR + minute;

  return minutes * FACTOR + seconds;
}

export function secondsToTime(seconds: number) {
  const minutes = Math.floor(seconds / FACTOR);
  const hour = Math.floor(minutes / FACTOR);
  const [second, milliseconds] = (seconds % FACTOR).toString().split(".");

  return {
    hour,
    minute: (minutes % FACTOR).toString().padStart(2, "0"),
    second: second.padStart(2, "0"),
  };
}
