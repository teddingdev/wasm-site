const hello_wasm = import("./hello-wasm/pkg/hello_wasm.js");
hello_wasm.then(js => {
  console.log(`🎈 ~ file: index.js ~ line 5 ~ js`, js);
  js.greet("WebAssembly ~ ");
});
