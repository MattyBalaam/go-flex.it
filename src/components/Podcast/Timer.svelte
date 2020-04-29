<script>
  import { secondsToTime } from "../../utils/time.ts";

  let className;

  export { className as class };
  export let seconds;

  $: ({ hour, minute, second } = secondsToTime(seconds));
</script>

<span class={className}>{hour}h:{minute}m:{second}s</span>
