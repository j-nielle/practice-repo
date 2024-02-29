<script>
  import { Html5QrcodeScanner } from "html5-qrcode";
  import { Button } from "$lib/components/ui/button";
  import { onMount } from "svelte";

	let result = '';
	let scannedText = ''
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
		scannedText = decodedText
    result = `Code matched = ${decodedText}` + decodedResult
  }

  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    result = `Code scan error = ${error}`
  }

  let html5QrcodeScanner;
  
	onMount(() => {
		html5QrcodeScanner = new Html5QrcodeScanner(
			"reader",
			{ fps: 120, qrbox: { width: 200, height: 200 } },
			/* verbose= */ false
		);
		// html5QrcodeScanner.render(onScanSuccess, onScanFailure);
	})
</script>

<Button on:click={() => {scannedText = "yawa"}}>Click me</Button>
<h1>{scannedText}</h1>
<p>{result}</p>
<div id="reader" class="outline outline-1" style="width:600px">asdasdasd</div>
