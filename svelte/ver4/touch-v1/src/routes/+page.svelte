<script>
	import { Button } from "$lib/components/ui/button";
	import { onMount } from "svelte";
  // import { Html5QrcodeScanner } from "html5-qrcode";

	// let result = '';
	// let scannedText = ''
  // function onScanSuccess(decodedText, decodedResult) {
  //   // handle the scanned code as you like, for example:
	// 	scannedText = decodedText
  //   result = `Code matched = ${decodedText}` + decodedResult
  // }

  // function onScanFailure(error) {
  //   // handle scan failure, usually better to ignore and keep scanning.
  //   // for example:
  //   result = `Code scan error = ${error}`
  // }

  // let html5QrcodeScanner;
  
	// onMount(() => {
	// 	html5QrcodeScanner = new Html5QrcodeScanner(
	// 		"reader",
	// 		{ fps: 120, qrbox: { width: 200, height: 200 } },
	// 		/* verbose= */ false
	// 	);
	// 	html5QrcodeScanner.render(onScanSuccess, onScanFailure);
	// })

	let studentTodo = "1. qr code scan\n2. check missing information from qr code\n3. review and submit details if new\n4. select common concern\n5. submit w/ date"
	let guestTodo = "1. fill up form\n2. if not new, proceed to next\n3. select common concern\n4. submit w/ date"
</script>

<div class="flex flex-col justify-center items-center space-y-3 my-3">
	<Button on:click={() => {console.log(studentTodo)}} class="h-fit w-fit">STUDENT</Button>
	<Button on:click={() => {console.log(guestTodo)}} class="h-fit w-fit">GUEST</Button>
</div>
<!-- <h1 class="font-bold">{scannedText}</h1>
<p>{result}</p>
<div id="reader" class="outline outline-1" style="width:600px">asdasdasd</div> -->
