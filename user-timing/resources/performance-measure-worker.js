onmessage = function(event) {
    const data = event.data;
    const result = performance.measure(data.name, data.start, data.end);
    postMessage(result);
}
